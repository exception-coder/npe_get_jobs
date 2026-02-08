# 队列任务基础设施使用示例

## 快速开始

### 示例 1: SQLite 实体更新任务

```java
@Component
public class SqliteEntityUpdateTask implements QueueTask {

    private final EntityManager entityManager;
    private final SomeEntity entity;

    public SqliteEntityUpdateTask(EntityManager entityManager, SomeEntity entity) {
        this.entityManager = entityManager;
        this.entity = entity;
    }

    @Override
    public QueueTaskConfig getConfig() {
        return QueueTaskConfig.builder()
                .taskName("SQLite实体更新")
                .taskType("SQLITE_ENTITY_UPDATE")
                .maxRetries(3)
                .retryDelayMs(100)
                .useExponentialBackoff(true)
                .description("更新SQLite实体，避免并发冲突")
                .build();
    }

    @Override
    public Object execute() throws Exception {
        // 执行更新操作
        entityManager.merge(entity);
        entityManager.flush();
        entityManager.clear();
        return "更新成功: " + entity.getId();
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

### 示例 2: 使用队列服务

```java
@Service
@RequiredArgsConstructor
public class EntityUpdateService {

    private final QueueTaskService queueTaskService;
    private final EntityManager entityManager;

    /**
     * 异步更新实体（推荐）
     */
    public void updateEntityAsync(SomeEntity entity) {
        QueueTask task = new SqliteEntityUpdateTask(entityManager, entity);
        getjobs.common.infrastructure.queue.domain.QueueTask result = queueTaskService.submit(task);
        log.info("任务已提交到队列: {}", result.getTaskId());
    }

    /**
     * 同步更新实体（等待完成）
     */
    public void updateEntitySync(SomeEntity entity) throws Exception {
        QueueTask task = new SqliteEntityUpdateTask(entityManager, entity);
        
        try {
            getjobs.common.infrastructure.queue.domain.QueueTask result = 
                queueTaskService.submitAndWait(task, 30000);
            
            if (result.isSuccess()) {
                log.info("实体更新成功: {}", result.getResult());
            } else {
                throw new RuntimeException("实体更新失败", result.getException());
            }
        } catch (TimeoutException e) {
            log.error("实体更新超时", e);
            throw e;
        }
    }

    /**
     * 批量更新实体
     */
    public void batchUpdateEntities(List<SomeEntity> entities) {
        for (SomeEntity entity : entities) {
            QueueTask task = new SqliteEntityUpdateTask(entityManager, entity);
            queueTaskService.submit(task);
        }
        log.info("已提交 {} 个更新任务到队列", entities.size());
    }
}
```

### 示例 3: 监控队列状态

```java
@RestController
@RequestMapping("/api/queue")
@RequiredArgsConstructor
public class QueueMonitorController {

    private final QueueTaskService queueTaskService;

    /**
     * 获取队列统计信息
     */
    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        QueueTaskExecutor.QueueTaskStatistics stats = queueTaskService.getStatistics();
        
        Map<String, Object> result = new HashMap<>();
        result.put("totalSubmitted", stats.getTotalSubmitted());
        result.put("totalCompleted", stats.getTotalCompleted());
        result.put("totalSucceeded", stats.getTotalSucceeded());
        result.put("totalFailed", stats.getTotalFailed());
        result.put("queueSize", stats.getQueueSize());
        result.put("isRunning", stats.isRunning());
        result.put("currentTask", stats.getCurrentTask());
        
        return result;
    }

    /**
     * 获取队列大小
     */
    @GetMapping("/size")
    public int getQueueSize() {
        return queueTaskService.getQueueSize();
    }

    /**
     * 获取当前执行的任务
     */
    @GetMapping("/running")
    public Optional<getjobs.common.infrastructure.queue.domain.QueueTask> getRunningTask() {
        return queueTaskService.getRunningTask();
    }
}
```

## 最佳实践

### 1. 任务配置建议

```java
// SQLite 更新任务配置
QueueTaskConfig.builder()
    .taskName("SQLite更新")           // 清晰的任务名称
    .taskType("SQLITE_UPDATE")        // 唯一的任务类型
    .maxRetries(3)                     // 适度的重试次数
    .retryDelayMs(100)                 // 合理的重试延迟
    .useExponentialBackoff(true)      // 使用指数退避
    .description("更新SQLite实体")     // 任务描述
    .build();
```

### 2. 错误处理

```java
@Override
public boolean shouldRetry(Throwable exception) {
    // 参数错误，不重试
    if (exception instanceof IllegalArgumentException) {
        return false;
    }
    
    // SQLite 锁定错误，重试
    if (isSqliteLockError(exception)) {
        return true;
    }
    
    // 其他异常，根据业务需求决定
    return true;
}
```

### 3. 批量操作

```java
// 推荐：将大任务拆分为小任务
public void batchUpdate(List<SomeEntity> entities) {
    for (SomeEntity entity : entities) {
        QueueTask task = new SqliteEntityUpdateTask(entityManager, entity);
        queueTaskService.submit(task);
    }
}

// 不推荐：单个任务处理所有实体
public void batchUpdateAll(List<SomeEntity> entities) {
    // 这样会导致任务执行时间过长，阻塞队列
}
```

## 常见问题

### Q: 队列满了怎么办？

A: 如果设置了队列容量，队列满时会拒绝新任务。建议：
- 增加队列容量
- 使用无界队列（capacity=0）
- 监控队列大小，及时处理

### Q: 任务执行时间过长怎么办？

A: 建议将大任务拆分为小任务，或者使用异步提交，不等待完成。

### Q: 如何知道任务是否执行成功？

A: 使用 `submitAndWait()` 方法同步等待，或者检查返回的 `QueueTask` 对象的 `isSuccess()` 方法。

### Q: 重试次数设置多少合适？

A: 根据实际场景：
- SQLite 更新：3-5 次
- 网络请求：2-3 次
- 计算任务：0-1 次（通常不需要重试）

## 更多示例

查看 [README.md](README.md) 获取更多详细信息和高级用法。

