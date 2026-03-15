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
 * <li>任务取消支持（优雅地取消正在运行的任务）</li>
 * <li>全局唯一任务约束（确保同类型任务不会并发执行）</li>
 * <li>任务执行通知机制（支持监听任务状态变化）</li>
 * <li>同步/异步任务执行</li>
 * <li>任务超时控制</li>
 * <li>任务状态查询（查询运行中的任务列表）</li>
 * </ul>
 * 
 * <h2>📚 完整文档：</h2>
 * <p>
 * 详细文档请查看 <a href="docs/README.md">docs/README.md</a>
 * </p>
 * <ul>
 * <li><a href="docs/任务中断机制说明.md">任务中断机制说明</a> - 完整的机制说明和使用指南</li>
 * <li><a href="docs/任务取消快速参考.md">任务取消快速参考</a> - 快速参考手册</li>
 * <li><a href="docs/任务取消方案对比.md">任务取消方案对比</a> - 方案对比和选择建议</li>
 * </ul>
 * 
 * <h2>模块结构：</h2>
 * 
 * <pre>
 * infrastructure/task/
 * ├── docs/            - 📚 文档目录
 * │   ├── README.md                      - 文档导航
 * │   ├── 任务中断机制说明.md             - 完整说明
 * │   ├── 任务取消快速参考.md             - 快速参考
 * │   └── 任务取消方案对比.md             - 方案对比
 * ├── domain/          - 领域模型层
 * │   ├── Task.java                      - 任务实体（聚合根）
 * │   ├── TaskConfig.java                - 任务配置值对象
 * │   └── TaskNotification.java          - 任务通知值对象
 * ├── enums/           - 枚举定义
 * │   └── TaskStatusEnum.java            - 任务状态枚举
 * ├── contract/        - 契约接口层
 * │   ├── ScheduledTask.java             - 可调度任务接口
 * │   └── TaskNotificationListener.java  - 任务通知监听器接口
 * ├── executor/        - 执行器层
 * │   ├── TaskExecutor.java              - 任务执行器（支持取消）
 * │   └── UniqueTaskManager.java         - 唯一任务管理器
 * ├── scheduler/       - 调度服务层
 * │   └── TaskSchedulerService.java      - 任务调度服务（API入口）
 * ├── config/          - 配置层
 * │   └── TaskInfrastructureConfig.java  - Bean配置
 * └── example/         - 示例代码
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
 * <h3>4. 任务取消和查询</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     // 异步提交任务并获取 executionId
 *     Future<Task> future = taskSchedulerService.submitTaskAsync(task);
 *     Task taskInfo = future.get(100, TimeUnit.MILLISECONDS);
 *     String executionId = taskInfo.getExecutionId();
 * 
 *     // 取消任务
 *     boolean cancelled = taskSchedulerService.cancelTask(executionId);
 * 
 *     // 查询任务状态
 *     Optional<Task> task = taskSchedulerService.getTask(executionId);
 * 
 *     // 获取所有运行中的任务
 *     List<Task> runningTasks = taskSchedulerService.getRunningTasks();
 * }
 * </pre>
 * 
 * <p>
 * 更多详细示例和最佳实践，请参考 <a href="docs/README.md">完整文档</a>
 * </p>
 * 
 * @author getjobs
 * @since 1.0.0
 */
package getjobs.infrastructure.task;
