# AI 模型聚合健康检查 - 使用指南

## 📋 概述

AI 模型聚合健康检查模块能够**自动扫描 Spring 容器中所有的 `ChatModel` 实例**，并对它们进行并发健康检查。

### 特性

- ✅ **自动发现**：自动扫描容器中所有 AI 模型
- ✅ **并发检查**：多个模型同时检查，提高效率
- ✅ **灵活配置**：支持包含/排除特定模型
- ✅ **详细报告**：提供每个模型的详细状态
- ✅ **汇总统计**：展示整体健康状态和统计信息

## 🎯 当前项目配置

你的项目目前配置了 **2 个 AI 模型**：

### 1. OpenAI 模型
- **Bean 名称**：`chatgptAiChatModel`
- **配置文件**：`GptConfig.java`
- **类型**：OpenAI ChatGPT

### 2. Deepseek 模型
- **Bean 名称**：`deepseekChatModel`
- **配置文件**：`DeepseekGptConfig.java`
- **类型**：Deepseek

## 🚀 快速开始

### 1. 配置文件

配置已添加到 `application-actuator.yml`：

```yaml
health:
  ai-models:
    enabled: true                    # 启用健康检查
    check-type: PING                 # 检查类型
    connection-timeout: 5000
    response-timeout: 10000
    slow-response-threshold: 3000
    overall-timeout: 30000           # 所有模型检查的总超时
    test-message: "hello"
    
    # 包含的模型（为空则检查所有）
    included-models: []
    
    # 排除的模型
    excluded-models: []
```

### 2. 启动应用

启动后会看到详细的模型扫描日志：

```
═══════════════════════════════════════════════════════════
        AI 模型健康检查配置初始化
═══════════════════════════════════════════════════════════
启用状态: true
检查类型: PING
连接超时: 5000ms
响应超时: 10000ms
慢响应阈值: 3000ms
整体超时: 30000ms
───────────────────────────────────────────────────────────
发现的 AI 模型:
  ✓ chatgptAiChatModel (OpenAiChatModel)
  ✓ deepseekChatModel (OpenAiChatModel)
═══════════════════════════════════════════════════════════
```

### 3. 访问健康检查

```bash
# 查看所有模型的健康状态
curl http://localhost:8080/actuator/health/aiModels | jq '.'
```

## 📊 响应示例

### 所有模型健康

```json
{
  "status": "UP",
  "details": {
    "totalModels": 2,
    "checkedModels": 2,
    "healthyModels": 2,
    "unhealthyModels": 0,
    "checkType": "PING",
    "avgResponseTime": "245ms",
    "models": {
      "chatgptAiChatModel": {
        "status": "UP",
        "responseTime": "234ms",
        "responseStatus": "NORMAL",
        "beanName": "chatgptAiChatModel",
        "modelClass": "OpenAiChatModel",
        "modelType": "OpenAI",
        "baseUrl": "https://api.openai.com"
      },
      "deepseekChatModel": {
        "status": "UP",
        "responseTime": "256ms",
        "responseStatus": "NORMAL",
        "beanName": "deepseekChatModel",
        "modelClass": "OpenAiChatModel",
        "modelType": "Deepseek",
        "baseUrl": "https://api.deepseek.com"
      }
    }
  }
}
```

### 部分模型异常

```json
{
  "status": "DOWN",
  "details": {
    "totalModels": 2,
    "checkedModels": 2,
    "healthyModels": 1,
    "unhealthyModels": 1,
    "checkType": "PING",
    "avgResponseTime": "2634ms",
    "models": {
      "chatgptAiChatModel": {
        "status": "UP",
        "responseTime": "234ms",
        "responseStatus": "NORMAL",
        "beanName": "chatgptAiChatModel",
        "modelClass": "OpenAiChatModel",
        "modelType": "OpenAI"
      },
      "deepseekChatModel": {
        "status": "DOWN",
        "responseTime": "5034ms",
        "responseStatus": "SLOW",
        "error": "无法连接: Connection timeout",
        "beanName": "deepseekChatModel",
        "modelClass": "OpenAiChatModel",
        "modelType": "Deepseek"
      }
    }
  }
}
```

