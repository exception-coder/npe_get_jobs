package getjobs.repository;

import getjobs.repository.entity.RecruitmentIntentMatchEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/** Persists immutable match evidence for reproducible recommendations. */
public interface RecruitmentIntentMatchRepository extends JpaRepository<RecruitmentIntentMatchEntity, Long> {
    /** Loads cache candidates for a bounded job batch in one query. */
    List<RecruitmentIntentMatchEntity>
            findAllByIntentVersionAndPlatformAndPlatformJobIdInAndDecisionContextOrderByIdDesc(
            Long intentVersion, String platform, List<String> platformJobIds, String decisionContext);
}
