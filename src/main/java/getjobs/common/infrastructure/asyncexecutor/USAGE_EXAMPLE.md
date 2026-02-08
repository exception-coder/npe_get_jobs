# 异步执行器使用示例

## 概述

本文档提供异步执行器模块的详细使用示例，包括基本使用、任务记录持久化、监控数据查询等。

## 1. 基本使用

### 1.1 执行简单任务

```java
@Service
public class MyService {
    
    @Autowired
    private AsyncExecutorService asyncExecutorService;
    
    public void doSomething() {
        // 执行异步任务（无返回值）
        String taskId = asyncExecutorService.execute("发送邮件", () -> {
            // 任务逻辑
            sendEmail();
        });
        
        log.info("任务已提交，任务ID: {}", taskId);
    }
}
```

### 1.2 执行带返回值的任务

```java
@Service
public class MyService {
    
    @Autowired
    private AsyncExecutorService asyncExecutorService;
    
    public void processData() {
        // 提交异步任务（有返回值）
        Future<String> future = asyncExecutorService.submit("数据处理", () -> {
            // 任务逻辑
            return processBusinessData();
        });
        
        try {
            // 等待任务完成并获取结果（可选）
            String result = future.get(30, TimeUnit.SECONDS);
            log.info("任务执行结果: {}", result);
        } catch (Exception e) {
            log.error("任务执行失败", e);
        }
    }
}
```

### 1.3 带描述的任务

```java
String taskId = asyncExecutorService.execute(
    "用户数据导出",
    "导出2025年1月的所有用户数据到Excel文件",
    () -> {
        exportUserDataToExcel();
    }
);
```

## 2. 任务管理

### 2.1 查询任务信息

```java
@Service
public class TaskManagementService {
    
    @Autowired
    private AsyncExecutorService asyncExecutorService;
    
    public void checkTaskStatus(String taskId) {
        // 获取任务信息
        AsyncTaskInfo taskInfo = asyncExecutorService.getTaskInfo(taskId);
        
        if (taskInfo != null) {
            log.info("任务名称: {}", taskInfo.getTaskName());
            log.info("任务状态: {}", taskInfo.getStatus());
            log.info("提交时间: {}", taskInfo.getSubmitTime());
            log.info("执行耗时: {} ms", taskInfo.getDuration());
        }
    }
}
```

### 2.2 取消任务

```java
public void cancelTaskIfNeeded(String taskId) {
    boolean cancelled = asyncExecutorService.cancelTask(taskId);
    if (cancelled) {
        log.info("任务已取消: {}", taskId);
    } else {
        log.warn("任务取消失败，可能已完成或不存在: {}", taskId);
    }
}
```

### 2.3 查询正在执行的任务

```java
public void listRunningTasks() {
    List<AsyncTaskInfo> runningTasks = asyncExecutorService.getRunningTasks();
    
    log.info("当前正在执行的任务数量: {}", runningTasks.size());
    runningTasks.forEach(task -> {
        log.info("- 任务ID: {}, 名称: {}, 开始时间: {}", 
            task.getTaskId(), 
            task.getTaskName(), 
            task.getStartTime());
    });
}
```

## 3. 监控功能

### 3.1 获取线程池监控数据

```java
@RestController
@RequestMapping("/api/monitoring")
public class MonitoringController {
    
    @Autowired
    private AsyncExecutorService asyncExecutorService;
    
    @GetMapping("/async-executor")
    public AsyncExecutorMonitorDTO getMonitorData() {
        return asyncExecutorService.getMonitorData();
    }
}
```

### 3.2 监控数据示例

```json
{
  "poolName": "async-exec-pool",
  "poolSize": 4,
  "corePoolSize": 4,
  "maximumPoolSize": 8,
  "activeCount": 2,
  "taskCount": 150,
  "completedTaskCount": 148,
  "queueSize": 3,
  "queueCapacity": 100,
  "queueRemainingCapacity": 97,
  "largestPoolSize": 6,
  "keepAliveTimeMs": 60000,
  "allowsCoreThreadTimeOut": false,
  "poolUsage": 50.00,
  "queueUsage": 3.00,
  "monitorTime": "2025-01-15T10:30:00Z",
  "runningTaskCount": 2,
  "waitingTaskCount": 3
}
```

