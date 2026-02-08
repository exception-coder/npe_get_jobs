# Integration Module - 第三方接口集成模块

## 概述

这是一个用于对接第三方接口的通用模块，提供了统一的接口调用、配置管理、错误处理和日志记录功能。

## 模块结构

```
integration/
├── client/              # 第三方API客户端
│   └── BaseWebClient.java                 # WebClient客户端基类（响应式）
├── config/              # 配置类
│   ├── IntegrationProperties.java         # 集成配置
│   └── RestTemplateConfig.java            # RestTemplate配置
├── domain/              # 领域实体
│   └── ApiCallLog.java                    # API调用日志
├── dto/                 # 数据传输对象
│   ├── ApiResponse.java                   # API响应封装
│   ├── ThirdPartyCallRequest.java         # 调用请求
│   └── ThirdPartyCallResponse.java        # 调用响应
├── service/             # 业务服务
│   └── IntegrationService.java            # 集成服务
├── web/                 # 控制器
│   └── IntegrationController.java         # 集成控制器
└── README.md            # 模块说明文档
```

## 功能特性

### 1. WebClient 响应式HTTP客户端

提供基于 WebClient 的客户端基类：

**BaseWebClient**：
- 响应式非阻塞HTTP调用
- 高并发性能优异
- 函数式编程风格
- 适合高并发、响应式系统

核心功能：
- 支持 GET、POST、PUT、DELETE 等HTTP方法
- 支持 Form 表单提交
- 自动重试机制
- 统一的错误处理
- 可自定义请求头和认证方式
- 灵活的URL构建
- 完整的日志记录

### 2. 配置管理

`IntegrationProperties` 支持：
- 多个第三方服务的配置管理
- 支持动态配置刷新 (@RefreshScope)
- 全局和服务级别的超时、重试配置
- API Key、Secret Key 等认证信息管理

### 3. 日志记录

`ApiCallLog` 记录：
- 请求和响应详情
- 响应时间统计
- 成功/失败状态
- 错误信息

### 4. RESTful API

提供HTTP接口用于：
- 调用第三方接口
- 查询服务配置
- 检查服务状态
- 健康检查

## 使用指南

### 1. 配置第三方服务

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

### 2. 创建自定义客户端

继承 `BaseWebClient` 创建自己的客户端：

```java
@Component
public class MyWebClient extends BaseWebClient {
    
    public MyWebClient(
            @Qualifier("webClientBuilder") WebClient.Builder builder,
            IntegrationProperties properties) {
        super(
            builder,
            properties.getServices().get("my-service").getBaseUrl(),
            properties.getServices().get("my-service").getRetryTimes(),
            customBuilder -> {
                // 自定义配置
                customBuilder.defaultHeader("X-API-Key", 
                    properties.getServices().get("my-service").getApiKey());
            }
        );
    }
    
    public Mono<ApiResponse<MyData>> getMyData(String id) {
        Map<String, String> params = new HashMap<>();
        params.put("id", id);
        return doGet("/api/data", params, MyData.class);
    }
}
```

### 3. 使用集成服务

通过 `IntegrationService` 调用第三方接口：

```java
@Service
public class MyService {
    
    @Autowired
    private IntegrationService integrationService;
    
    public void callThirdParty() {
        ThirdPartyCallRequest request = new ThirdPartyCallRequest();
        request.setServiceName("example-service");
        request.setPath("/api/data");
        request.setMethod("GET");
        request.setParams(Map.of("id", "123"));
        
        ThirdPartyCallResponse response = integrationService.call(request);
        if (response.getSuccess()) {
            // 处理响应数据
            Object data = response.getData();
        }
    }
}
```

### 4. 使用REST API

通过HTTP接口调用：

```bash
# 调用第三方接口
curl -X POST http://localhost:8080/api/integration/call \
  -H "Content-Type: application/json" \
  -d '{
    "serviceName": "my-service",
    "path": "/api/data",
    "method": "GET",
    "params": {"id": "123"}
  }'

# 查询服务配置
curl http://localhost:8080/api/integration/config/my-service

# 检查服务状态
curl http://localhost:8080/api/integration/status/my-service

# 健康检查
curl http://localhost:8080/api/integration/health
```

## 扩展开发

### 添加新的第三方服务

1. 在配置文件中添加服务配置
2. 创建继承 `BaseThirdPartyClient` 的客户端类
3. 实现具体的API调用方法
4. 在服务层使用客户端

### 自定义认证方式

重写 `buildHeaders()` 方法：

```java
@Override
protected HttpHeaders buildHeaders() {
    HttpHeaders headers = super.buildHeaders();
    // 添加自定义认证逻辑
    headers.set("X-Custom-Auth", generateCustomAuth());
    return headers;
}
```

### 添加日志持久化

在 `IntegrationService` 中实现日志保存逻辑：

```java
// 创建 Repository
@Repository
public interface ApiCallLogRepository extends JpaRepository<ApiCallLog, Long> {
}

// 在 logApiCall 方法中保存
apiCallLogRepository.save(log);
```

## 最佳实践

1. **配置管理**：敏感信息（API Key、Secret）应使用配置中心管理
2. **错误处理**：根据不同的错误类型实现相应的处理策略
3. **重试策略**：根据接口特性配置合适的重试次数和延迟
4. **超时设置**：根据接口响应时间设置合理的超时时间
5. **日志记录**：记录关键信息用于问题排查和性能监控
6. **监控告警**：对接口调用失败率、响应时间等指标进行监控

## 注意事项

1. 配置类使用了 `@RefreshScope`，支持动态刷新配置
2. 客户端基于 WebClient 实现，使用响应式非阻塞模型
3. 重试机制使用 Reactor 的 Retry 策略，避免对第三方服务造成压力
4. 日志记录预留了数据库持久化接口，需要时可自行实现
5. WebClient 适合高并发场景，低频调用也可使用 `.block()` 转为同步

## 依赖要求

### 必需依赖

```xml
<!-- Spring Boot -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>

<!-- Spring WebFlux（WebClient支持） -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>

<!-- Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```

### 可选依赖

- Spring Cloud - 如需配置中心支持（Nacos、Apollo等）

详细使用请参阅：[WebClient使用指南](./WEBCLIENT_GUIDE.md)

## 更新日志

- v1.0.0 (2025-12-05)
  - 初始版本
  - 实现基础的第三方接口对接功能
  - 支持配置管理和动态刷新
  - 提供统一的客户端基类
  - 实现请求重试和错误处理
  - 添加日志记录功能

