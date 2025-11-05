package getjobs.common.infrastructure.task.executor;

import getjobs.common.infrastructure.task.contract.ScheduledTask;
import getjobs.common.infrastructure.task.contract.TaskNotificationListener;
import getjobs.common.infrastructure.task.domain.Task;
import getjobs.common.infrastructure.task.domain.TaskConfig;
import getjobs.common.infrastructure.task.enums.TaskStatusEnum;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.*;

/**
 * 任务执行器
 * 负责执行任务，处理任务的生命周期，发送任务通知
 * 
 * 注意：此类不使用@Component注解，而是通过TaskInfrastructureConfig配置类创建Bean
 * 以避免与Spring默认的taskExecutor bean冲突
 * 
 * @author getjobs
 */
@Slf4j
public class TaskExecutor {

    private final UniqueTaskManager uniqueTaskManager;
    private final List<TaskNotificationListener> notificationListeners;

    /**
     * 构造函数
     * 
     * @param uniqueTaskManager     唯一任务管理器
     * @param notificationListeners 任务通知监听器列表
     */
    public TaskExecutor(UniqueTaskManager uniqueTaskManager, List<TaskNotificationListener> notificationListeners) {
        this.uniqueTaskManager = uniqueTaskManager;
        this.notificationListeners = notificationListeners;
    }

    /**
     * 线程池用于异步执行任务
     */
    private final ExecutorService executorService = Executors.newCachedThreadPool(
            new ThreadFactory() {
                private int counter = 0;

                @Override
                public Thread newThread(Runnable r) {
                    Thread thread = new Thread(r);
                    thread.setName("task-executor-" + counter++);
                    thread.setDaemon(true);
                    return thread;
                }
            });

    /**
     * 正在运行的任务映射
     * Key: executionId, Value: TaskContext(包含Task和Future)
     */
    private final Map<String, TaskContext> runningTasks = new ConcurrentHashMap<>();

    /**
     * 任务上下文，包含任务实例和Future对象
     */
    private static class TaskContext {
        final Task task;
        final Future<Task> future;
        final Thread executingThread;

        TaskContext(Task task, Future<Task> future, Thread executingThread) {
            this.task = task;
            this.future = future;
            this.executingThread = executingThread;
        }
    }

    /**
     * 同步执行任务
     * 
     * @param scheduledTask 要执行的任务
     * @return 任务实例
     */
    public Task executeSync(ScheduledTask scheduledTask) {
        TaskConfig config = scheduledTask.getTaskConfig();
        config.validate();

        // 创建任务实例
        Task task = Task.builder()
                .executionId(generateExecutionId())
                .config(config)
                .status(TaskStatusEnum.PENDING)
                .build();

        return executeSyncInternal(task, scheduledTask);
    }

    /**
     * 内部同步执行任务的方法
     * 
     * @param task          任务实例
     * @param scheduledTask 要执行的任务
     * @return 任务实例
     */
    private Task executeSyncInternal(Task task, ScheduledTask scheduledTask) {
        TaskConfig config = task.getConfig();

        // 如果是全局唯一任务，检查是否可以执行
        if (config.getGlobalUnique() && !uniqueTaskManager.tryStartUniqueTask(task)) {
            task.fail(new IllegalStateException("同类型任务正在执行中，无法启动新任务"));
            notifyListeners(listener -> listener.onTaskFailed(task.toNotification("任务启动失败：同类型任务正在执行中")));
            return task;
        }

        try {
            // 执行任务
            doExecuteTask(task, scheduledTask);
        } finally {
            // 如果是全局唯一任务，释放锁
            if (config.getGlobalUnique()) {
                uniqueTaskManager.releaseUniqueTask(task);
            }
        }

        return task;
    }

    /**
     * 异步执行任务
     * 
     * @param scheduledTask 要执行的任务
     * @return Future对象，可以用来获取任务执行结果
     */
    public Future<Task> executeAsync(ScheduledTask scheduledTask) {
        // 先创建任务实例以获取executionId
        TaskConfig config = scheduledTask.getTaskConfig();
        config.validate();

        Task task = Task.builder()
                .executionId(generateExecutionId())
                .config(config)
                .status(TaskStatusEnum.PENDING)
                .build();

        // 提交异步任务
        Future<Task> future = executorService.submit(() -> {
            // 记录执行线程
            Thread currentThread = Thread.currentThread();
            TaskContext context = new TaskContext(task, null, currentThread);
            runningTasks.put(task.getExecutionId(), context);

            try {
                return executeSyncInternal(task, scheduledTask);
            } finally {
                // 任务完成后从映射中移除
                runningTasks.remove(task.getExecutionId());
            }
        });

        // 更新TaskContext以包含Future
        TaskContext context = runningTasks.get(task.getExecutionId());
        if (context != null) {
            runningTasks.put(task.getExecutionId(), new TaskContext(task, future, context.executingThread));
        }

        return future;
    }

