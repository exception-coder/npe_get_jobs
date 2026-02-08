package getjobs.common.infrastructure.asyncexecutor;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/**
 * 异步执行器监控组件
 * <p>
 * 负责定期采集线程池的监控数据，包括线程池状态、任务执行情况等。
 * 可以通过配置启用或禁用监控功能。
 * </p>
 *
 * <h2>监控指标</h2>
 * <ul>
 * <li>线程池大小（当前、核心、最大）</li>
 * <li>活跃线程数</li>
 * <li>任务统计（总数、已完成数、队列中等待数）</li>
 * <li>线程池和队列使用率</li>
 * <li>正在执行的任务列表</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Component
@RequiredArgsConstructor
@ConditionalOnProperty(prefix = "async.executor", name = "monitor-enabled", havingValue = "true", matchIfMissing = true)
public class AsyncExecutorMonitor {

    private final AsyncExecutorService asyncExecutorService;

    /**
     * 定时采集监控数据
     * <p>
     * 根据配置的间隔时间定期采集线程池监控数据并输出日志
     * </p>
     */
    @Scheduled(fixedRateString = "#{@asyncExecutorProperties.monitorIntervalSeconds * 1000}")
    public void collectMonitorData() {
        try {
            AsyncExecutorMonitorDTO monitorData = asyncExecutorService.getMonitorData();

            // 输出监控日志
            log.debug("═══════════════════════════════════════════════════════════");
            log.debug("        异步执行器监控数据");
            log.debug("═══════════════════════════════════════════════════════════");
            log.debug("线程池: {}", monitorData.getPoolName());
            log.debug("池大小: {}/{} (核心: {}, 最大: {})",
                    monitorData.getPoolSize(),
                    monitorData.getMaximumPoolSize(),
                    monitorData.getCorePoolSize(),
                    monitorData.getMaximumPoolSize());
            log.debug("活跃线程数: {}", monitorData.getActiveCount());
            log.debug("任务统计: 总数={}, 已完成={}, 队列中={}",
                    monitorData.getTaskCount(),
                    monitorData.getCompletedTaskCount(),
                    monitorData.getQueueSize());
            log.debug("使用率: 线程池={}%, 队列={}%",
                    monitorData.getPoolUsage(),
                    monitorData.getQueueUsage());
            log.debug("正在执行任务数: {}", monitorData.getRunningTaskCount());
            log.debug("等待执行任务数: {}", monitorData.getWaitingTaskCount());
            log.debug("═══════════════════════════════════════════════════════════");

            // 如果线程池使用率或队列使用率超过 80%，输出警告日志
            if (monitorData.getPoolUsage() != null
                    && monitorData.getPoolUsage().compareTo(BigDecimal.valueOf(80)) > 0) {
                log.warn("⚠️  线程池使用率过高: {}%", monitorData.getPoolUsage());
            }
            if (monitorData.getQueueUsage() != null
                    && monitorData.getQueueUsage().compareTo(BigDecimal.valueOf(80)) > 0) {
                log.warn("⚠️  队列使用率过高: {}%", monitorData.getQueueUsage());
            }
        } catch (Exception e) {
            log.error("采集异步执行器监控数据时发生异常", e);
        }
    }

    @PostConstruct
    public void init() {
        log.info("异步执行器监控组件已启动，采集间隔: {} 秒",
                asyncExecutorService.getProperties().getMonitorIntervalSeconds());
    }

    @PreDestroy
    public void destroy() {
        log.info("异步执行器监控组件已关闭");
    }
}

