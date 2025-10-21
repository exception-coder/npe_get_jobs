/**
 * 任务调度基础设施模块
 * 
 * <p>
 * 基于DDD设计模式的任务调度框架，提供以下功能：
 * </p>
 * 
 * <h2>核心特性：</h2>
 * <ul>
 * <li>任务生命周期管理（待执行、执行中、成功、失败、取消）</li>
 * <li>全局唯一任务约束（确保同类型任务不会并发执行）</li>
 * <li>任务执行通知机制（支持监听任务状态变化）</li>
 * <li>同步/异步任务执行</li>
 * <li>任务超时控制</li>
 * </ul>
 * 
 * <h2>模块结构：</h2>
 * 
 * <pre>
 * infrastructure/task/
 * ├── domain/          - 领域模型层
 * │   ├── Task.java                - 任务实体（聚合根）
 * │   ├── TaskConfig.java          - 任务配置值对象
 * │   └── TaskNotification.java    - 任务通知值对象
 * ├── enums/           - 枚举定义
 * │   └── TaskStatusEnum.java      - 任务状态枚举
 * ├── contract/        - 契约接口层
 * │   ├── ScheduledTask.java               - 可调度任务接口
 * │   └── TaskNotificationListener.java    - 任务通知监听器接口
 * ├── executor/        - 执行器层
 * │   ├── TaskExecutor.java        - 任务执行器
 * │   └── UniqueTaskManager.java   - 唯一任务管理器
 * └── scheduler/       - 调度服务层
 *     └── TaskSchedulerService.java - 任务调度服务
 * </pre>
 * 
 * <h2>使用示例：</h2>
 * 
 * <h3>1. 实现一个可调度任务</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     &#64;Component
 *     public class DataBackupTask implements ScheduledTask {
 * 
 *         &#64;Override
 *         public TaskConfig getTaskConfig() {
 *             return TaskConfig.builder()
 *                     .taskName("数据备份任务")
 *                     .taskType("DATA_BACKUP")
 *                     .globalUnique(true) // 全局唯一，同时只能执行一个
 *                     .timeout(600000L) // 10分钟超时
 *                     .description("定期备份系统数据")
 *                     .build();
 *         }
 * 
 *         @Override
 *         public Object execute() throws Exception {
 *             // 执行备份逻辑
 *             return "backup_file_path";
 *         }
 *     }
 * }
 * </pre>
 * 
 * <h3>2. 实现任务通知监听器</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     &#64;Component
 *     public class TaskEventLogger implements TaskNotificationListener {
 * 
 *         &#64;Override
 *         public void onTaskStart(TaskNotification notification) {
 *             log.info("任务开始: {}", notification.getTaskName());
 *         }
 * 
 *         &#64;Override
 *         public void onTaskSuccess(TaskNotification notification) {
 *             log.info("任务成功: {} 耗时: {}ms",
 *                     notification.getTaskName(), notification.getDuration());
 *         }
 * 
 *         @Override
 *         public void onTaskFailed(TaskNotification notification) {
 *             log.error("任务失败: {} 原因: {}",
 *                     notification.getTaskName(), notification.getErrorMessage());
 *         }
 *     }
 * }
 * </pre>
 * 
 * <h3>3. 使用调度服务执行任务</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     &#64;Service
 *     @RequiredArgsConstructor
 *     public class SomeService {
 * 
 *         private final TaskSchedulerService taskSchedulerService;
 *         private final DataBackupTask dataBackupTask;
 * 
 *         public void performBackup() {
 *             // 同步执行
 *             Task task = taskSchedulerService.submitTask(dataBackupTask);
 * 
 *             // 或异步执行
 *             Future<Task> future = taskSchedulerService.submitTaskAsync(dataBackupTask);
 * 
 *             // 或带超时执行
 *             try {
 *                 Task timeoutTask = taskSchedulerService.submitTaskWithTimeout(dataBackupTask);
 *             } catch (TimeoutException e) {
 *                 log.error("任务执行超时");
 *             }
 *         }
 *     }
 * }
 * </pre>
 * 
 * @author getjobs
 * @since 1.0.0
 */
package getjobs.common.infrastructure.task;
