package getjobs.modules.recruitment.workflow;

import getjobs.modules.recruitment.application.RecruitmentJobSelectionService;
import getjobs.modules.recruitment.application.RecruitmentJobRegistryService;
import getjobs.modules.recruitment.application.RecruitmentPlatformRegistry;
import getjobs.modules.recruitment.application.RecruitmentSearchPlan;
import getjobs.modules.recruitment.application.RecruitmentSearchPlanService;
import getjobs.modules.recruitment.browser.BrowserContactResult;
import getjobs.modules.recruitment.browser.BrowserContactPreparationResult;
import getjobs.modules.recruitment.browser.BrowserJobDiscoveryResult;
import getjobs.modules.recruitment.browser.BrowserSearch;
import getjobs.modules.recruitment.browser.BrowserSession;
import getjobs.modules.recruitment.browser.BrowserSessionStatus;
import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.ContactPreparation;
import getjobs.modules.recruitment.domain.PlatformDescriptor;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import getjobs.modules.recruitment.spi.RecruitmentContactCapability;
import getjobs.modules.recruitment.spi.RecruitmentContactPreparationCapability;
import getjobs.modules.recruitment.spi.RecruitmentDiscoveryCapability;
import getjobs.modules.recruitment.spi.RecruitmentPlatformPlugin;
import getjobs.modules.recruitment.spi.RecruitmentSessionCapability;
import org.junit.jupiter.api.Test;
import org.springframework.core.task.TaskExecutor;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;

class RecruitmentWorkflowServiceTest {
    @Test
    void requiresExplicitConfirmationBeforeContactingJobs() {
        RecruitmentJob job = new RecruitmentJob(
                "boss-1", "Java Engineer", "Example", "Shanghai", "30-40K", "Build services",
                "https://www.zhipin.com/job_detail/boss-1.html");
        FakePlugin plugin = new FakePlugin(job);
        RecruitmentSearchPlanService planService = mock(RecruitmentSearchPlanService.class);
        RecruitmentJobSelectionService selectionService = mock(RecruitmentJobSelectionService.class);
        RecruitmentJobRegistryService registryService = mock(RecruitmentJobRegistryService.class);
        RecruitmentGoalConditions goal = new RecruitmentGoalConditions("Java Engineer", List.of("Java Engineer"),
                List.of(), null, null, null, null, List.of(), List.of(), List.of(), List.of(), null, Map.of());
        when(planService.resolve(plugin.descriptor().id(), 1L))
                .thenReturn(new RecruitmentSearchPlan(List.of(new BrowserSearch("Java", "101020100")), Map.of(), "hello", goal));
        when(selectionService.select(List.of(job), goal)).thenReturn(List.of(job));
        TaskExecutor directExecutor = Runnable::run;
        RecruitmentWorkflowService service = new RecruitmentWorkflowService(
                new RecruitmentPlatformRegistry(List.of(plugin)), planService, selectionService,
                registryService, directExecutor);

        RecruitmentWorkflowSnapshot preview = service.start("boss", 1L);

        assertThat(preview.status()).isEqualTo(WorkflowStatus.AWAITING_CONFIRMATION);
        assertThat(preview.contactConfirmationRequired()).isTrue();
        assertThat(plugin.contactCalls).hasValue(0);
        verify(registryService).register("boss", List.of(job));

        BrowserContactPreparationResult preparation = service.prepareContact(preview.taskId());

        assertThat(preparation.prepared()).isEqualTo(1);
        assertThat(preparation.sideEffect()).isFalse();
        assertThat(plugin.prepareCalls).hasValue(1);
        assertThat(plugin.contactCalls).hasValue(0);

        RecruitmentWorkflowSnapshot completed = service.confirmContact(preview.taskId());

        assertThat(completed.status()).isEqualTo(WorkflowStatus.COMPLETED);
        assertThat(completed.contacted()).isEqualTo(1);
        assertThat(plugin.contactCalls).hasValue(1);
    }

    @Test
    void rejectsWorkflowStartBeforePlatformLogin() {
        FakePlugin plugin = new FakePlugin(null);
        plugin.authenticated = false;
        RecruitmentWorkflowService service = new RecruitmentWorkflowService(
                new RecruitmentPlatformRegistry(List.of(plugin)),
                mock(RecruitmentSearchPlanService.class),
                mock(RecruitmentJobSelectionService.class),
                mock(RecruitmentJobRegistryService.class),
                Runnable::run);

        assertThatThrownBy(() -> service.start("boss", 1L))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("scan to log in before starting");
        assertThat(plugin.discoveryCalls).hasValue(0);
        assertThat(plugin.contactCalls).hasValue(0);
    }

    private static final class FakePlugin implements RecruitmentPlatformPlugin,
            RecruitmentSessionCapability, RecruitmentDiscoveryCapability,
            RecruitmentContactPreparationCapability, RecruitmentContactCapability {
        private final PlatformDescriptor descriptor = new PlatformDescriptor(
                RecruitmentPlatformId.of("boss"), "BOSS直聘", "mdi-test", 10, Set.of());
        private final RecruitmentJob job;
        private final AtomicInteger discoveryCalls = new AtomicInteger();
        private final AtomicInteger contactCalls = new AtomicInteger();
        private final AtomicInteger prepareCalls = new AtomicInteger();
        private boolean authenticated = true;

        private FakePlugin(RecruitmentJob job) {
            this.job = job;
        }

        @Override
        public PlatformDescriptor descriptor() {
            return descriptor;
        }

        @Override
        public String loginUrl() {
            return "https://www.zhipin.com/web/user/";
        }

        @Override
        public BrowserSession openSession(String profile, boolean headless) {
            return new BrowserSession("session-1", "boss", loginUrl());
        }

        @Override
        public BrowserSessionStatus sessionStatus(String sessionId) {
            return new BrowserSessionStatus(authenticated, loginUrl(), authenticated ? null : "OPEN_LOGIN_SESSION");
        }

        @Override
        public BrowserJobDiscoveryResult discover(String sessionId, RecruitmentSearchPlan plan) {
            discoveryCalls.incrementAndGet();
            return new BrowserJobDiscoveryResult(List.of(job), 1, false);
        }

        @Override
        public BrowserContactResult contact(String sessionId, List<RecruitmentJob> jobs, String greeting) {
            contactCalls.incrementAndGet();
            ContactResult result = new ContactResult(job.platformJobId(), ContactResult.ContactStatus.SUCCEEDED, null);
            return new BrowserContactResult(List.of(result), 1, true);
        }

        @Override
        public BrowserContactPreparationResult prepareContact(String sessionId, List<RecruitmentJob> jobs) {
            prepareCalls.incrementAndGet();
            ContactPreparation result = new ContactPreparation(
                    job.platformJobId(), ContactPreparation.PreparationStatus.READY, job.href(), true, false, null);
            return new BrowserContactPreparationResult(List.of(result), 1, false);
        }
    }
}
