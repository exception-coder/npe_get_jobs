# 快速投递任务模块 (Quick Delivery Task Module)

## 模块概述

快速投递任务模块负责执行所有招聘平台的快速投递任务。该模块遵循基础设施层的任务调度框架，为每个平台提供独立的、全局唯一的投递任务实现。

## 核心特性

1. **平台独立**: 为每个招聘平台提供独立的任务实现
2. **全局唯一**: 每个平台的投递任务在同一时刻只能执行一个，避免并发冲突
3. **统一管理**: 通过 `QuickDeliveryScheduler` 统一管理所有平台的投递任务
4. **状态跟踪**: 支持任务执行状态的实时跟踪和查询
5. **灵活配置**: 支持多种投递参数配置，如最大投递数量、延迟时间等
6. **一键投递**: 通过 `JobDeliveryService` 自动完成"采集 → 过滤 → 投递"完整流程

## 模块结构

```text
quickdelivery/
├── domain/                 # 任务领域层
│   ├── BossQuickDeliveryTask.java          # Boss直聘快速投递任务
│   ├── ZhilianQuickDeliveryTask.java       # 智联招聘快速投递任务
│   ├── Job51QuickDeliveryTask.java         # 51job快速投递任务
│   └── LiepinQuickDeliveryTask.java        # 猎聘快速投递任务
├── service/                # 服务层
│   └── QuickDeliveryScheduler.java         # 快速投递任务调度服务
├── dto/                    # 数据传输对象
│   ├── QuickDeliveryRequest.java           # 快速投递请求参数
│   ├── QuickDeliveryResult.java            # 快速投递结果
│   └── QuickDeliveryStatus.java            # 快速投递任务状态
├── web/                    # Web控制器
│   └── QuickDeliveryController.java        # 快速投递HTTP接口
└── README.md              # 模块说明文档

外部依赖服务（位于 service 包）：
└── JobDeliveryService.java                  # 一键投递整合服务
```

## 支持的平台

基于 `RecruitmentPlatformEnum`，目前支持以下平台：

- **Boss直聘** (BOSS_ZHIPIN)
- **智联招聘** (ZHILIAN_ZHAOPIN)
- **51job** (JOB_51)
- **猎聘** (LIEPIN)

## 使用示例

### 1. 使用一键投递服务（推荐）

`JobDeliveryService` 自动执行完整的投递流程：登录检查 → 采集岗位 → 过滤岗位 → 执行投递

```java
@Autowired
private JobDeliveryService jobDeliveryService;

// 执行Boss直聘一键投递
QuickDeliveryResult result = jobDeliveryService.executeQuickDelivery(
    RecruitmentPlatformEnum.BOSS_ZHIPIN
);

// 查看投递结果
System.out.println("总扫描: " + result.getTotalScanned());
System.out.println("成功: " + result.getSuccessCount());
System.out.println("失败: " + result.getFailedCount());
System.out.println("跳过: " + result.getSkippedCount());
System.out.println("成功率: " + result.getSuccessRate() + "%");
System.out.println("耗时: " + result.getFormattedExecutionTime());

// 执行所有平台一键投递
Map<RecruitmentPlatformEnum, QuickDeliveryResult> results = 
    jobDeliveryService.executeAllPlatformsQuickDelivery();
```

### 2. 使用任务调度器提交任务

通过任务调度框架提交快速投递任务，支持任务生命周期管理：

```java
@Autowired
private QuickDeliveryScheduler quickDeliveryScheduler;

// 提交Boss直聘快速投递任务
Task task = quickDeliveryScheduler.submitBossQuickDelivery();

// 或者通过平台枚举提交
Task task = quickDeliveryScheduler.submitQuickDeliveryTask(
    RecruitmentPlatformEnum.BOSS_ZHIPIN
);

// 提交所有平台的快速投递任务（会按顺序执行）
quickDeliveryScheduler.submitAllPlatformsQuickDelivery();
```

### 3. 使用HTTP接口

