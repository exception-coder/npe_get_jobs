package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.ISaslRecordRepository;
import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.enums.CallStatus;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * SASL 记录仓储接口（MySQL数据源）。
 */
@Repository
public interface SaslRecordMysqlRepository extends ISaslRecordRepository<SaslRecord> {

        /**
         * 检查文档标题是否存在。
         *
         * @param documentTitle 文档标题
         * @return 如果存在返回 true，否则返回 false
         */
        boolean existsByDocumentTitle(String documentTitle);

        /**
         * 根据条件查询记录。
         * 注意：当参数为 null 时，对应的条件不会生效。
         *
         * @param mrt           MRT（移动电话号码），为 null 时不设置 MRT 条件，支持模糊查询
         * @param callStatus    致电状态，为 null 时不设置致电状态条件
         * @param documentTitle 文档标题，为 null 时不设置文档标题条件
         * @param pageable      分页参数，用于限制返回数量
         * @return 符合条件的记录列表（最多10条，按ID从小到大排序）
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE (:mrt IS NULL OR s.mrt LIKE CONCAT('%', :mrt, '%')) " +
                        "AND (:callStatus IS NULL OR s.callStatus = :callStatus) " +
                        "AND (:documentTitle IS NULL OR s.documentTitle = :documentTitle) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findByConditions(@Param("mrt") String mrt,
                        @Param("callStatus") CallStatus callStatus,
                        @Param("documentTitle") String documentTitle,
                        Pageable pageable);

        /**
         * 根据文档标题查询致电状态为空的记录，按ID从小到大排序，限制返回前N条。
         *
         * @param documentTitle 文档标题（必填）
         * @param pageable      分页参数，用于限制返回数量
         * @return 符合条件的记录列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.documentTitle = :documentTitle " +
                        "AND s.callStatus IS NULL " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findByDocumentTitleAndCallStatusIsNullOrderByIdAsc(
                        @Param("documentTitle") String documentTitle,
                        Pageable pageable);

        /**
         * 获取所有去重的文档标题列表，按文档标题排序。
         *
         * @return 去重后的文档标题列表
         */
        @Query("SELECT DISTINCT s.documentTitle FROM SaslRecord s ORDER BY s.documentTitle ASC")
        List<String> findAllDistinctDocumentTitles();

        /**
         * 根据 MRT 和文档标题查询已存在的记录。
         *
         * @param mrt           MRT（移动电话号码）
         * @param documentTitle 文档标题
         * @return 已存在的记录，如果不存在返回 null
         */
        @Query("SELECT s FROM SaslRecord s WHERE s.mrt = :mrt AND s.documentTitle = :documentTitle")
        SaslRecord findByMrtAndDocumentTitle(@Param("mrt") String mrt, @Param("documentTitle") String documentTitle);

        /**
         * 批量查询已存在的记录（基于 mrt 和 documentTitle 组合）。
         * 返回所有匹配的记录列表。
         *
         * @param documentTitle 文档标题
         * @param mrts          MRT 列表
         * @return 已存在的记录列表
         */
        @Query("SELECT s FROM SaslRecord s WHERE s.documentTitle = :documentTitle AND s.mrt IN :mrts")
        List<SaslRecord> findByDocumentTitleAndMrtIn(@Param("documentTitle") String documentTitle,
                        @Param("mrts") List<String> mrts);

