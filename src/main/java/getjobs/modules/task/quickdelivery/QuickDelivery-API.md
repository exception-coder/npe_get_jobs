# 快速投递任务 API 文档

## 概述

快速投递任务 API 提供完整的任务生命周期管理功能，支持提交、取消、查询任务。

**Base URL**: `/api/task/quick-delivery`

## 📋 API 列表

### 1. 任务提交接口

#### 1.1 提交指定平台的任务

```http
POST /api/task/quick-delivery/submit/{platformCode}
```

**路径参数**：
- `platformCode`: 平台代码（`boss` / `zhilian` / `51job` / `liepin`）

**响应示例**：
```json
{
  "executionId": "a1b2c3d4e5f6...",
  "config": {
    "taskName": "Boss直聘快速投递",
    "taskType": "QUICK_DELIVERY_BOSS",
    "description": "自动采集、过滤、投递Boss直聘岗位"
  },
  "status": "RUNNING",
  "startTime": "2025-11-03T10:30:00"
}
```

#### 1.2 提交 Boss 直聘任务

```http
POST /api/task/quick-delivery/submit/boss
```

#### 1.3 提交智联招聘任务

```http
POST /api/task/quick-delivery/submit/zhilian
```

#### 1.4 提交 51job 任务

```http
POST /api/task/quick-delivery/submit/51job
```

#### 1.5 提交猎聘任务

```http
POST /api/task/quick-delivery/submit/liepin
```

#### 1.6 提交所有平台任务

```http
POST /api/task/quick-delivery/submit/all
```

---

### 2. 任务管理接口

#### 2.1 取消任务 ⭐

```http
DELETE /api/task/quick-delivery/cancel/{executionId}
```

**路径参数**：
- `executionId`: 任务执行ID（从提交接口返回）

**响应示例**：
```json
{
  "executionId": "a1b2c3d4e5f6...",
  "cancelled": true,
  "message": "任务已成功取消"
}
```

**响应字段说明**：
- `cancelled`: `true` 表示成功取消，`false` 表示任务未找到或已完成

#### 2.2 查询任务状态 ⭐

```http
GET /api/task/quick-delivery/status/{executionId}
```

**路径参数**：
- `executionId`: 任务执行ID

**响应示例（运行中）**：
```json
{
  "executionId": "a1b2c3d4e5f6...",
  "taskName": "Boss直聘快速投递",
  "taskType": "QUICK_DELIVERY_BOSS",
  "status": "RUNNING",
  "description": "自动采集、过滤、投递Boss直聘岗位",
  "isRunning": true,
  "isCompleted": false,
  "startTime": "2025-11-03T10:30:00"
}
```

**响应示例（已完成）**：
```json
{
  "executionId": "a1b2c3d4e5f6...",
  "taskName": "Boss直聘快速投递",
  "taskType": "QUICK_DELIVERY_BOSS",
  "status": "SUCCESS",
  "description": "自动采集、过滤、投递Boss直聘岗位",
  "isRunning": false,
  "isCompleted": true,
  "startTime": "2025-11-03T10:30:00",
  "endTime": "2025-11-03T10:45:00"
}
```

**响应示例（已取消）**：
```json
{
  "executionId": "a1b2c3d4e5f6...",
  "taskName": "Boss直聘快速投递",
  "taskType": "QUICK_DELIVERY_BOSS",
  "status": "CANCELLED",
  "description": "自动采集、过滤、投递Boss直聘岗位",
  "isRunning": false,
  "isCompleted": true,
  "startTime": "2025-11-03T10:30:00",
  "endTime": "2025-11-03T10:32:00"
}
```

**任务状态说明**：
- `PENDING`: 待执行
- `RUNNING`: 运行中（此状态下可以取消）
- `SUCCESS`: 成功完成
- `FAILED`: 执行失败
- `CANCELLED`: 已取消

#### 2.3 获取运行中的任务列表

```http
GET /api/task/quick-delivery/running
```

**响应示例**：
```json
{
  "count": 2,
  "tasks": [
    {
      "executionId": "a1b2c3d4e5f6...",
      "taskName": "Boss直聘快速投递",
      "taskType": "QUICK_DELIVERY_BOSS",
      "status": "RUNNING",
      "description": "自动采集、过滤、投递Boss直聘岗位",
      "startTime": "2025-11-03T10:30:00"
    },
    {
      "executionId": "b2c3d4e5f6a1...",
      "taskName": "智联招聘快速投递",
      "taskType": "QUICK_DELIVERY_ZHILIAN",
      "status": "RUNNING",
      "description": "自动采集、过滤、投递智联招聘岗位",
      "startTime": "2025-11-03T10:31:00"
    }
  ]
}
```

#### 2.4 获取运行中的任务数量

```http
GET /api/task/quick-delivery/running/count
```

**响应示例**：
```json
{
  "count": 2
}
```

---

## 🔥 使用示例

### 场景 1: 完整的任务提交和监控流程

