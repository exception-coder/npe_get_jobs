package getjobs.common.infrastructure.asyncexecutor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.concurrent.Future;

/**
 * 异步任务信息
 * <p>
 * 用于记录和管理异步任务的执行情况，包括任务状态、执行时间等信息。
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsyncTaskInfo {

    /**
     * 任务ID（唯一标识）
     */
    private String taskId;

    /**
     * 任务名称
     */
    private String taskName;

    /**
     * 任务描述
     */
    private String description;

    /**
     * 任务状态
     */
    private TaskStatus status;

    /**
     * 提交时间
     */
    private Instant submitTime;

    /**
     * 开始执行时间
     */
    private Instant startTime;

    /**
     * 完成时间
     */
    private Instant finishTime;

    /**
     * 执行耗时（毫秒）
     */
    private Long duration;

    /**
     * 异常信息
     */
    private Throwable exception;

    /**
     * Future 对象（用于取消任务）
     */
    private Future<?> future;

    /**
     * 任务状态枚举
     */
    public enum TaskStatus {
        /**
         * 已提交，等待执行
         */
        SUBMITTED,

        /**
         * 正在执行
         */
        RUNNING,

        /**
         * 执行完成
         */
        COMPLETED,

        /**
         * 执行失败
         */
        FAILED,

        /**
         * 已取消
         */
        CANCELLED
    }

    /**
     * 标记任务开始执行
     */
    public void markStarted() {
        this.status = TaskStatus.RUNNING;
        this.startTime = Instant.now();
    }

    /**
     * 标记任务完成
     */
    public void markCompleted() {
        this.status = TaskStatus.COMPLETED;
        this.finishTime = Instant.now();
        if (this.startTime != null) {
            this.duration = java.time.Duration.between(this.startTime, this.finishTime).toMillis();
        }
    }

    /**
     * 标记任务失败
     *
     * @param exception 异常信息
     */
    public void markFailed(Throwable exception) {
        this.status = TaskStatus.FAILED;
        this.finishTime = Instant.now();
        this.exception = exception;
        if (this.startTime != null) {
            this.duration = java.time.Duration.between(this.startTime, this.finishTime).toMillis();
        }
    }

    /**
     * 标记任务已取消
     */
    public void markCancelled() {
        this.status = TaskStatus.CANCELLED;
        this.finishTime = Instant.now();
        if (this.startTime != null) {
            this.duration = java.time.Duration.between(this.startTime, this.finishTime).toMillis();
        }
    }

    /**
     * 判断任务是否已完成（包括成功、失败、取消）
     *
     * @return true 表示已完成
     */
    public boolean isFinished() {
        return status == TaskStatus.COMPLETED
                || status == TaskStatus.FAILED
                || status == TaskStatus.CANCELLED;
    }
}

