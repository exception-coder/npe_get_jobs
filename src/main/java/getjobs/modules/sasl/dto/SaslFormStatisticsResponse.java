package getjobs.modules.sasl.dto;

/**
 * SASL 表单统计数据响应 DTO。
 *
 * @param todayCallCount      当日致电数
 * @param monthlyRegisteredCount 本月登记数
 * @param pendingFollowUpCount   待跟进客户数
 */
public record SaslFormStatisticsResponse(
        Long todayCallCount,
        Long monthlyRegisteredCount,
        Long pendingFollowUpCount) {
}

