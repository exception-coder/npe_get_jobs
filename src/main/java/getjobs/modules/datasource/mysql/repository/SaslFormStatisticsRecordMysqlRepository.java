package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.ISaslFormStatisticsRecordRepository;
import getjobs.modules.sasl.domain.SaslFormStatisticsRecord;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * SASL 表单汇总统计记录仓储接口（MySQL数据源）。
 */
@Repository
public interface SaslFormStatisticsRecordMysqlRepository extends ISaslFormStatisticsRecordRepository<SaslFormStatisticsRecord> {

        /**
         * 查询最新一条统计记录，按创建时间倒序排列。
         *
         * @param pageable 分页参数，限制返回1条
         * @return 最新一条统计记录，如果不存在返回空列表
         */
        @Query("SELECT s FROM SaslFormStatisticsRecord s ORDER BY s.createdAt DESC")
        List<SaslFormStatisticsRecord> findLatestRecord(Pageable pageable);

        /**
         * 获取最新一条统计记录。
         *
         * @return 最新一条统计记录，如果不存在返回空
         */
        default Optional<SaslFormStatisticsRecord> findLatest() {
                List<SaslFormStatisticsRecord> records = findLatestRecord(PageRequest.of(0, 1));
                return records.isEmpty() ? Optional.empty() : Optional.of(records.get(0));
        }

        /**
         * 查询当日最新一条统计记录，按创建时间倒序排列。
         *
         * @param startOfDay     当天开始时间（00:00:00）
         * @param startOfNextDay 下一天开始时间（00:00:00）
         * @param pageable       分页参数，限制返回1条
         * @return 当日最新一条统计记录，如果不存在返回空列表
         */
        @Query("SELECT s FROM SaslFormStatisticsRecord s " +
                        "WHERE s.createdAt >= :startOfDay " +
                        "AND s.createdAt < :startOfNextDay " +
                        "ORDER BY s.createdAt DESC")
        List<SaslFormStatisticsRecord> findLatestRecordByDate(
                        @Param("startOfDay") LocalDateTime startOfDay,
                        @Param("startOfNextDay") LocalDateTime startOfNextDay,
                        Pageable pageable);

        /**
         * 获取当日最新一条统计记录。
         *
         * @param startOfDay     当天开始时间（00:00:00）
         * @param startOfNextDay 下一天开始时间（00:00:00）
         * @return 当日最新一条统计记录，如果不存在返回空
         */
        default Optional<SaslFormStatisticsRecord> findLatestToday(
                        LocalDateTime startOfDay,
                        LocalDateTime startOfNextDay) {
                List<SaslFormStatisticsRecord> records = findLatestRecordByDate(startOfDay, startOfNextDay,
                                PageRequest.of(0, 1));
                return records.isEmpty() ? Optional.empty() : Optional.of(records.get(0));
        }
}
