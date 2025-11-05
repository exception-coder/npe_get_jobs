# OpenAI 健康检查监控模块 - 快速指南

## 📍 模块位置

```
src/main/java/getjobs/common/infrastructure/health/
```

## 🎯 功能概述

基于 Spring Boot Actuator 的 OpenAI API 健康监控模块，提供：

- ✅ 实时监控 OpenAI API 可用性
- ✅ 响应时间监控和慢响应识别
- ✅ 三种检查策略（PING、API_CALL、MODEL_LIST）
- ✅ REST API 管理接口
- ✅ 详细的健康报告和配置信息

## 🚀 快速测试

### 1. 启动应用

启动后会看到初始化日志：

```
═══════════════════════════════════════════════════════════
        OpenAI 健康检查配置初始化
═══════════════════════════════════════════════════════════
启用状态: true
检查类型: PING
API 地址: https://api.openai.com
...
```

### 2. 测试健康检查

```bash
# 方式 1：通过 Actuator 端点
curl http://localhost:8080/actuator/health/openAi | jq '.'

# 方式 2：通过自定义 API
curl http://localhost:8080/api/health/openai | jq '.'
```

### 3. 查看配置

```bash
curl http://localhost:8080/api/health/openai/config | jq '.'
```

### 4. 手动触发检查

```bash
curl -X POST http://localhost:8080/api/health/openai/check | jq '.'
```

## ⚙️ 配置说明

配置文件：`src/main/resources/application-actuator.yml`

```yaml
health:
  openai:
    enabled: true                    # 是否启用
    check-type: PING                 # 检查类型
    connection-timeout: 5000         # 连接超时
    response-timeout: 10000          # 响应超时
    slow-response-threshold: 3000    # 慢响应阈值
    test-message: "hello"            # 测试消息
```

### 检查类型说明

| 类型 | 说明 | 费用 | 推荐场景 |
|-----|------|------|---------|
| PING | 测试网络连接 | 免费 | ✅ 生产环境 |
| API_CALL | 实际调用 API | 收费 | 开发测试 |
| MODEL_LIST | 获取模型列表 | 免费 | 权限验证 |

## 📊 API 端点

### Actuator 端点

- `GET /actuator/health` - 整体健康状态
- `GET /actuator/health/openAi` - OpenAI 健康状态

### 自定义管理端点

- `GET /api/health/openai` - 获取健康状态
- `GET /api/health/openai/config` - 获取配置信息
- `POST /api/health/openai/check` - 手动触发检查
- `GET /api/health/openai/stats` - 获取统计信息

## 🔍 响应示例

### 健康状态 - 正常

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
  },
  "timestamp": 1699200000000
}
```

### 健康状态 - 异常

```json
{
  "status": "DOWN",
  "details": {
    "baseUrl": "https://api.openai.com",
    "errorMessage": "无法连接到 OpenAI API: Connection timeout",
    "errorType": "CONNECTION_ERROR",
    "responseTime": "5012ms",
    "responseStatus": "SLOW"
  },
  "timestamp": 1699200000000
}
```

## 🛠️ 常见操作

### 切换检查类型

```yaml
# 生产环境：使用 PING
health:
  openai:
    check-type: PING

# 开发环境：使用 API_CALL
health:
  openai:
    check-type: API_CALL
    test-message: "test connection"
```

### 调整超时时间

```yaml
health:
  openai:
    connection-timeout: 3000      # 缩短连接超时
    response-timeout: 5000        # 缩短响应超时
    slow-response-threshold: 2000 # 降低慢响应阈值
```

### 禁用健康检查

```yaml
health:
  openai:
    enabled: false
```

## 🐛 故障排查

### 问题 1：健康检查返回 DOWN

**排查步骤**：

```bash
# 1. 检查网络连通性
curl -I https://api.openai.com

# 2. 查看当前配置
curl http://localhost:8080/api/health/openai/config

# 3. 查看日志
tail -f logs/application.log | grep "OpenAI"
```

**可能原因**：
- 网络连接问题
- 防火墙或代理配置
- OpenAI 服务中断
- 超时时间设置过短

### 问题 2：端点访问 404

**检查 Actuator 配置**：

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info
  endpoint:
    health:
      enabled: true
      show-details: always
```

### 问题 3：API_CALL 检查失败

**检查 API Key 配置**：

```yaml
spring:
  ai:
    openai:
      api-key: ${OPENAI_API_KEY}  # 确保已配置
```

## 📖 详细文档

模块包含完整的文档：

- **README.md** - 完整功能文档
- **USAGE_EXAMPLE.md** - 详细使用示例
- **MODULE_SUMMARY.md** - 模块说明
- **package-info.java** - API 文档

查看文档：

```bash
# 查看模块文档
cat src/main/java/getjobs/common/infrastructure/health/README.md

# 查看使用示例
cat src/main/java/getjobs/common/infrastructure/health/USAGE_EXAMPLE.md
```

## 🔧 集成示例

### 定时监控

```java
@Component
@Slf4j
public class HealthMonitor {
    
    @Autowired
    private OpenAiHealthIndicator healthIndicator;
    
    @Scheduled(fixedRate = 60000) // 每分钟
    public void monitor() {
        Health health = healthIndicator.health();
        if (health.getStatus() == Status.DOWN) {
            log.error("OpenAI 不可用: {}", health.getDetails());
        }
    }
}
```

### 前端集成

```javascript
// 定期检查健康状态
setInterval(async () => {
    const response = await fetch('/api/health/openai');
    const data = await response.json();
    
    if (data.status === 'DOWN') {
        showErrorNotification('OpenAI 服务不可用');
    }
}, 30000); // 每 30 秒
```

## 📊 监控仪表板

### Prometheus + Grafana

1. 添加 Prometheus 依赖
2. 配置指标导出
3. 在 Grafana 中创建仪表板

### Spring Boot Admin

1. 配置客户端
2. 在 Admin 界面查看健康状态
3. 配置告警规则

## 🎓 最佳实践

1. **生产环境使用 PING**：避免 API 费用
2. **适当的超时设置**：根据网络环境调整
3. **启用详细日志**：便于问题排查
4. **配置告警**：及时发现问题
5. **定期检查**：监控长期趋势

## 📝 日志配置

```yaml
logging:
  level:
    getjobs.common.infrastructure.health: DEBUG  # 调试模式
```

查看日志：

```bash
# 实时查看健康检查日志
tail -f logs/application.log | grep "OpenAiHealth"
```

## ✅ 验证清单

- [ ] 应用启动成功，看到初始化日志
- [ ] 可以访问 `/actuator/health/openAi`
- [ ] 可以访问 `/api/health/openai`
- [ ] 手动触发检查成功
- [ ] 配置文件正确设置
- [ ] 日志输出正常

## 🚀 下一步

1. 根据环境调整配置
2. 集成到监控系统
3. 配置告警规则
4. 定期查看健康报告
5. 根据需要扩展功能

---

**文档版本**: 1.0.0  
**创建日期**: 2025-11-05  
**模块位置**: `getjobs.common.infrastructure.health`

