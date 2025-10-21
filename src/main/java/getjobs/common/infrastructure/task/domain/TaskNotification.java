package getjobs.common.infrastructure.task.domain;

import getjobs.common.infrastructure.task.enums.TaskStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 任务通知值对象
 * 用于通知任务执行状态变化
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskNotification {

    /**
     * 任务执行ID
     */
    private String executionId;

    /**
     * 任务名称
     */
    private String taskName;

    /**
     * 任务类型
     */
    private String taskType;

    /**
     * 任务状态
     */
    private TaskStatusEnum status;

    /**
     * 开始时间
     */
    private LocalDateTime startTime;

    /**
     * 结束时间
     */
    private LocalDateTime endTime;

    /**
     * 执行耗时（毫秒）
     */
    private Long duration;

    /**
     * 执行结果消息
     */
    private String message;

    /**
     * 异常信息（如果失败）
     */
    private String errorMessage;

    /**
     * 执行结果数据
     */
    private Object resultData;

    /**
     * 计算执行耗时
     */
    public void calculateDuration() {
        if (startTime != null && endTime != null) {
            this.duration = java.time.Duration.between(startTime, endTime).toMillis();
        }
    }
}
