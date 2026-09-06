package getjobs.modules.resume.repository;

import getjobs.modules.resume.domain.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 简历Repository
 */
@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long> {
}

