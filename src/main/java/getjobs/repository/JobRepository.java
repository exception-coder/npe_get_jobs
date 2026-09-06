package getjobs.repository;

import getjobs.repository.entity.JobEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

/** Persists the workspace job ledger and confirmed contact history. */
public interface JobRepository extends JpaRepository<JobEntity, Long> {

    /** Today's newly registered, undeleted candidates; updates do not change the collection date. */
    List<JobEntity> findByPlatformAndIsDeletedFalseAndCreatedAtGreaterThanEqualAndCreatedAtLessThanOrderByIdAsc(
            String platform, LocalDateTime start, LocalDateTime end, Pageable pageable);

    /** Updates one manual marker without overwriting a concurrently confirmed success. */
    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("UPDATE JobEntity j SET j.isContacted = :contacted, j.updatedAt = :now "
            + "WHERE j.id = :id AND (j.status IS NULL OR j.status <> 3)")
    int updateManualContactMarker(@Param("id") Long id, @Param("contacted") boolean contacted,
            @Param("now") LocalDateTime now);

    /** Returns contacted identities only within the current platform discovery batch. */
    @Query("SELECT DISTINCT j.encryptJobId FROM JobEntity j WHERE j.platform = :platform "
            + "AND j.encryptJobId IN :ids AND (j.status = 3 OR j.isContacted = true)")
    Set<String> findContactedIds(@Param("platform") String platform, @Param("ids") List<String> ids);

    /** Records confirmed success for all duplicates of one platform identity. */
    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("UPDATE JobEntity j SET j.status = 3, j.isContacted = true, j.updatedAt = :now "
            + "WHERE j.platform = :platform AND j.encryptJobId = :jobId")
    int markContactSucceeded(@Param("platform") String platform, @Param("jobId") String jobId,
            @Param("now") LocalDateTime now);

    /** Searches workspace-visible job facts with all filters applied in the database. */
    @Query("SELECT j FROM JobEntity j "
            + "WHERE (:platform IS NULL OR LOWER(j.platform) = LOWER(:platform)) "
            + "AND (:status IS NULL OR j.status = :status) "
            + "AND (:contactedOnly = false OR j.status = 3 OR j.isContacted = true) "
            + "AND (:keyword IS NULL "
            + "OR LOWER(j.jobTitle) LIKE LOWER(CONCAT('%', :keyword, '%')) "
            + "OR LOWER(j.companyName) LIKE LOWER(CONCAT('%', :keyword, '%')) "
            + "OR LOWER(j.hrName) LIKE LOWER(CONCAT('%', :keyword, '%'))) ")
    Page<JobEntity> search(@Param("platform") String platform,
            @Param("status") Integer status,
            @Param("keyword") String keyword,
            @Param("contactedOnly") boolean contactedOnly,
            Pageable pageable);

    /** Finds the newest persisted snapshot for one platform job identity. */
    List<JobEntity> findAllByPlatformAndEncryptJobIdOrderByCreatedAtDesc(String platform, String encryptJobId);

    /** Finds snapshots for startup deduplication, newest first. */
    List<JobEntity> findAllByEncryptJobIdOrderByCreatedAtDesc(String encryptJobId);

    /** Finds duplicated platform job identifiers left by historical versions. */
    @Query("SELECT j.encryptJobId FROM JobEntity j WHERE j.encryptJobId IS NOT NULL "
            + "GROUP BY j.encryptJobId HAVING COUNT(j.id) > 1")
    List<String> findEncryptJobIdsWithDuplicates();
}
