package getjobs.modules.resume.repository;

import getjobs.modules.resume.domain.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 教育经历Repository
 */
@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
}

