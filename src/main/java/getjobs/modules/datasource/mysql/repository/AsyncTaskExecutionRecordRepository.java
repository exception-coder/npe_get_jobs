package getjobs.modules.datasource.mysql.repository;

import getjobs.modules.datasource.mysql.domain.AsyncTaskExecutionRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

/**
 * 异步任务执行记录仓储接口
 * <p>
 * 用于操作 MySQL 数据库中的任务执行记录。
 * 直接继承 JpaRepository，不继承公共接口。
 * </p>
 *
 * <h2>主要功能</h2>
 * <ul>
 * <li>任务记录的增删改查</li>
 * <li>按状态、任务名称、时间范围查询</li>
 * <li>统计任务执行情况</li>
 * <li>查询正在执行、等待执行的任务</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Repository
public interface AsyncTaskExecutionRecordRepository extends JpaRepository<AsyncTaskExecutionRecord, Long> {

    /**
     * 根据任务ID查询记录
     *
     * @param taskId 任务ID
     * @return 任务执行记录
     */
    Optional<AsyncTaskExecutionRecord> findByTaskId(String taskId);

    /**
     * 根据任务名称查询记录
     *
     * @param taskName 任务名称
     * @return 任务执行记录列表
     */
    List<AsyncTaskExecutionRecord> findByTaskName(String taskName);

    /**
     * 根据任务名称模糊查询
     *
     * @param taskName 任务名称（支持模糊匹配）
     * @return 任务执行记录列表
     */
    List<AsyncTaskExecutionRecord> findByTaskNameContaining(String taskName);

    /**
     * 根据状态查询记录
     *
     * @param status 任务状态
     * @return 任务执行记录列表
     */
    List<AsyncTaskExecutionRecord> findByStatus(String status);

    /**
     * 查询正在运行的任务
     *
     * @return 正在运行的任务列表
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.status = 'RUNNING' ORDER BY r.startTime DESC")
    List<AsyncTaskExecutionRecord> findRunningTasks();

    /**
     * 查询等待执行的任务
     *
     * @return 等待执行的任务列表
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.status = 'SUBMITTED' ORDER BY r.submitTime ASC")
    List<AsyncTaskExecutionRecord> findWaitingTasks();

    /**
     * 查询已完成的任务（包括成功、失败、取消）
     *
     * @return 已完成的任务列表
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.status IN ('COMPLETED', 'FAILED', 'CANCELLED') ORDER BY r.finishTime DESC")
    List<AsyncTaskExecutionRecord> findFinishedTasks();

    /**
     * 查询指定时间范围内提交的任务
     *
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @return 任务执行记录列表
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.submitTime BETWEEN :startTime AND :endTime ORDER BY r.submitTime DESC")
    List<AsyncTaskExecutionRecord> findBySubmitTimeBetween(@Param("startTime") Instant startTime, @Param("endTime") Instant endTime);

    /**
     * 查询指定时间范围内完成的任务
     *
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @return 任务执行记录列表
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.finishTime BETWEEN :startTime AND :endTime ORDER BY r.finishTime DESC")
    List<AsyncTaskExecutionRecord> findByFinishTimeBetween(@Param("startTime") Instant startTime, @Param("endTime") Instant endTime);

    /**
     * 统计指定状态的任务数量
     *
     * @param status 任务状态
     * @return 任务数量
     */
    long countByStatus(String status);

    /**
     * 统计正在运行的任务数量
     *
     * @return 任务数量
     */
    @Query("SELECT COUNT(r) FROM AsyncTaskExecutionRecord r WHERE r.status = 'RUNNING'")
    long countRunningTasks();

    /**
     * 统计等待执行的任务数量
     *
     * @return 任务数量
     */
    @Query("SELECT COUNT(r) FROM AsyncTaskExecutionRecord r WHERE r.status = 'SUBMITTED'")
    long countWaitingTasks();

    /**
     * 统计指定时间范围内的任务数量
     *
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @return 任务数量
     */
    @Query("SELECT COUNT(r) FROM AsyncTaskExecutionRecord r WHERE r.submitTime BETWEEN :startTime AND :endTime")
    long countBySubmitTimeBetween(@Param("startTime") Instant startTime, @Param("endTime") Instant endTime);

    /**
     * 统计指定时间范围内失败的任务数量
     *
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @return 任务数量
     */
    @Query("SELECT COUNT(r) FROM AsyncTaskExecutionRecord r WHERE r.status = 'FAILED' AND r.finishTime BETWEEN :startTime AND :endTime")
    long countFailedTasksBetween(@Param("startTime") Instant startTime, @Param("endTime") Instant endTime);

    /**
     * 查询平均执行时间（仅统计已完成的任务）
     *
     * @return 平均执行时间（毫秒）
     */
    @Query("SELECT AVG(r.duration) FROM AsyncTaskExecutionRecord r WHERE r.status = 'COMPLETED' AND r.duration IS NOT NULL")
    Double getAverageDuration();

    /**
     * 查询指定任务名称的平均执行时间
     *
     * @param taskName 任务名称
     * @return 平均执行时间（毫秒）
     */
    @Query("SELECT AVG(r.duration) FROM AsyncTaskExecutionRecord r WHERE r.taskName = :taskName AND r.status = 'COMPLETED' AND r.duration IS NOT NULL")
    Double getAverageDurationByTaskName(@Param("taskName") String taskName);

    /**
     * 查询最新的N条记录
     *
     * @param limit 限制数量
     * @return 任务执行记录列表
     */
    @Query(value = "SELECT r FROM AsyncTaskExecutionRecord r ORDER BY r.createdAt DESC")
    List<AsyncTaskExecutionRecord> findLatestRecords(@Param("limit") int limit);

    /**
     * 查询指定任务名称的最新记录
     *
     * @param taskName 任务名称
     * @return 任务执行记录
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.taskName = :taskName ORDER BY r.submitTime DESC")
    Optional<AsyncTaskExecutionRecord> findLatestByTaskName(@Param("taskName") String taskName);

    /**
     * 删除指定时间之前的记录（用于清理历史数据）
     *
     * @param beforeTime 时间点
     * @return 删除的记录数量
     */
    @Query("DELETE FROM AsyncTaskExecutionRecord r WHERE r.createdAt < :beforeTime")
    int deleteByCreatedAtBefore(@Param("beforeTime") Instant beforeTime);

    /**
     * 删除指定状态的历史记录
     *
     * @param status     任务状态
     * @param beforeTime 时间点
     * @return 删除的记录数量
     */
    @Query("DELETE FROM AsyncTaskExecutionRecord r WHERE r.status = :status AND r.createdAt < :beforeTime")
    int deleteByStatusAndCreatedAtBefore(@Param("status") String status, @Param("beforeTime") Instant beforeTime);

    /**
     * 查询执行时间最长的任务（TOP N）
     *
     * @param limit 限制数量
     * @return 任务执行记录列表
     */
    @Query("SELECT r FROM AsyncTaskExecutionRecord r WHERE r.status = 'COMPLETED' AND r.duration IS NOT NULL ORDER BY r.duration DESC")
    List<AsyncTaskExecutionRecord> findTopByDuration(@Param("limit") int limit);

    /**
     * 查询失败次数最多的任务（按任务名称分组）
     *
     * @return 任务名称和失败次数的映射
     */
    @Query("SELECT r.taskName, COUNT(r) FROM AsyncTaskExecutionRecord r WHERE r.status = 'FAILED' GROUP BY r.taskName ORDER BY COUNT(r) DESC")
    List<Object[]> findMostFailedTasks();

    /**
     * 查询任务执行成功率（按任务名称分组）
     *
     * @return 任务名称和成功率的映射
     */
    @Query("SELECT r.taskName, " +
            "SUM(CASE WHEN r.status = 'COMPLETED' THEN 1 ELSE 0 END) * 100.0 / COUNT(r) " +
            "FROM AsyncTaskExecutionRecord r " +
            "WHERE r.status IN ('COMPLETED', 'FAILED') " +
            "GROUP BY r.taskName")
    List<Object[]> getSuccessRateByTaskName();
}

