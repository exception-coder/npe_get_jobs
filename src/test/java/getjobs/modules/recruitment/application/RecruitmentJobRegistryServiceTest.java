package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.domain.RecruitmentJobFacts;
import getjobs.repository.JobRepository;
import getjobs.repository.entity.JobEntity;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class RecruitmentJobRegistryServiceTest {
    @Test
    void registersNormalizedJobWithPlatformScopedIdentity() {
        JobRepository repository = mock(JobRepository.class);
        when(repository.findAllByPlatformAndEncryptJobIdOrderByCreatedAtDesc("boss", "boss-1"))
                .thenReturn(List.of());
        RecruitmentJobRegistryService service = new RecruitmentJobRegistryService(repository);
        RecruitmentJob job = new RecruitmentJob(
                "boss-1", "Java高级工程师", "示例公司", "广州", "25-40K", "Spring Boot",
                "https://www.zhipin.com/job_detail/boss-1.html",
                new RecruitmentJobFacts("5-10年", "本科", "互联网", "已上市", "1000-9999人",
                        "张经理", "招聘经理", "boss-user-1", "boss-company-1", "security-1",
                        List.of("五险一金"), List.of("Java", "Spring"), List.of("年终奖")));

        JobRegistrationResult result = service.register("boss", List.of(job));

        ArgumentCaptor<JobEntity> captor = ArgumentCaptor.forClass(JobEntity.class);
        verify(repository).save(captor.capture());
        assertThat(result).isEqualTo(new JobRegistrationResult(1, 1, 0, 0));
        assertThat(captor.getValue().getPlatform()).isEqualTo("boss");
        assertThat(captor.getValue().getEncryptJobId()).isEqualTo("boss-1");
        assertThat(captor.getValue().getJobExperience()).isEqualTo("5-10年");
        assertThat(captor.getValue().getCompanyScale()).isEqualTo("1000-9999人");
        assertThat(captor.getValue().getHrName()).isEqualTo("张经理");
        assertThat(captor.getValue().getSkills()).isEqualTo("Java,Spring");
        assertThat(captor.getValue().getStatus()).isZero();
    }
}