## ⚙️ 配置详解

### 检查类型

| 类型 | 说明 | 特点 | 推荐场景 |
|-----|------|------|---------|
| **PING** | 测试网络连接 | 快速、免费 | ✅ 生产环境 |
| **API_CALL** | 实际调用 API | 准确、收费 | 开发测试 |
| **MODEL_INFO** | 仅检查配置 | 最快、免费 | 配置验证 |

### 包含/排除配置

#### 场景 1：检查所有模型（默认）

```yaml
health:
  ai-models:
    included-models: []
    excluded-models: []
```

#### 场景 2：仅检查 OpenAI 模型

```yaml
health:
  ai-models:
    included-models:
      - chatgptAiChatModel
```

#### 场景 3：排除 Deepseek 模型

```yaml
health:
  ai-models:
    excluded-models:
      - deepseekChatModel
```

#### 场景 4：检查特定的多个模型

```yaml
health:
  ai-models:
    included-models:
      - chatgptAiChatModel
      - deepseekChatModel
```

## 🔍 与单模型检查的对比

### 单模型检查（原有）

- 端点：`/actuator/health/openAi`
- 仅检查 OpenAI 模型
- 配置：`health.openai.*`

### 聚合检查（新增）

- 端点：`/actuator/health/aiModels`
- 自动检查所有模型
- 配置：`health.ai-models.*`

### 推荐使用

| 场景 | 推荐 | 原因 |
|------|------|------|
| 单一模型 | 单模型检查 | 更简单直接 |
| 多个模型 | **聚合检查** | 自动发现，统一管理 |
| 生产环境 | **聚合检查** | 完整的健康视图 |

## 🎨 实际使用示例

### 示例 1：监控所有模型

```bash
#!/bin/bash
# 定期检查所有 AI 模型状态

while true; do
    response=$(curl -s http://localhost:8080/actuator/health/aiModels)
    
    # 检查整体状态
    status=$(echo $response | jq -r '.status')
    unhealthy=$(echo $response | jq -r '.details.unhealthyModels')
    
    echo "[$(date)] 状态: $status, 异常模型数: $unhealthy"
    
    if [ "$status" = "DOWN" ]; then
        echo "⚠️  检测到异常模型:"
        echo $response | jq '.details.models | to_entries[] | select(.value.status == "DOWN") | .key'
    fi
    
    sleep 60
done
```

### 示例 2：Spring Boot 集成

```java
@Component
@Slf4j
public class AiModelsHealthMonitor {
    
    @Autowired
    private HealthEndpoint healthEndpoint;
    
    @Scheduled(fixedRate = 60000)
    public void monitorAiModels() {
        HealthComponent health = healthEndpoint.healthForPath("aiModels");
        
        if (health.getStatus() == Status.DOWN) {
            log.error("AI 模型检查失败");
            // 发送告警
            sendAlert(health);
        }
    }
}
```

### 示例 3：前端监控面板

```javascript
// 定期检查并更新 UI
async function updateAiModelsStatus() {
    const response = await fetch('/actuator/health/aiModels');
    const data = await response.json();
    
    // 更新整体状态
    document.getElementById('overallStatus').textContent = data.status;
    document.getElementById('healthyModels').textContent = data.details.healthyModels;
    document.getElementById('totalModels').textContent = data.details.totalModels;
    
    // 更新各模型状态
    const modelsContainer = document.getElementById('models');
    modelsContainer.innerHTML = '';
    
    for (const [name, info] of Object.entries(data.details.models)) {
        const modelCard = createModelCard(name, info);
        modelsContainer.appendChild(modelCard);
    }
}

setInterval(updateAiModelsStatus, 30000); // 每 30 秒更新
```

## 🔧 高级配置

### 1. 调整超时时间

```yaml
health:
  ai-models:
    connection-timeout: 3000       # 缩短单个模型连接超时
    overall-timeout: 15000         # 缩短整体超时
```

### 2. 生产环境配置

```yaml
health:
  ai-models:
    enabled: true
    check-type: PING               # 使用 PING，不产生费用
    connection-timeout: 3000
    slow-response-threshold: 2000
```

