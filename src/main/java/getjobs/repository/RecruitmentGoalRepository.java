package getjobs.repository;

import getjobs.repository.entity.RecruitmentGoalEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RecruitmentGoalRepository extends JpaRepository<RecruitmentGoalEntity, Long> {
    Optional<RecruitmentGoalEntity> findFirstByActiveTrueOrderByIdDesc();
}
