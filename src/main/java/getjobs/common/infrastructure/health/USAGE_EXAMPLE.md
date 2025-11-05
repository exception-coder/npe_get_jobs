# OpenAI 健康检查使用示例

## 1. 基础使用

### 1.1 通过 Actuator 端点访问

```bash
# 查看整体健康状态
curl http://localhost:8080/actuator/health

# 仅查看 OpenAI 健康状态
curl http://localhost:8080/actuator/health/openAi
```

### 1.2 通过自定义 API 访问

```bash
# 获取 OpenAI 健康状态
curl http://localhost:8080/api/health/openai

# 获取健康检查配置
curl http://localhost:8080/api/health/openai/config

# 手动触发健康检查
curl -X POST http://localhost:8080/api/health/openai/check

# 获取统计信息
curl http://localhost:8080/api/health/openai/stats
```

## 2. 配置示例

### 2.1 生产环境配置（推荐）

```yaml
# application-prod.yml
health:
  openai:
    enabled: true
    check-type: PING                 # 使用 PING，不产生费用
    connection-timeout: 3000
    response-timeout: 5000
    slow-response-threshold: 2000

management:
  endpoint:
    health:
      show-details: when-authorized  # 仅授权用户查看详情
```

### 2.2 开发环境配置

```yaml
# application-dev.yml
health:
  openai:
    enabled: true
    check-type: API_CALL             # 使用实际调用
    connection-timeout: 5000
    response-timeout: 10000
    slow-response-threshold: 3000
    test-message: "test connection"

management:
  endpoint:
    health:
      show-details: always           # 显示所有详情
```

### 2.3 测试环境配置

```yaml
# application-test.yml
health:
  openai:
    enabled: false                   # 测试环境可以禁用
```

## 3. 响应示例

### 3.1 健康状态 - 正常

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

### 3.2 健康状态 - 异常

```json
{
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
  },
  "timestamp": 1699200000000
}
```

## 4. 集成示例

### 4.1 在 Spring Boot 应用中监听健康状态

```java
@Component
@Slf4j
public class OpenAiHealthListener {
    
    @Autowired
    private OpenAiHealthIndicator healthIndicator;
    
    @Scheduled(fixedRate = 60000) // 每分钟检查一次
    public void checkHealth() {
        Health health = healthIndicator.health();
        
        if (health.getStatus() == Status.DOWN) {
            log.error("OpenAI API 不可用！详情: {}", health.getDetails());
            // 发送告警通知
            sendAlert(health);
        }
    }
    
    private void sendAlert(Health health) {
        // 实现告警逻辑（邮件、短信、钉钉等）
    }
}
```

### 4.2 在前端应用中集成

```javascript
// 定期检查健康状态
async function checkOpenAiHealth() {
    try {
        const response = await fetch('/api/health/openai');
        const data = await response.json();
        
        if (data.status === 'DOWN') {
            // 显示错误提示
            showErrorNotification('OpenAI 服务当前不可用');
            // 禁用相关功能
            disableAiFeatures();
        } else {
            // 启用相关功能
            enableAiFeatures();
        }
    } catch (error) {
        console.error('健康检查失败:', error);
    }
}

// 每 30 秒检查一次
setInterval(checkOpenAiHealth, 30000);
```

### 4.3 使用 Prometheus 监控

```yaml
# application.yml
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

Prometheus 查询示例：
```promql
# 查看健康状态
up{job="get_jobs", instance="localhost:8080"}

# 查看响应时间
http_server_requests_seconds_sum{uri="/actuator/health/openAi"}
```

### 4.4 使用 Spring Boot Admin

客户端配置：
```yaml
spring:
  boot:
    admin:
      client:
        url: http://admin-server:8080
        instance:
          service-url: http://localhost:8080
          name: npe_get_jobs
```

在 Spring Boot Admin 界面中可以：
- 实时查看健康状态
- 查看历史趋势
- 配置告警规则

## 5. 测试脚本

### 5.1 简单测试脚本

```bash
#!/bin/bash

# 测试 OpenAI 健康检查
echo "=== OpenAI 健康检查测试 ==="

