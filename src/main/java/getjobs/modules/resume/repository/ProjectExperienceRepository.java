package getjobs.modules.resume.repository;

import getjobs.modules.resume.domain.ProjectExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 项目经历Repository
 */
@Repository
public interface ProjectExperienceRepository extends JpaRepository<ProjectExperience, Long> {
}

