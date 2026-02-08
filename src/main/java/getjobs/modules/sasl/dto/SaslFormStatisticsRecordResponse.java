package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.domain.SaslFormStatisticsRecord;

import java.time.LocalDateTime;

/**
 * SASL 表单汇总统计记录响应 DTO。
 *
 * @param id                     记录ID
 * @param todayCallCount         当日致电数
 * @param monthlyRegisteredCount 本月登记数
 * @param pendingFollowUpCount   待跟进客户数
 * @param createdAt              创建时间
 * @param updatedAt              更新时间
 * @param trend                  趋势数据（同比昨日最后一条数据的增减百分比）
 */
public record SaslFormStatisticsRecordResponse(
        Long id,
        Long todayCallCount,
        Long monthlyRegisteredCount,
        Long pendingFollowUpCount,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        Trend trend) {

    /**
     * 趋势数据，表示同比昨日最后一条数据的增减百分比。
     *
     * @param todayCallCountTrend         当日致电数增减百分比（null 表示无法计算，如昨日值为0）
     * @param monthlyRegisteredCountTrend 本月登记数增减百分比（null 表示无法计算，如昨日值为0）
     * @param pendingFollowUpCountTrend   待跟进客户数增减百分比（null 表示无法计算，如昨日值为0）
     */
    public record Trend(
            Double todayCallCountTrend,
            Double monthlyRegisteredCountTrend,
            Double pendingFollowUpCountTrend) {
    }

    public static SaslFormStatisticsRecordResponse from(SaslFormStatisticsRecord record) {
        if (record == null) {
            return null;
        }

        return new SaslFormStatisticsRecordResponse(
                record.getId(),
                record.getTodayCallCount(),
                record.getMonthlyRegisteredCount(),
                record.getPendingFollowUpCount(),
                record.getCreatedAt(),
                record.getUpdatedAt(),
                null); // trend 需要在 Service 层计算
    }

    public static SaslFormStatisticsRecordResponse from(SaslFormStatisticsRecord record, Trend trend) {
        if (record == null) {
            return null;
        }

        return new SaslFormStatisticsRecordResponse(
                record.getId(),
                record.getTodayCallCount(),
                record.getMonthlyRegisteredCount(),
                record.getPendingFollowUpCount(),
                record.getCreatedAt(),
                record.getUpdatedAt(),
                trend);
    }
}
