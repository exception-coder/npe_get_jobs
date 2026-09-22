package getjobs.modules.recruitment.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.recruitment.domain.IntentMatchResult;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.infrastructure.ai.RecruitmentIntentCodec;
import getjobs.repository.RecruitmentIntentMatchRepository;
import getjobs.repository.entity.RecruitmentIntentMatchEntity;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

class RecruitmentMatchEvidenceServiceTest {

    @Test
    void reusesOnlyExactHighConfidenceRejectionAndRecordsItsContext() {
        var repository = mock(RecruitmentIntentMatchRepository.class);
        var codec = new RecruitmentIntentCodec(new ObjectMapper());
        var service = new RecruitmentMatchEvidenceService(repository, codec);
        var saved = new AtomicReference<RecruitmentIntentMatchEntity>();
        when(repository.saveAll(any())).thenAnswer(invocation -> {
            Iterable<RecruitmentIntentMatchEntity> rows = invocation.getArgument(0);
            saved.set(rows.iterator().next());
            return List.of(saved.get());
        });
        var job = new RecruitmentJob("job-1", "Java 工程师", "测试公司", "广州", "20K", "Java 开发",
                "https://www.zhipin.com/job_detail/job-1.html");
        var result = new IntentMatchResult(1L, codec.fingerprint(job), "skip", "high", "明确不符合", List.of());
        var entity = new RecruitmentIntentMatchEntity();
        entity.setIntentVersion(1L);
        entity.setPlatform("boss");
        entity.setPlatformJobId("job-1");
        entity.setJdVersion(codec.fingerprint(job));
        entity.setRecommendation("skip");
        entity.setConfidence("high");
        entity.setResultJson(codec.write(result));
        when(repository.findAllByIntentVersionAndPlatformAndPlatformJobIdInAndDecisionContextOrderByIdDesc(
                eq(1L), eq("boss"), eq(List.of("job-1")), anyString())).thenReturn(List.of(entity));
        var goal = goal("JD 未写年限时不限制");

        assertThat(service.reusableRejections("boss", List.of(job), goal)).containsKey("job-1");
        var evaluated = new RecruitmentJob(job.platformJobId(), job.title(), job.company(), job.city(), job.salary(),
                job.description(), job.href(), job.facts(), result);
        service.record("boss", List.of(evaluated), goal);

        verify(repository).saveAll(any());
        assertThat(saved.get().getConfidence()).isEqualTo("high");
        assertThat(saved.get().getDecisionContext()).isNotBlank().isNotEqualTo("legacy");
    }

    private RecruitmentGoalConditions goal(String guidance) {
        return new RecruitmentGoalConditions("Java", List.of("Java"), List.of(), null, null, null, null,
                List.of(), List.of(), List.of(), List.of(), null, Map.of(
                "intentCard", "{}", "intentVersion", "1", "platform", "boss", "decisionGuidance", guidance));
    }
}
