package getjobs.common.infrastructure.asyncexecutor;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.ThreadPoolExecutor;

/**
 * 异步执行器配置类
 * <p>
 * 负责创建全局的异步任务执行线程池，用于统一管理所有异步任务。
 * 该线程池提供完整的监控功能，可以实时查看任务执行状况和线程使用状况。
 * </p>
 *
 * <h2>功能特性</h2>
 * <ul>
 * <li>全局统一的异步任务执行线程池</li>
 * <li>自动根据 CPU 核心数动态调整线程数</li>
 * <li>完整的线程池监控功能</li>
 * <li>优雅关闭，等待任务完成</li>
 * <li>可配置的拒绝策略</li>
 * </ul>
 *
 * <h2>配置示例</h2>
 * 
 * <pre>{@code
 * async:
 *   executor:
 *     enabled: true
 *     core-pool-size: 4
 *     max-pool-size: 8
 *     queue-capacity: 100
 *     keep-alive-seconds: 60
 *     thread-name-prefix: "async-exec-"
 *     monitor-enabled: true
 *     monitor-interval-seconds: 5
 * }</pre>
 *
 * <h2>使用方式</h2>
 * <pre>{@code
 * @Autowired
 * @Qualifier("globalAsyncExecutor")
 * private AsyncTaskExecutor asyncExecutor;
 *
 * // 执行异步任务
 * asyncExecutor.execute(() -> {
 *     // 任务逻辑
 * });
 * }</pre>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Configuration
@RequiredArgsConstructor
@EnableAsync
@ConditionalOnProperty(prefix = "async.executor", name = "enabled", havingValue = "true", matchIfMissing = true)
public class AsyncExecutorConfig {

    private final AsyncExecutorProperties properties;

    /**
     * 创建全局异步任务执行器
     * <p>
     * Bean 名称为 "globalAsyncExecutor"，用于区分其他线程池
     * </p>
     *
     * @return AsyncTaskExecutor
     */
    @Bean("globalAsyncExecutor")
    public AsyncTaskExecutor globalAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        // 获取 CPU 核心数
        int cpuCores = Runtime.getRuntime().availableProcessors();

        // 动态计算线程数（如果未配置或配置为 0）
        int finalCorePoolSize = calculateCorePoolSize(cpuCores);
        int finalMaxPoolSize = calculateMaxPoolSize(finalCorePoolSize);

        // 核心线程数
        executor.setCorePoolSize(finalCorePoolSize);

        // 最大线程数
        executor.setMaxPoolSize(finalMaxPoolSize);

        // 队列容量
        executor.setQueueCapacity(properties.getQueueCapacity());

        // 线程空闲时间
        executor.setKeepAliveSeconds(properties.getKeepAliveSeconds());

        // 线程名前缀
        executor.setThreadNamePrefix(properties.getThreadNamePrefix());

        // 拒绝策略：由调用线程处理（推荐用于统一管理的任务）
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());

        // 等待所有任务结束后再关闭线程池
        executor.setWaitForTasksToCompleteOnShutdown(properties.isWaitForTasksOnShutdown());

        // 等待时间
        executor.setAwaitTerminationSeconds(properties.getAwaitTerminationSeconds());

        // 初始化线程池
        executor.initialize();

        // 预热线程池，避免任务提交时的延迟
        executor.getThreadPoolExecutor().prestartAllCoreThreads();

        log.info("═══════════════════════════════════════════════════════════");
        log.info("        全局异步执行器配置完成");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("CPU 核心数: {}", cpuCores);
        log.info("核心线程数: {}", finalCorePoolSize);
        log.info("最大线程数: {}", finalMaxPoolSize);
        log.info("队列容量: {}", properties.getQueueCapacity());
        log.info("线程空闲时间: {} 秒", properties.getKeepAliveSeconds());
        log.info("线程名前缀: {}", properties.getThreadNamePrefix());
        log.info("监控功能: {}", properties.isMonitorEnabled() ? "已启用" : "已禁用");
        if (properties.isMonitorEnabled()) {
            log.info("监控采集间隔: {} 秒", properties.getMonitorIntervalSeconds());
        }
        log.info("═══════════════════════════════════════════════════════════");

        return executor;
    }

    /**
     * 计算核心线程数
     *
     * @param cpuCores CPU 核心数
     * @return 核心线程数
     */
    private int calculateCorePoolSize(int cpuCores) {
        if (properties.getCorePoolSize() > 0) {
            return properties.getCorePoolSize();
        }
        // 对于 I/O 密集型任务，建议线程数为 CPU 核心数的 2 倍
        return Math.max(cpuCores * 2, 4);
    }

    /**
     * 计算最大线程数
     *
     * @param corePoolSize 核心线程数
     * @return 最大线程数
     */
    private int calculateMaxPoolSize(int corePoolSize) {
        if (properties.getMaxPoolSize() > 0) {
            return properties.getMaxPoolSize();
        }
        // 最大线程数为核心线程数的 2 倍
        return corePoolSize * 2;
    }

    @PostConstruct
    public void init() {
        log.info("异步执行器配置初始化完成");
    }
}

