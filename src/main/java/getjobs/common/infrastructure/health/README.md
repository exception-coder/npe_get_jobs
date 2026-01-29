# OpenAI 健康检查监控模块

## 📋 概述

基于 Spring Boot Actuator 的 OpenAI API 健康监控模块，提供实时的 API 可用性检查和性能监控。

## ✨ 主要特性

- 🔍 **多种检查策略**：支持 PING、API_CALL、MODEL_LIST 三种检查方式
- ⚡ **响应时间监控**：实时监控 API 响应时间，识别慢响应
- 🎯 **灵活配置**：支持自定义超时时间、检查类型等参数
- 📊 **详细报告**：提供完整的健康检查详情，包括配置状态、错误信息等
- 🔐 **安全性**：不会在响应中暴露敏感信息（如 API Key）

## 📦 模块结构

```
health/
├── OpenAiHealthIndicator.java      # 健康检查指示器（核心组件）
├── OpenAiHealthService.java        # 健康检查服务（检查逻辑）
├── OpenAiHealthProperties.java     # 配置属性类
├── OpenAiHealthConfig.java         # 配置初始化类
├── package-info.java               # 包文档
└── README.md                       # 使用文档
```

## 🚀 快速开始

### 1. 配置文件

在 `application.yml` 或 `application-actuator.yml` 中添加配置：

```yaml
# OpenAI 健康检查配置
health:
  openai:
    enabled: true                    # 是否启用健康检查
    check-type: PING                 # 检查类型：PING, API_CALL, MODEL_LIST
    connection-timeout: 5000         # 连接超时（毫秒）
    response-timeout: 10000          # 响应超时（毫秒）
    slow-response-threshold: 3000    # 慢响应阈值（毫秒）
    test-message: "hello"            # API_CALL 检查时的测试消息

# Actuator 端点配置
management:
  endpoints:
    web:
      exposure:
        include: health,info,refresh  # 暴露的端点
  endpoint:
    health:
      enabled: true
      show-details: always            # 显示详细信息
```

### 2. 访问健康检查端点

#### 查看整体健康状态
```bash
GET http://localhost:8080/actuator/health
```

#### 仅查看 OpenAI 健康状态
```bash
GET http://localhost:8080/actuator/health/openAi
```

### 3. 响应示例

#### 健康状态 - UP
```json
{
  "status": "UP",
  "components": {
    "openAiHealth": {
      "status": "UP",
      "details": {
        "baseUrl": "https://api.openai.com",
        "checkType": "PING",
        "model": "gpt-3.5-turbo",
        "responseTime": "234ms",
        "responseStatus": "NORMAL",
        "apiKeyConfigured": true,
        "proxyConfigured": false
      }
    }
  }
}
```

#### 健康状态 - DOWN
```json
{
  "status": "DOWN",
  "components": {
    "openAiHealth": {
      "status": "DOWN",
      "details": {
        "baseUrl": "https://api.openai.com",
        "checkType": "PING",
        "model": "gpt-3.5-turbo",
        "responseTime": "5012ms",
        "responseStatus": "SLOW",
        "slowThreshold": "3000ms",
        "errorMessage": "无法连接到 OpenAI API: Connection timeout",
        "errorType": "CONNECTION_ERROR",
        "apiKeyConfigured": true,
        "proxyConfigured": false
      }
    }
  }
}
```

## 🔧 检查类型详解

### PING 检查（推荐）
- **说明**：仅测试网络连接，不调用实际 API
- **优点**：
  - ✅ 不产生 API 费用
  - ✅ 响应速度快
  - ✅ 适合高频健康检查
- **缺点**：
  - ❌ 无法验证 API Key 有效性
  - ❌ 无法测试 API 实际功能
- **适用场景**：生产环境、高频监控

**配置示例**：
```yaml
health:
  openai:
    check-type: PING
```

### API_CALL 检查
- **说明**：发送实际的测试请求到 OpenAI API
- **优点**：
  - ✅ 验证 API Key 有效性
  - ✅ 测试实际 API 功能
  - ✅ 更准确的可用性判断
- **缺点**：
  - ❌ 产生 API 调用费用
  - ❌ 响应时间较长
- **适用场景**：开发测试环境、低频深度检查

**配置示例**：
```yaml
health:
  openai:
    check-type: API_CALL
    test-message: "hello"  # 测试消息，建议简短
```

### MODEL_LIST 检查
- **说明**：获取可用的模型列表
- **优点**：
  - ✅ 验证 API Key 权限
  - ✅ 获取可用模型信息
- **缺点**：
  - ❌ 需要额外的 API 权限
  - ❌ 实现复杂度较高
- **适用场景**：需要验证模型权限的场景

**配置示例**：
```yaml
health:
  openai:
    check-type: MODEL_LIST
```

## ⚙️ 配置参数详解

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enabled` | Boolean | `true` | 是否启用健康检查 |
| `check-type` | Enum | `PING` | 检查类型（PING/API_CALL/MODEL_LIST） |
| `connection-timeout` | Integer | `5000` | 连接超时时间（毫秒） |
| `response-timeout` | Integer | `10000` | 响应超时时间（毫秒） |
| `slow-response-threshold` | Long | `3000` | 慢响应阈值（毫秒） |
| `test-message` | String | `"hello"` | API_CALL 检查时的测试消息 |
| `base-url` | String | `https://api.openai.com` | OpenAI API 基础 URL |
| `model` | String | `gpt-3.5-turbo` | 使用的模型名称 |

