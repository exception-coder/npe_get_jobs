package getjobs.modules.recruitment.workflow;

import getjobs.modules.recruitment.application.*;
import getjobs.modules.recruitment.domain.*;
import getjobs.repository.entity.RecruitmentGoalEntity;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Set;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;

class TodayAutoDeliveryServiceTest {
    @Test
    void emptyGreetingNeverStartsAndPreviouslyContactedJobsNeverSend() {
        var jobs = mock(RecruitmentJobRegistryService.class);
        var goals = mock(RecruitmentGoalService.class);
        var plans = mock(RecruitmentSearchPlanService.class);
        var selection = mock(RecruitmentJobSelectionService.class);
        var history = mock(RecruitmentContactHistoryService.class);
        var workflows = mock(RecruitmentWorkflowService.class);
        var service = new TodayAutoDeliveryService(jobs, goals, plans, selection, history, workflows, Runnable::run);
        assertThatThrownBy(() -> service.start("boss", 1L, " ", false, "")).hasMessageContaining("打招呼");
        verifyNoInteractions(jobs, workflows);
        var goal = new RecruitmentGoalEntity(); goal.setId(1L);
        when(goals.active()).thenReturn(goal);
        when(plans.resolve(any(), eq(1L))).thenReturn(new RecruitmentSearchPlan(List.of(), java.util.Map.of(), "", null));
        when(jobs.todayIds("boss")).thenReturn(List.of(2L));
        var job = new RecruitmentJob("j1", "Java", "公司", "广州", "25K", "JD", "https://example.com");
        when(jobs.requireRegisteredJob(2L)).thenReturn(new RecruitmentJobRegistryService.RegisteredJob("boss", job));
        when(history.contactedIds("boss", List.of(job))).thenReturn(Set.of("j1"));
        assertThat(service.start("boss", 1L, "您好", false, "").status()).isEqualTo("COMPLETED");
        assertThat(service.status().sent()).isZero();
        verifyNoInteractions(selection, workflows);
    }
}
