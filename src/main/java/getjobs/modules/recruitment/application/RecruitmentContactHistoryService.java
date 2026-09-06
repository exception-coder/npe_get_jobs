package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.ContactResult;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.repository.JobRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

/** Provides persistent, platform-scoped evidence for repeat-contact prevention. */
@Service
public class RecruitmentContactHistoryService {
    private final JobRepository repository;

    public RecruitmentContactHistoryService(JobRepository repository) {
        this.repository = repository;
    }

    /** Loads history for a bounded discovery batch, including legacy successful records. */
    public Set<String> contactedIds(String platform, List<RecruitmentJob> jobs) {
        List<String> ids = jobs.stream().map(RecruitmentJob::platformJobId)
                .filter(id -> id != null && !id.isBlank()).distinct().toList();
        if (ids.isEmpty()) {
            return Set.of();
        }
        return repository.findContactedIds(platform, ids);
    }

    /** Rejects stale previews before any platform-side contact action. */
    public void requireNotContacted(String platform, RecruitmentJob job) {
        if (!contactedIds(platform, List.of(job)).isEmpty()) {
            throw new IllegalStateException("该岗位已有投递或联系记录，已阻止重复投递");
        }
    }

    /** Persists only confirmed success for the requested identity, never skipped or failed outcomes. */
    @Transactional
    public void recordSuccess(String platform, RecruitmentJob job, List<ContactResult> results) {
        boolean succeeded = results.stream().anyMatch(result ->
                job.platformJobId().equals(result.platformJobId())
                        && result.status() == ContactResult.ContactStatus.SUCCEEDED);
        if (succeeded && repository.markContactSucceeded(platform, job.platformJobId(), LocalDateTime.now()) == 0) {
            throw new IllegalStateException("投递已成功，但岗位历史未保存，请核对平台记录后补记");
        }
    }
}
