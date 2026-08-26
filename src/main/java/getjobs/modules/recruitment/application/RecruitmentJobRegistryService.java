package getjobs.modules.recruitment.application;

import getjobs.common.enums.JobStatusEnum;
import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.repository.JobRepository;
import getjobs.repository.entity.JobEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/** Persists normalized jobs without leaking platform DTOs into the workflow. */
@Service
public class RecruitmentJobRegistryService {
    private final JobRepository jobRepository;

    public RecruitmentJobRegistryService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Transactional
    public JobRegistrationResult register(String platform, List<RecruitmentJob> jobs) {
        int created = 0;
        int updated = 0;
        int rejected = 0;
        for (RecruitmentJob job : jobs) {
            if (!isRegistrable(platform, job)) {
                rejected += 1;
                continue;
            }
            JobEntity entity = jobRepository
                    .findAllByPlatformAndEncryptJobIdOrderByCreatedAtDesc(platform, job.platformJobId())
                    .stream().findFirst().orElseGet(JobEntity::new);
            boolean existing = entity.getId() != null;
            applySnapshot(entity, platform, job);
            jobRepository.save(entity);
            if (existing) updated += 1;
            else created += 1;
        }
        return new JobRegistrationResult(jobs.size(), created, updated, rejected);
    }

    private boolean isRegistrable(String platform, RecruitmentJob job) {
        return platform != null && !platform.isBlank()
                && job != null
                && job.platformJobId() != null && !job.platformJobId().isBlank()
                && job.title() != null && !job.title().isBlank()
                && job.company() != null && !job.company().isBlank();
    }

    private void applySnapshot(JobEntity entity, String platform, RecruitmentJob job) {
        entity.setPlatform(platform);
        entity.setEncryptJobId(job.platformJobId());
        entity.setJobTitle(job.title());
        entity.setCompanyName(job.company());
        entity.setWorkCity(job.city());
        entity.setSalaryDesc(job.salary());
        entity.setJobDescription(job.description());
        entity.setJobUrl(job.href());
        entity.setJobExperience(job.facts().experience());
        entity.setJobDegree(job.facts().degree());
        entity.setCompanyIndustry(job.facts().companyIndustry());
        entity.setCompanyStage(job.facts().companyStage());
        entity.setCompanyScale(job.facts().companyScale());
        entity.setHrName(job.facts().recruiterName());
        entity.setHrTitle(job.facts().recruiterTitle());
        entity.setHrOnline(job.facts().recruiterOnline());
        entity.setHrActiveTime(job.facts().recruiterActiveText());
        entity.setEncryptHrId(job.facts().recruiterId());
        entity.setEncryptCompanyId(job.facts().companyId());
        entity.setSecurityId(job.facts().securityId());
        entity.setJobLabels(String.join(",", job.facts().labels()));
        entity.setSkills(String.join(",", job.facts().skills()));
        entity.setWelfareList(String.join(",", job.facts().benefits()));
        if (entity.getStatus() == null) entity.setStatus(JobStatusEnum.PENDING.getCode());
        if (entity.getIsFavorite() == null) entity.setIsFavorite(false);
    }
}
