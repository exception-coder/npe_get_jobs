package getjobs.modules.resume.repository;

import getjobs.modules.resume.domain.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 简历Repository
 */
@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long> {

    /**
     * 根据姓名查询简历列表
     */
    List<Resume> findByNameContaining(String name);

    /**
     * 根据邮箱查询简历
     */
    Resume findByEmail(String email);
}

