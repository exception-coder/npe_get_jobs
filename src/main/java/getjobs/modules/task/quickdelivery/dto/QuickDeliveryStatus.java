package getjobs.modules.task.quickdelivery.dto;

import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 快速投递任务状态
 * 用于查询任务的实时状态
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuickDeliveryStatus {

    /**
     * 平台枚举
     */
    private RecruitmentPlatformEnum platform;

    /**
     * 任务ID
     */
    private String taskId;

    /**
     * 任务状态（PENDING, RUNNING, SUCCESS, FAILED, SKIPPED）
     */
    private String status;

    /**
     * 当前进度（0-100）
     */
    private Integer progress;

    /**
     * 当前处理的职位索引
     */
    private Integer currentIndex;

    /**
     * 总职位数
     */
    private Integer totalJobs;

    /**
     * 已成功投递数量
     */
    private Integer deliveredCount;

    /**
     * 已失败数量
     */
    private Integer failedCount;

    /**
     * 任务开始时间
     */
    private LocalDateTime startTime;

    /**
     * 预计剩余时间（毫秒）
     */
    private Long estimatedRemainingMillis;

    /**
     * 当前处理的职位标题
     */
    private String currentJobTitle;

    /**
     * 状态消息
     */
    private String message;

    /**
     * 是否正在运行
     * 
     * @return true表示任务正在运行
     */
    public boolean isRunning() {
        return "RUNNING".equals(status);
    }

    /**
     * 是否已完成（成功或失败）
     * 
     * @return true表示任务已完成
     */
    public boolean isCompleted() {
        return "SUCCESS".equals(status) || "FAILED".equals(status);
    }

    /**
     * 获取格式化的进度信息
     * 
     * @return 格式化的进度字符串，如 "5/10 (50%)"
     */
    public String getFormattedProgress() {
        if (currentIndex == null || totalJobs == null) {
            return "未知";
        }
        return String.format("%d/%d (%d%%)", currentIndex, totalJobs, progress != null ? progress : 0);
    }
}
