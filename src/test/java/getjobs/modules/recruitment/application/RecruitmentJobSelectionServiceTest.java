package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.IntentMatchResult;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.spi.RecruitmentJobMatcher;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

class RecruitmentJobSelectionServiceTest {

    @Test
    void reusesExplicitRejectionWithoutCallingTheModel() {
        var matcher = mock(RecruitmentJobMatcher.class);
        var evidence = mock(RecruitmentMatchEvidenceService.class);
        var service = new RecruitmentJobSelectionService(matcher, evidence);
        var job = job(null);
        var cached = job(new IntentMatchResult(1L, "jd", "skip", "high", "明确不符合", List.of()));
        var goal = goal("JD 未写年限时不限制");
        when(evidence.reusableRejections("boss", List.of(job), goal)).thenReturn(Map.of("job-1", cached));

        assertThat(service.select(List.of(job), goal)).containsExactly(cached);

        verifyNoInteractions(matcher);
        verify(evidence).record("boss", List.of(), goal);
    }

    @Test
    void recordsFreshResultWhenNoReusableRejectionExists() {
        var matcher = mock(RecruitmentJobMatcher.class);
        var evidence = mock(RecruitmentMatchEvidenceService.class);
        var service = new RecruitmentJobSelectionService(matcher, evidence);
        var job = job(null);
        var evaluated = job(new IntentMatchResult(1L, "jd", "review", "low", "无法判定", List.of()));
        var goal = goal("");
        when(evidence.reusableRejections("boss", List.of(job), goal)).thenReturn(Map.of());
        when(matcher.match(job, goal)).thenReturn(evaluated);

        assertThat(service.select(List.of(job), goal)).containsExactly(evaluated);
        verify(evidence).record("boss", List.of(evaluated), goal);
    }

    private RecruitmentJob job(IntentMatchResult result) {
        return new RecruitmentJob("job-1", "Java 工程师", "测试公司", "广州", "20K", "Java 开发",
                "https://www.zhipin.com/job_detail/job-1.html", getjobs.modules.recruitment.domain.RecruitmentJobFacts.empty(), result);
    }

    private RecruitmentGoalConditions goal(String guidance) {
        return new RecruitmentGoalConditions("Java", List.of("Java"), List.of(), null, null, null, null,
                List.of(), List.of(), List.of(), List.of(), null, Map.of(
                "intentCard", "{}", "intentVersion", "1", "platform", "boss", "decisionGuidance", guidance));
    }
}
