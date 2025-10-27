package getjobs.config.async;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.ThreadPoolExecutor;

/**
 * 异步任务配置类
 * <p>
 * 配置异步任务执行器，用于执行耗时操作（如 AI 模型调用）。
 * </p>
 */
@Slf4j
@Configuration
@EnableAsync
public class AsyncConfig {

    @Value("${async.core-pool-size:4}")
    private int corePoolSize;

    @Value("${async.max-pool-size:8}")
    private int maxPoolSize;

    @Value("${async.queue-capacity:100}")
    private int queueCapacity;

    @Value("${async.keep-alive-seconds:60}")
    private int keepAliveSeconds;

    /**
     * 配置异步任务执行器
     *
     * @return AsyncTaskExecutor
     */
    @Bean("asyncTaskExecutor")
    public AsyncTaskExecutor asyncTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        // 获取CPU核心数
        int cpuCores = Runtime.getRuntime().availableProcessors();

        // 动态计算线程数（如果未配置）
        int finalCorePoolSize = corePoolSize > 0 ? corePoolSize : Math.max(cpuCores, 4);
        int finalMaxPoolSize = maxPoolSize > 0 ? maxPoolSize : finalCorePoolSize * 2;

        // 核心线程数
        executor.setCorePoolSize(finalCorePoolSize);

        // 最大线程数
        executor.setMaxPoolSize(finalMaxPoolSize);

        // 队列容量
        executor.setQueueCapacity(queueCapacity);

        // 线程空闲时间
        executor.setKeepAliveSeconds(keepAliveSeconds);

        // 线程名前缀
        executor.setThreadNamePrefix("async-task-");

        // 拒绝策略：由调用线程处理
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());

        // 等待所有任务结束后再关闭线程池
        executor.setWaitForTasksToCompleteOnShutdown(true);

        // 等待时间
        executor.setAwaitTerminationSeconds(60);

        executor.initialize();

        log.info("异步线程池配置完成 - CPU核心数: {}, 核心线程数: {}, 最大线程数: {}, 队列容量: {}",
                cpuCores, finalCorePoolSize, finalMaxPoolSize, queueCapacity);

        return executor;
    }

    /**
     * 配置 AI 分析专用线程池
     * <p>
     * 由于 AI 调用可能比较耗时，使用较小的线程池避免资源占用过多
     * </p>
     *
     * @return AsyncTaskExecutor
     */
    @Bean("aiAnalysisExecutor")
    public AsyncTaskExecutor aiAnalysisExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        // AI 分析任务使用较小的线程池
        executor.setCorePoolSize(2);
        executor.setMaxPoolSize(4);
        executor.setQueueCapacity(50);
        executor.setKeepAliveSeconds(120);

        executor.setThreadNamePrefix("ai-analysis-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(60);

        executor.initialize();

        log.info("AI分析线程池配置完成 - 核心线程数: 2, 最大线程数: 4");

        return executor;
    }
}