```bash
# 1. 提交任务
curl -X POST http://localhost:8080/api/task/quick-delivery/submit/boss

# 响应（保存 executionId）
{
  "executionId": "a1b2c3d4e5f6...",
  "status": "RUNNING",
  ...
}

# 2. 定期查询任务状态（轮询）
curl http://localhost:8080/api/task/quick-delivery/status/a1b2c3d4e5f6...

# 3. 如果需要取消
curl -X DELETE http://localhost:8080/api/task/quick-delivery/cancel/a1b2c3d4e5f6...
```

### 场景 2: 监控所有运行中的任务

```bash
# 查看当前有多少任务在运行
curl http://localhost:8080/api/task/quick-delivery/running/count

# 查看运行中任务的详细信息
curl http://localhost:8080/api/task/quick-delivery/running
```

### 场景 3: JavaScript 前端集成

```javascript
class QuickDeliveryAPI {
    constructor(baseUrl = 'http://localhost:8080') {
        this.baseUrl = baseUrl;
    }

    // 提交任务
    async submitTask(platform) {
        const response = await fetch(
            `${this.baseUrl}/api/task/quick-delivery/submit/${platform}`,
            { method: 'POST' }
        );
        const task = await response.json();
        return task.executionId;
    }

    // 查询任务状态
    async getTaskStatus(executionId) {
        const response = await fetch(
            `${this.baseUrl}/api/task/quick-delivery/status/${executionId}`
        );
        return await response.json();
    }

    // 取消任务
    async cancelTask(executionId) {
        const response = await fetch(
            `${this.baseUrl}/api/task/quick-delivery/cancel/${executionId}`,
            { method: 'DELETE' }
        );
        return await response.json();
    }

    // 获取运行中的任务
    async getRunningTasks() {
        const response = await fetch(
            `${this.baseUrl}/api/task/quick-delivery/running`
        );
        return await response.json();
    }

    // 轮询任务状态直到完成
    async waitForCompletion(executionId, intervalMs = 2000) {
        while (true) {
            const task = await this.getTaskStatus(executionId);
            
            if (task.isCompleted) {
                return task;
            }
            
            await new Promise(resolve => setTimeout(resolve, intervalMs));
        }
    }
}

// 使用示例
const api = new QuickDeliveryAPI();

// 提交并等待完成
async function runTask() {
    try {
        // 1. 提交任务
        const executionId = await api.submitTask('boss');
        console.log('任务已提交:', executionId);
        
        // 2. 等待完成（可以在中途取消）
        const result = await api.waitForCompletion(executionId);
        console.log('任务完成:', result);
        
    } catch (error) {
        console.error('任务执行失败:', error);
    }
}

// 取消任务
async function cancelRunningTask(executionId) {
    const result = await api.cancelTask(executionId);
    console.log('取消结果:', result);
}

// 监控所有任务
async function monitorTasks() {
    const { count, tasks } = await api.getRunningTasks();
    console.log(`当前有 ${count} 个任务运行中`);
    tasks.forEach(task => {
        console.log(`- ${task.taskName}: ${task.status}`);
    });
}
```

---

## 🎯 最佳实践

### 1. 保存 executionId
提交任务后立即保存 `executionId`，用于后续查询和取消：

```javascript
const task = await submitTask('boss');
localStorage.setItem('currentTaskId', task.executionId);
```

### 2. 定期轮询状态
使用定时器定期查询任务状态：

```javascript
const intervalId = setInterval(async () => {
    const status = await getTaskStatus(executionId);
    
    if (status.isCompleted) {
        clearInterval(intervalId);
        handleTaskCompleted(status);
    }
}, 2000); // 每2秒查询一次
```

### 3. 用户取消时清理
用户点击取消时，记得清理定时器：

```javascript
async function handleUserCancel(executionId, intervalId) {
    // 1. 取消任务
    await cancelTask(executionId);
    
    // 2. 清理定时器
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    // 3. 清理本地存储
    localStorage.removeItem('currentTaskId');
}
```

### 4. 错误处理
始终添加错误处理：

```javascript
try {
    const result = await api.cancelTask(executionId);
    if (result.cancelled) {
        showSuccess('任务已取消');
    } else {
        showWarning('任务已完成或未找到');
    }
} catch (error) {
    showError('取消失败: ' + error.message);
}
```

---

## ⚠️ 注意事项

1. **全局唯一任务**
   - 每个平台的快速投递任务是全局唯一的
   - 同一平台同时只能运行一个任务
   - 尝试提交重复任务会失败

2. **任务取消**
   - 只有 `RUNNING` 状态的任务可以取消
   - 取消是协作机制，需要业务代码配合
   - 取消后任务状态变为 `CANCELLED`

3. **任务查询**
   - 只能查询正在运行的任务
   - 已完成的任务会从缓存中移除
   - 建议在任务运行期间轮询状态

4. **并发控制**
   - Boss直聘服务已实现中断检查
   - 其他平台服务尚未完全实现
   - 取消响应速度取决于业务代码的检查频率

---

## 📚 相关文档

- [任务中断机制说明](../../common/infrastructure/task/docs/任务中断机制说明.md)
- [任务取消快速参考](../../common/infrastructure/task/docs/任务取消快速参考.md)
- [任务取消方案对比](../../common/infrastructure/task/docs/任务取消方案对比.md)

---

**最后更新**: 2025-11-03  
**维护者**: getjobs team