## 4. 任务执行记录持久化

### 4.1 查询数据库中的任务记录

```java
@Service
public class TaskRecordService {
    
    @Autowired
    private AsyncTaskExecutionRecordRepository recordRepository;
    
    /**
     * 查询正在运行的任务
     */
    public List<AsyncTaskExecutionRecord> getRunningTasks() {
        return recordRepository.findRunningTasks();
    }
    
    /**
     * 查询指定时间范围内的任务
     */
    public List<AsyncTaskExecutionRecord> getTasksByTimeRange(
            Instant startTime, Instant endTime) {
        return recordRepository.findBySubmitTimeBetween(startTime, endTime);
    }
    
    /**
     * 统计任务执行情况
     */
    public void printTaskStatistics() {
        long runningCount = recordRepository.countRunningTasks();
        long waitingCount = recordRepository.countWaitingTasks();
        long completedCount = recordRepository.countByStatus("COMPLETED");
        long failedCount = recordRepository.countByStatus("FAILED");
        
        log.info("任务统计:");
        log.info("- 正在运行: {}", runningCount);
        log.info("- 等待执行: {}", waitingCount);
        log.info("- 已完成: {}", completedCount);
        log.info("- 失败: {}", failedCount);
    }
    
    /**
     * 查询平均执行时间
     */
    public void printAverageExecutionTime() {
        Double avgDuration = recordRepository.getAverageDuration();
        log.info("平均执行时间: {} ms", avgDuration);
    }
    
    /**
     * 查询失败次数最多的任务
     */
    public void printMostFailedTasks() {
        List<Object[]> results = recordRepository.findMostFailedTasks();
        log.info("失败次数最多的任务:");
        results.forEach(result -> {
            String taskName = (String) result[0];
            Long count = (Long) result[1];
            log.info("- {}: {} 次", taskName, count);
        });
    }
}
```

### 4.2 清理历史数据

```java
@Service
public class TaskCleanupService {
    
    @Autowired
    private AsyncTaskExecutionRecordRepository recordRepository;
    
    /**
     * 定期清理30天前的已完成任务
     */
    @Scheduled(cron = "0 0 2 * * ?") // 每天凌晨2点执行
    public void cleanupOldCompletedTasks() {
        Instant thirtyDaysAgo = Instant.now().minus(30, ChronoUnit.DAYS);
        
        int deletedCount = recordRepository.deleteByStatusAndCreatedAtBefore(
            "COMPLETED", thirtyDaysAgo);
        
        log.info("清理了 {} 条30天前的已完成任务记录", deletedCount);
    }
}
```

## 5. 直接使用线程池

### 5.1 注入 AsyncTaskExecutor

```java
@Service
public class DirectExecutorService {
    
    @Autowired
    @Qualifier("globalAsyncExecutor")
    private AsyncTaskExecutor asyncTaskExecutor;
    
    public void executeDirectly() {
        // 直接提交任务到线程池
        asyncTaskExecutor.execute(() -> {
            // 任务逻辑
            log.info("直接执行任务");
        });
    }
}
```

**注意**：直接使用线程池不会记录任务信息，推荐使用 `AsyncExecutorService` 以获得完整的监控功能。

## 6. 配置调优

### 6.1 开发环境配置

```yaml
# application-dev.yml
async:
  executor:
    enabled: true
    core-pool-size: 2
    max-pool-size: 4
    queue-capacity: 50
    monitor-enabled: true
    monitor-interval-seconds: 5

logging:
  level:
    getjobs.common.infrastructure.asyncexecutor: DEBUG
```

### 6.2 生产环境配置

```yaml
# application-prod.yml
async:
  executor:
    enabled: true
    core-pool-size: 8
    max-pool-size: 16
    queue-capacity: 200
    keep-alive-seconds: 120
    monitor-enabled: true
    monitor-interval-seconds: 30

logging:
  level:
    getjobs.common.infrastructure.asyncexecutor: WARN
```

## 7. 最佳实践

### 7.1 任务命名规范

