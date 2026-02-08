# 任务执行状态管理 - 快速参考

## 📋 核心组件

| 组件 | 路径 | 说明 |
|------|------|------|
| TaskExecutionStep | `common/enums/TaskExecutionStep.java` | 任务执行步骤枚举 |
| TaskExecutionManager | `service/TaskExecutionManager.java` | 任务状态管理器 |
| TaskExecutionController | `controller/TaskExecutionController.java` | REST API 控制器 |
| JobDeliveryService | `service/JobDeliveryService.java` | 已集成状态管理 |

## 🔄 执行步骤

| 步骤 | 枚举值 | 顺序 | 说明 |
|------|--------|------|------|
| 初始化 | INIT | 0 | 任务初始化 |
| 登录检查 | LOGIN_CHECK | 1 | 检查登录状态 |
| 采集岗位 | COLLECT_JOBS | 2 | 采集搜索岗位 |
| 采集推荐 | COLLECT_RECOMMEND_JOBS | 3 | 采集推荐岗位 |
| 加载数据 | LOAD_JOBS_FROM_DB | 4 | 从数据库加载 |
| 过滤岗位 | FILTER_JOBS | 5 | 过滤岗位 |
| 投递岗位 | DELIVER_JOBS | 6 | 执行投递 |
| 完成 | COMPLETED | 7 | 任务完成 |
| 失败 | FAILED | -1 | 任务失败 |
| 已终止 | TERMINATED | -2 | 用户终止 |

## 🌐 API 接口

### 查询任务状态
```bash
GET /api/task-execution/status/{platform}
# platform: boss, zhilian, job51, liepin
```

### 查询所有任务
```bash
GET /api/task-execution/status/all
```

### 终止任务
```bash
POST /api/task-execution/terminate/{platform}
```

### 清理状态
```bash
DELETE /api/task-execution/status/{platform}
DELETE /api/task-execution/status/all
```

## 💻 代码示例

### 后端 - 开始任务
```java
// 1. 开始任务
taskExecutionManager.startTask(platform);

// 2. 更新步骤
taskExecutionManager.updateTaskStep(platform, TaskExecutionStep.LOGIN_CHECK);

// 3. 检查终止
if (taskExecutionManager.isTerminateRequested(platform)) {
    return buildTerminatedResult(...);
}

// 4. 记录元数据
taskExecutionManager.setTaskMetadata(platform, "totalScanned", 100);

// 5. 完成任务
taskExecutionManager.completeTask(platform, true);
```

### 前端 - 查询状态
```javascript
// 查询状态
const response = await axios.get('/api/task-execution/status/boss');
const status = response.data.data;

// 终止任务
await axios.post('/api/task-execution/terminate/boss');

// 清理状态
await axios.delete('/api/task-execution/status/boss');
```

## 📊 响应数据结构

```json
{
  "success": true,
  "message": "查询成功",
  "data": {
    "platform": "BOSS直聘",
    "platformCode": "boss",
    "hasTask": true,
    "currentStep": "DELIVER_JOBS",
    "stepDescription": "投递岗位（共50个）",
    "stepOrder": 6,
    "isTerminated": false,
    "terminateRequested": false,
    "startTime": "2026-02-04T10:30:00",
    "lastUpdateTime": "2026-02-04T10:35:00",
    "metadata": {
      "totalScanned": 100,
      "filteredCount": 50,
      "skippedCount": 50,
      "successCount": 30
    }
  }
}
```

## ⚡ 关键方法

### TaskExecutionManager

| 方法 | 说明 |
|------|------|
| `startTask(platform)` | 开始任务 |
| `updateTaskStep(platform, step)` | 更新步骤 |
| `updateTaskStep(platform, step, desc)` | 更新步骤（带描述） |
| `setTaskMetadata(platform, key, value)` | 设置元数据 |
| `isTerminateRequested(platform)` | 检查是否终止 |
| `requestTerminate(platform)` | 请求终止 |
| `getTaskStatus(platform)` | 获取状态 |
| `getAllTaskStatus()` | 获取所有状态 |
| `completeTask(platform, success)` | 完成任务 |
| `clearTaskStatus(platform)` | 清理状态 |

## 🎯 使用场景

### 场景1：正常执行流程
```
开始 → 登录 → 采集 → 过滤 → 投递 → 完成
```

### 场景2：用户终止
```
开始 → 登录 → 采集 → [用户点击终止] → 已终止
```

### 场景3：执行失败
```
开始 → 登录 → [异常] → 失败
```

## ⚠️ 注意事项

1. **终止时机**：在检查点终止，不会立即中断
2. **状态清理**：任务完成后建议清理状态
3. **并发安全**：支持多平台并发执行
4. **元数据**：可存储任意统计数据

## 🔧 调试技巧

### 查看日志
```bash
# 查看任务执行日志
tail -f logs/application.log | grep "任务"
```

### 测试终止功能
```bash
# 1. 启动任务
curl -X POST http://localhost:8080/api/boss/quick-delivery

# 2. 查询状态
curl http://localhost:8080/api/task-execution/status/boss

# 3. 终止任务
curl -X POST http://localhost:8080/api/task-execution/terminate/boss

# 4. 再次查询状态
curl http://localhost:8080/api/task-execution/status/boss
```

## 📚 相关文档

- [详细使用指南](./TASK_EXECUTION_GUIDE.md)
- [实现总结](./TASK_EXECUTION_SUMMARY.md)

