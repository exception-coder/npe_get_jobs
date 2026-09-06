package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.repository.JobRepository;
import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

class RecruitmentContactHistoryServiceTest {
    private final JobRepository repository = mock(JobRepository.class);
    private final RecruitmentContactHistoryService service = new RecruitmentContactHistoryService(repository);
    private final RecruitmentJob job = new RecruitmentJob("job-1", "Java", "Company", "City", "", "", "");

    @Test
    void rejectsKnownHistoryWithinPlatform() {
        when(repository.findContactedIds("boss", List.of("job-1"))).thenReturn(Set.of("job-1"));
        assertThatThrownBy(() -> service.requireNotContacted("boss", job))
                .isInstanceOf(IllegalStateException.class).hasMessageContaining("阻止重复投递");
        service.requireNotContacted("liepin", job);
    }

    @Test
    void persistsOnlyMatchingConfirmedSuccess() {
        service.recordSuccess("boss", job, List.of(
                new ContactResult("job-1", ContactResult.ContactStatus.FAILED, "failed"),
                new ContactResult("job-1", ContactResult.ContactStatus.SKIPPED, "skip"),
                new ContactResult("other", ContactResult.ContactStatus.SUCCEEDED, "ok")));
        verifyNoInteractions(repository);
        when(repository.markContactSucceeded(eq("boss"), eq("job-1"), any(LocalDateTime.class))).thenReturn(2);
        service.recordSuccess("boss", job, List.of(new ContactResult("job-1", ContactResult.ContactStatus.SUCCEEDED, "ok")));
        verify(repository).markContactSucceeded(eq("boss"), eq("job-1"), any(LocalDateTime.class));
    }

    @Test
    void reportsMissingPersistentRecordAfterSuccess() {
        assertThatThrownBy(() -> service.recordSuccess("boss", job,
                List.of(new ContactResult("job-1", ContactResult.ContactStatus.SUCCEEDED, "ok"))))
                .hasMessageContaining("历史未保存");
    }

    @Test
    void emptyDiscoveryDoesNotQueryDatabase() {
        assertThat(service.contactedIds("boss", List.of())).isEmpty();
        verifyNoInteractions(repository);
    }
}
