# 队列任务执行基础设施

## 📖 概述

队列任务执行基础设施是一个基于队列模式的任务执行框架，专门用于需要串行执行的任务场景，特别是 **SQLite 数据库的并发更新场景**。

### 核心特性

- ✅ **队列模式管理任务** - 使用 FIFO 队列管理任务，保证执行顺序
- ✅ **串行执行保证** - 单线程执行，避免并发冲突
- ✅ **自动重试机制** - 支持指数退避策略，提高任务执行成功率
- ✅ **健壮的错误处理** - 异常捕获、日志记录、状态跟踪
- ✅ **任务状态管理** - 完整的任务生命周期管理
- ✅ **SQLite 并发优化** - 串行提交，避免锁竞争

### 适用场景

- **SQLite 表的并发更新操作** - 串行提交保证数据一致性
- **需要保证执行顺序的任务** - FIFO 队列保证顺序
- **需要避免并发冲突的资源操作** - 单线程执行避免竞争
- **需要重试机制的关键任务** - 自动重试提高成功率

## 🏗️ 架构设计

### 模块结构

```
infrastructure/queue/
├── docs/                          📚 文档目录
│   └── README.md                 - 使用文档（本文件）
├── domain/                        领域模型层
│   ├── QueueTask.java            - 队列任务实体
│   └── QueueTaskConfig.java      - 队列任务配置
├── enums/                         枚举定义
│   └── QueueTaskStatusEnum.java  - 队列任务状态枚举
├── contract/                      契约接口层
│   └── QueueTask.java            - 队列任务接口
├── executor/                      执行器层
│   └── QueueTaskExecutor.java    - 队列任务执行器（串行执行）
├── service/                       服务层
│   └── QueueTaskService.java     - 队列任务服务（API入口）
└── config/                        配置层
    └── QueueInfrastructureConfig.java - Bean配置
```

### 执行流程

```
任务提交 → 队列入队 → 串行执行 → 重试机制 → 完成/失败
   ↓         ↓          ↓          ↓          ↓
 异步/同步   FIFO队列   单线程    指数退避    状态更新
```

## 🚀 快速开始

### 1. 实现队列任务接口

创建一个实现 `QueueTask` 接口的类：

```java
@Component
public class SqliteUpdateTask implements QueueTask {

    private final EntityManager entityManager;
    private final SomeEntity entity;

    public SqliteUpdateTask(EntityManager entityManager, SomeEntity entity) {
        this.entityManager = entityManager;
        this.entity = entity;
    }

    @Override
    public QueueTaskConfig getConfig() {
        return QueueTaskConfig.builder()
                .taskName("SQLite更新任务")
                .taskType("SQLITE_UPDATE")
                .maxRetries(3)                    // 最多重试3次
                .retryDelayMs(100)                // 重试延迟100毫秒
                .useExponentialBackoff(true)      // 使用指数退避
                .description("更新SQLite实体")
                .build();
    }

    @Override
    public Object execute() throws Exception {
        // 执行 SQLite 更新操作
        entityManager.merge(entity);
        entityManager.flush();
        return "更新成功";
    }

    @Override
    public boolean shouldRetry(Throwable exception) {
        // 只对数据库锁定错误重试
        String message = exception.getMessage();
        if (message != null && (
                message.contains("SQLITE_BUSY") ||
                message.contains("database is locked") ||
                message.contains("could not execute statement"))) {
            return true;
        }
        return false;
    }
}
```

### 2. 使用队列服务提交任务

#### 异步提交（推荐）

```java
@Service
@RequiredArgsConstructor
public class SomeService {

    private final QueueTaskService queueTaskService;

    public void updateEntity(SomeEntity entity) {
        // 创建任务
        QueueTask task = new SqliteUpdateTask(entityManager, entity);
        
        // 提交到队列（异步执行）
        QueueTask result = queueTaskService.submit(task);
        
        // 任务已入队，继续执行其他逻辑
        log.info("任务已提交: {}", result.getTaskId());
    }
}
```

#### 同步提交（等待完成）

```java
public void updateEntitySync(SomeEntity entity) throws Exception {
    QueueTask task = new SqliteUpdateTask(entityManager, entity);
    
    // 提交并等待完成（最多等待30秒）
    QueueTask result = queueTaskService.submitAndWait(task, 30000);
    
    if (!result.isSuccess()) {
        throw new RuntimeException("任务执行失败", result.getException());
    }
    
    log.info("任务执行成功: {}", result.getResult());
}
```

### 3. 查询任务状态

```java
// 获取队列大小
int queueSize = queueTaskService.getQueueSize();
log.info("队列中待执行任务数: {}", queueSize);

// 获取正在执行的任务
Optional<QueueTask> runningTask = queueTaskService.getRunningTask();
if (runningTask.isPresent()) {
    log.info("当前执行任务: {}", runningTask.get().getConfig().getTaskName());
}

// 获取统计信息
QueueTaskExecutor.QueueTaskStatistics stats = queueTaskService.getStatistics();
log.info("总提交数: {}, 总完成数: {}, 总成功数: {}, 总失败数: {}",
        stats.getTotalSubmitted(),
        stats.getTotalCompleted(),
        stats.getTotalSucceeded(),
        stats.getTotalFailed());
```

## ⚙️ 配置

