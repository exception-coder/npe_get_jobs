/**
 * 队列任务执行基础设施模块
 * 
 * <p>
 * 基于队列模式的任务执行框架，专门用于需要串行执行的任务场景，特别是 SQLite 数据库的并发更新场景。
 * </p>
 * 
 * <h2>核心特性：</h2>
 * <ul>
 * <li>队列模式管理任务（FIFO 或优先级队列）</li>
 * <li>串行执行保证（单线程执行，避免并发冲突）</li>
 * <li>自动重试机制（支持指数退避策略）</li>
 * <li>健壮的错误处理（异常捕获、日志记录、状态跟踪）</li>
 * <li>任务状态管理（待执行、执行中、成功、失败）</li>
 * <li>SQLite 并发更新优化（串行提交，避免锁竞争）</li>
 * </ul>
 * 
 * <h2>适用场景：</h2>
 * <ul>
 * <li>SQLite 表的并发更新操作（串行提交保证数据一致性）</li>
 * <li>需要保证执行顺序的任务</li>
 * <li>需要避免并发冲突的资源操作</li>
 * <li>需要重试机制的关键任务</li>
 * </ul>
 * 
 * <h2>模块结构：</h2>
 * 
 * <pre>
 * infrastructure/queue/
 * ├── docs/            - 📚 文档目录
 * │   └── README.md    - 使用文档
 * ├── domain/          - 领域模型层
 * │   ├── QueueTask.java           - 队列任务实体
 * │   └── QueueTaskConfig.java     - 队列任务配置
 * ├── enums/           - 枚举定义
 * │   └── QueueTaskStatusEnum.java - 队列任务状态枚举
 * ├── contract/        - 契约接口层
 * │   └── QueueTask.java           - 队列任务接口
 * ├── executor/        - 执行器层
 * │   └── QueueTaskExecutor.java   - 队列任务执行器（串行执行）
 * ├── service/         - 服务层
 * │   └── QueueTaskService.java    - 队列任务服务（API入口）
 * └── config/          - 配置层
 *     └── QueueInfrastructureConfig.java - Bean配置
 * </pre>
 * 
 * <h2>使用示例：</h2>
 * 
 * <h3>1. 实现一个队列任务</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     &#64;Component
 *     public class SqliteUpdateTask implements QueueTask {
 * 
 *         private final EntityManager entityManager;
 *         private final SomeEntity entity;
 * 
 *         public SqliteUpdateTask(EntityManager entityManager, SomeEntity entity) {
 *             this.entityManager = entityManager;
 *             this.entity = entity;
 *         }
 * 
 *         &#64;Override
 *         public QueueTaskConfig getConfig() {
 *             return QueueTaskConfig.builder()
 *                     .taskName("SQLite更新任务")
 *                     .taskType("SQLITE_UPDATE")
 *                     .maxRetries(3)
 *                     .retryDelayMs(100)
 *                     .useExponentialBackoff(true)
 *                     .build();
 *         }
 * 
 *         &#64;Override
 *         public Object execute() throws Exception {
 *             // 执行 SQLite 更新操作
 *             entityManager.merge(entity);
 *             entityManager.flush();
 *             return "更新成功";
 *         }
 *     }
 * }
 * </pre>
 * 
 * <h3>2. 使用队列服务提交任务</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     &#64;Service
 *     @RequiredArgsConstructor
 *     public class SomeService {
 * 
 *         private final QueueTaskService queueTaskService;
 * 
 *         public void updateEntity(SomeEntity entity) {
 *             // 提交任务到队列（异步执行）
 *             QueueTask task = new SqliteUpdateTask(entityManager, entity);
 *             queueTaskService.submit(task);
 *         }
 * 
 *         public void updateEntitySync(SomeEntity entity) throws Exception {
 *             // 同步执行任务（等待执行完成）
 *             QueueTask task = new SqliteUpdateTask(entityManager, entity);
 *             QueueTask result = queueTaskService.submitAndWait(task);
 *             if (!result.isSuccess()) {
 *                 throw new RuntimeException("任务执行失败", result.getException());
 *             }
 *         }
 *     }
 * }
 * </pre>
 * 
 * <h3>3. 查询任务状态</h3>
 * 
 * <pre>
 * {
 *     &#64;code
 *     // 获取队列中的任务数量
 *     int queueSize = queueTaskService.getQueueSize();
 * 
 *     // 获取正在执行的任务
 *     Optional<QueueTask> runningTask = queueTaskService.getRunningTask();
 * 
 *     // 获取任务统计信息
 *     QueueTaskStatistics stats = queueTaskService.getStatistics();
 * }
 * </pre>
 * 
 * @author getjobs
 * @since 1.0.0
 */
package getjobs.infrastructure.queue;