        /**
         * 查询指定记录的下一条记录（ID 比当前记录大，文档标题相同，最小的 ID）。
         * 如果 nextCallTime 有值，则只查询 nextCallTime 比当前时间早30分钟以上的数据。
         * 排除 callStatus 为 REGISTERED（已登记）的记录。
         *
         * @param id               当前记录ID
         * @param documentTitle    文档标题
         * @param minNextCallTime  最小下次致电时间（当前时间减去30分钟），用于过滤数据
         * @param registeredStatus REGISTERED 状态枚举值，用于排除已登记记录
         * @param pageable         分页参数，限制返回1条
         * @return 下一条记录列表，如果不存在返回空列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findNextRecordByIdAndDocumentTitle(@Param("id") Long id,
                        @Param("documentTitle") String documentTitle,
                        @Param("minNextCallTime") java.time.LocalDateTime minNextCallTime,
                        @Param("registeredStatus") CallStatus registeredStatus,
                        Pageable pageable);

        /**
         * 查询指定记录的下一条记录（ID 比当前记录大，文档标题相同，可选的致电状态过滤，最小的 ID）。
         * 如果 nextCallTime 有值，则只查询 nextCallTime 比当前时间早30分钟以上的数据。
         * 排除 callStatus 为 REGISTERED（已登记）的记录。
         *
         * @param id               当前记录ID
         * @param documentTitle    文档标题
         * @param callStatus       致电状态，为 null 时不设置致电状态条件
         * @param minNextCallTime  最小下次致电时间（当前时间减去30分钟），用于过滤数据
         * @param registeredStatus REGISTERED 状态枚举值，用于排除已登记记录
         * @param pageable         分页参数，限制返回1条
         * @return 下一条记录列表，如果不存在返回空列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (:callStatus IS NULL OR s.callStatus = :callStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findNextRecordByIdAndDocumentTitleAndCallStatus(@Param("id") Long id,
                        @Param("documentTitle") String documentTitle,
                        @Param("callStatus") CallStatus callStatus,
                        @Param("minNextCallTime") java.time.LocalDateTime minNextCallTime,
                        @Param("registeredStatus") CallStatus registeredStatus,
                        Pageable pageable);

        /**
         * 查询指定记录的下一条记录（ID 比当前记录大，文档标题相同，最小的 ID），不使用分页。
         * 如果 nextCallTime 有值，则只查询 nextCallTime 比当前时间早30分钟以上的数据。
         * 排除 callStatus 为 REGISTERED（已登记）的记录。
         * 注意：此方法用于对比测试，不使用分页，直接返回所有符合条件的记录（按ID升序排序）。
         *
         * @param id               当前记录ID
         * @param documentTitle    文档标题
         * @param minNextCallTime  最小下次致电时间（当前时间减去30分钟），用于过滤数据
         * @param registeredStatus REGISTERED 状态枚举值，用于排除已登记记录
         * @return 符合条件的记录列表（按ID升序排序），如果不存在返回空列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findNextRecordByIdAndDocumentTitleWithoutPaging(@Param("id") Long id,
                        @Param("documentTitle") String documentTitle,
                        @Param("minNextCallTime") java.time.LocalDateTime minNextCallTime,
                        @Param("registeredStatus") CallStatus registeredStatus);

        /**
         * 查询指定记录的下一条记录（ID 比当前记录大，文档标题相同，可选的致电状态过滤，最小的 ID），不使用分页。
         * 如果 nextCallTime 有值，则只查询 nextCallTime 比当前时间早30分钟以上的数据。
         * 排除 callStatus 为 REGISTERED（已登记）的记录。
         * 注意：此方法用于对比测试，不使用分页，直接返回所有符合条件的记录（按ID升序排序）。
         *
         * @param id               当前记录ID
         * @param documentTitle    文档标题
         * @param callStatus       致电状态，为 null 时不设置致电状态条件
         * @param minNextCallTime  最小下次致电时间（当前时间减去30分钟），用于过滤数据
         * @param registeredStatus REGISTERED 状态枚举值，用于排除已登记记录
         * @return 符合条件的记录列表（按ID升序排序），如果不存在返回空列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (:callStatus IS NULL OR s.callStatus = :callStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findNextRecordByIdAndDocumentTitleAndCallStatusWithoutPaging(@Param("id") Long id,
                        @Param("documentTitle") String documentTitle,
                        @Param("callStatus") CallStatus callStatus,
                        @Param("minNextCallTime") java.time.LocalDateTime minNextCallTime,
                        @Param("registeredStatus") CallStatus registeredStatus);

        /**
         * 根据文档标题查询最大ID。
         *
         * @param documentTitle 文档标题
         * @return 最大ID，如果不存在返回 null
         */
        @Query("SELECT MAX(s.id) FROM SaslRecord s WHERE s.documentTitle = :documentTitle")
        Long findMaxIdByDocumentTitle(@Param("documentTitle") String documentTitle);

        /**
         * 根据文档标题删除所有记录。
         *
         * @param documentTitle 文档标题
         */
        void deleteByDocumentTitle(String documentTitle);

        /**
         * 查询 callStatus 为 null 且 id 最小的记录。
         *
         * @param pageable 分页参数，限制返回1条
         * @return 符合条件的记录列表（最多1条）
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.callStatus IS NULL " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findFirstByCallStatusIsNullOrderByIdAsc(Pageable pageable);

        /**
         * 根据文档标题查询 callStatus 不是 REGISTERED（已登记）状态的记录，按ID从小到大排序，限制返回前N条。
         *
         * @param documentTitle 文档标题（必填）
         * @param pageable      分页参数，用于限制返回数量
         * @return 符合条件的记录列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findByDocumentTitleAndCallStatusIsNotRegisteredOrderByIdAsc(
                        @Param("documentTitle") String documentTitle,
                        @Param("registeredStatus") CallStatus registeredStatus,
                        Pageable pageable);

        /**
         * 查询 callStatus 不是 REGISTERED（已登记）状态且 id 最小的记录。
         *
         * @param registeredStatus REGISTERED 状态枚举值
         * @param pageable         分页参数，限制返回1条
         * @return 符合条件的记录列表（最多1条）
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "ORDER BY s.id ASC")
        List<SaslRecord> findFirstByCallStatusIsNotRegisteredOrderByIdAsc(
                        @Param("registeredStatus") CallStatus registeredStatus,
                        Pageable pageable);

        /**
         * 统计当日致电数：CallStatus 不为空且更新日期为系统当前日期的数据总数。
         *
         * @param startOfDay     当天开始时间（00:00:00）
         * @param startOfNextDay 下一天开始时间（00:00:00）
         * @return 当日致电数
         */
        @Query("SELECT COUNT(s) FROM SaslRecord s " +
                        "WHERE s.callStatus IS NOT NULL " +
                        "AND s.updatedAt >= :startOfDay " +
                        "AND s.updatedAt < :startOfNextDay")
        Long countTodayCallRecords(@Param("startOfDay") java.time.LocalDateTime startOfDay,
                        @Param("startOfNextDay") java.time.LocalDateTime startOfNextDay);