### 应用配置（application.yml）

```yaml
queue:
  task:
    executor:
      # 队列容量，0 或负数表示无界队列
      capacity: 1000
```

### 默认配置

- **队列容量**: 0（无界队列）
- **重试延迟**: 100 毫秒
- **指数退避**: 关闭（固定延迟）

## 📝 最佳实践

### 1. SQLite 并发更新场景

```java
@Component
public class SqliteBatchUpdateTask implements QueueTask {

    private final EntityManager entityManager;
    private final List<SomeEntity> entities;

    @Override
    public QueueTaskConfig getConfig() {
        return QueueTaskConfig.builder()
                .taskName("SQLite批量更新")
                .taskType("SQLITE_BATCH_UPDATE")
                .maxRetries(5)                    // SQLite 可能需要更多重试
                .retryDelayMs(50)
                .useExponentialBackoff(true)      // 使用指数退避
                .build();
    }

    @Override
    public Object execute() throws Exception {
        // 批量更新，串行执行避免锁竞争
        for (SomeEntity entity : entities) {
            entityManager.merge(entity);
        }
        entityManager.flush();
        entityManager.clear();
        return entities.size();
    }

    @Override
    public boolean shouldRetry(Throwable exception) {
        // 只对 SQLite 锁定错误重试
        return isSqliteLockError(exception);
    }

    private boolean isSqliteLockError(Throwable e) {
        if (e == null) return false;
        String message = e.getMessage();
        if (message != null) {
            return message.contains("SQLITE_BUSY") ||
                   message.contains("database is locked") ||
                   message.contains("could not execute statement");
        }
        return isSqliteLockError(e.getCause());
    }
}
```

### 2. 任务优先级（未来扩展）

目前队列是 FIFO 模式，未来可以扩展为优先级队列：

```java
QueueTaskConfig.builder()
    .priority(10)  // 优先级越高，越先执行
    .build();
```

### 3. 错误处理

```java
@Override
public boolean shouldRetry(Throwable exception) {
    // 根据异常类型决定是否重试
    if (exception instanceof IllegalArgumentException) {
        // 参数错误，不重试
        return false;
    }
    if (exception instanceof SQLException) {
        // SQL 错误，重试
        return true;
    }
    // 其他异常，默认重试
    return true;
}
```

## 🔍 监控和调试

### 查看队列状态

```java
@RestController
@RequestMapping("/api/queue")
public class QueueMonitorController {

    @Autowired
    private QueueTaskService queueTaskService;

    @GetMapping("/stats")
    public QueueTaskExecutor.QueueTaskStatistics getStats() {
        return queueTaskService.getStatistics();
    }

    @GetMapping("/size")
    public int getQueueSize() {
        return queueTaskService.getQueueSize();
    }

    @GetMapping("/running")
    public Optional<QueueTask> getRunningTask() {
        return queueTaskService.getRunningTask();
    }
}
```

### 日志级别

建议在生产环境使用 `INFO` 级别，开发环境使用 `DEBUG` 级别：

```yaml
logging:
  level:
    getjobs.common.infrastructure.queue: DEBUG
```

## ⚠️ 注意事项

1. **队列容量**: 如果设置队列容量，队列满时会拒绝新任务。建议根据实际场景设置合适的容量。

2. **任务执行时间**: 由于是串行执行，长时间运行的任务会阻塞后续任务。建议将大任务拆分为小任务。

3. **重试次数**: 过多的重试次数可能导致队列堆积。建议根据实际场景设置合理的重试次数。

4. **异常处理**: 任务中的异常会被捕获并记录，不会影响执行器继续运行。

5. **线程安全**: 执行器是线程安全的，可以多线程并发提交任务。

## 🆚 与其他基础设施的对比

### vs Task Infrastructure (task/)

| 特性 | Queue Infrastructure | Task Infrastructure |
|------|---------------------|---------------------|
| 执行模式 | 串行（单线程） | 并发（多线程） |
| 适用场景 | SQLite 更新、顺序执行 | 通用任务调度 |
| 队列管理 | FIFO 队列 | 无队列 |
| 重试机制 | 内置支持 | 需自行实现 |
| 并发控制 | 自动串行化 | 需手动控制 |

### 选择建议

- **使用 Queue Infrastructure**: SQLite 更新、需要顺序执行、需要重试机制
- **使用 Task Infrastructure**: 通用任务调度、可以并发执行、不需要队列

## 📚 更多示例

### 示例 1: 简单的 SQLite 更新

```java
public void simpleUpdate(SomeEntity entity) {
    QueueTask task = new QueueTask() {
        @Override
        public QueueTaskConfig getConfig() {
            return QueueTaskConfig.builder()
                    .taskName("简单更新")
                    .taskType("SIMPLE_UPDATE")
                    .maxRetries(3)
                    .build();
        }

        @Override
        public Object execute() throws Exception {
            entityManager.merge(entity);
            entityManager.flush();
            return "OK";
        }
    };
    
    queueTaskService.submit(task);
}
```

### 示例 2: 批量提交

```java
public void batchUpdate(List<SomeEntity> entities) {
    for (SomeEntity entity : entities) {
        QueueTask task = new SqliteUpdateTask(entityManager, entity);
        queueTaskService.submit(task);
    }
    // 所有任务已入队，将按顺序执行
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证。

