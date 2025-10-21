package getjobs.common.infrastructure.task.example;

import getjobs.common.infrastructure.task.contract.ScheduledTask;
import getjobs.common.infrastructure.task.contract.TaskNotificationListener;
import getjobs.common.infrastructure.task.domain.Task;
import getjobs.common.infrastructure.task.domain.TaskConfig;
import getjobs.common.infrastructure.task.domain.TaskNotification;
import getjobs.common.infrastructure.task.enums.TaskStatusEnum;
import getjobs.common.infrastructure.task.scheduler.TaskSchedulerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.Future;
import java.util.concurrent.TimeoutException;

/**
 * 基础设施模块使用示例
 * 
 * 本类包含多个示例，展示如何使用任务调度基础设施模块
 * 注意：本类仅作为示例参考，不会被自动加载执行
 * 
 * @author getjobs
 */
@Slf4j
public class ExampleUsage {

    /**
     * 示例1: 创建一个简单的任务
     */
    @Component
    public static class SimpleTask implements ScheduledTask {

        @Override
        public TaskConfig getTaskConfig() {
            return TaskConfig.builder()
                    .taskName("简单任务示例")
                    .taskType("SIMPLE_TASK")
                    .globalUnique(false) // 非全局唯一，可以并发执行
                    .timeout(30000L) // 30秒超时
                    .description("这是一个简单的任务示例")
                    .build();
        }

        @Override
        public Object execute() throws Exception {
            log.info("执行简单任务...");
            // 模拟任务执行
            Thread.sleep(2000);
            return "任务执行成功";
        }
    }

    /**
     * 示例2: 创建一个全局唯一的任务
     */
    @Component
    public static class UniqueTask implements ScheduledTask {

        @Override
        public TaskConfig getTaskConfig() {
            return TaskConfig.builder()
                    .taskName("全局唯一任务示例")
                    .taskType("UNIQUE_TASK")
                    .globalUnique(true) // 全局唯一，同一时刻只能执行一个
                    .timeout(60000L) // 60秒超时
                    .description("这是一个全局唯一的任务示例")
                    .build();
        }

        @Override
        public Object execute() throws Exception {
            log.info("执行全局唯一任务...");
            // 模拟长时间运行的任务
            Thread.sleep(10000);
            return "全局唯一任务执行成功";
        }

        @Override
        public void beforeExecute() throws Exception {
            log.info("任务执行前的准备工作...");
            // 可以在这里进行资源准备、参数验证等
        }

        @Override
        public void afterExecute(boolean success) {
            if (success) {
                log.info("任务执行成功后的清理工作...");
            } else {
                log.error("任务执行失败后的清理工作...");
            }
            // 可以在这里进行资源释放、清理等
        }
    }

    /**
     * 示例3: 创建一个任务通知监听器
     */
    @Component
    @Slf4j
    public static class CustomTaskListener implements TaskNotificationListener {

        @Override
        public void onTaskStart(TaskNotification notification) {
            log.info("监听到任务开始: {} [{}]",
                    notification.getTaskName(),
                    notification.getTaskType());
        }

        @Override
        public void onTaskSuccess(TaskNotification notification) {
            log.info("监听到任务成功: {} 耗时: {}ms",
                    notification.getTaskName(),
                    notification.getDuration());

            // 可以在这里实现业务逻辑，比如：
            // - 发送成功通知
            // - 记录执行指标
            // - 触发后续任务
        }

        @Override
        public void onTaskFailed(TaskNotification notification) {
            log.error("监听到任务失败: {} 原因: {}",
                    notification.getTaskName(),
                    notification.getErrorMessage());

            // 可以在这里实现业务逻辑，比如：
            // - 发送告警
            // - 记录失败日志
            // - 触发重试机制
        }

        @Override
        public boolean supports(String taskType) {
            // 只监听特定类型的任务
            return "UNIQUE_TASK".equals(taskType);
        }
    }

    /**
     * 示例4: 使用任务调度服务
     */
    @Component
    @RequiredArgsConstructor
    @Slf4j
    public static class TaskExecutionExample {

        private final TaskSchedulerService taskSchedulerService;
        private final SimpleTask simpleTask;
        private final UniqueTask uniqueTask;

        /**
         * 同步执行任务
         */
        public void executeSyncExample() {
            log.info("=== 同步执行任务示例 ===");

            // 提交任务并等待执行完成
            Task task = taskSchedulerService.submitTask(simpleTask);

            // 检查任务执行结果
            if (task.getStatus() == TaskStatusEnum.SUCCESS) {
                log.info("任务执行成功，结果: {}", task.getResult());
            } else if (task.getStatus() == TaskStatusEnum.FAILED) {
                log.error("任务执行失败", task.getException());
            }
        }

        /**
         * 异步执行任务
         */
        public void executeAsyncExample() {
            log.info("=== 异步执行任务示例 ===");

            // 提交任务并立即返回
            Future<Task> future = taskSchedulerService.submitTaskAsync(simpleTask);

            log.info("任务已提交，继续执行其他操作...");

            // 可以在需要的时候获取任务结果
            try {
                Task task = future.get();
                log.info("异步任务完成，结果: {}", task.getResult());
            } catch (Exception e) {
                log.error("获取异步任务结果失败", e);
            }
        }

        /**
         * 带超时控制的任务执行
         */
        public void executeWithTimeoutExample() {
            log.info("=== 带超时控制的任务执行示例 ===");

            try {
                // 执行任务，如果超时则抛出异常
                Task task = taskSchedulerService.submitTaskWithTimeout(uniqueTask);
                log.info("任务在超时时间内完成，结果: {}", task.getResult());
            } catch (TimeoutException e) {
                log.error("任务执行超时");
            }
        }

        /**
         * 测试全局唯一任务
         */
        public void testGlobalUniqueTask() {
            log.info("=== 全局唯一任务测试 ===");

            // 同时提交两个相同类型的任务
            Future<Task> future1 = taskSchedulerService.submitTaskAsync(uniqueTask);
            Future<Task> future2 = taskSchedulerService.submitTaskAsync(uniqueTask);

            try {
                Task task1 = future1.get();
                Task task2 = future2.get();

                log.info("任务1状态: {}", task1.getStatus());
                log.info("任务2状态: {}", task2.getStatus());

                // 预期结果：
                // - task1: SUCCESS (正常执行)
                // - task2: FAILED (因为task1正在执行，无法启动)

            } catch (Exception e) {
                log.error("获取任务结果失败", e);
            }
        }
    }
}