```java
// 推荐：使用清晰的任务名称
asyncExecutorService.execute("用户注册邮件发送", () -> {
    sendRegistrationEmail(user);
});

// 不推荐：模糊的任务名称
asyncExecutorService.execute("任务1", () -> {
    doSomething();
});
```

### 7.2 异常处理

```java
asyncExecutorService.execute("数据同步", () -> {
    try {
        syncData();
    } catch (Exception e) {
        // 异常会自动记录到任务执行记录中
        log.error("数据同步失败", e);
        // 可以在这里添加补偿逻辑
        handleSyncFailure(e);
    }
});
```

### 7.3 长时间运行的任务

```java
// 对于长时间运行的任务，建议添加进度日志
asyncExecutorService.execute("大数据导出", () -> {
    log.info("开始导出数据...");
    
    for (int i = 0; i < totalBatches; i++) {
        exportBatch(i);
        log.info("已完成 {}/{} 批次", i + 1, totalBatches);
    }
    
    log.info("数据导出完成");
});
```

### 7.4 避免任务阻塞

```java
// 推荐：异步执行耗时操作
asyncExecutorService.execute("发送通知", () -> {
    sendNotification();
});

// 不推荐：在主线程中等待异步任务完成
Future<String> future = asyncExecutorService.submit("处理数据", () -> {
    return processData();
});
String result = future.get(); // 阻塞主线程
```

## 8. 监控告警

### 8.1 自定义告警

```java
@Component
public class CustomAsyncExecutorMonitor {
    
    @Autowired
    private AsyncExecutorService asyncExecutorService;
    
    @Scheduled(fixedRate = 60000) // 每分钟检查一次
    public void checkAndAlert() {
        AsyncExecutorMonitorDTO monitorData = asyncExecutorService.getMonitorData();
        
        // 检查队列使用率
        if (monitorData.getQueueUsage().compareTo(BigDecimal.valueOf(90)) > 0) {
            sendAlert("异步执行器队列使用率过高: " + monitorData.getQueueUsage() + "%");
        }
        
        // 检查失败任务数量
        long failedCount = recordRepository.countByStatus("FAILED");
        if (failedCount > 100) {
            sendAlert("异步任务失败数量过多: " + failedCount);
        }
    }
    
    private void sendAlert(String message) {
        // 发送告警（邮件、短信、钉钉等）
        log.error("🚨 告警: {}", message);
    }
}
```

## 9. 故障排查

### 9.1 查看监控日志

```bash
# 查看异步执行器的详细日志
tail -f logs/application.log | grep "异步执行器监控数据"
```

### 9.2 数据库查询

```sql
-- 查询最近失败的任务
SELECT * FROM async_task_execution_record 
WHERE status = 'FAILED' 
ORDER BY finish_time DESC 
LIMIT 10;

-- 查询长时间运行的任务
SELECT * FROM async_task_execution_record 
WHERE status = 'RUNNING' 
AND start_time < DATE_SUB(NOW(), INTERVAL 1 HOUR);
```

### 9.3 常见问题

1. **任务执行缓慢**
   - 检查线程池配置是否合理
   - 查看是否有大量任务在队列中等待
   - 检查是否有任务阻塞或死锁

2. **任务执行失败**
   - 查看 `exception_message` 和 `exception_stack_trace` 字段
   - 检查业务逻辑是否有异常
   - 确认资源（数据库、外部API等）是否可用

3. **内存占用过高**
   - 检查队列中等待的任务数量
   - 考虑调整队列容量或增加线程数
   - 定期清理历史任务记录

## 10. 性能优化建议

1. **合理配置线程池大小**
   - CPU 密集型：线程数 = CPU 核心数 + 1
   - I/O 密集型：线程数 = CPU 核心数 × 2 ~ 4

2. **避免过大的队列容量**
   - 队列容量过大会占用大量内存
   - 建议根据实际业务设置合理的队列容量

3. **定期清理历史数据**
   - 避免数据库表过大影响查询性能
   - 建议保留最近30-90天的数据

4. **使用连接池**
   - 对于数据库操作，确保使用连接池
   - 对于HTTP请求，使用HTTP客户端连接池

