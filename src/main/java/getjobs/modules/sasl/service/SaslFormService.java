package getjobs.modules.sasl.service;

import getjobs.common.infrastructure.auth.AuthContext;
import getjobs.common.infrastructure.repository.common.ISaslFormStatisticsRecordRepository;
import getjobs.common.infrastructure.repository.common.ISaslRecordRepository;
import getjobs.common.infrastructure.repository.common.IUserDocumentTitleRepository;
import getjobs.common.infrastructure.repository.common.IUserRepository;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.auth.domain.User;
import getjobs.modules.sasl.domain.SaslFormStatisticsRecord;
import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.dto.SaslFormStatisticsRecordResponse;
import getjobs.modules.sasl.dto.SaslFormStatisticsResponse;
import getjobs.modules.sasl.dto.SaslRecordResponse;
import getjobs.modules.sasl.enums.CallStatus;
import jakarta.annotation.PostConstruct;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * SASL 表单服务。
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class SaslFormService {

    private static final String MODULE_NAME = "sasl";
    private static final String AUTH_MODULE_NAME = "auth";

    private final RepositoryServiceHelper repositoryHelper;

    private ISaslRecordRepository<SaslRecord> recordRepository;
    private ISaslFormStatisticsRecordRepository<SaslFormStatisticsRecord> statisticsRecordRepository;
    private IUserRepository<User> userRepository;
    private IUserDocumentTitleRepository<getjobs.modules.sasl.domain.UserDocumentTitle> userDocumentTitleRepository;

    /**
     * 初始化Repository实例
     * <p>
     * 根据配置自动选择SQLite或MySQL的Repository实现。
     * Service层使用统一接口类型，不依赖具体的数据库实现。
     * </p>
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        this.recordRepository = repositoryHelper.getRepository(ISaslRecordRepository.class, MODULE_NAME);
        this.statisticsRecordRepository = repositoryHelper.getRepository(ISaslFormStatisticsRecordRepository.class,
                MODULE_NAME);
        this.userRepository = repositoryHelper.getRepository(IUserRepository.class, AUTH_MODULE_NAME);
        this.userDocumentTitleRepository = repositoryHelper.getRepository(IUserDocumentTitleRepository.class,
                MODULE_NAME);

        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("SaslFormService 使用 MySQL 数据源");
        } else {
            log.info("SaslFormService 使用 SQLite 数据源");
        }
    }

    /**
     * 查询统计数据。
     * 包括：当日致电数、本月登记数、待跟进客户数。
     * 同时将当日结果记录到汇总统计记录表，如果数据有变更则登记入库。
     *
     * @return 统计数据响应
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public SaslFormStatisticsResponse getStatistics() {
        // 计算当日致电数：CallStatus 不为空且更新日期为系统当前日期的数据总数
        LocalDate today = LocalDate.now();
        LocalDateTime startOfDay = today.atStartOfDay();
        LocalDateTime startOfNextDay = today.plusDays(1).atStartOfDay();
        Long todayCallCount = recordRepository.countTodayCallRecords(startOfDay, startOfNextDay);

        // 计算本月登记数：系统时间对应月份的 CallStatus 为 REGISTERED 状态的记录总数
        LocalDate firstDayOfMonth = today.withDayOfMonth(1);
        LocalDate firstDayOfNextMonth = firstDayOfMonth.plusMonths(1);
        LocalDateTime startOfMonth = firstDayOfMonth.atStartOfDay();
        LocalDateTime startOfNextMonth = firstDayOfNextMonth.atStartOfDay();
        Long monthlyRegisteredCount = recordRepository.countMonthlyRegisteredRecords(
                CallStatus.REGISTERED, startOfMonth, startOfNextMonth);

        // 计算待跟进客户数：CallStatus 为空的记录数
        Long pendingFollowUpCount = recordRepository.countPendingFollowUpRecords();

        // 记录到汇总统计记录表：查询最新一条记录，判断数据是否一致
        recordStatisticsIfChanged(todayCallCount, monthlyRegisteredCount, pendingFollowUpCount);

        return new SaslFormStatisticsResponse(
                todayCallCount,
                monthlyRegisteredCount,
                pendingFollowUpCount);
    }

    /**
     * 记录统计数据到汇总统计记录表。
     * 查询当前日期最新一条记录，如果数据与最新一条记录一致，则不登记；如果变更了或当前日期没有数据，则登记入库。
     *
     * @param todayCallCount         当日致电数
     * @param monthlyRegisteredCount 本月登记数
     * @param pendingFollowUpCount   待跟进客户数
     */
    private void recordStatisticsIfChanged(Long todayCallCount, Long monthlyRegisteredCount,
            Long pendingFollowUpCount) {
        // 查询当前日期最新一条记录
        LocalDate today = LocalDate.now();
        LocalDateTime startOfDay = today.atStartOfDay();
        LocalDateTime startOfNextDay = today.plusDays(1).atStartOfDay();
        Optional<SaslFormStatisticsRecord> latestRecordOpt = statisticsRecordRepository.findLatestToday(
                startOfDay, startOfNextDay);

        // 判断数据是否一致
        boolean needRecord = true;
        if (latestRecordOpt.isPresent()) {
            SaslFormStatisticsRecord latestRecord = latestRecordOpt.get();
            boolean isSame = Objects.equals(latestRecord.getTodayCallCount(), todayCallCount)
                    && Objects.equals(latestRecord.getMonthlyRegisteredCount(), monthlyRegisteredCount)
                    && Objects.equals(latestRecord.getPendingFollowUpCount(), pendingFollowUpCount);
            if (isSame) {
                needRecord = false;
                log.debug("统计数据与当前日期最新记录一致，跳过登记。当日致电数: {}, 本月登记数: {}, 待跟进客户数: {}",
                        todayCallCount, monthlyRegisteredCount, pendingFollowUpCount);
            }
        } else {
            log.debug("当前日期暂无统计记录，将进行登记。当日致电数: {}, 本月登记数: {}, 待跟进客户数: {}",
                    todayCallCount, monthlyRegisteredCount, pendingFollowUpCount);
        }

        // 如果数据有变更或当前日期没有数据，则登记入库
        if (needRecord) {
            SaslFormStatisticsRecord newRecord = new SaslFormStatisticsRecord();
            newRecord.setTodayCallCount(todayCallCount);
            newRecord.setMonthlyRegisteredCount(monthlyRegisteredCount);
            newRecord.setPendingFollowUpCount(pendingFollowUpCount);
            statisticsRecordRepository.save(newRecord);
            log.info("统计数据已变更或当前日期首次登记，已登记入库。当日致电数: {}, 本月登记数: {}, 待跟进客户数: {}",
                    todayCallCount, monthlyRegisteredCount, pendingFollowUpCount);
        }
    }

    /**
     * 查询当日最新一条汇总统计记录。
     * 同时计算同比昨日最后一条数据的增减百分比。
     *
     * @return 当日最新一条汇总统计记录，如果不存在返回空
     */
    public Optional<SaslFormStatisticsRecordResponse> getLatestTodayRecord() {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfDay = today.atStartOfDay();
        LocalDateTime startOfNextDay = today.plusDays(1).atStartOfDay();
        Optional<SaslFormStatisticsRecord> todayRecordOpt = statisticsRecordRepository.findLatestToday(
                startOfDay, startOfNextDay);

        if (todayRecordOpt.isEmpty()) {
            return Optional.empty();
        }

        SaslFormStatisticsRecord todayRecord = todayRecordOpt.get();

        // 查询昨日最后一条记录
        LocalDate yesterday = today.minusDays(1);
        LocalDateTime startOfYesterday = yesterday.atStartOfDay();
        LocalDateTime startOfToday = startOfDay;
        Optional<SaslFormStatisticsRecord> yesterdayRecordOpt = statisticsRecordRepository.findLatestToday(
                startOfYesterday, startOfToday);

        // 计算趋势
        SaslFormStatisticsRecordResponse.Trend trend = calculateTrend(
                todayRecord, yesterdayRecordOpt.orElse(null));

        return Optional.of(SaslFormStatisticsRecordResponse.from(todayRecord, trend));
    }

    /**
     * 计算趋势数据（同比昨日最后一条数据的增减百分比）。
     *
     * @param todayRecord     今日记录
     * @param yesterdayRecord 昨日记录（可能为 null）
     * @return 趋势数据
     */
    private SaslFormStatisticsRecordResponse.Trend calculateTrend(
            SaslFormStatisticsRecord todayRecord,
            SaslFormStatisticsRecord yesterdayRecord) {

        if (yesterdayRecord == null) {
            // 如果没有昨日数据，无法计算趋势
            return new SaslFormStatisticsRecordResponse.Trend(null, null, null);
        }

        // 计算当日致电数增减百分比
        Double todayCallCountTrend = calculatePercentageChange(
                todayRecord.getTodayCallCount(),
                yesterdayRecord.getTodayCallCount());

        // 计算本月登记数增减百分比
        Double monthlyRegisteredCountTrend = calculatePercentageChange(
                todayRecord.getMonthlyRegisteredCount(),
                yesterdayRecord.getMonthlyRegisteredCount());

        // 计算待跟进客户数增减百分比
        Double pendingFollowUpCountTrend = calculatePercentageChange(
                todayRecord.getPendingFollowUpCount(),
                yesterdayRecord.getPendingFollowUpCount());

        return new SaslFormStatisticsRecordResponse.Trend(
                todayCallCountTrend,
                monthlyRegisteredCountTrend,
                pendingFollowUpCountTrend);
    }

    /**
     * 计算增减百分比。
     * 公式：(当前值 - 基准值) / 基准值 * 100
     *
     * @param currentValue 当前值
     * @param baseValue    基准值（昨日值）
     * @return 增减百分比，如果基准值为0则返回null
     */
    private Double calculatePercentageChange(Long currentValue, Long baseValue) {
        if (baseValue == null || baseValue == 0) {
            return null; // 无法计算百分比
        }
        if (currentValue == null) {
            currentValue = 0L;
        }
        return ((currentValue - baseValue) * 100.0) / baseValue;
    }

    /**
     * 定时任务：每10秒查询一次汇总统计信息。
     * 自动计算统计数据并记录到汇总统计记录表（如果数据有变更）。
     */
    @Scheduled(fixedRate = 10000) // 每10秒执行一次
    public void scheduledGetStatistics() {
        try {
            log.debug("开始执行定时任务：查询汇总统计信息");
            SaslFormStatisticsResponse statistics = getStatistics();
            log.debug("定时任务执行成功 - 当日致电数: {}, 本月登记数: {}, 待跟进客户数: {}",
                    statistics.todayCallCount(), statistics.monthlyRegisteredCount(),
                    statistics.pendingFollowUpCount());
        } catch (Exception e) {
            log.error("定时任务执行失败：查询汇总统计信息时发生异常", e);
        }
    }

    /**
     * 查询当前用户绑定文档下，nextCallTime 有值且 callStatus 为考虑状态的数据，获取 nextCallTime 时间最早的一条。
     *
     * @return 符合条件的记录，如果不存在返回空
     * @throws IllegalArgumentException 如果当前用户未认证或用户不存在
     */
    public Optional<SaslRecordResponse> getFirstRecordWithNextCallTimeNearNow() {
        String username = AuthContext.getUsername();
        if (!StringUtils.hasText(username)) {
            throw new IllegalArgumentException("当前用户未认证");
        }
        return getFirstRecordWithNextCallTimeNearNow(username);
    }

    /**
     * 查询指定用户绑定文档下，nextCallTime 有值且 callStatus 为考虑状态的数据，获取 nextCallTime 时间最早的一条。
     *
     * @param username 用户名
     * @return 符合条件的记录，如果不存在返回空
     * @throws IllegalArgumentException 如果用户不存在或用户没有绑定文档
     */
    public Optional<SaslRecordResponse> getFirstRecordWithNextCallTimeNearNow(String username) {
        if (!StringUtils.hasText(username)) {
            throw new IllegalArgumentException("用户名不能为空");
        }

        // 根据用户名查询用户ID
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("用户不存在，用户名: " + username));

        // 如果是 admin 用户，不需要判断文档标题，查询所有文档标题
        List<String> documentTitles;
        if ("admin".equals(username)) {
            documentTitles = recordRepository.findAllDistinctDocumentTitles();
            log.debug("admin 用户查询所有文档标题，文档标题数量: {}", documentTitles.size());
            // 如果所有文档标题为空（数据库中没有任何记录），返回空
            if (documentTitles.isEmpty()) {
                log.debug("admin 用户查询时，数据库中暂无任何文档标题");
                return Optional.empty();
            }
        } else {
            // 根据用户ID查询文档标题列表
            documentTitles = userDocumentTitleRepository.findDocumentTitlesByUserId(user.getId());

            // 如果用户没有绑定任何文档标题，返回空
            if (documentTitles.isEmpty()) {
                log.debug("用户 {} 没有绑定任何文档标题", username);
                return Optional.empty();
            }
        }

        // 查询用户绑定的文档中，nextCallTime 有值且 callStatus 为考虑状态的数据，按 nextCallTime 升序排序取第一条
        List<SaslRecord> records = recordRepository
                .findFirstByNextCallTimeIsNotNullAndCallStatusAndDocumentTitlesOrderByNextCallTimeAsc(
                        documentTitles, CallStatus.CONSIDERING, PageRequest.of(0, 1));

        if (records.isEmpty()) {
            return Optional.empty();
        }

        SaslRecord record = records.get(0);

        // 判断 nextCallTime 是否小于等于当前时间，只有时间已到的记录才需要推送
        LocalDateTime now = LocalDateTime.now();
        if (record.getNextCallTime() != null && record.getNextCallTime().isAfter(now)) {
            log.info("用户 {} 查询到的记录 nextCallTime ({}) 大于当前时间 ({})，未到推送时间，不推送。记录ID: {}",
                    username, record.getNextCallTime(), now, record.getId());
            return Optional.empty();
        }

        return Optional.of(SaslRecordResponse.from(record));
    }

}
