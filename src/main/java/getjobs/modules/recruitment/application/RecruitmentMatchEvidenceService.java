package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.spi.RecruitmentIntentSerialization;
import getjobs.repository.RecruitmentIntentMatchRepository;
import getjobs.repository.entity.RecruitmentIntentMatchEntity;
import org.springframework.stereotype.Service;
import java.util.List;

/** Saves a batch only after model calls finish; no network work occurs inside a DB transaction. */
@Service
public class RecruitmentMatchEvidenceService {
    private final RecruitmentIntentMatchRepository repository;
    private final RecruitmentIntentSerialization codec;

    public RecruitmentMatchEvidenceService(RecruitmentIntentMatchRepository repository, RecruitmentIntentSerialization codec) {
        this.repository = repository;
        this.codec = codec;
    }

    public void record(String platform, List<RecruitmentJob> jobs) {
        repository.saveAll(jobs.stream().map(job -> snapshot(platform, job)).toList());
    }

    private RecruitmentIntentMatchEntity snapshot(String platform, RecruitmentJob job) {
        var entity = new RecruitmentIntentMatchEntity();
        entity.setIntentVersion(job.intentMatch().intentVersion());
        entity.setPlatform(platform);
        entity.setPlatformJobId(job.platformJobId());
        entity.setJdVersion(job.intentMatch().jdVersion());
        entity.setRecommendation(job.intentMatch().recommendation());
        entity.setJobSnapshot(codec.write(new RecruitmentJob(job.platformJobId(), job.title(), job.company(),
                job.city(), job.salary(), job.description(), job.href(), job.facts())));
        entity.setResultJson(codec.write(job.intentMatch()));
        return entity;
    }
}
