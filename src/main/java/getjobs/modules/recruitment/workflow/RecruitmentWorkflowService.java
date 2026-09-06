package getjobs.modules.recruitment.workflow;

import getjobs.modules.recruitment.application.RecruitmentJobSelectionService;
import getjobs.modules.recruitment.application.RecruitmentJobRegistryService;
import getjobs.modules.recruitment.application.RecruitmentContactHistoryService;
import getjobs.modules.recruitment.application.RecruitmentPlatformRegistry;
import getjobs.modules.recruitment.application.RecruitmentSearchPlan;
import getjobs.modules.recruitment.application.RecruitmentSearchPlanService;
import getjobs.modules.recruitment.browser.BrowserContactResult;
import getjobs.modules.recruitment.browser.BrowserContactPreparationResult;
import getjobs.modules.recruitment.browser.BrowserJobDiscoveryResult;
import getjobs.modules.recruitment.browser.BrowserSession;
import getjobs.modules.recruitment.browser.BrowserSessionStatus;
import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.spi.RecruitmentContactCapability;
import getjobs.modules.recruitment.spi.RecruitmentContactPreparationCapability;
import getjobs.modules.recruitment.spi.RecruitmentDiscoveryCapability;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import getjobs.modules.recruitment.spi.RecruitmentSessionCapability;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/** Side-effect-safe recruitment workflow with an explicit contact confirmation gate. */
@Service
public class RecruitmentWorkflowService {
    private static final String DEFAULT_PROFILE = "default";
    private static final int MAX_GREETING_LENGTH = 500;
    private static final String AUTHENTICATION_REQUIRED =
            "platform session is not authenticated; log in before continuing";

    private final RecruitmentPlatformRegistry platformRegistry;
    private final RecruitmentSearchPlanService searchPlanService;
    private final RecruitmentJobSelectionService selectionService;
    private final RecruitmentJobRegistryService jobRegistryService;
    private final RecruitmentContactHistoryService contactHistory;
    private final TaskExecutor taskExecutor;
    private final Map<UUID, WorkflowRun> tasks = new ConcurrentHashMap<>();
    private final Map<String, UUID> activePlatforms = new ConcurrentHashMap<>();

    public RecruitmentWorkflowService(
            RecruitmentPlatformRegistry platformRegistry,
            RecruitmentSearchPlanService searchPlanService,
            RecruitmentJobSelectionService selectionService,
            RecruitmentJobRegistryService jobRegistryService,
            RecruitmentContactHistoryService contactHistory,
            @Qualifier("recruitmentWorkflowExecutor") TaskExecutor taskExecutor
    ) {
        this.platformRegistry = platformRegistry;
        this.searchPlanService = searchPlanService;
        this.selectionService = selectionService;
        this.jobRegistryService = jobRegistryService;
        this.contactHistory = contactHistory;
        this.taskExecutor = taskExecutor;
    }

    public RecruitmentWorkflowSnapshot start(String platform, Long goalId) {
        RecruitmentPlatformPlugin plugin = platformRegistry.require(platform);
        RecruitmentSessionCapability sessionCapability = requireCapability(
                plugin, RecruitmentSessionCapability.class);
        BrowserSession session = sessionCapability.openSession(DEFAULT_PROFILE, false);
        requireAuthenticatedSession(plugin, session.sessionId());

        UUID taskId = UUID.randomUUID();
        UUID existing = activePlatforms.putIfAbsent(plugin.descriptor().id().value(), taskId);
        if (existing != null) {
            throw new IllegalStateException("workflow already running: " + existing);
        }

        WorkflowRun run = new WorkflowRun(taskId, plugin.descriptor().id().value(), goalId);
        run.sessionId(session.sessionId());
        tasks.put(taskId, run);
        run.update(snapshot(run, WorkflowStatus.QUEUED, WorkflowStage.DISCOVER, null, null, false));
        taskExecutor.execute(() -> executePreview(run, plugin));
        return run.snapshot();
    }

    /** Creates a confirmation-only workflow for one persisted job; never sends a message. */
    public RecruitmentWorkflowSnapshot startFromJob(Long jobRecordId) {
        var registered = jobRegistryService.requireRegisteredJob(jobRecordId);
        RecruitmentPlatformPlugin plugin = platformRegistry.require(registered.platform());
        String platform = plugin.descriptor().id().value();
        contactHistory.requireNotContacted(platform, registered.job());
        if (activePlatforms.containsKey(platform)) {
            throw new IllegalStateException("该平台已有任务运行，请等待完成后再投递");
        }
        BrowserSession session = requireCapability(plugin, RecruitmentSessionCapability.class)
                .openSession(DEFAULT_PROFILE, false);
        requireAuthenticatedSession(plugin, session.sessionId());
        WorkflowRun run = new WorkflowRun(UUID.randomUUID(), platform, null);
        run.sessionId(session.sessionId());
        run.discovered(List.of(registered.job()));
        run.selected(List.of(registered.job()));
        run.update(snapshot(run, WorkflowStatus.AWAITING_CONFIRMATION, WorkflowStage.MATCH, null, null, true));
        tasks.put(run.taskId(), run);
        return run.snapshot();
    }

