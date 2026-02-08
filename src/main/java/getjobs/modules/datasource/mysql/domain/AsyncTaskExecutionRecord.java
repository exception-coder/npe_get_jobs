package getjobs.modules.datasource.mysql.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

/**
 * 异步任务执行记录实体
 * <p>
 * 用于记录异步任务的执行状况，包括任务状态、执行时间、异常信息等。
 * 该实体存储在 MySQL 数据库中，用于任务执行情况的统计和分析。
 * </p>
 *
 * <h2>任务状态说明</h2>
 * <ul>
 * <li>SUBMITTED：已提交，等待执行</li>
 * <li>RUNNING：正在执行</li>
 * <li>COMPLETED：执行完成</li>
 * <li>FAILED：执行失败</li>
 * <li>CANCELLED：已取消</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "async_task_execution_record", indexes = {
        @Index(name = "idx_task_id", columnList = "task_id"),
        @Index(name = "idx_task_name", columnList = "task_name"),
        @Index(name = "idx_status", columnList = "status"),
        @Index(name = "idx_submit_time", columnList = "submit_time"),
        @Index(name = "idx_created_at", columnList = "created_at")
})
public class AsyncTaskExecutionRecord {

    /**
     * 主键ID
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /**
     * 任务ID（唯一标识）
     */
    @Column(name = "task_id", nullable = false, unique = true, length = 64)
    private String taskId;

    /**
     * 任务名称
     */
    @Column(name = "task_name", nullable = false, length = 200)
    private String taskName;

    /**
     * 任务描述
     */
    @Column(name = "description", length = 1000)
    private String description;

    /**
     * 任务状态
     * <p>
     * 可选值：SUBMITTED、RUNNING、COMPLETED、FAILED、CANCELLED
     * </p>
     */
    @Column(name = "status", nullable = false, length = 20)
    private String status;

    /**
     * 提交时间
     */
    @Column(name = "submit_time", nullable = false)
    private Instant submitTime;

    /**
     * 开始执行时间
     */
    @Column(name = "start_time")
    private Instant startTime;

    /**
     * 完成时间
     */
    @Column(name = "finish_time")
    private Instant finishTime;

    /**
     * 执行耗时（毫秒）
     */
    @Column(name = "duration")
    private Long duration;

    /**
     * 异常信息
     * <p>
     * 当任务执行失败时，记录异常的类名和消息
     * </p>
     */
    @Column(name = "exception_message", length = 2000)
    private String exceptionMessage;

    /**
     * 异常堆栈
     * <p>
     * 当任务执行失败时，记录完整的异常堆栈信息（可选）
     * </p>
     */
    @Column(name = "exception_stack_trace", columnDefinition = "TEXT")
    private String exceptionStackTrace;

    /**
     * 执行线程名称
     */
    @Column(name = "thread_name", length = 100)
    private String threadName;

    /**
     * 执行线程ID
     */
    @Column(name = "thread_id")
    private Long threadId;

    /**
     * 备注信息
     */
    @Column(name = "remark", length = 1000)
    private String remark;

    /**
     * 创建时间
     */
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    /**
     * 更新时间
     */
    @Column(name = "updated_at")
    private Instant updatedAt;

    /**
     * 创建时自动设置创建时间
     */
    @PrePersist
    public void prePersist() {
        if (this.createdAt == null) {
            this.createdAt = Instant.now();
        }
    }

    /**
     * 更新时自动设置更新时间
     */
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = Instant.now();
    }

    /**
     * 任务状态枚举
     */
    public enum TaskStatus {
        /**
         * 已提交，等待执行
         */
        SUBMITTED("SUBMITTED"),

        /**
         * 正在执行
         */
        RUNNING("RUNNING"),

        /**
         * 执行完成
         */
        COMPLETED("COMPLETED"),

        /**
         * 执行失败
         */
        FAILED("FAILED"),

        /**
         * 已取消
         */
        CANCELLED("CANCELLED");

        private final String value;

        TaskStatus(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        /**
         * 根据字符串值获取枚举
         *
         * @param value 字符串值
         * @return 枚举值
         */
        public static TaskStatus fromValue(String value) {
            for (TaskStatus status : values()) {
                if (status.value.equals(value)) {
                    return status;
                }
            }
            throw new IllegalArgumentException("Unknown task status: " + value);
        }
    }

    /**
     * 判断任务是否已完成（包括成功、失败、取消）
     *
     * @return true 表示已完成
     */
    public boolean isFinished() {
        return TaskStatus.COMPLETED.getValue().equals(status)
                || TaskStatus.FAILED.getValue().equals(status)
                || TaskStatus.CANCELLED.getValue().equals(status);
    }

    /**
     * 判断任务是否正在运行
     *
     * @return true 表示正在运行
     */
    public boolean isRunning() {
        return TaskStatus.RUNNING.getValue().equals(status);
    }

    /**
     * 判断任务是否等待执行
     *
     * @return true 表示等待执行
     */
    public boolean isWaiting() {
        return TaskStatus.SUBMITTED.getValue().equals(status);
    }
}

