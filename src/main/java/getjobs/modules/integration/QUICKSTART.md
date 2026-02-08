# Integration 模块 - 快速开始指南

## 1. 添加配置

在 `application.yml` 中添加配置：

```yaml
integration:
  enabled: true
  timeout: 30000
  retry-times: 3
  services:
    my-service:
      name: "我的第三方服务"
      base-url: "https://api.example.com"
      api-key: "your-api-key"
      secret-key: "your-secret"
      timeout: 30000
      retry-times: 3
      enabled: true
```

## 2. 创建自定义客户端（推荐方式）

适合频繁调用的第三方服务，提供更好的类型安全和代码复用。基于 WebClient 实现，支持响应式非阻塞。

### 3.1 定义响应DTO

```java
@Data
public class UserDTO {
    private String id;
    private String name;
    private String email;
}
```

### 2.2 创建客户端类

```java
@Component
@RequiredArgsConstructor
public class MyServiceClient extends BaseWebClient {
    
    private final IntegrationProperties properties;
    
    public MyServiceClient(
            @Qualifier("webClientBuilder") WebClient.Builder webClientBuilder,
            IntegrationProperties properties) {
        IntegrationProperties.ThirdPartyServiceConfig config = 
                properties.getServices().get("my-service");
        super(
            webClientBuilder,
            config.getBaseUrl(),
            config.getRetryTimes(),
            builder -> builder.defaultHeader("X-API-Key", config.getApiKey())
        );
        this.properties = properties;
    }
    
    /**
     * 查询用户信息（响应式）
     */
    public Mono<ApiResponse<UserDTO>> getUser(String userId) {
        Map<String, String> params = new HashMap<>();
        params.put("id", userId);
        return doGet("/api/users", params, UserDTO.class);
    }
    
    /**
     * 创建用户
     */
    public Mono<ApiResponse<UserDTO>> createUser(UserDTO user) {
        return doPost("/api/users", user, UserDTO.class);
    }
    
    /**
     * 更新用户
     */
    public Mono<ApiResponse<UserDTO>> updateUser(String userId, UserDTO user) {
        return doPut("/api/users/" + userId, user, UserDTO.class);
    }
    
    /**
     * 删除用户
     */
    public Mono<ApiResponse<Void>> deleteUser(String userId) {
        return doDelete("/api/users/" + userId, Void.class);
    }
}
```

### 2.3 使用客户端

#### 响应式方式（推荐）
```java
@Service
@RequiredArgsConstructor
public class UserService {
    
    private final MyServiceClient myServiceClient;
    
    public void syncUser(String userId) {
        // 调用第三方接口（响应式）
        myServiceClient.getUser(userId)
            .subscribe(response -> {
                if (response.isSuccess()) {
                    UserDTO user = response.getData();
                    System.out.println("用户名：" + user.getName());
                    // 处理业务逻辑...
                } else {
                    System.out.println("查询失败：" + response.getMessage());
                }
            });
    }
}
```

#### 同步方式（简单场景）
```java
public void syncUserBlocking(String userId) {
    // 使用 .block() 转为同步调用
    ApiResponse<UserDTO> response = myServiceClient.getUser(userId).block();
    
    if (response != null && response.isSuccess()) {
        UserDTO user = response.getData();
        // 处理业务逻辑...
    }
}
```

## 4. 自定义认证方式

如果第三方接口使用特殊的认证方式，可以重写 `buildHeaders()` 方法：

```java
@Component
public class CustomAuthClient extends BaseThirdPartyClient {
    
    // ... 构造方法
    
    @Override
    protected HttpHeaders buildHeaders() {
        HttpHeaders headers = super.buildHeaders();
        
        // 示例：添加签名认证
        String timestamp = String.valueOf(System.currentTimeMillis());
        String signature = generateSignature(timestamp);
        
        headers.set("X-Timestamp", timestamp);
        headers.set("X-Signature", signature);
        
        return headers;
    }
    
    private String generateSignature(String timestamp) {
        // 实现签名逻辑
        return "your-signature";
    }
}
```

## 5. 通过 REST API 调用

也可以通过 HTTP 接口调用第三方服务：

```bash
# 调用第三方接口
curl -X POST http://localhost:8080/api/integration/call \
  -H "Content-Type: application/json" \
  -d '{
    "serviceName": "my-service",
    "path": "/api/users",
    "method": "GET",
    "params": {"id": "123"}
  }'

# 查询服务配置
curl http://localhost:8080/api/integration/config/my-service

# 检查服务状态
curl http://localhost:8080/api/integration/status/my-service
```

## 6. 配置动态刷新

如果使用了配置中心（如 Nacos），配置支持动态刷新：

1. 在配置中心修改配置
2. 发送刷新请求：

```bash
curl -X POST http://localhost:8080/actuator/refresh
```

配置会自动刷新，无需重启应用。

## 7. 错误处理

```java
ApiResponse<UserDTO> response = myServiceClient.getUser("123");

if (response.isSuccess()) {
    // 成功处理
    UserDTO user = response.getData();
} else {
    // 失败处理
    String errorMsg = response.getMessage();
    String errorCode = response.getErrorCode();
    
    // 可以根据错误码进行不同处理
    if ("TIMEOUT".equals(errorCode)) {
        // 超时重试
    } else if ("NOT_FOUND".equals(errorCode)) {
        // 资源不存在
    }
}
```

## 8. 常见问题

### Q: 如何设置不同环境的配置？

A: 在不同的配置文件中设置：
- `application-dev.yml` - 开发环境
- `application-test.yml` - 测试环境
- `application-prod.yml` - 生产环境

### Q: 如何处理超时？

A: 可以在服务级别设置超时时间：

```yaml
integration:
  services:
    my-service:
      timeout: 60000  # 60秒超时
```

### Q: 如何禁用某个服务？

A: 设置 `enabled: false`：

```yaml
integration:
  services:
    my-service:
      enabled: false  # 禁用该服务
```

### Q: 如何查看调用日志？

A: 日志会自动记录到 `ApiCallLog`，可以通过实现 Repository 将日志保存到数据库：

```java
@Repository
public interface ApiCallLogRepository extends JpaRepository<ApiCallLog, Long> {
    List<ApiCallLog> findByServiceName(String serviceName);
}
```

## 9. 参考资料

相关文档：
- `integration-config-example.yml` - 配置示例
- `README.md` - 完整功能说明
- `WEBCLIENT_GUIDE.md` - WebClient使用指南

## 10. 下一步

- 查看 [README.md](./README.md) 了解更多功能和最佳实践
- 根据实际需求创建自己的客户端类
- 配置监控和告警

