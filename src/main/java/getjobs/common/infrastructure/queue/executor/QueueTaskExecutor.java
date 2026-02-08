package getjobs.common.infrastructure.queue.executor;

import getjobs.common.infrastructure.queue.contract.QueueTask;
import getjobs.common.infrastructure.queue.domain.QueueTaskConfig;
import getjobs.common.infrastructure.queue.enums.QueueTaskStatusEnum;
import lombok.extern.slf4j.Slf4j;

import java.util.UUID;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;

/**
 * 队列任务执行器
 * 负责从队列中取出任务并串行执行，支持重试机制和错误处理
 * 
 * 注意：此类不使用@Component注解，而是通过QueueInfrastructureConfig配置类创建Bean
 * 
 * @author getjobs
 */
@Slf4j
public class QueueTaskExecutor {

    /**
     * 任务队列（FIFO）
     * 使用 LinkedBlockingQueue 保证线程安全
     */
    private final BlockingQueue<getjobs.common.infrastructure.queue.domain.QueueTask> taskQueue;

    /**
     * 执行线程
     */
    private Thread executorThread;

    /**
     * 是否正在运行
     */
    private final AtomicBoolean running = new AtomicBoolean(false);

    /**
     * 当前正在执行的任务
     */
    private volatile getjobs.common.infrastructure.queue.domain.QueueTask currentTask;

    /**
     * 统计信息
     */
    private final AtomicLong totalSubmitted = new AtomicLong(0);
    private final AtomicLong totalCompleted = new AtomicLong(0);
    private final AtomicLong totalSucceeded = new AtomicLong(0);
    private final AtomicLong totalFailed = new AtomicLong(0);

    /**
     * 构造函数
     * 
     * @param queueCapacity 队列容量，0 或负数表示无界队列
     */
    public QueueTaskExecutor(int queueCapacity) {
        if (queueCapacity > 0) {
            this.taskQueue = new LinkedBlockingQueue<>(queueCapacity);
        } else {
            this.taskQueue = new LinkedBlockingQueue<>();
        }
    }

    /**
     * 启动执行器
     */
    public void start() {
        if (running.compareAndSet(false, true)) {
            executorThread = new Thread(this::run, "queue-task-executor");
            executorThread.setDaemon(true);
            executorThread.start();
            log.info("队列任务执行器已启动");
        } else {
            log.warn("队列任务执行器已经在运行中");
        }
    }

    /**
     * 停止执行器
     * 会等待当前任务执行完成，然后停止
     */
    public void stop() {
        if (running.compareAndSet(true, false)) {
            log.info("正在停止队列任务执行器...");

            // 中断执行线程
            if (executorThread != null) {
                executorThread.interrupt();
            }

            // 等待执行线程结束
            if (executorThread != null) {
                try {
                    executorThread.join(5000); // 最多等待5秒
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    log.warn("等待执行线程结束时被中断");
                }
            }

            log.info("队列任务执行器已停止");
        }
    }

    /**
     * 提交任务到队列
     * 
     * @param queueTask 队列任务
     * @return 队列任务实体
     */
    public getjobs.common.infrastructure.queue.domain.QueueTask submit(QueueTask queueTask) {
        QueueTaskConfig config = queueTask.getConfig();
        config.validate();

        // 创建任务实体
        getjobs.common.infrastructure.queue.domain.QueueTask task = getjobs.common.infrastructure.queue.domain.QueueTask
                .builder()
                .taskId(generateTaskId())
                .config(config)
                .status(QueueTaskStatusEnum.PENDING)
                .retryCount(new java.util.concurrent.atomic.AtomicInteger(0))
                .build();

        // 保存队列任务实例的引用
        task.setQueueTaskInstance(queueTask);

        // 尝试将任务加入队列
        try {
            if (!taskQueue.offer(task)) {
                log.error("任务队列已满，无法提交任务: {}", config.getTaskName());
                task.fail(new IllegalStateException("任务队列已满"));
                return task;
            }

            totalSubmitted.incrementAndGet();
            log.debug("任务已提交到队列: {} [{}] (队列大小: {})",
                    config.getTaskName(), task.getTaskId(), taskQueue.size());

            // 确保执行器已启动
            if (!running.get()) {
                start();
            }

            return task;
        } catch (Exception e) {
            log.error("提交任务到队列失败: {}", config.getTaskName(), e);
            task.fail(e);
            return task;
        }
    }

    /**
     * 提交任务并等待完成
     * 
     * @param queueTask 队列任务
     * @param timeoutMs 超时时间（毫秒）
     * @return 队列任务实体
     * @throws InterruptedException 如果等待被中断
     * @throws TimeoutException     如果等待超时
     */
    public getjobs.common.infrastructure.queue.domain.QueueTask submitAndWait(QueueTask queueTask, long timeoutMs)
            throws InterruptedException, TimeoutException {
        getjobs.common.infrastructure.queue.domain.QueueTask task = submit(queueTask);

        // 创建同步等待的 latch
        task.createCompletionLatch();

        // 等待任务完成
        boolean completed = task.waitForCompletion(timeoutMs);
        if (!completed) {
            throw new TimeoutException("任务执行超时: " + task.getConfig().getTaskName());
        }

        return task;
    }

