# OpenAI 健康检查监控模块 - 模块说明

## 📦 模块组成

该模块已完整创建，包含以下文件：

```
health/
├── OpenAiHealthIndicator.java       # 核心健康检查器（实现 HealthIndicator 接口）
├── OpenAiHealthService.java         # 健康检查服务（包含检查逻辑）
├── OpenAiHealthProperties.java      # 配置属性类（@ConfigurationProperties）
├── OpenAiHealthConfig.java          # 配置初始化类
├── OpenAiHealthController.java      # REST API 控制器（提供管理接口）
├── package-info.java                # 包文档说明
├── README.md                        # 详细使用文档
├── USAGE_EXAMPLE.md                 # 使用示例集合
└── MODULE_SUMMARY.md                # 本文件
```

## 🚀 快速启动

### 1. 配置已自动添加

在 `application-actuator.yml` 中已添加默认配置：

```yaml
health:
  openai:
    enabled: true
    check-type: PING
    connection-timeout: 5000
    response-timeout: 10000
    slow-response-threshold: 3000
    test-message: "hello"
```

### 2. 启动应用

启动应用后，模块会自动加载并输出初始化日志：

```
═══════════════════════════════════════════════════════════
        OpenAI 健康检查配置初始化
═══════════════════════════════════════════════════════════
启用状态: true
检查类型: PING
API 地址: https://api.openai.com
使用模型: gpt-3.5-turbo
连接超时: 5000ms
响应超时: 10000ms
慢响应阈值: 3000ms
API Key 已配置: true
═══════════════════════════════════════════════════════════
```

### 3. 访问健康检查

#### 方式 1：通过 Actuator 端点

```bash
# 查看整体健康状态
curl http://localhost:8080/actuator/health

# 仅查看 OpenAI 健康状态
curl http://localhost:8080/actuator/health/openAi
```

#### 方式 2：通过自定义 API

```bash
# 获取健康状态
curl http://localhost:8080/api/health/openai

# 获取配置信息
curl http://localhost:8080/api/health/openai/config

# 手动触发检查
curl -X POST http://localhost:8080/api/health/openai/check

# 获取统计信息
curl http://localhost:8080/api/health/openai/stats
```

## 🎯 核心功能

### 1. 三种检查策略

| 检查类型 | 说明 | 优点 | 适用场景 |
|---------|------|------|---------|
| **PING** | 测试网络连接 | 免费、快速 | ✅ 生产环境推荐 |
| **API_CALL** | 实际调用 API | 准确、全面 | 开发测试环境 |
| **MODEL_LIST** | 获取模型列表 | 验证权限 | 权限验证场景 |

### 2. 响应时间监控

- 实时监控响应时间
- 自动识别慢响应（超过阈值）
- 提供详细的性能指标

### 3. 详细的健康报告

```json
{
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
```

## ⚙️ 配置参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `enabled` | `true` | 是否启用健康检查 |
| `check-type` | `PING` | 检查类型 |
| `connection-timeout` | `5000` | 连接超时（毫秒） |
| `response-timeout` | `10000` | 响应超时（毫秒） |
| `slow-response-threshold` | `3000` | 慢响应阈值（毫秒） |
| `test-message` | `"hello"` | API_CALL 测试消息 |

## 🔧 环境配置建议

### 生产环境

```yaml
health:
  openai:
    check-type: PING              # 使用 PING，不产生费用
    connection-timeout: 3000
    slow-response-threshold: 2000
```

### 开发环境

```yaml
health:
  openai:
    check-type: API_CALL          # 使用实际调用
    test-message: "test"
```

### 禁用健康检查

```yaml
health:
  openai:
    enabled: false
```

## 📊 API 接口说明

### 1. GET `/api/health/openai`

获取当前健康状态

**响应示例**:
```json
{
  "status": "UP",
  "details": {...},
  "timestamp": 1699200000000
}
```

### 2. GET `/api/health/openai/config`

获取当前配置信息

**响应示例**:
```json
{
  "enabled": true,
  "checkType": "PING",
  "baseUrl": "https://api.openai.com",
  "model": "gpt-3.5-turbo",
  "connectionTimeout": 5000,
  "responseTimeout": 10000,
  "slowResponseThreshold": 3000
}
```

### 3. POST `/api/health/openai/check`

手动触发健康检查

**响应示例**:
```json
{
  "status": "UP",
  "checkDuration": "245ms",
  "details": {...},
  "timestamp": 1699200000000
}
```

### 4. GET `/api/health/openai/stats`

获取统计信息（可扩展）

## 🔍 监控集成

### 与 Prometheus 集成

健康检查指标会自动暴露给 Prometheus：

```bash
curl http://localhost:8080/actuator/prometheus | grep health
```

### 与 Spring Boot Admin 集成

在 Spring Boot Admin 界面可以：
- 实时查看健康状态
- 查看历史趋势
- 配置告警规则

## 📖 详细文档

- **README.md** - 完整的使用文档和配置说明
- **USAGE_EXAMPLE.md** - 丰富的使用示例和集成案例
- **package-info.java** - API 文档和响应示例

## 🐛 故障排查

### 问题 1：健康检查返回 DOWN

**检查步骤**:
```bash
# 1. 查看配置
curl http://localhost:8080/api/health/openai/config

# 2. 测试网络
ping api.openai.com

# 3. 查看日志
tail -f logs/application.log | grep "OpenAI"
```

### 问题 2：找不到健康检查端点

**原因**: Actuator 端点未暴露

**解决**: 检查 `application-actuator.yml` 配置：
```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info
```

## 🎨 扩展功能

模块设计为可扩展，支持以下扩展：

1. **历史记录**：记录健康检查历史
2. **告警通知**：健康状态变化时发送告警
3. **自定义检查**：添加更多检查策略
4. **统计分析**：收集和分析健康数据

## 📝 技术实现

### 依赖项

模块使用项目现有依赖，无需添加新依赖：

- ✅ `spring-boot-starter-actuator` - 已存在
- ✅ `spring-ai-openai-spring-boot-starter` - 已存在
- ✅ `lombok` - 已存在

### 设计模式

- **策略模式**：支持多种检查策略（PING、API_CALL、MODEL_LIST）
- **配置模式**：使用 `@ConfigurationProperties` 实现类型安全的配置
- **服务分离**：健康检查逻辑与 Actuator 集成分离

### 日志级别

```yaml
logging:
  level:
    getjobs.common.infrastructure.health: INFO  # 默认
    # getjobs.common.infrastructure.health: DEBUG  # 调试模式
```

## ✅ 测试验证

### 1. 基础验证

```bash
# 启动应用后执行
curl http://localhost:8080/actuator/health/openAi
```

期望返回：`{"status":"UP","details":{...}}`

### 2. 配置验证

```bash
curl http://localhost:8080/api/health/openai/config
```

期望返回配置信息

### 3. 手动检查

```bash
curl -X POST http://localhost:8080/api/health/openai/check
```

期望返回检查结果和耗时

## 📞 支持

如有问题：
1. 查看 `README.md` 获取详细文档
2. 查看 `USAGE_EXAMPLE.md` 获取使用示例
3. 查看日志输出定位问题

---

**模块版本**: 1.0.0  
**创建日期**: 2025-11-05  
**状态**: ✅ 已完成并可用

