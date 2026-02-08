# 异步执行器模块

## 概述

异步执行器模块提供全局统一的异步任务执行线程池，用于统一管理、监控所有异步任务的执行状况和线程使用状况。

## 核心组件

### AsyncExecutorConfig
线程池配置类，负责创建全局的异步任务执行线程池。

### AsyncExecutorService
任务执行服务，提供统一的异步任务执行接口，并管理所有任务的执行状况。

### AsyncExecutorMonitor
监控组件，负责定期采集线程池的监控数据。

### AsyncExecutorProperties
配置属性类，通过 `application.yml` 进行配置。

### AsyncTaskInfo
任务信息类，用于记录和管理异步任务的执行情况。

### AsyncExecutorMonitorDTO
监控数据传输对象，用于返回线程池的实时监控信息。

## 配置说明

在 `application.yml` 中添加以下配置：

```yaml
async:
  executor:
    enabled: true                    # 是否启用（默认 true）
    core-pool-size: 4                # 核心线程数（默认 4，0 表示自动计算）
    max-pool-size: 8                 # 最大线程数（默认 8，0 表示自动计算）
    queue-capacity: 100              # 队列容量（默认 100）
    keep-alive-seconds: 60           # 线程空闲时间（默认 60 秒）
    thread-name-prefix: "async-exec-" # 线程名前缀（默认 "async-exec-"）
    wait-for-tasks-on-shutdown: true # 关闭时等待任务完成（默认 true）
    await-termination-seconds: 60     # 等待终止时间（默认 60 秒）
    monitor-enabled: true            # 是否启用监控（默认 true）
    monitor-interval-seconds: 5      # 监控采集间隔（默认 5 秒）
```

### 自动计算线程数

如果 `core-pool-size` 或 `max-pool-size` 设置为 0 或负数，系统会根据 CPU 核心数自动计算：

- **核心线程数**：CPU 核心数 × 2（最小为 4）
- **最大线程数**：核心线程数 × 2

## 使用示例

### 基本使用

```java
@Autowired
private AsyncExecutorService asyncExecutorService;

// 执行简单任务（无返回值）
String taskId = asyncExecutorService.execute("任务名称", () -> {
    // 任务逻辑
    System.out.println("执行任务");
});

// 执行带返回值的任务
Future<String> future = asyncExecutorService.submit("任务名称", () -> {
    return "任务结果";
});

// 获取任务信息
AsyncTaskInfo taskInfo = asyncExecutorService.getTaskInfo(taskId);

// 取消任务
boolean cancelled = asyncExecutorService.cancelTask(taskId);
```

### 获取监控数据

```java
@Autowired
private AsyncExecutorService asyncExecutorService;

// 获取线程池监控数据
AsyncExecutorMonitorDTO monitorData = asyncExecutorService.getMonitorData();

System.out.println("线程池大小: " + monitorData.getPoolSize());
System.out.println("活跃线程数: " + monitorData.getActiveCount());
System.out.println("队列中任务数: " + monitorData.getQueueSize());
System.out.println("线程池使用率: " + monitorData.getPoolUsage() + "%");
System.out.println("队列使用率: " + monitorData.getQueueUsage() + "%");
System.out.println("正在执行任务数: " + monitorData.getRunningTaskCount());
```

### 获取任务列表

```java
// 获取所有正在执行的任务
List<AsyncTaskInfo> runningTasks = asyncExecutorService.getRunningTasks();

// 获取所有等待执行的任务
List<AsyncTaskInfo> waitingTasks = asyncExecutorService.getWaitingTasks();
```

### 直接使用线程池

如果需要直接使用线程池，可以注入 `AsyncTaskExecutor`：

```java
@Autowired
@Qualifier("globalAsyncExecutor")
private AsyncTaskExecutor asyncTaskExecutor;

// 直接提交任务
asyncTaskExecutor.execute(() -> {
    // 任务逻辑
});
```

## 监控功能

### 自动监控

监控组件会定期采集线程池的监控数据并输出日志。监控间隔可通过 `monitor-interval-seconds` 配置。

### 监控指标

- 线程池大小（当前、核心、最大）
- 活跃线程数
- 任务统计（总数、已完成数、队列中等待数）
- 线程池和队列使用率
- 正在执行的任务列表
- 等待执行的任务列表

### 告警机制

当线程池使用率或队列使用率超过 80% 时，系统会自动输出警告日志。

## 任务状态

任务状态包括：

- **SUBMITTED**：已提交，等待执行
- **RUNNING**：正在执行
- **COMPLETED**：执行完成
- **FAILED**：执行失败
- **CANCELLED**：已取消

## 最佳实践

1. **合理配置线程数**：根据任务类型（CPU 密集型或 I/O 密集型）合理配置线程数
2. **监控线程池状态**：定期查看监控数据，及时发现问题
3. **处理异常**：在任务逻辑中妥善处理异常，避免影响其他任务
4. **清理任务信息**：对于长时间运行的应用，可以定期清理已完成的任务信息

## 注意事项

1. 线程池是全局共享的，所有任务都会使用同一个线程池
2. 任务信息会保存在内存中，长时间运行的应用需要注意内存使用
3. 关闭应用时会等待所有任务完成，确保数据不丢失
4. 监控功能默认启用，如果不需要可以关闭以节省资源

