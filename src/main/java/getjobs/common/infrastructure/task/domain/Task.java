package getjobs.common.infrastructure.task.domain;

import getjobs.common.infrastructure.task.enums.TaskStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 任务实体
 * DDD领域模型 - 聚合根
 * 
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Task {

    /**
     * 任务执行ID（唯一标识）
     */
    private String executionId;

    /**
     * 任务配置
     */
    private TaskConfig config;

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
     * 执行结果
     */
    private Object result;

    /**
     * 异常信息
     */
    private Throwable exception;

    /**
     * 任务开始执行
     */
    public void start() {
        this.status = TaskStatusEnum.RUNNING;
        this.startTime = LocalDateTime.now();
    }

    /**
     * 任务执行成功
     * 
     * @param result 执行结果
     */
    public void success(Object result) {
        this.status = TaskStatusEnum.SUCCESS;
        this.endTime = LocalDateTime.now();
        this.result = result;
    }

    /**
     * 任务执行失败
     * 
     * @param exception 异常信息
     */
    public void fail(Throwable exception) {
        this.status = TaskStatusEnum.FAILED;
        this.endTime = LocalDateTime.now();
        this.exception = exception;
    }

    /**
     * 取消任务
     */
    public void cancel() {
        this.status = TaskStatusEnum.CANCELLED;
        this.endTime = LocalDateTime.now();
    }

    /**
     * 判断任务是否正在运行
     */
    public boolean isRunning() {
        return TaskStatusEnum.RUNNING.equals(this.status);
    }

    /**
     * 判断任务是否已完成（成功或失败）
     */
    public boolean isCompleted() {
        return TaskStatusEnum.SUCCESS.equals(this.status)
                || TaskStatusEnum.FAILED.equals(this.status)
                || TaskStatusEnum.CANCELLED.equals(this.status);
    }

    /**
     * 转换为通知对象
     */
    public TaskNotification toNotification(String message) {
        TaskNotification notification = TaskNotification.builder()
                .executionId(this.executionId)
                .taskName(this.config.getTaskName())
                .taskType(this.config.getTaskType())
                .status(this.status)
                .startTime(this.startTime)
                .endTime(this.endTime)
                .message(message)
                .resultData(this.result)
                .build();

        if (this.exception != null) {
            notification.setErrorMessage(this.exception.getMessage());
        }

        notification.calculateDuration();
        return notification;
    }
}
