package getjobs.common.infrastructure.asyncexecutor;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 异步执行器配置属性
 * <p>
 * 通过 application.yml 中的 async.executor.* 进行配置：
 * </p>
 *
 * <pre>{@code
 * async:
 *   executor:
 *     enabled: true                    # 是否启用（默认 true）
 *     core-pool-size: 4                # 核心线程数（默认 4）
 *     max-pool-size: 8                 # 最大线程数（默认 8）
 *     queue-capacity: 100              # 队列容量（默认 100）
 *     keep-alive-seconds: 60           # 线程空闲时间（默认 60 秒）
 *     thread-name-prefix: "async-exec-" # 线程名前缀（默认 "async-exec-"）
 *     wait-for-tasks-on-shutdown: true # 关闭时等待任务完成（默认 true）
 *     await-termination-seconds: 60     # 等待终止时间（默认 60 秒）
 *     monitor-enabled: true            # 是否启用监控（默认 true）
 *     monitor-interval-seconds: 5      # 监控采集间隔（默认 5 秒）
 * }</pre>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Data
@Component
@ConfigurationProperties(prefix = "async.executor")
public class AsyncExecutorProperties {

    /**
     * 是否启用异步执行器
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean enabled = true;

    /**
     * 核心线程数
     * <p>
     * 默认值：4
     * 如果设置为 0 或负数，将根据 CPU 核心数自动计算
     * </p>
     */
    private int corePoolSize = 4;

    /**
     * 最大线程数
     * <p>
     * 默认值：8
     * 如果设置为 0 或负数，将根据核心线程数自动计算（核心线程数 * 2）
     * </p>
     */
    private int maxPoolSize = 8;

    /**
     * 队列容量
     * <p>
     * 默认值：100
     * </p>
     */
    private int queueCapacity = 100;

    /**
     * 线程空闲时间（秒）
     * <p>
     * 默认值：60
     * </p>
     */
    private int keepAliveSeconds = 60;

    /**
     * 线程名前缀
     * <p>
     * 默认值："async-exec-"
     * </p>
     */
    private String threadNamePrefix = "async-exec-";

    /**
     * 关闭时是否等待任务完成
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean waitForTasksOnShutdown = true;

    /**
     * 等待终止时间（秒）
     * <p>
     * 默认值：60
     * </p>
     */
    private int awaitTerminationSeconds = 60;

    /**
     * 是否启用监控
     * <p>
     * 默认值：true
     * </p>
     */
    private boolean monitorEnabled = true;

    /**
     * 监控采集间隔（秒）
     * <p>
     * 默认值：5
     * </p>
     */
    private int monitorIntervalSeconds = 5;
}
