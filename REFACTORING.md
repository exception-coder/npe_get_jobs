# Refactoring
所有代码结构变更都将记录在此文件中。

## [2025-09-29] 新增任务状态管理模块
### 背景
- 各招聘平台任务（登录、采集、过滤、投递）的执行状态分散在各自的 Service 中，缺乏统一的管理和查询机制。
- 前端或外部服务难以实时获取任务进度和结果。

### 变更内容
- **引入 Spring 事件机制**：
  - 创建了 `TaskUpdateEvent` 事件，用于在任务状态变更时发布通知。
  - 各平台 `TaskService`（`BossTaskService`, `Job51TaskService` 等）在关键节点（如开始、进行中、成功、失败）发布 `TaskUpdateEvent`。
- **新增 `task` 模块**：
  - `enums`：定义了 `TaskStage` (LOGIN, COLLECT, FILTER, DELIVER) 和 `TaskStatus` (STARTED, SUCCESS, FAILURE, IN_PROGRESS)。
  - `dto.TaskUpdatePayload`：作为事件的载体，封装了平台、阶段、状态、数量和消息等信息。
  - `service.TaskStatusService`：一个单例服务，使用 `ConcurrentHashMap` 存储各平台各阶段的最新状态，实现状态的集中管理。
  - `listener.TaskStatusListener`：监听 `TaskUpdateEvent` 事件，并调用 `TaskStatusService` 更新状态。
  - `controller.TaskStatusController`：提供 `/api/tasks/status` RESTful API，用于实时查询所有任务的当前状态。
- **重构各平台 `TaskService`**：
  - 移除了原有的本地状态管理逻辑（如 `taskStatusMap`）。
  - 注入 `ApplicationEventPublisher`，在 `login`, `collectJobs`, `filterJobs`, `deliverJobs` 等方法中发布状态更新事件。

### 影响
- **统一状态管理**：实现了所有平台任务状态的集中化、事件驱动式管理。
- **提高可观测性**：通过 RESTful API，可以方便地监控所有任务的实时进度。
- **解耦**：将状态管理逻辑与业务逻辑解耦，提高了代码的可维护性和扩展性。
- 外部接口保持不变，对现有业务逻辑无直接影响。

## [2025-09-29] 优化 PlaywrightService Context 管理
### 背景
- `PlaywrightService` 为每个招聘平台创建独立的 `BrowserContext`，导致启动时打开多个浏览器窗口，占用过多系统资源。
- 经过分析，各平台间的 `Context` 信息（如 Cookies、LocalStorage）并无干扰，无需严格隔离。

### 变更内容
- 将 `PlaywrightService` 的多 `BrowserContext` 实例重构为单一共享的 `BrowserContext`。
- 所有 `Page` 均在同一个 `BrowserContext` 中创建，减少了浏览器窗口的数量。
- 相应调整了 `init` 和 `close` 方法的逻辑，以适应单 `Context` 的管理模式。

### 影响
- 显著减少了应用启动时的资源消耗和浏览器窗口数量。
- 外部接口保持不变，对上层业务无影响。



## [2025-09-29] 将 PlaywrightUtil 重构为 PlaywrightService
### 背景
- `getjobs.utils.PlaywrightUtil` 工具类中逐渐包含了复杂的业务逻辑
- 难以进行单元测试，也不符合依赖注入与扩展的要求

### 变更内容
- 创建 `getjobs.common.service.PlaywrightService`，替代 `getjobs.utils.PlaywrightUtil`
- 支持按平台构建独立 Page 与 Context 
  - 通过平台参数动态创建 BrowserContext 和 Page，实现多平台会话隔离、Cookies 独立管理和个性化配置。
  - 保证各平台投递流程的稳定性，避免静态 util 时代多平台共享单一上下文带来的冲突和数据污染。
- 原有静态方法改为实例方法，并注入到需要的模块
- 迁移调用点，并删除过时的工具类

### 影响
- 无数据库结构变化
- 原有外部接口不受影响
