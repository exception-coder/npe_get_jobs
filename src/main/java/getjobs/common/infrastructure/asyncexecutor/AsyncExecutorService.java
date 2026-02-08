package getjobs.common.infrastructure.asyncexecutor;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.function.Supplier;

/**
 * 异步执行器服务
 * <p>
 * 提供统一的异步任务执行接口，并管理所有任务的执行状况。
 * 支持任务监控、状态跟踪、异常处理等功能。
 * </p>
 *
 * <h2>功能特性</h2>
 * <ul>
 * <li>统一的异步任务执行接口</li>
 * <li>任务状态跟踪和管理</li>
 * <li>实时监控线程池状态</li>
 * <li>任务执行情况统计</li>
 * <li>异常处理和日志记录</li>
 * </ul>
 *
 * <h2>使用示例</h2>
 * 
 * <pre>{@code
 * @Autowired
 * private AsyncExecutorService asyncExecutorService;
 *
 * // 执行简单任务
 * asyncExecutorService.execute("任务名称", () -> {
 *     // 任务逻辑
 * });
 *
 * // 执行带返回值的任务
 * Future<String> future = asyncExecutorService.submit("任务名称", () -> {
 *     return "结果";
 * });
 *
 * // 获取监控数据
 * AsyncExecutorMonitorDTO monitorData = asyncExecutorService.getMonitorData();
 * }</pre>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
@Slf4j
@Service
@RequiredArgsConstructor
@ConditionalOnProperty(prefix = "async.executor", name = "enabled", havingValue = "true", matchIfMissing = true)
public class AsyncExecutorService {

    @Qualifier("globalAsyncExecutor")
    private final AsyncTaskExecutor asyncTaskExecutor;

    private final AsyncExecutorProperties properties;

    /**
     * 任务信息存储（key: taskId）
     */
    private final Map<String, AsyncTaskInfo> taskInfoMap = new ConcurrentHashMap<>();

    /**
     * 执行异步任务（无返回值）
     *
     * @param taskName 任务名称
     * @param task     任务逻辑
     * @return 任务ID
     */
    public String execute(String taskName, Runnable task) {
        return execute(taskName, null, task);
    }

    /**
     * 执行异步任务（无返回值）
     *
     * @param taskName    任务名称
     * @param description 任务描述
     * @param task        任务逻辑
     * @return 任务ID
     */
    public String execute(String taskName, String description, Runnable task) {
        String taskId = UUID.randomUUID().toString();
        AsyncTaskInfo taskInfo = AsyncTaskInfo.builder()
                .taskId(taskId)
                .taskName(taskName)
                .description(description)
                .status(AsyncTaskInfo.TaskStatus.SUBMITTED)
                .submitTime(Instant.now())
                .build();

        taskInfoMap.put(taskId, taskInfo);

        Future<?> future = asyncTaskExecutor.submit(() -> {
            try {
                taskInfo.markStarted();
                task.run();
                taskInfo.markCompleted();
                log.debug("任务执行完成: {} [{}]", taskName, taskId);
            } catch (Exception e) {
                taskInfo.markFailed(e);
                log.error("任务执行失败: {} [{}]", taskName, taskId, e);
            } finally {
                // 任务完成后，可以选择保留一段时间或立即清理
                // 这里保留任务信息，由监控组件定期清理
            }
        });

        taskInfo.setFuture(future);

        log.debug("提交异步任务: {} [{}]", taskName, taskId);
        return taskId;
    }

    /**
     * 提交异步任务（有返回值）
     *
     * @param taskName 任务名称
     * @param task     任务逻辑
     * @param <T>      返回值类型
     * @return Future 对象
     */
    public <T> Future<T> submit(String taskName, Supplier<T> task) {
        return submit(taskName, null, task);
    }

    /**
     * 提交异步任务（有返回值）
     *
     * @param taskName    任务名称
     * @param description 任务描述
     * @param task        任务逻辑
     * @param <T>         返回值类型
     * @return Future 对象
     */
    public <T> Future<T> submit(String taskName, String description, Supplier<T> task) {
        String taskId = UUID.randomUUID().toString();
        AsyncTaskInfo taskInfo = AsyncTaskInfo.builder()
                .taskId(taskId)
                .taskName(taskName)
                .description(description)
                .status(AsyncTaskInfo.TaskStatus.SUBMITTED)
                .submitTime(Instant.now())
                .build();

        taskInfoMap.put(taskId, taskInfo);

        Future<T> future = asyncTaskExecutor.submit(() -> {
            try {
                taskInfo.markStarted();
                T result = task.get();
                taskInfo.markCompleted();
                log.debug("任务执行完成: {} [{}]", taskName, taskId);
                return result;
            } catch (Exception e) {
                taskInfo.markFailed(e);
                log.error("任务执行失败: {} [{}]", taskName, taskId, e);
                throw e;
            }
        });

        taskInfo.setFuture(future);

        log.debug("提交异步任务: {} [{}]", taskName, taskId);
        return future;
    }

    /**
     * 取消任务
     *
     * @param taskId 任务ID
     * @return true 表示成功取消，false 表示任务未找到或已完成
     */
    public boolean cancelTask(String taskId) {
        AsyncTaskInfo taskInfo = taskInfoMap.get(taskId);
        if (taskInfo == null) {
            log.warn("任务未找到: {}", taskId);
            return false;
        }

        if (taskInfo.isFinished()) {
            log.warn("任务已完成，无法取消: {} [{}]", taskInfo.getTaskName(), taskId);
            return false;
        }

        if (taskInfo.getFuture() != null && taskInfo.getFuture().cancel(true)) {
            taskInfo.markCancelled();
            log.info("任务已取消: {} [{}]", taskInfo.getTaskName(), taskId);
            return true;
        }

        return false;
    }

    /**
     * 获取任务信息
     *
     * @param taskId 任务ID
     * @return 任务信息，如果不存在则返回 null
     */
    public AsyncTaskInfo getTaskInfo(String taskId) {
        return taskInfoMap.get(taskId);
    }

    /**
     * 获取所有正在执行的任务
     *
     * @return 正在执行的任务列表
     */
    public List<AsyncTaskInfo> getRunningTasks() {
        List<AsyncTaskInfo> runningTasks = new ArrayList<>();
        taskInfoMap.values().forEach(taskInfo -> {
            if (taskInfo.getStatus() == AsyncTaskInfo.TaskStatus.RUNNING) {
                runningTasks.add(taskInfo);
            }
        });
        return runningTasks;
    }

    /**
     * 获取所有等待执行的任务
     *
     * @return 等待执行的任务列表
     */
    public List<AsyncTaskInfo> getWaitingTasks() {
        List<AsyncTaskInfo> waitingTasks = new ArrayList<>();
        taskInfoMap.values().forEach(taskInfo -> {
            if (taskInfo.getStatus() == AsyncTaskInfo.TaskStatus.SUBMITTED) {
                waitingTasks.add(taskInfo);
            }
        });
        return waitingTasks;
    }

    /**
     * 获取线程池监控数据
     *
     * @return 监控数据
     */
    public AsyncExecutorMonitorDTO getMonitorData() {
        ThreadPoolExecutor threadPoolExecutor = null;

        if (asyncTaskExecutor instanceof ThreadPoolTaskExecutor) {
            ThreadPoolTaskExecutor executor = (ThreadPoolTaskExecutor) asyncTaskExecutor;
            threadPoolExecutor = executor.getThreadPoolExecutor();
        }

        if (threadPoolExecutor == null) {
            log.warn("无法获取线程池执行器，可能未初始化或类型不匹配");
            return AsyncExecutorMonitorDTO.builder()
                    .poolName(properties.getThreadNamePrefix() + "pool")
                    .monitorTime(Instant.now())
                    .build();
        }

        List<AsyncTaskInfo> runningTasks = getRunningTasks();
        List<AsyncTaskInfo> waitingTasks = getWaitingTasks();

        AsyncExecutorMonitorDTO dto = AsyncExecutorMonitorDTO.builder()
                .poolName(properties.getThreadNamePrefix() + "pool")
                .poolSize(threadPoolExecutor.getPoolSize())
                .corePoolSize(threadPoolExecutor.getCorePoolSize())
                .maximumPoolSize(threadPoolExecutor.getMaximumPoolSize())
                .activeCount(threadPoolExecutor.getActiveCount())
                .taskCount(threadPoolExecutor.getTaskCount())
                .completedTaskCount(threadPoolExecutor.getCompletedTaskCount())
                .queueSize(threadPoolExecutor.getQueue().size())
                .queueCapacity(properties.getQueueCapacity())
                .queueRemainingCapacity(threadPoolExecutor.getQueue().remainingCapacity())
                .largestPoolSize(threadPoolExecutor.getLargestPoolSize())
                .keepAliveTimeMs(threadPoolExecutor.getKeepAliveTime(java.util.concurrent.TimeUnit.MILLISECONDS))
                .allowsCoreThreadTimeOut(threadPoolExecutor.allowsCoreThreadTimeOut())
                .monitorTime(Instant.now())
                .runningTasks(runningTasks)
                .runningTaskCount(runningTasks.size())
                .waitingTaskCount(waitingTasks.size())
                .build();

        // 计算使用率
        dto.setPoolUsage(dto.calculatePoolUsage());
        dto.setQueueUsage(dto.calculateQueueUsage());

        return dto;
    }

    /**
     * 清理已完成的任务信息（保留最近 N 条）
     *
     * @param keepCount 保留的任务数量
     */
    public void cleanupFinishedTasks(int keepCount) {
        List<AsyncTaskInfo> finishedTasks = new ArrayList<>();
        taskInfoMap.values().forEach(taskInfo -> {
            if (taskInfo.isFinished()) {
                finishedTasks.add(taskInfo);
            }
        });

        // 按完成时间排序，保留最近完成的
        finishedTasks.sort((a, b) -> {
            if (a.getFinishTime() == null || b.getFinishTime() == null) {
                return 0;
            }
            return b.getFinishTime().compareTo(a.getFinishTime());
        });

        // 删除超出保留数量的任务
        if (finishedTasks.size() > keepCount) {
            for (int i = keepCount; i < finishedTasks.size(); i++) {
                taskInfoMap.remove(finishedTasks.get(i).getTaskId());
            }
            log.debug("清理已完成任务: 保留 {} 条，删除 {} 条", keepCount, finishedTasks.size() - keepCount);
        }
    }

    /**
     * 获取配置属性
     *
     * @return 配置属性
     */
    public AsyncExecutorProperties getProperties() {
        return properties;
    }

    @PostConstruct
    public void init() {
        log.info("═══════════════════════════════════════════════════════════");
        log.info("        异步执行器服务已启动");
        log.info("═══════════════════════════════════════════════════════════");
        log.info("线程池名称: {}", properties.getThreadNamePrefix() + "pool");
        log.info("核心线程数: {}", properties.getCorePoolSize());
        log.info("最大线程数: {}", properties.getMaxPoolSize());
        log.info("队列容量: {}", properties.getQueueCapacity());
        log.info("═══════════════════════════════════════════════════════════");
    }

    @PreDestroy
    public void destroy() {
        // 清理所有任务信息
        taskInfoMap.clear();
        log.info("异步执行器服务已关闭，已清理所有任务信息");
    }
}