# 1. 查看整体健康状态
echo -e "\n1. 整体健康状态:"
curl -s http://localhost:8080/actuator/health | jq '.'

# 2. 查看 OpenAI 健康状态
echo -e "\n2. OpenAI 健康状态:"
curl -s http://localhost:8080/actuator/health/openAi | jq '.'

# 3. 获取配置信息
echo -e "\n3. 配置信息:"
curl -s http://localhost:8080/api/health/openai/config | jq '.'

# 4. 手动触发检查
echo -e "\n4. 手动触发检查:"
curl -s -X POST http://localhost:8080/api/health/openai/check | jq '.'
```

### 5.2 持续监控脚本

```bash
#!/bin/bash

# 持续监控 OpenAI 健康状态
while true; do
    clear
    echo "=== OpenAI 健康监控 ==="
    echo "时间: $(date)"
    echo ""
    
    # 获取健康状态
    response=$(curl -s http://localhost:8080/api/health/openai)
    status=$(echo $response | jq -r '.status')
    responseTime=$(echo $response | jq -r '.details.responseTime')
    
    echo "状态: $status"
    echo "响应时间: $responseTime"
    echo ""
    echo "详细信息:"
    echo $response | jq '.'
    
    # 如果状态异常，发出告警
    if [ "$status" != "UP" ]; then
        echo -e "\n⚠️  警告: OpenAI API 状态异常！"
        # 这里可以添加告警逻辑
    fi
    
    sleep 10
done
```

## 6. 故障排查

### 6.1 检查配置

```bash
# 查看当前配置
curl http://localhost:8080/api/health/openai/config

# 查看日志
tail -f logs/application.log | grep "OpenAI"
```

### 6.2 测试网络连通性

```bash
# 测试到 OpenAI API 的连接
curl -I https://api.openai.com

# 如果使用代理
curl -x http://proxy-host:proxy-port -I https://api.openai.com
```

### 6.3 验证 API Key

```bash
# 使用 API Key 测试（替换 YOUR_API_KEY）
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## 7. 性能优化建议

1. **使用 PING 检查**：生产环境推荐使用 PING 检查，避免 API 费用
2. **适当的超时设置**：根据网络环境调整超时时间
3. **缓存健康状态**：对于高并发场景，可以缓存健康检查结果
4. **异步检查**：避免健康检查阻塞主线程

## 8. 常见问题

### Q1: 为什么健康检查一直返回 DOWN？

**A**: 可能的原因：
- 网络连接问题
- 防火墙或代理配置错误
- API Key 无效或未配置
- OpenAI 服务中断

**解决方法**：
```bash
# 1. 检查网络
ping api.openai.com

# 2. 检查配置
curl http://localhost:8080/api/health/openai/config

# 3. 查看日志
tail -f logs/application.log
```

### Q2: API_CALL 检查失败，但 PING 检查成功？

**A**: 说明网络连接正常，但 API 调用失败，可能原因：
- API Key 无效
- 账户额度不足
- 模型名称错误
- 速率限制

### Q3: 如何禁用健康检查？

**A**: 在配置文件中设置：
```yaml
health:
  openai:
    enabled: false
```

或者从 Actuator 端点中排除：
```yaml
management:
  health:
    openai:
      enabled: false
```

## 9. 扩展功能

### 9.1 添加历史记录

可以扩展服务，记录历史健康检查数据：

```java
@Service
public class HealthHistoryService {
    
    private final List<HealthRecord> history = new CopyOnWriteArrayList<>();
    
    public void recordHealth(Health health) {
        history.add(new HealthRecord(
            health.getStatus(),
            health.getDetails(),
            LocalDateTime.now()
        ));
        
        // 保留最近 100 条记录
        if (history.size() > 100) {
            history.remove(0);
        }
    }
}
```

### 9.2 添加告警功能

```java
@Component
public class HealthAlertService {
    
    @EventListener
    public void onHealthDown(HealthDownEvent event) {
        // 发送邮件告警
        sendEmailAlert(event);
        
        // 发送钉钉告警
        sendDingTalkAlert(event);
        
        // 发送短信告警
        sendSmsAlert(event);
    }
}
```

---

**更新时间**: 2025-11-05

