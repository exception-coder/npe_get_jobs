package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentJob;
import getjobs.modules.recruitment.spi.RecruitmentIntentSerialization;
import getjobs.repository.RecruitmentIntentMatchRepository;
import getjobs.repository.entity.RecruitmentIntentMatchEntity;
import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.List;

/** Saves a batch only after model calls finish; no network work occurs inside a DB transaction. */
@Service
public class RecruitmentMatchEvidenceService {
    private final RecruitmentIntentMatchRepository repository;
    private final RecruitmentIntentSerialization codec;

    public RecruitmentMatchEvidenceService(RecruitmentIntentMatchRepository repository,
                                           RecruitmentIntentSerialization codec) {
        this.repository = repository;
        this.codec = codec;
    }

    public void record(String platform, List<RecruitmentJob> jobs,
                       getjobs.modules.recruitment.domain.RecruitmentGoalConditions goal) {
        if (!jobs.isEmpty()) {
            String decisionContext = decisionContext(goal);
            repository.saveAll(jobs.stream().map(job -> snapshot(platform, job, decisionContext)).toList());
        }
    }

    /** Reuses high-confidence explicit rejections for unchanged JDs and decision context. */
    public Map<String, RecruitmentJob> reusableRejections(String platform, List<RecruitmentJob> jobs,
            getjobs.modules.recruitment.domain.RecruitmentGoalConditions goal) {
        if (jobs.isEmpty()) {
            return Map.of();
        }
        Long intentVersion = intentVersion(goal);
        String decisionContext = decisionContext(goal);
        Map<String, RecruitmentJob> jobsById = jobs.stream().collect(java.util.stream.Collectors.toMap(
                RecruitmentJob::platformJobId, job -> job, (first, ignored) -> first, LinkedHashMap::new));
        Map<String, RecruitmentJob> reusable = new LinkedHashMap<>();
        repository.findAllByIntentVersionAndPlatformAndPlatformJobIdInAndDecisionContextOrderByIdDesc(
                        intentVersion, platform, List.copyOf(jobsById.keySet()), decisionContext).stream()
                .filter(entity -> "skip".equals(entity.getRecommendation())
                        && "high".equals(entity.getConfidence()))
                .filter(entity -> jobsById.containsKey(entity.getPlatformJobId()))
                .filter(entity -> entity.getJdVersion().equals(
                        codec.fingerprint(jobsById.get(entity.getPlatformJobId()))))
                .forEach(entity -> reusable.computeIfAbsent(entity.getPlatformJobId(), ignored ->
                        withResult(jobsById.get(entity.getPlatformJobId()),
                                codec.readMatch(entity.getResultJson()))));
        return Map.copyOf(reusable);
    }

    private RecruitmentIntentMatchEntity snapshot(String platform, RecruitmentJob job, String decisionContext) {
        var entity = new RecruitmentIntentMatchEntity();
        entity.setIntentVersion(job.intentMatch().intentVersion());
        entity.setPlatform(platform);
        entity.setPlatformJobId(job.platformJobId());
        entity.setJdVersion(job.intentMatch().jdVersion());
        entity.setRecommendation(job.intentMatch().recommendation());
        entity.setConfidence(job.intentMatch().confidence());
        entity.setDecisionContext(decisionContext);
        entity.setJobSnapshot(codec.write(new RecruitmentJob(job.platformJobId(), job.title(), job.company(),
                job.city(), job.salary(), job.description(), job.href(), job.facts())));
        entity.setResultJson(codec.write(job.intentMatch()));
        return entity;
    }

    private RecruitmentJob withResult(RecruitmentJob job,
                                      getjobs.modules.recruitment.domain.IntentMatchResult result) {
        return new RecruitmentJob(job.platformJobId(), job.title(), job.company(), job.city(), job.salary(),
                job.description(), job.href(), job.facts(), result);
    }

    private Long intentVersion(getjobs.modules.recruitment.domain.RecruitmentGoalConditions goal) {
        return Long.valueOf(goal.additionalConditions().get("intentVersion"));
    }

    private String decisionContext(getjobs.modules.recruitment.domain.RecruitmentGoalConditions goal) {
        return decisionContext(intentVersion(goal), goal.additionalConditions().get("decisionGuidance"));
    }

    private String decisionContext(Long intentVersion, String guidance) {
        return codec.fingerprint(List.of(intentVersion.toString(), guidance == null ? "" : guidance.trim()));
    }
}
