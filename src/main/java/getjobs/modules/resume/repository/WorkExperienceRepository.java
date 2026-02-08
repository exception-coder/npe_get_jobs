package getjobs.modules.resume.repository;

import getjobs.modules.resume.domain.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 工作经历Repository
 */
@Repository
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {
}

