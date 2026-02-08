package getjobs.common.infrastructure.repository.common;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * SASL 表单汇总统计记录仓储统一接口
 *
 * @param <T> SASL 表单汇总统计记录实体类型
 * @author getjobs
 */
public interface ISaslFormStatisticsRecordRepository<T> extends JpaRepository<T, Long> {

    /**
     * 查询最新一条统计记录，按创建时间倒序排列。
     *
     * @param pageable 分页参数，限制返回1条
     * @return 最新一条统计记录，如果不存在返回空列表
     */
    List<T> findLatestRecord(Pageable pageable);

    /**
     * 获取最新一条统计记录。
     *
     * @return 最新一条统计记录，如果不存在返回空
     */
    Optional<T> findLatest();

    /**
     * 查询当日最新一条统计记录，按创建时间倒序排列。
     *
     * @param startOfDay     当天开始时间（00:00:00）
     * @param startOfNextDay 下一天开始时间（00:00:00）
     * @param pageable       分页参数，限制返回1条
     * @return 当日最新一条统计记录，如果不存在返回空列表
     */
    List<T> findLatestRecordByDate(LocalDateTime startOfDay, LocalDateTime startOfNextDay, Pageable pageable);

    /**
     * 获取当日最新一条统计记录。
     *
     * @param startOfDay     当天开始时间（00:00:00）
     * @param startOfNextDay 下一天开始时间（00:00:00）
     * @return 当日最新一条统计记录，如果不存在返回空
     */
    Optional<T> findLatestToday(LocalDateTime startOfDay, LocalDateTime startOfNextDay);
}