```bash
# 提交Boss直聘快速投递任务
curl -X POST http://localhost:8080/api/task/quick-delivery/submit/boss

# 提交智联招聘快速投递任务
curl -X POST http://localhost:8080/api/task/quick-delivery/submit/zhilian

# 提交所有平台快速投递任务
curl -X POST http://localhost:8080/api/task/quick-delivery/submit/all

# 通过平台代码提交
curl -X POST http://localhost:8080/api/task/quick-delivery/submit/liepin
```

### 4. 查询任务执行结果

```java
// 获取任务执行状态
if (task.getStatus() == TaskStatusEnum.SUCCESS) {
    System.out.println("投递成功: " + task.getResult());
} else if (task.getStatus() == TaskStatusEnum.FAILED) {
    System.out.println("投递失败: " + task.getException().getMessage());
} else if (task.getStatus() == TaskStatusEnum.SKIPPED) {
    System.out.println("任务被跳过（可能有相同任务正在执行）");
}
```

## 任务配置说明

每个平台的快速投递任务都具有以下配置：

| 配置项 | 说明 | 默认值 |
|-------|------|--------|
| taskName | 任务名称 | "{平台名称}快速投递任务" |
| taskType | 任务类型 | "QUICK_DELIVERY_{平台代码}" |
| globalUnique | 是否全局唯一 | true |
| timeout | 超时时间 | 1800000ms (30分钟) |
| description | 任务描述 | "执行{平台名称}平台的快速投递任务" |

## 核心服务说明

### JobDeliveryService - 一键投递整合服务

`JobDeliveryService` 是快速投递的核心服务，负责整合调度对应平台的采集、过滤、投递，完成一键投递逻辑。

**核心流程**：

1. **登录检查** - 调用 `RecruitmentService.login(config)` 检查登录状态
2. **采集岗位** - 调用 `RecruitmentService.collectJobs(config)` 采集搜索岗位
   - 如果配置了推荐职位，还会调用 `collectRecommendJobs(config)` 采集推荐岗位
3. **过滤岗位** - 调用 `RecruitmentService.filterJobs(jobs, config)` 过滤不符合条件的岗位
4. **执行投递** - 调用 `RecruitmentService.deliverJobs(jobs, config)` 执行实际投递
5. **返回结果** - 返回 `QuickDeliveryResult` 包含详细的投递统计信息

**支持的平台**：
- Boss直聘 (`BossRecruitmentServiceImpl`)
- 智联招聘 (`ZhiLianRecruitmentServiceImpl`)
- 51job (`Job51RecruitmentServiceImpl`)
- 猎聘 (`LiepinRecruitmentServiceImpl`)

**结果统计**：
- 总扫描数 (`totalScanned`)
- 成功投递数 (`successCount`)
- 失败投递数 (`failedCount`)
- 跳过数 (`skippedCount`)
- 成功率 (`successRate`)
- 执行耗时 (`executionTimeMillis`)

## 扩展开发指南

### 添加新平台支持

1. 在 `RecruitmentPlatformEnum` 中添加新的平台枚举
2. 实现 `RecruitmentService` 接口，提供该平台的采集、过滤、投递逻辑
3. 在 `domain/` 目录下创建新的任务类，实现 `ScheduledTask` 接口
4. 在 `QuickDeliveryScheduler` 中注入新的任务类，并在 `submitQuickDeliveryTask` 方法的 switch 语句中添加对应分支
5. 在 `JobDeliveryService` 的 `getRecruitmentService` 方法中添加新平台的映射

## 注意事项

1. **全局唯一性**: 每个平台的投递任务在同一时刻只能执行一个。如果尝试提交相同平台的任务时已有任务在执行，新任务会被跳过（状态为 SKIPPED）。

2. **任务超时**: 默认超时时间为30分钟，如果任务执行时间超过此限制，任务将被中断。可以根据实际需要调整超时时间。

3. **异常处理**: 任务执行过程中的异常会被捕获并记录在任务对象中，不会影响其他任务的执行。

4. **依赖注入**: 后续实现具体投递逻辑时，需要在各任务类中注入相应的服务（如 JobService、DeliveryService 等）。

## 版本历史

- v1.0.0 (2024-xx-xx): 初始版本，创建快速投递任务模块框架

## 作者

getjobs team
