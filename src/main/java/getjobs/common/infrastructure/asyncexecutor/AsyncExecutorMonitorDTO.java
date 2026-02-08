package getjobs.common.infrastructure.asyncexecutor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.util.List;

/**
 * 异步执行器监控数据传输对象
 * <p>
 * 用于返回线程池的实时监控信息，包括线程池状态、任务执行情况等。
 * </p>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsyncExecutorMonitorDTO {

    /**
     * 线程池名称
     */
    private String poolName;

    /**
     * 当前池大小
     */
    private Integer poolSize;

    /**
     * 核心线程数
     */
    private Integer corePoolSize;

    /**
     * 最大线程数
     */
    private Integer maximumPoolSize;

    /**
     * 活跃线程数
     */
    private Integer activeCount;

    /**
     * 总任务数
     */
    private Long taskCount;

    /**
     * 已完成任务数
     */
    private Long completedTaskCount;

    /**
     * 队列中等待任务数
     */
    private Integer queueSize;

    /**
     * 队列容量
     */
    private Integer queueCapacity;

    /**
     * 队列剩余容量
     */
    private Integer queueRemainingCapacity;

    /**
     * 历史最大池大小
     */
    private Integer largestPoolSize;

    /**
     * 线程空闲时间（毫秒）
     */
    private Long keepAliveTimeMs;

    /**
     * 是否允许核心线程超时
     */
    private Boolean allowsCoreThreadTimeOut;

    /**
     * 线程池使用率（百分比）
     */
    private BigDecimal poolUsage;

    /**
     * 队列使用率（百分比）
     */
    private BigDecimal queueUsage;

    /**
     * 监控时间
     */
    private Instant monitorTime;

    /**
     * 正在执行的任务列表
     */
    private List<AsyncTaskInfo> runningTasks;

    /**
     * 正在执行的任务数量
     */
    private Integer runningTaskCount;

    /**
     * 等待执行的任务数量
     */
    private Integer waitingTaskCount;

    /**
     * 计算线程池使用率
     *
     * @return 使用率（百分比）
     */
    public BigDecimal calculatePoolUsage() {
        if (maximumPoolSize == null || maximumPoolSize == 0) {
            return BigDecimal.ZERO;
        }
        if (poolSize == null) {
            return BigDecimal.ZERO;
        }
        return BigDecimal.valueOf(poolSize)
                .divide(BigDecimal.valueOf(maximumPoolSize), 4, RoundingMode.HALF_UP)
                .multiply(BigDecimal.valueOf(100))
                .setScale(2, RoundingMode.HALF_UP);
    }

    /**
     * 计算队列使用率
     *
     * @return 使用率（百分比）
     */
    public BigDecimal calculateQueueUsage() {
        if (queueCapacity == null || queueCapacity == 0) {
            return BigDecimal.ZERO;
        }
        if (queueSize == null) {
            return BigDecimal.ZERO;
        }
        return BigDecimal.valueOf(queueSize)
                .divide(BigDecimal.valueOf(queueCapacity), 4, RoundingMode.HALF_UP)
                .multiply(BigDecimal.valueOf(100))
                .setScale(2, RoundingMode.HALF_UP);
    }
}