        /**
         * 统计本月登记数：系统时间对应月份的 CallStatus 为 REGISTERED 状态的记录总数。
         *
         * @param startOfMonth     当月开始时间（第一天 00:00:00）
         * @param startOfNextMonth 下月开始时间（第一天 00:00:00）
         * @return 本月登记数
         */
        @Query("SELECT COUNT(s) FROM SaslRecord s " +
                        "WHERE s.callStatus = :callStatus " +
                        "AND s.updatedAt >= :startOfMonth " +
                        "AND s.updatedAt < :startOfNextMonth")
        Long countMonthlyRegisteredRecords(@Param("callStatus") CallStatus callStatus,
                        @Param("startOfMonth") java.time.LocalDateTime startOfMonth,
                        @Param("startOfNextMonth") java.time.LocalDateTime startOfNextMonth);

        /**
         * 统计待跟进客户数：CallStatus 为空的记录数。
         *
         * @return 待跟进客户数
         */
        @Query("SELECT COUNT(s) FROM SaslRecord s WHERE s.callStatus IS NULL")
        Long countPendingFollowUpRecords();

        /**
         * 根据文档标题查询所有记录，按ID从小到大排序。
         *
         * @param documentTitle 文档标题
         * @return 符合条件的记录列表
         */
        @Query("SELECT s FROM SaslRecord s WHERE s.documentTitle = :documentTitle ORDER BY s.id ASC")
        List<SaslRecord> findByDocumentTitleOrderByIdAsc(@Param("documentTitle") String documentTitle);

        /**
         * 查询用户绑定的文档标题下，下次致电时间在指定时间范围内的记录。
         * 用于查找临近当前时间的记录（前后3分钟内）。
         *
         * @param documentTitles 文档标题列表
         * @param startTime      开始时间（当前时间减去3分钟）
         * @param endTime        结束时间（当前时间加上3分钟）
         * @return 符合条件的记录列表
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.documentTitle IN :documentTitles " +
                        "AND s.nextCallTime IS NOT NULL " +
                        "AND s.nextCallTime >= :startTime " +
                        "AND s.nextCallTime <= :endTime " +
                        "ORDER BY s.nextCallTime ASC, s.id ASC")
        List<SaslRecord> findByDocumentTitlesAndNextCallTimeBetween(
                        @Param("documentTitles") List<String> documentTitles,
                        @Param("startTime") java.time.LocalDateTime startTime,
                        @Param("endTime") java.time.LocalDateTime endTime);

        /**
         * 检查指定文档标题下是否存在 callStatus 为 null 的记录。
         *
         * @param documentTitle 文档标题
         * @return 如果存在 callStatus 为 null 的记录返回 true，否则返回 false
         */
        @Query("SELECT COUNT(s) > 0 FROM SaslRecord s " +
                        "WHERE s.documentTitle = :documentTitle AND s.callStatus IS NULL")
        boolean existsByDocumentTitleAndCallStatusIsNull(@Param("documentTitle") String documentTitle);

        /**
         * 查询指定文档标题列表下，nextCallTime 有值且 callStatus 为考虑状态的数据，按 nextCallTime 升序排序，获取最早的一条。
         *
         * @param documentTitles 文档标题列表
         * @param callStatus     考虑状态
         * @param pageable       分页参数，限制返回1条
         * @return 符合条件的记录列表（最多1条）
         */
        @Query("SELECT s FROM SaslRecord s " +
                        "WHERE s.nextCallTime IS NOT NULL " +
                        "AND s.callStatus = :callStatus " +
                        "AND s.documentTitle IN :documentTitles " +
                        "ORDER BY s.nextCallTime ASC")
        List<SaslRecord> findFirstByNextCallTimeIsNotNullAndCallStatusAndDocumentTitlesOrderByNextCallTimeAsc(
                        @Param("documentTitles") List<String> documentTitles,
                        @Param("callStatus") CallStatus callStatus,
                        Pageable pageable);
}