    /**
     * 带超时的异步执行任务
     * 
     * @param scheduledTask 要执行的任务
     * @param timeout       超时时间
     * @param timeUnit      时间单位
     * @return 任务实例
     * @throws TimeoutException 如果任务执行超时
     */
    public Task executeAsyncWithTimeout(ScheduledTask scheduledTask, long timeout, TimeUnit timeUnit)
            throws TimeoutException {
        Future<Task> future = executeAsync(scheduledTask);
        try {
            return future.get(timeout, timeUnit);
        } catch (TimeoutException e) {
            future.cancel(true);
            log.error("任务执行超时: {}", scheduledTask.getTaskConfig().getTaskName());
            throw e;
        } catch (InterruptedException | ExecutionException e) {
            log.error("任务执行异常: {}", scheduledTask.getTaskConfig().getTaskName(), e);
            throw new RuntimeException(e);
        }
    }

    /**
     * 执行任务的核心逻辑
     */
    private void doExecuteTask(Task task, ScheduledTask scheduledTask) {
        try {
            // 前置处理
            scheduledTask.beforeExecute();

            // 启动任务
            task.start();
            notifyListeners(listener -> listener.onTaskStart(task.toNotification("任务开始执行")));

            log.debug("开始执行任务 [{}] 类型 [{}] ID [{}]",
                    task.getConfig().getTaskName(),
                    task.getConfig().getTaskType(),
                    task.getExecutionId());

            // 执行任务
            Object result = scheduledTask.execute();

            // 任务成功
            task.success(result);
            log.debug("任务执行成功 [{}] ID [{}] 耗时: {}ms",
                    task.getConfig().getTaskName(),
                    task.getExecutionId(),
                    java.time.Duration.between(task.getStartTime(), task.getEndTime()).toMillis());

            notifyListeners(listener -> listener.onTaskSuccess(task.toNotification("任务执行成功")));

            // 后置处理
            scheduledTask.afterExecute(true);

        } catch (Exception e) {
            // 任务失败
            task.fail(e);
            log.error("任务执行失败 [{}] ID [{}]",
                    task.getConfig().getTaskName(),
                    task.getExecutionId(),
                    e);

            notifyListeners(listener -> listener.onTaskFailed(task.toNotification("任务执行失败")));

            // 后置处理
            try {
                scheduledTask.afterExecute(false);
            } catch (Exception afterEx) {
                log.error("任务后置处理失败", afterEx);
            }
        }
    }

    /**
     * 通知所有监听器
     */
    private void notifyListeners(java.util.function.Consumer<TaskNotificationListener> action) {
        if (notificationListeners != null && !notificationListeners.isEmpty()) {
            for (TaskNotificationListener listener : notificationListeners) {
                try {
                    action.accept(listener);
                } catch (Exception e) {
                    log.error("通知监听器失败: {}", listener.getClass().getName(), e);
                }
            }
        }
    }

    /**
     * 生成任务执行ID
     */
    private String generateExecutionId() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    /**
     * 取消任务
     * 
     * @param executionId 任务执行ID
     * @return true表示成功取消，false表示任务未找到或已完成
     */
    public boolean cancelTask(String executionId) {
        TaskContext context = runningTasks.get(executionId);
        if (context == null) {
            log.warn("未找到正在运行的任务: {}", executionId);
            return false;
        }

        Task task = context.task;
        if (task.isCompleted()) {
            log.warn("任务已完成，无法取消: {}", executionId);
            return false;
        }

        log.info("正在取消任务: {} - {}", task.getConfig().getTaskName(), executionId);

        // 中断线程
        if (context.executingThread != null) {
            context.executingThread.interrupt();
        }

        // 取消Future
        if (context.future != null) {
            context.future.cancel(true);
        }

        // 更新任务状态
        task.cancel();

        // 通知监听器
        notifyListeners(listener -> listener.onTaskFailed(task.toNotification("任务已被取消")));

        // 从映射中移除
        runningTasks.remove(executionId);

        return true;
    }

    /**
     * 根据执行ID查询任务
     * 
     * @param executionId 任务执行ID
     * @return 任务实例（如果存在）
     */
    public Optional<Task> getTask(String executionId) {
        TaskContext context = runningTasks.get(executionId);
        return Optional.ofNullable(context != null ? context.task : null);
    }

    /**
     * 获取所有正在运行的任务
     * 
     * @return 正在运行的任务列表
     */
    public List<Task> getRunningTasks() {
        return runningTasks.values().stream()
                .map(context -> context.task)
                .filter(Task::isRunning)
                .toList();
    }

    /**
     * 获取正在运行的任务数量
     * 
     * @return 任务数量
     */
    public int getRunningTaskCount() {
        return (int) runningTasks.values().stream()
                .map(context -> context.task)
                .filter(Task::isRunning)
                .count();
    }

    /**
     * 关闭执行器
     */
    public void shutdown() {
        log.info("正在关闭任务执行器...");

        // 取消所有正在运行的任务
        runningTasks.keySet().forEach(this::cancelTask);

        executorService.shutdown();
        try {
            if (!executorService.awaitTermination(60, TimeUnit.SECONDS)) {
                executorService.shutdownNow();
            }
        } catch (InterruptedException e) {
            executorService.shutdownNow();
            Thread.currentThread().interrupt();
        }
    }
}
