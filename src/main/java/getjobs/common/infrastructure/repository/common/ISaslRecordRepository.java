package getjobs.common.infrastructure.repository.common;

import getjobs.modules.sasl.enums.CallStatus;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * SASL 记录仓储统一接口
 *
 * @param <T> SASL 记录实体类型
 * @author getjobs
 */
public interface ISaslRecordRepository<T> extends JpaRepository<T, Long> {

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
    List<T> findByConditions(String mrt, CallStatus callStatus, String documentTitle, Pageable pageable);

    /**
     * 根据文档标题查询致电状态为空的记录，按ID从小到大排序，限制返回前N条。
     *
     * @param documentTitle 文档标题（必填）
     * @param pageable      分页参数，用于限制返回数量
     * @return 符合条件的记录列表
     */
    List<T> findByDocumentTitleAndCallStatusIsNullOrderByIdAsc(String documentTitle, Pageable pageable);

    /**
     * 获取所有去重的文档标题列表，按文档标题排序。
     *
     * @return 去重后的文档标题列表
     */
    List<String> findAllDistinctDocumentTitles();

    /**
     * 根据 MRT 和文档标题查询已存在的记录。
     *
     * @param mrt           MRT（移动电话号码）
     * @param documentTitle 文档标题
     * @return 已存在的记录，如果不存在返回 null
     */
    T findByMrtAndDocumentTitle(String mrt, String documentTitle);

    /**
     * 批量查询已存在的记录（基于 mrt 和 documentTitle 组合）。
     * 返回所有匹配的记录列表。
     *
     * @param documentTitle 文档标题
     * @param mrts          MRT 列表
     * @return 已存在的记录列表
     */
    List<T> findByDocumentTitleAndMrtIn(String documentTitle, List<String> mrts);

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
    List<T> findNextRecordByIdAndDocumentTitle(Long id, String documentTitle,
            LocalDateTime minNextCallTime, CallStatus registeredStatus, Pageable pageable);

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
    List<T> findNextRecordByIdAndDocumentTitleAndCallStatus(Long id, String documentTitle, CallStatus callStatus,
            LocalDateTime minNextCallTime, CallStatus registeredStatus, Pageable pageable);

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
    List<T> findNextRecordByIdAndDocumentTitleWithoutPaging(Long id, String documentTitle,
            LocalDateTime minNextCallTime, CallStatus registeredStatus);

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
    List<T> findNextRecordByIdAndDocumentTitleAndCallStatusWithoutPaging(Long id, String documentTitle,
            CallStatus callStatus,
            LocalDateTime minNextCallTime, CallStatus registeredStatus);

    /**
     * 根据文档标题查询最大ID。
     *
     * @param documentTitle 文档标题
     * @return 最大ID，如果不存在返回 null
     */
    Long findMaxIdByDocumentTitle(String documentTitle);

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
    List<T> findFirstByCallStatusIsNullOrderByIdAsc(Pageable pageable);

    /**
     * 根据文档标题查询 callStatus 不是 REGISTERED（已登记）状态的记录，按ID从小到大排序，限制返回前N条。
     *
     * @param documentTitle    文档标题（必填）
     * @param registeredStatus REGISTERED 状态枚举值
     * @param pageable         分页参数，用于限制返回数量
     * @return 符合条件的记录列表
     */
    List<T> findByDocumentTitleAndCallStatusIsNotRegisteredOrderByIdAsc(String documentTitle,
            CallStatus registeredStatus, Pageable pageable);

    /**
     * 查询 callStatus 不是 REGISTERED（已登记）状态且 id 最小的记录。
     *
     * @param registeredStatus REGISTERED 状态枚举值
     * @param pageable         分页参数，限制返回1条
     * @return 符合条件的记录列表（最多1条）
     */
    List<T> findFirstByCallStatusIsNotRegisteredOrderByIdAsc(CallStatus registeredStatus, Pageable pageable);

    /**
     * 统计当日致电数：CallStatus 不为空且更新日期为系统当前日期的数据总数。
     *
     * @param startOfDay     当天开始时间（00:00:00）
     * @param startOfNextDay 下一天开始时间（00:00:00）
     * @return 当日致电数
     */
    Long countTodayCallRecords(LocalDateTime startOfDay, LocalDateTime startOfNextDay);

    /**
     * 统计本月登记数：系统时间对应月份的 CallStatus 为 REGISTERED 状态的记录总数。
     *
     * @param callStatus       致电状态
     * @param startOfMonth     当月开始时间（第一天 00:00:00）
     * @param startOfNextMonth 下月开始时间（第一天 00:00:00）
     * @return 本月登记数
     */
    Long countMonthlyRegisteredRecords(CallStatus callStatus, LocalDateTime startOfMonth,
            LocalDateTime startOfNextMonth);

    /**
     * 统计待跟进客户数：CallStatus 为空的记录数。
     *
     * @return 待跟进客户数
     */
    Long countPendingFollowUpRecords();

    /**
     * 根据文档标题查询所有记录，按ID从小到大排序。
     *
     * @param documentTitle 文档标题
     * @return 符合条件的记录列表
     */
    List<T> findByDocumentTitleOrderByIdAsc(String documentTitle);

    /**
     * 查询用户绑定的文档标题下，下次致电时间在指定时间范围内的记录。
     * 用于查找临近当前时间的记录（前后3分钟内）。
     *
     * @param documentTitles 文档标题列表
     * @param startTime      开始时间（当前时间减去3分钟）
     * @param endTime        结束时间（当前时间加上3分钟）
     * @return 符合条件的记录列表
     */
    List<T> findByDocumentTitlesAndNextCallTimeBetween(List<String> documentTitles, LocalDateTime startTime,
            LocalDateTime endTime);

    /**
     * 检查指定文档标题下是否存在 callStatus 为 null 的记录。
     *
     * @param documentTitle 文档标题
     * @return 如果存在 callStatus 为 null 的记录返回 true，否则返回 false
     */
    boolean existsByDocumentTitleAndCallStatusIsNull(String documentTitle);

    /**
     * 查询指定文档标题列表下，nextCallTime 有值且 callStatus 为考虑状态的数据，按 nextCallTime 升序排序，获取最早的一条。
     *
     * @param documentTitles 文档标题列表
     * @param callStatus     考虑状态
     * @param pageable       分页参数，限制返回1条
     * @return 符合条件的记录列表（最多1条）
     */
    List<T> findFirstByNextCallTimeIsNotNullAndCallStatusAndDocumentTitlesOrderByNextCallTimeAsc(
            List<String> documentTitles, CallStatus callStatus, Pageable pageable);
}
