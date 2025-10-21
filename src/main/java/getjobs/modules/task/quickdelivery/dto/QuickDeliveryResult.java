package getjobs.modules.task.quickdelivery.dto;

import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 快速投递结果
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuickDeliveryResult {

    /**
     * 平台枚举
     */
    private RecruitmentPlatformEnum platform;

    /**
     * 任务ID
     */
    private String taskId;

    /**
     * 任务开始时间
     */
    private LocalDateTime startTime;

    /**
     * 任务结束时间
     */
    private LocalDateTime endTime;

    /**
     * 是否成功
     */
    private Boolean success;

    /**
     * 总共扫描的职位数
     */
    private Integer totalScanned;

    /**
     * 成功投递数量
     */
    private Integer successCount;

    /**
     * 失败投递数量
     */
    private Integer failedCount;

    /**
     * 跳过的职位数量
     */
    private Integer skippedCount;

    /**
     * 失败原因列表
     */
    private List<String> failureReasons;

    /**
     * 成功投递的职位ID列表
     */
    private List<Long> deliveredJobIds;

    /**
     * 失败的职位ID列表
     */
    private List<Long> failedJobIds;

    /**
     * 错误消息（如果任务整体失败）
     */
    private String errorMessage;

    /**
     * 执行耗时（毫秒）
     */
    private Long executionTimeMillis;

    /**
     * 备注信息
     */
    private String remark;

    /**
     * 计算成功率
     * 
     * @return 成功率百分比（0-100）
     */
    public Double getSuccessRate() {
        if (totalScanned == null || totalScanned == 0) {
            return 0.0;
        }
        if (successCount == null) {
            return 0.0;
        }
        return (successCount.doubleValue() / totalScanned.doubleValue()) * 100;
    }

    /**
     * 获取格式化的执行时间
     * 
     * @return 格式化的执行时间字符串
     */
    public String getFormattedExecutionTime() {
        if (executionTimeMillis == null) {
            return "未知";
        }
        long seconds = executionTimeMillis / 1000;
        long minutes = seconds / 60;
        seconds = seconds % 60;

        if (minutes > 0) {
            return String.format("%d分%d秒", minutes, seconds);
        } else {
            return String.format("%d秒", seconds);
        }
    }
}