    /**
     * 执行器主循环
     */
    private void run() {
        log.info("队列任务执行器线程已启动");

        while (running.get() || !taskQueue.isEmpty()) {
            try {
                // 从队列中取出任务（阻塞等待）
                getjobs.common.infrastructure.queue.domain.QueueTask task = taskQueue.poll(1, TimeUnit.SECONDS);

                if (task == null) {
                    // 超时，继续循环
                    continue;
                }

                // 执行任务
                currentTask = task;
                executeTask(task);
                currentTask = null;

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                log.info("队列任务执行器线程被中断");
                break;
            } catch (Exception e) {
                log.error("队列任务执行器发生未预期的异常", e);
            }
        }

        log.info("队列任务执行器线程已结束");
    }

    /**
     * 执行任务（支持重试）
     * 
     * @param task 任务实体
     */
    private void executeTask(getjobs.common.infrastructure.queue.domain.QueueTask task) {
        QueueTaskConfig config = task.getConfig();
        QueueTask queueTask = getQueueTaskFromDomain(task);

        if (queueTask == null) {
            log.error("无法获取队列任务实例: {}", config.getTaskName());
            task.fail(new IllegalStateException("无法获取队列任务实例"));
            return;
        }

        // 执行前处理
        try {
            queueTask.beforeExecute();
        } catch (Exception e) {
            log.error("任务前置处理失败: {}", config.getTaskName(), e);
            task.fail(e);
            totalFailed.incrementAndGet();
            return;
        }

        // 执行任务（带重试）
        boolean success = false;
        Throwable lastException = null;

        while (!success && task.canRetry()) {
            try {
                // 如果是重试，等待一段时间
                if (task.getRetryCount().get() > 0) {
                    long delay = config.calculateRetryDelay(task.getRetryCount().get());
                    log.info("任务 [{}] 第 {} 次重试，等待 {} 毫秒后执行",
                            config.getTaskName(), task.getRetryCount().get(), delay);
                    Thread.sleep(delay);
                }

                // 开始执行
                task.start();
                log.debug("开始执行任务: {} [{}]", config.getTaskName(), task.getTaskId());

                // 执行任务
                Object result = queueTask.execute();

                // 执行成功
                task.success(result);
                success = true;
                totalSucceeded.incrementAndGet();

                log.info("任务执行成功: {} [{}] 耗时: {}ms",
                        config.getTaskName(),
                        task.getTaskId(),
                        calculateDuration(task));

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                log.warn("任务执行被中断: {}", config.getTaskName());
                task.fail(e);
                break;
            } catch (Exception e) {
                lastException = e;
                int retryCount = task.incrementRetryCount();

                // 判断是否应该重试
                if (task.canRetry() && queueTask.shouldRetry(e)) {
                    log.warn("任务执行失败，准备重试: {} [{}] 第 {} 次重试，异常: {}",
                            config.getTaskName(), task.getTaskId(), retryCount, e.getMessage());
                } else {
                    // 不再重试，标记为失败
                    log.error("任务执行失败，不再重试: {} [{}] 已重试 {} 次，异常: {}",
                            config.getTaskName(), task.getTaskId(), retryCount, e.getMessage(), e);
                    task.fail(e);
                    totalFailed.incrementAndGet();
                    break;
                }
            } finally {
                // 后置处理
                try {
                    queueTask.afterExecute(success);
                } catch (Exception e) {
                    log.error("任务后置处理失败: {}", config.getTaskName(), e);
                }
            }
        }

        // 如果最终失败
        if (!success && lastException != null && !task.isCompleted()) {
            task.fail(lastException);
            totalFailed.incrementAndGet();
        }

        totalCompleted.incrementAndGet();
    }

    /**
     * 从任务实体中获取队列任务实例
     * 
     * @param task 任务实体
     * @return 队列任务实例
     */
    private QueueTask getQueueTaskFromDomain(getjobs.common.infrastructure.queue.domain.QueueTask task) {
        return task.getQueueTaskInstance();
    }

    /**
     * 计算任务执行耗时（毫秒）
     */
    private long calculateDuration(getjobs.common.infrastructure.queue.domain.QueueTask task) {
        if (task.getStartTime() != null && task.getEndTime() != null) {
            return java.time.Duration.between(task.getStartTime(), task.getEndTime()).toMillis();
        }
        return 0;
    }

    /**
     * 生成任务ID
     */
    private String generateTaskId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    /**
     * 获取队列大小
     */
    public int getQueueSize() {
        return taskQueue.size();
    }

    /**
     * 获取当前正在执行的任务
     */
    public getjobs.common.infrastructure.queue.domain.QueueTask getCurrentTask() {
        return currentTask;
    }

    /**
     * 获取统计信息
     */
    public QueueTaskStatistics getStatistics() {
        return QueueTaskStatistics.builder()
                .totalSubmitted(totalSubmitted.get())
                .totalCompleted(totalCompleted.get())
                .totalSucceeded(totalSucceeded.get())
                .totalFailed(totalFailed.get())
                .queueSize(taskQueue.size())
                .isRunning(running.get())
                .currentTask(currentTask != null ? currentTask.getTaskId() : null)
                .build();
    }

    /**
     * 统计信息内部类
     */
    @lombok.Data
    @lombok.Builder
    public static class QueueTaskStatistics {
        private long totalSubmitted;
        private long totalCompleted;
        private long totalSucceeded;
        private long totalFailed;
        private int queueSize;
        private boolean isRunning;
        private String currentTask;
    }
}
