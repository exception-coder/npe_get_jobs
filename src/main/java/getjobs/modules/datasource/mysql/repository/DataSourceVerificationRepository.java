package getjobs.modules.datasource.mysql.repository;

import getjobs.modules.datasource.mysql.domain.DataSourceVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * 数据源验证仓储接口
 * <p>
 * 用于操作 MySQL 数据库中的验证记录。
 * 该 Repository 仅连接到 MySQL 数据源，不连接到 SQLite 数据源。
 * </p>
 *
 * @author getjobs
 */
@Repository
public interface DataSourceVerificationRepository extends JpaRepository<DataSourceVerification, Long> {

    /**
     * 根据状态查询验证记录
     *
     * @param status 状态（SUCCESS/FAILED）
     * @return 验证记录列表
     */
    List<DataSourceVerification> findByStatus(String status);

    /**
     * 根据消息内容查询验证记录
     *
     * @param message 消息内容
     * @return 验证记录列表
     */
    List<DataSourceVerification> findByMessageContaining(String message);

    /**
     * 查询最新的验证记录
     *
     * @return 最新的验证记录
     */
    @Query("SELECT v FROM DataSourceVerification v ORDER BY v.createdAt DESC")
    Optional<DataSourceVerification> findLatest();

    /**
     * 查询指定时间范围内的验证记录
     *
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @return 验证记录列表
     */
    @Query("SELECT v FROM DataSourceVerification v WHERE v.createdAt BETWEEN :startTime AND :endTime ORDER BY v.createdAt DESC")
    List<DataSourceVerification> findByCreatedAtBetween(LocalDateTime startTime, LocalDateTime endTime);

    /**
     * 统计指定状态的记录数量
     *
     * @param status 状态
     * @return 记录数量
     */
    long countByStatus(String status);
}

