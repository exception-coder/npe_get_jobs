package getjobs.repository;

import getjobs.repository.entity.RecruitmentGoalEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RecruitmentGoalRepository extends JpaRepository<RecruitmentGoalEntity, Long> {
    @org.springframework.data.jpa.repository.Modifying
    @org.springframework.data.jpa.repository.Query("update RecruitmentGoalEntity g set g.active = false where g.active = true")
    void deactivateAll();
    Optional<RecruitmentGoalEntity> findFirstByActiveTrueOrderByIdDesc();
}
