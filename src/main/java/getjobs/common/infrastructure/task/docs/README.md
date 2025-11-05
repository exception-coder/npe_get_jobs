# 任务调度基础设施 - 文档中心

## 📚 文档列表

### 核心文档

1. **[任务中断机制说明.md](任务中断机制说明.md)** ⭐ 必读
   - 完整的任务取消和中断机制说明
   - 架构设计和实现细节
   - 包含完整的使用示例和最佳实践
   - **推荐首先阅读此文档**

2. **[任务取消快速参考.md](任务取消快速参考.md)** 🚀 快速上手
   - 快速参考手册
   - 常用 API 速查
   - 常见错误和解决方案
   - **适合日常开发查阅**

3. **[任务取消方案对比.md](任务取消方案对比.md)** 🔬 深入研究
   - 多种取消方案对比分析
   - 适用场景和权衡考虑
   - 检查点位置建议
   - **适合架构设计和优化时参考**

## 🎯 快速导航

### 我想了解...

- **如何取消一个正在运行的任务？**
  → 查看 [任务取消快速参考.md](任务取消快速参考.md#快速开始)

- **任务取消的原理是什么？**
  → 查看 [任务中断机制说明.md](任务中断机制说明.md#中断机制说明)

- **如何在业务代码中支持取消？**
  → 查看 [任务中断机制说明.md](任务中断机制说明.md#业务层中断检查)

- **是否所有循环都需要检查中断？**
  → 查看 [任务取消方案对比.md](任务取消方案对比.md#何时需要添加取消检查点)

- **有哪些取消方案可选？**
  → 查看 [任务取消方案对比.md](任务取消方案对比.md#方案对比)

- **常见错误有哪些？**
  → 查看 [任务取消快速参考.md](任务取消快速参考.md#常见错误)

## 📖 推荐阅读顺序

### 初学者
1. [任务中断机制说明.md](任务中断机制说明.md) - 了解完整机制
2. [任务取消快速参考.md](任务取消快速参考.md) - 学习常用 API

### 开发者
1. [任务取消快速参考.md](任务取消快速参考.md) - 日常开发参考
2. [任务中断机制说明.md](任务中断机制说明.md) - 深入理解原理

### 架构师
1. [任务取消方案对比.md](任务取消方案对比.md) - 方案选型
2. [任务中断机制说明.md](任务中断机制说明.md) - 架构设计参考

## 🏗️ 模块结构

```
infrastructure/task/
├── docs/                          📚 文档目录（你在这里）
│   ├── README.md                 - 文档导航
│   ├── 任务中断机制说明.md        - 完整说明
│   ├── 任务取消快速参考.md        - 快速参考
│   └── 任务取消方案对比.md        - 方案对比
├── domain/                        领域模型层
│   ├── Task.java                 - 任务实体
│   ├── TaskConfig.java           - 任务配置
│   └── TaskNotification.java     - 任务通知
├── enums/                         枚举定义
│   └── TaskStatusEnum.java       - 任务状态
├── contract/                      契约接口层
│   ├── ScheduledTask.java        - 可调度任务接口
│   └── TaskNotificationListener.java - 监听器接口
├── executor/                      执行器层
│   ├── TaskExecutor.java         - 任务执行器 ⭐
│   └── UniqueTaskManager.java    - 唯一任务管理器
├── scheduler/                     调度服务层
│   └── TaskSchedulerService.java - 任务调度服务 ⭐
├── config/                        配置层
│   └── TaskInfrastructureConfig.java - Bean 配置
└── example/                       示例代码
    └── ...
```

## 🔑 核心特性

- ✅ **任务生命周期管理** - 完整的任务状态流转
- ✅ **任务取消支持** - 优雅地取消正在运行的任务
- ✅ **全局唯一约束** - 防止同类型任务并发执行
- ✅ **任务通知机制** - 监听任务状态变化
- ✅ **同步/异步执行** - 灵活的执行方式
- ✅ **超时控制** - 自动取消超时任务
- ✅ **任务查询** - 查询任务状态和列表

## 🚀 快速开始

### 1. 提交任务

```java
@Autowired
private TaskSchedulerService taskSchedulerService;

// 异步提交
Future<Task> future = taskSchedulerService.submitTaskAsync(scheduledTask);

// 获取 executionId
Task task = future.get(100, TimeUnit.MILLISECONDS);
String executionId = task.getExecutionId();
```

### 2. 取消任务

```java
// 取消任务
boolean cancelled = taskSchedulerService.cancelTask(executionId);
```

### 3. 查询任务

```java
// 查询单个任务
Optional<Task> task = taskSchedulerService.getTask(executionId);

// 获取运行中的任务
List<Task> runningTasks = taskSchedulerService.getRunningTasks();
```

## 📝 相关链接

- **源码**：`src/main/java/getjobs/common/infrastructure/task/`
- **示例**：`src/main/java/getjobs/common/infrastructure/task/example/`
- **配置**：`TaskInfrastructureConfig.java`

## 💬 反馈与贡献

如果你发现文档中的错误或有改进建议，欢迎：
1. 提出 Issue
2. 提交 Pull Request
3. 联系项目维护者

---

**最后更新**：2025-11-02  
**维护者**：getjobs team

