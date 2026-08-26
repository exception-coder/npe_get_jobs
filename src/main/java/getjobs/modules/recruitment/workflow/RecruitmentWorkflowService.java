package getjobs.modules.recruitment.workflow;

import getjobs.modules.recruitment.application.RecruitmentJobSelectionService;
import getjobs.modules.recruitment.application.RecruitmentPlatformRegistry;
import getjobs.modules.recruitment.application.RecruitmentSearchPlan;
import getjobs.modules.recruitment.application.RecruitmentSearchPlanService;
import getjobs.modules.recruitment.browser.BrowserContactResult;
import getjobs.modules.recruitment.browser.BrowserJobDiscoveryResult;
import getjobs.modules.recruitment.browser.BrowserSession;
import getjobs.modules.recruitment.browser.BrowserSessionStatus;
import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.spi.RecruitmentContactCapability;
import getjobs.modules.recruitment.spi.RecruitmentDiscoveryCapability;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import getjobs.modules.recruitment.spi.RecruitmentSessionCapability;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/** Side-effect-safe recruitment workflow with an explicit contact confirmation gate. */
@Service
public class RecruitmentWorkflowService {
    private static final String DEFAULT_PROFILE = "default";

    private final RecruitmentPlatformRegistry platformRegistry;
    private final RecruitmentSearchPlanService searchPlanService;
    private final RecruitmentJobSelectionService selectionService;
    private final TaskExecutor taskExecutor;
    private final Map<UUID, WorkflowRun> tasks = new ConcurrentHashMap<>();
    private final Map<String, UUID> activePlatforms = new ConcurrentHashMap<>();

    public RecruitmentWorkflowService(
            RecruitmentPlatformRegistry platformRegistry,
            RecruitmentSearchPlanService searchPlanService,
            RecruitmentJobSelectionService selectionService,
            @Qualifier("recruitmentWorkflowExecutor") TaskExecutor taskExecutor
    ) {
        this.platformRegistry = platformRegistry;
        this.searchPlanService = searchPlanService;
        this.selectionService = selectionService;
        this.taskExecutor = taskExecutor;
    }

    public RecruitmentWorkflowSnapshot start(String platform, Long goalId) {
        RecruitmentPlatformPlugin plugin = platformRegistry.require(platform);
        RecruitmentSessionCapability sessionCapability = requireCapability(
                plugin, RecruitmentSessionCapability.class);
        BrowserSession session = sessionCapability.openSession(DEFAULT_PROFILE, false);
        BrowserSessionStatus sessionStatus = sessionCapability.sessionStatus(session.sessionId());
        if (!sessionStatus.authenticated()) {
            throw new IllegalStateException("platform session is not authenticated; scan to log in before starting");
        }

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

    public RecruitmentWorkflowSnapshot confirmContact(UUID taskId) {
        WorkflowRun run = requireRun(taskId);
        synchronized (run) {
            if (run.snapshot().status() != WorkflowStatus.AWAITING_CONFIRMATION) {
                throw new IllegalStateException("workflow is not awaiting contact confirmation");
            }
            UUID existing = activePlatforms.putIfAbsent(run.platform(), taskId);
            if (existing != null && !existing.equals(taskId)) {
                throw new IllegalStateException("workflow already running: " + existing);
            }
            run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.CONTACT, null, null, false));
            taskExecutor.execute(() -> executeContact(run));
            return run.snapshot();
        }
    }

    public RecruitmentWorkflowSnapshot require(UUID taskId) {
        return requireRun(taskId).snapshot();
    }

    private void executePreview(WorkflowRun run, RecruitmentPlatformPlugin plugin) {
        try {
            RecruitmentDiscoveryCapability discoveryCapability = requireCapability(
                    plugin, RecruitmentDiscoveryCapability.class);

            run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.DISCOVER, null, null, false));
            RecruitmentSearchPlan plan = searchPlanService.resolve(plugin.descriptor().id(), run.goalId());
            run.searchPlan(plan);
            BrowserJobDiscoveryResult discovery = discoveryCapability.discover(run.sessionId(), plan);
            run.discovered(discovery.jobs());

            run.update(snapshot(run, WorkflowStatus.RUNNING, WorkflowStage.FILTER, null, null, false));
            List<RecruitmentJob> selected = selectionService.select(discovery.jobs(), plan.goal());
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

    private void executeContact(WorkflowRun run) {
        try {
            RecruitmentPlatformPlugin plugin = platformRegistry.require(run.platform());
            RecruitmentContactCapability contactCapability = requireCapability(
                    plugin, RecruitmentContactCapability.class);
            BrowserContactResult result = contactCapability.contact(
                    run.sessionId(), run.selected(), run.searchPlan().greeting());
            run.contactResults(result.results());
            run.update(snapshot(run, WorkflowStatus.COMPLETED, WorkflowStage.CONTACT, null, null, false));
        } catch (Exception exception) {
            run.update(snapshot(run, WorkflowStatus.FAILED, WorkflowStage.CONTACT,
                    exception.getMessage(), "RETRY_CONTACT", false));
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
                error, recoveryAction, confirmationRequired, run.selected(), run.contactResults(), Instant.now());
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
