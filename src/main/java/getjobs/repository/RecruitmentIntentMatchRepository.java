package getjobs.repository;

import getjobs.repository.entity.RecruitmentIntentMatchEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/** Persists immutable match evidence for reproducible recommendations. */
public interface RecruitmentIntentMatchRepository extends JpaRepository<RecruitmentIntentMatchEntity, Long> { }