    public RecruitmentWorkflowSnapshot confirmContact(UUID taskId, String platformJobId, String greeting) {
        WorkflowRun run = requireRun(taskId);
        synchronized (run) {
            if (run.snapshot().status() != WorkflowStatus.AWAITING_CONFIRMATION) {
                throw new IllegalStateException("workflow is not awaiting contact confirmation");
            }
            RecruitmentJob contactJob = requireSelectedJob(run, platformJobId);
            contactHistory.requireNotContacted(run.platform(), contactJob);
            String confirmedGreeting = requireGreeting(greeting);
            RecruitmentPlatformPlugin plugin = platformRegistry.require(run.platform());
            requireAuthenticatedSession(plugin, run.sessionId());
            UUID existing = activePlatforms.putIfAbsent(run.platform(), taskId);
            if (existing != null && !existing.equals(taskId)) {
                throw new IllegalStateException("workflow already running: " + existing);
            }
            run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.CONTACT, null, null, false));
            taskExecutor.execute(() -> executeContact(run, contactJob, confirmedGreeting));
            return run.snapshot();
        }
    }

    public BrowserContactPreparationResult prepareContact(UUID taskId, String platformJobId) {
        WorkflowRun run = requireRun(taskId);
        synchronized (run) {
            if (run.snapshot().status() != WorkflowStatus.AWAITING_CONFIRMATION) {
                throw new IllegalStateException("workflow is not awaiting contact confirmation");
            }
            RecruitmentPlatformPlugin plugin = platformRegistry.require(run.platform());
            requireAuthenticatedSession(plugin, run.sessionId());
            RecruitmentContactPreparationCapability capability = requireCapability(
                    plugin, RecruitmentContactPreparationCapability.class);
            RecruitmentJob contactJob = requireSelectedJob(run, platformJobId);
            contactHistory.requireNotContacted(run.platform(), contactJob);
            return capability.prepareContact(run.sessionId(), List.of(contactJob));
        }
    }

    public RecruitmentWorkflowSnapshot require(UUID taskId) {
        return requireRun(taskId).snapshot();
    }

    private void executePreview(WorkflowRun run, RecruitmentPlatformPlugin plugin) {
        try {
            requireAuthenticatedSession(plugin, run.sessionId());
            RecruitmentDiscoveryCapability discoveryCapability = requireCapability(
                    plugin, RecruitmentDiscoveryCapability.class);

            run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.DISCOVER, null, null, false));
            RecruitmentSearchPlan plan = searchPlanService.resolve(plugin.descriptor().id(), run.goalId());
            run.searchPlan(plan);
            BrowserJobDiscoveryResult discovery = discoveryCapability.discover(run.sessionId(), plan);
            run.discovered(discovery.jobs());

            Map<String, RecruitmentJob> selectedById = new LinkedHashMap<>();
            for (List<RecruitmentJob> batch : discovery.batches()) {
                run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.REGISTER, null, null, false));
                jobRegistryService.register(run.platform(), batch);
                run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.FILTER, null, null, false));
                var contactedIds = contactHistory.contactedIds(run.platform(), batch);
                List<RecruitmentJob> uncontacted = batch.stream()
                        .filter(job -> !contactedIds.contains(job.platformJobId())).toList();
                List<ContactResult> skipped = batch.stream()
                        .filter(job -> contactedIds.contains(job.platformJobId()))
                        .map(job -> new ContactResult(job.platformJobId(), ContactResult.ContactStatus.SKIPPED,
                                "ALREADY_CONTACTED")).toList();
                run.contactResults(java.util.stream.Stream.concat(run.contactResults().stream(), skipped.stream())
                        .distinct().toList());
                selectionService.select(uncontacted, plan.goal()).forEach(job ->
                        selectedById.put(job.platformJobId(), job));
            }
            List<RecruitmentJob> selected = List.copyOf(selectedById.values());
            run.selected(selected);
            run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.MATCH, null, null, false));

            WorkflowStatus finalStatus = selected.isEmpty()
                    ? WorkflowStatus.COMPLETED : WorkflowStatus.AWAITING_CONFIRMATION;
            run.update(snapshot(run, finalStatus, WorkflowStage.MATCH, null, null, !selected.isEmpty()));
        } catch (Exception exception) {
            run.update(snapshot(run, WorkflowStatus.FAILED, run.snapshot().stage(),
                    exception.getMessage(), "RETRY", false));
        } finally {
            activePlatforms.remove(run.platform(), run.taskId());
        }
    }

    private void executeContact(WorkflowRun run, RecruitmentJob contactJob, String greeting) {
        try {
            contactHistory.requireNotContacted(run.platform(), contactJob);
            RecruitmentPlatformPlugin plugin = platformRegistry.require(run.platform());
            requireAuthenticatedSession(plugin, run.sessionId());
            RecruitmentContactCapability contactCapability = requireCapability(
                    plugin, RecruitmentContactCapability.class);
            BrowserContactResult result = contactCapability.contact(
                    run.sessionId(), List.of(contactJob), greeting);
              run.contactResults(java.util.stream.Stream.concat(
                      run.contactResults().stream(), result.results().stream()).toList());
            contactHistory.recordSuccess(run.platform(), contactJob, result.results());
            run.update(snapshot(run, WorkflowStatus.COMPLETED, WorkflowStage.CONTACT, null, null, false));
        } catch (Exception exception) {
            run.update(snapshot(run, WorkflowStatus.FAILED, WorkflowStage.CONTACT,
                      exception.getMessage(), "VERIFY_PLATFORM_HISTORY", false));
        } finally {
            activePlatforms.remove(run.platform(), run.taskId());
        }
    }

    private <T> T requireCapability(RecruitmentPlatformPlugin plugin, Class<T> capabilityType) {
        if (!capabilityType.isInstance(plugin)) {
            throw new IllegalStateException("platform capability is unavailable: " + capabilityType.getSimpleName());
        }
        return capabilityType.cast(plugin);
    }

    private void requireAuthenticatedSession(RecruitmentPlatformPlugin plugin, String sessionId) {
        RecruitmentSessionCapability sessionCapability = requireCapability(
                plugin, RecruitmentSessionCapability.class);
        BrowserSessionStatus sessionStatus = sessionCapability.sessionStatus(sessionId);
        if (!sessionStatus.authenticated()) {
            throw new IllegalStateException(AUTHENTICATION_REQUIRED);
        }
    }

    private RecruitmentJob requireSelectedJob(WorkflowRun run, String platformJobId) {
        if (platformJobId == null || platformJobId.isBlank()) {
            throw new IllegalArgumentException("contact job is required");
        }
        return run.selected().stream()
                .filter(job -> platformJobId.equals(job.platformJobId()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("contact job is not part of this workflow"));
    }

    private String requireGreeting(String greeting) {
        if (greeting == null || greeting.isBlank()) {
            throw new IllegalArgumentException("contact greeting is required");
        }
        String normalized = greeting.trim();
        if (normalized.length() > MAX_GREETING_LENGTH) {
            throw new IllegalArgumentException("contact greeting exceeds 500 characters");
        }
        return normalized;
    }

    private WorkflowRun requireRun(UUID taskId) {
        WorkflowRun run = tasks.get(taskId);
        if (run == null) {
            throw new IllegalArgumentException("workflow task not found: " + taskId);
        }
        return run;
    }

    private RecruitmentWorkflowSnapshot snapshot(
            WorkflowRun run,
            WorkflowStatus status,
            WorkflowStage stage,
            String error,
            String recoveryAction,
            boolean confirmationRequired
    ) {
        int contacted = (int) run.contactResults().stream()
                .filter(result -> result.status() == ContactResult.ContactStatus.SUCCEEDED)
                .count();
        return new RecruitmentWorkflowSnapshot(
                run.taskId(), run.platform(), run.goalId(), status, stage,
                run.discovered().size(), run.selected().size(), run.selected().size(), contacted,
                error, recoveryAction, confirmationRequired,
                run.searchPlan() == null ? null : run.searchPlan().greeting(),
                run.selected(), run.contactResults(), Instant.now());
    }

    private static final class WorkflowRun {
        private final UUID taskId;
        private final String platform;
        private final Long goalId;
        private volatile RecruitmentWorkflowSnapshot snapshot;
        private volatile String sessionId;
        private volatile RecruitmentSearchPlan searchPlan;
        private volatile List<RecruitmentJob> discovered = List.of();
        private volatile List<RecruitmentJob> selected = List.of();
        private volatile List<ContactResult> contactResults = List.of();

        private WorkflowRun(UUID taskId, String platform, Long goalId) {
            this.taskId = taskId;
            this.platform = platform;
            this.goalId = goalId;
        }

        UUID taskId() { return taskId; }
        String platform() { return platform; }
        Long goalId() { return goalId; }
        RecruitmentWorkflowSnapshot snapshot() { return snapshot; }
        void update(RecruitmentWorkflowSnapshot value) { snapshot = value; }
        String sessionId() { return sessionId; }
        void sessionId(String value) { sessionId = value; }
        RecruitmentSearchPlan searchPlan() { return searchPlan; }
        void searchPlan(RecruitmentSearchPlan value) { searchPlan = value; }
        List<RecruitmentJob> discovered() { return discovered; }
        void discovered(List<RecruitmentJob> value) { discovered = List.copyOf(value); }
        List<RecruitmentJob> selected() { return selected; }
        void selected(List<RecruitmentJob> value) { selected = List.copyOf(value); }
        List<ContactResult> contactResults() { return contactResults; }
        void contactResults(List<ContactResult> value) { contactResults = List.copyOf(value); }
    }
}