### 3. 开发环境配置

```yaml
health:
  ai-models:
    enabled: true
    check-type: API_CALL          # 使用实际调用
    test-message: "test"
```

### 4. 禁用特定模型检查

```yaml
health:
  ai-models:
    excluded-models:
      - deepseekChatModel         # 暂时不检查 Deepseek
```

## 📈 监控指标说明

### 顶层指标

| 字段 | 类型 | 说明 |
|------|------|------|
| `status` | String | 整体状态（UP/DOWN） |
| `totalModels` | Number | 容器中发现的模型总数 |
| `checkedModels` | Number | 实际检查的模型数 |
| `healthyModels` | Number | 健康的模型数 |
| `unhealthyModels` | Number | 异常的模型数 |
| `checkType` | String | 使用的检查类型 |
| `avgResponseTime` | String | 平均响应时间 |

### 单个模型指标

| 字段 | 类型 | 说明 |
|------|------|------|
| `status` | String | 模型状态（UP/DOWN） |
| `responseTime` | String | 响应时间 |
| `responseStatus` | String | 响应状态（NORMAL/SLOW） |
| `beanName` | String | Bean 名称 |
| `modelClass` | String | 模型类名 |
| `modelType` | String | 模型类型 |
| `baseUrl` | String | API 地址 |
| `error` | String | 错误信息（如果有） |

## 🐛 故障排查

### 问题 1：未发现任何模型

**检查**：
```bash
# 查看启动日志
tail -f logs/application.log | grep "发现的 AI 模型"
```

**可能原因**：
- 模型 Bean 未正确创建
- 配置文件错误
- Spring 扫描路径问题

### 问题 2：某个模型未被检查

**检查配置**：
```yaml
health:
  ai-models:
    # 确保没有在排除列表中
    excluded-models: []
    
    # 如果配置了包含列表，确保模型在列表中
    included-models:
      - chatgptAiChatModel
      - deepseekChatModel
```

### 问题 3：检查超时

**调整超时时间**：
```yaml
health:
  ai-models:
    connection-timeout: 10000      # 增加连接超时
    overall-timeout: 60000         # 增加整体超时
```

## 🎯 最佳实践

### 1. 生产环境

```yaml
health:
  ai-models:
    enabled: true
    check-type: PING              # 免费快速
    connection-timeout: 3000
    overall-timeout: 15000
    slow-response-threshold: 2000
```

### 2. 监控告警

- 设置定时任务检查健康状态
- 配置告警规则（邮件/钉钉/短信）
- 记录历史数据用于分析

### 3. 性能优化

- 使用 PING 或 MODEL_INFO 检查类型
- 适当调整超时时间
- 考虑禁用不常用的模型

## 📝 与现有功能的兼容性

两种健康检查可以**同时使用**：

```yaml
health:
  # 单模型检查（保留）
  openai:
    enabled: true
    check-type: PING
  
  # 聚合检查（新增）
  ai-models:
    enabled: true
    check-type: PING
```

访问端点：
```bash
# 单模型检查
curl http://localhost:8080/actuator/health/openAi

# 聚合检查
curl http://localhost:8080/actuator/health/aiModels

# 整体健康状态（包含两者）
curl http://localhost:8080/actuator/health
```

## 🚀 添加新模型

当你添加新的 AI 模型时，**无需修改健康检查配置**，它会自动被发现和检查！

例如，添加 Claude 模型：

```java
@Configuration
public class ClaudeConfig {
    
    @Bean("claudeChatModel")
    public ChatModel claudeChatModel() {
        // 配置 Claude 模型
        return new ClaudeChatModel(...);
    }
}
```

启动后自动检测：
```
发现的 AI 模型:
  ✓ chatgptAiChatModel (OpenAiChatModel)
  ✓ deepseekChatModel (OpenAiChatModel)
  ✓ claudeChatModel (ClaudeChatModel)    ← 自动发现
```

---

**文档版本**: 1.0.0  
**创建日期**: 2025-11-05  
**适用模型**: OpenAI, Deepseek, 以及所有实现 ChatModel 接口的模型