## 📊 监控指标说明

### 响应详情字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `baseUrl` | String | OpenAI API 地址 |
| `checkType` | String | 当前使用的检查类型 |
| `model` | String | 使用的模型名称 |
| `responseTime` | String | 响应时间（毫秒） |
| `responseStatus` | String | 响应状态（NORMAL/SLOW） |
| `slowThreshold` | String | 慢响应阈值（仅在 SLOW 状态下显示） |
| `errorMessage` | String | 错误消息（仅在失败时显示） |
| `errorType` | String | 错误类型（仅在失败时显示） |
| `apiKeyConfigured` | Boolean | API Key 是否已配置 |
| `proxyConfigured` | Boolean | 代理是否已配置 |

### 错误类型

| 错误类型 | 说明 |
|----------|------|
| `CONNECTION_ERROR` | 连接失败（网络不可达） |
| `API_CALL_ERROR` | API 调用失败（认证失败、请求异常等） |
| `EMPTY_RESPONSE` | API 返回空响应 |
| `MODEL_LIST_ERROR` | 获取模型列表失败 |
| `EXECUTION_ERROR` | 检查执行过程异常 |

## 🎯 最佳实践

### 1. 生产环境配置
```yaml
health:
  openai:
    enabled: true
    check-type: PING              # 使用 PING，不产生费用
    connection-timeout: 3000      # 缩短超时时间
    slow-response-threshold: 2000 # 降低慢响应阈值

management:
  endpoint:
    health:
      show-details: when-authorized  # 仅授权用户查看详情
```

### 2. 开发测试环境配置
```yaml
health:
  openai:
    enabled: true
    check-type: API_CALL          # 使用实际调用测试
    connection-timeout: 5000
    test-message: "test"

management:
  endpoint:
    health:
      show-details: always        # 显示所有详情
```

### 3. 禁用健康检查
```yaml
health:
  openai:
    enabled: false

# 或者在 Actuator 端点中排除
management:
  endpoints:
    web:
      exposure:
        exclude: health
```

## 🔗 与其他监控系统集成

### 1. Prometheus 集成

添加 Prometheus 依赖：
```xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

配置：
```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,prometheus
  metrics:
    export:
      prometheus:
        enabled: true
```

访问指标：
```bash
GET http://localhost:8080/actuator/prometheus
```

### 2. Spring Boot Admin 集成

客户端配置：
```yaml
spring:
  boot:
    admin:
      client:
        url: http://admin-server:8080
        instance:
          service-url: http://localhost:8080
```

### 3. 自定义告警

可以通过监听健康状态变化事件来实现自定义告警：

```java
@Component
public class HealthStatusChangeListener {
    
    @EventListener
    public void onHealthChange(HealthChangedEvent event) {
        // 发送告警通知
        if (event.getStatus() == Status.DOWN) {
            sendAlert("OpenAI API 不可用");
        }
    }
}
```

## 🐛 故障排查

### 1. 健康检查一直返回 DOWN

**可能原因**：
- 网络连接问题（防火墙、代理配置）
- API Key 未配置或无效
- OpenAI API 服务中断
- 超时时间设置过短

**解决方案**：
```bash
# 1. 检查网络连通性
curl -I https://api.openai.com

# 2. 检查配置
GET http://localhost:8080/actuator/health/openAi

# 3. 查看日志
tail -f logs/application.log | grep "OpenAI"

# 4. 调整超时时间
health:
  openai:
    connection-timeout: 10000
    response-timeout: 20000
```

### 2. 响应时间过长（SLOW）

**优化建议**：
- 使用 PING 检查代替 API_CALL
- 配置代理（如果在中国大陆）
- 增加慢响应阈值
- 检查网络质量

### 3. API_CALL 检查失败

**检查项**：
- API Key 是否正确配置
- API Key 是否有足够的额度
- 模型名称是否正确
- 网络代理是否正确配置

## 📝 日志说明

### 日志级别配置
```yaml
logging:
  level:
    getjobs.common.infrastructure.health: DEBUG
```

### 日志示例

**初始化日志**：
```
INFO  OpenAiHealthConfig - ═══════════════════════════════════════
INFO  OpenAiHealthConfig -         OpenAI 健康检查配置初始化
INFO  OpenAiHealthConfig - ═══════════════════════════════════════
INFO  OpenAiHealthConfig - 启用状态: true
INFO  OpenAiHealthConfig - 检查类型: PING
INFO  OpenAiHealthConfig - API 地址: https://api.openai.com
```

**检查日志**：
```
DEBUG OpenAiHealthIndicator - OpenAI 健康检查成功，响应时间: 234ms
WARN  OpenAiHealthIndicator - OpenAI 健康检查失败: Connection timeout
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本模块遵循项目整体许可证。

## 📮 联系方式

如有问题，请通过以下方式联系：
- 提交 Issue
- 发送邮件至项目维护者

---

**最后更新**：2025-11-05

