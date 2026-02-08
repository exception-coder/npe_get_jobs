# 任务执行状态管理使用指南

## 概述

本文档介绍任务执行状态管理功能的使用方法，包括：
1. 记录不同平台任务的当前执行步骤
2. 为任务代码补充执行标记
3. 支持前端查询任务状态
4. 支持前端终止任务执行

## 核心组件

### 1. TaskExecutionStep（任务执行步骤枚举）

定义了任务执行的各个阶段：

```java
public enum TaskExecutionStep {
    INIT("初始化", 0),
    LOGIN_CHECK("登录检查", 1),
    COLLECT_JOBS("采集岗位", 2),
    COLLECT_RECOMMEND_JOBS("采集推荐岗位", 3),
    LOAD_JOBS_FROM_DB("从数据库加载岗位", 4),
    FILTER_JOBS("过滤岗位", 5),
    DELIVER_JOBS("投递岗位", 6),
    COMPLETED("完成", 7),
    FAILED("失败", -1),
    TERMINATED("已终止", -2);
}
```

### 2. TaskExecutionManager（任务执行状态管理器）

负责管理各平台任务的执行状态：

- 记录任务当前执行步骤
- 提供任务终止标记
- 支持前端查询任务状态
- 支持前端终止任务执行

### 3. TaskExecutionController（任务执行状态控制器）

提供 REST API 接口：

- `GET /api/task-execution/status/{platform}` - 查询指定平台任务状态
- `GET /api/task-execution/status/all` - 查询所有平台任务状态
- `POST /api/task-execution/terminate/{platform}` - 终止指定平台任务
- `DELETE /api/task-execution/status/{platform}` - 清理指定平台任务状态
- `DELETE /api/task-execution/status/all` - 清理所有平台任务状态

## API 使用示例

### 1. 查询任务状态

**请求：**
```bash
GET /api/task-execution/status/boss
```

**响应：**
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

### 2. 查询所有平台任务状态

**请求：**
```bash
GET /api/task-execution/status/all
```

**响应：**
```json
{
  "success": true,
  "message": "查询成功",
  "data": {
    "boss": {
      "platform": "BOSS直聘",
      "platformCode": "boss",
      "currentStep": "DELIVER_JOBS",
      "stepDescription": "投递岗位（共50个）",
      "stepOrder": 6,
      "isTerminated": false,
      "terminateRequested": false,
      "startTime": "2026-02-04T10:30:00",
      "lastUpdateTime": "2026-02-04T10:35:00",
      "metadata": {}
    },
    "zhilian": {
      "platform": "智联招聘",
      "platformCode": "zhilian",
      "currentStep": "FILTER_JOBS",
      "stepDescription": "过滤岗位（共80个）",
      "stepOrder": 5,
      "isTerminated": false,
      "terminateRequested": false,
      "startTime": "2026-02-04T10:32:00",
      "lastUpdateTime": "2026-02-04T10:36:00",
      "metadata": {}
    }
  }
}
```

### 3. 终止任务

**请求：**
```bash
POST /api/task-execution/terminate/boss
```

**响应：**
```json
{
  "success": true,
  "message": "终止请求已发送，任务将在当前步骤完成后停止"
}
```

### 4. 清理任务状态

**请求：**
```bash
DELETE /api/task-execution/status/boss
```

**响应：**
```json
{
  "success": true,
  "message": "任务状态已清理"
}
```

## 代码集成示例

### 在 JobDeliveryService 中的使用

```java
public QuickDeliveryResult executeQuickDelivery(RecruitmentPlatformEnum platform) {
    // 1. 初始化任务状态
    taskExecutionManager.startTask(platform);
    taskExecutionManager.updateTaskStep(platform, TaskExecutionStep.INIT, "任务初始化");
    
    try {
        // 2. 登录检查
        taskExecutionManager.updateTaskStep(platform, TaskExecutionStep.LOGIN_CHECK, "检查登录状态");
        
        // 检查是否请求终止
        if (taskExecutionManager.isTerminateRequested(platform)) {
            return buildTerminatedResult(...);
        }
        
        boolean loginSuccess = recruitmentService.login();
        
        // 3. 采集岗位
        taskExecutionManager.updateTaskStep(platform, TaskExecutionStep.COLLECT_JOBS, "采集搜索岗位");
        
        // 检查是否请求终止
        if (taskExecutionManager.isTerminateRequested(platform)) {
            return buildTerminatedResult(...);
        }
        
        recruitmentService.collectJobs();
        
        // 4. 记录元数据
        taskExecutionManager.setTaskMetadata(platform, "totalScanned", totalScanned);
        
        // 5. 完成任务
        taskExecutionManager.completeTask(platform, true);
        
    } catch (Exception e) {
        // 标记任务失败
        taskExecutionManager.completeTask(platform, false);
    }
}
```

## 前端集成示例

### Vue 3 示例

```vue
<template>
  <div class="task-status">
    <div v-if="taskStatus.hasTask">
      <h3>{{ taskStatus.platform }} - 任务执行中</h3>
      <p>当前步骤: {{ taskStatus.stepDescription }}</p>
      <el-progress :percentage="calculateProgress(taskStatus.stepOrder)" />
      
      <el-button 
        type="danger" 
        @click="terminateTask"
        :disabled="taskStatus.isTerminated"
      >
        终止任务
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const taskStatus = ref({});
let intervalId = null;

// 查询任务状态
const fetchTaskStatus = async () => {
  try {
    const response = await axios.get('/api/task-execution/status/boss');
    if (response.data.success) {
      taskStatus.value = response.data.data;
    }
  } catch (error) {
    console.error('查询任务状态失败', error);
  }
};

// 终止任务
const terminateTask = async () => {
  try {
    const response = await axios.post('/api/task-execution/terminate/boss');
    if (response.data.success) {
      ElMessage.success(response.data.message);
    }
  } catch (error) {
    console.error('终止任务失败', error);
  }
};

// 计算进度
const calculateProgress = (stepOrder) => {
  const totalSteps = 7; // 总共7个步骤
  return Math.round((stepOrder / totalSteps) * 100);
};

// 定时轮询任务状态
onMounted(() => {
  fetchTaskStatus();
  intervalId = setInterval(fetchTaskStatus, 2000); // 每2秒查询一次
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
```

## 注意事项

1. **终止时机**：任务终止是在检查点进行的，不会立即中断正在执行的操作
2. **状态清理**：任务完成后建议清理状态，避免内存占用
3. **并发安全**：TaskExecutionManager 使用 ConcurrentHashMap 保证线程安全
4. **元数据使用**：可以通过 metadata 存储任务执行过程中的统计数据

## 扩展建议

1. **WebSocket 推送**：可以集成 WebSocket 实现实时状态推送，避免轮询
2. **持久化**：可以将任务状态持久化到数据库，支持任务恢复
3. **更细粒度控制**：在循环中添加更多检查点，实现更精细的终止控制
4. **任务队列**：可以扩展为任务队列管理，支持任务排队和优先级

