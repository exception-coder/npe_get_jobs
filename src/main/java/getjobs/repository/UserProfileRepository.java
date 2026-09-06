package getjobs.repository;

import getjobs.repository.entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * 用户求职信息Repository
 * 
 * @author getjobs
 */
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    Optional<UserProfile> findFirstByOrderByIdAsc();
}

