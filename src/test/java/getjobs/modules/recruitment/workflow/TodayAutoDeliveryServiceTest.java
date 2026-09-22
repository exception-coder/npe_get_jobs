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
    void exposesPerJobReasonsWhenAllCheckedJobsAreSkipped() {
        var jobs = mock(RecruitmentJobRegistryService.class);
        var goals = mock(RecruitmentGoalService.class);
        var plans = mock(RecruitmentSearchPlanService.class);
        var selection = mock(RecruitmentJobSelectionService.class);
        var history = mock(RecruitmentContactHistoryService.class);
        var goal = new RecruitmentGoalEntity(); goal.setId(1L);
        when(goals.active()).thenReturn(goal);
        when(plans.resolve(any(), eq(1L))).thenReturn(plan());
        when(jobs.deliveryCandidateIds("boss")).thenReturn(List.of(2L));
        var job = new RecruitmentJob("j1", "直播运营", "茶企", "福州", "8K", "JD", "https://example.com");
        when(jobs.requireRegisteredJob(2L)).thenReturn(new RecruitmentJobRegistryService.RegisteredJob("boss", job));
        when(history.contactedIds("boss", List.of(job))).thenReturn(Set.of());
        var match = new IntentMatchResult(1L, "hash", "review", "关键信息不足，请先核实",
                List.of(new IntentMatchResult.Check("requirements.skills", "unknown", "岗位未说明茶行业经验", "")));
        var evaluated = new RecruitmentJob(job.platformJobId(), job.title(), job.company(), job.city(), job.salary(),
                job.description(), job.href(), job.facts(), match);
        when(selection.select(eq(List.of(job)), any(RecruitmentGoalConditions.class))).thenReturn(List.of(evaluated));
        var service = new TodayAutoDeliveryService(jobs, goals, plans, selection, history,
                mock(RecruitmentWorkflowService.class), Runnable::run);

        service.start("boss", 1L, "您好", false, "", "");

        assertThat(service.status().checked()).isOne();
        assertThat(service.status().sent()).isZero();
        assertThat(service.status().outcomes()).singleElement().satisfies(outcome -> {
            assertThat(outcome.title()).isEqualTo("直播运营");
            assertThat(outcome.status()).isEqualTo("SKIPPED");
            assertThat(outcome.decision()).isEqualTo("UNCERTAIN");
            assertThat(outcome.href()).isEqualTo("https://example.com");
            assertThat(outcome.reason()).contains("关键信息不足", "岗位未说明茶行业经验");
        });
    }

    @Test
    void refusesToStartWhenNoUncontactedJobsRemain() {
        var jobs = mock(RecruitmentJobRegistryService.class);
        var goals = mock(RecruitmentGoalService.class);
        var goal = new RecruitmentGoalEntity(); goal.setId(1L);
        when(goals.active()).thenReturn(goal);
        when(jobs.deliveryCandidateIds("boss")).thenReturn(List.of());
        var service = new TodayAutoDeliveryService(jobs, goals, mock(RecruitmentSearchPlanService.class),
                mock(RecruitmentJobSelectionService.class), mock(RecruitmentContactHistoryService.class),
                mock(RecruitmentWorkflowService.class), Runnable::run);

        assertThatThrownBy(() -> service.start("boss", 1L, "您好", false, "", ""))
                .hasMessageContaining("没有可处理的未投递岗位");
        assertThat(service.status().id()).isNull();
    }

    @Test
    void emptyGreetingNeverStartsAndPreviouslyContactedJobsNeverSend() {
        var jobs = mock(RecruitmentJobRegistryService.class);
        var goals = mock(RecruitmentGoalService.class);
        var plans = mock(RecruitmentSearchPlanService.class);
        var selection = mock(RecruitmentJobSelectionService.class);
        var history = mock(RecruitmentContactHistoryService.class);
        var workflows = mock(RecruitmentWorkflowService.class);
        var service = new TodayAutoDeliveryService(jobs, goals, plans, selection, history, workflows, Runnable::run);
        assertThatThrownBy(() -> service.start("boss", 1L, " ", false, "", "")).hasMessageContaining("打招呼");
        verifyNoInteractions(jobs, workflows);
        var goal = new RecruitmentGoalEntity(); goal.setId(1L);
        when(goals.active()).thenReturn(goal);
        when(plans.resolve(any(), eq(1L))).thenReturn(plan());
        when(jobs.deliveryCandidateIds("boss")).thenReturn(List.of(2L));
        var job = new RecruitmentJob("j1", "Java", "公司", "广州", "25K", "JD", "https://example.com");
        when(jobs.requireRegisteredJob(2L)).thenReturn(new RecruitmentJobRegistryService.RegisteredJob("boss", job));
        when(history.contactedIds("boss", List.of(job))).thenReturn(Set.of("j1"));
        assertThat(service.start("boss", 1L, "您好", false, "", "").status()).isEqualTo("COMPLETED");
        assertThat(service.status().sent()).isZero();
        assertThat(service.status().outcomes()).singleElement().satisfies(outcome -> {
            assertThat(outcome.status()).isEqualTo("SKIPPED");
            assertThat(outcome.reason()).contains("成功投递记录");
        });
        verifyNoInteractions(selection, workflows);
    }

    private RecruitmentSearchPlan plan() {
        var goal = new RecruitmentGoalConditions("Java", List.of("Java"), List.of(), null, null, null, null,
                List.of(), List.of(), List.of(), List.of(), null,
                java.util.Map.of("intentCard", "{}", "intentVersion", "1", "platform", "boss"));
        return new RecruitmentSearchPlan(List.of(), java.util.Map.of(), "", goal);
    }
}
