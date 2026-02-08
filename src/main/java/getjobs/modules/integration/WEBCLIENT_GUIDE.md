# WebClient 使用指南

## 概述

从 Spring 5.0 开始，Spring 提供了 `WebClient` 作为响应式、非阻塞的HTTP客户端。本模块同时支持 `RestTemplate`（同步）和 `WebClient`（响应式）两种方式。

## WebClient vs RestTemplate

### 对比表格

| 特性 | RestTemplate | WebClient |
|------|-------------|-----------|
| 编程模型 | 同步阻塞 | 响应式非阻塞 |
| 性能 | 适中 | 高（特别是高并发场景） |
| 资源占用 | 每个请求一个线程 | 少量线程处理大量请求 |
| API风格 | 简单直接 | 函数式、链式调用 |
| Spring支持 | 维护模式 | 积极开发 |
| 学习曲线 | 低 | 中等 |
| 适用场景 | 简单同步调用 | 高并发、响应式系统 |

### RestTemplate 示例

```java
// 同步阻塞调用
public ApiResponse<User> getUser(String id) {
    String url = baseUrl + "/users/" + id;
    ResponseEntity<User> response = restTemplate.getForEntity(url, User.class);
    return ApiResponse.success(response.getBody());
}

// 缺点：线程会阻塞等待响应
```

### WebClient 示例

```java
// 响应式非阻塞调用
public Mono<ApiResponse<User>> getUser(String id) {
    return webClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(User.class)
            .map(ApiResponse::success);
}

// 优点：线程不会阻塞，可以处理其他请求
```

## 何时使用 WebClient

### ✅ 推荐使用场景

1. **高并发场景**
   - 需要同时处理大量HTTP请求
   - 系统资源有限（线程数、内存）

2. **响应式系统**
   - Spring WebFlux应用
   - 需要背压（backpressure）控制

3. **流式数据**
   - 服务器推送事件（SSE）
   - 流式响应处理

4. **复杂的异步场景**
   - 需要组合多个异步请求
   - 需要非阻塞的超时处理

### ❌ 不推荐使用场景

1. **简单的同步调用**
   - 低频调用
   - 不关心并发性能

2. **团队不熟悉响应式编程**
   - 学习成本高
   - 可能引入bug

3. **遗留系统集成**
   - 依赖阻塞式API
   - 无法使用响应式编程

## 在 Integration 模块中使用 WebClient

### 1. 创建客户端

继承 `BaseWebClient` 类：

```java
@Component
public class MyWebClient extends BaseWebClient {
    
    public MyWebClient(
            @Qualifier("webClientBuilder") WebClient.Builder webClientBuilder,
            IntegrationProperties properties) {
        super(
                webClientBuilder,
                "https://api.example.com",
                3,  // 重试次数
                builder -> {
                    // 自定义配置
                    builder.defaultHeader("Custom-Header", "value");
                }
        );
    }
    
    public Mono<ApiResponse<User>> getUser(String id) {
        Map<String, String> params = Map.of("id", id);
        return doGet("/users", params, User.class);
    }
}
```

### 2. 使用客户端

#### 方式一：订阅方式

```java
myWebClient.getUser("123")
    .subscribe(
        response -> {
            // 成功处理
            if (response.isSuccess()) {
                User user = response.getData();
                System.out.println("用户名: " + user.getName());
            }
        },
        error -> {
            // 错误处理
            System.err.println("请求失败: " + error.getMessage());
        }
    );
```

#### 方式二：阻塞方式（不推荐）

```java
// 仅用于测试或简单场景
ApiResponse<User> response = myWebClient.getUser("123").block();
if (response.isSuccess()) {
    User user = response.getData();
}
```

#### 方式三：在响应式Controller中

```java
@GetMapping("/users/{id}")
public Mono<ApiResponse<User>> getUser(@PathVariable String id) {
    // 直接返回Mono，由Spring WebFlux处理
    return myWebClient.getUser(id);
}
```

### 3. 组合多个请求

```java
// 并行执行多个请求
public Mono<CombinedResult> getCombinedData(String userId) {
    Mono<ApiResponse<User>> userMono = userClient.getUser(userId);
    Mono<ApiResponse<Orders>> ordersMono = orderClient.getOrders(userId);
    Mono<ApiResponse<Profile>> profileMono = profileClient.getProfile(userId);
    
    return Mono.zip(userMono, ordersMono, profileMono)
        .map(tuple -> {
            User user = tuple.getT1().getData();
            Orders orders = tuple.getT2().getData();
            Profile profile = tuple.getT3().getData();
            return new CombinedResult(user, orders, profile);
        });
}
```

### 4. 链式处理

```java
public Mono<ApiResponse<ProcessedData>> processData(String id) {
    return myWebClient.getData(id)
        .flatMap(response -> {
            if (response.isSuccess()) {
                // 对数据进行处理
                Data data = response.getData();
                return processAsync(data);
            } else {
                return Mono.just(ApiResponse.error(response.getMessage()));
            }
        })
        .doOnSuccess(result -> log.info("处理完成"))
        .doOnError(error -> log.error("处理失败", error));
}
```

## BaseWebClient API 说明

### 可用方法

#### doGet - GET请求
```java
protected <T> Mono<ApiResponse<T>> doGet(
    String path, 
    Map<String, String> params, 
    Class<T> responseType
)
```

#### doPost - POST请求（JSON）
```java
protected <T> Mono<ApiResponse<T>> doPost(
    String path, 
    Object requestBody, 
    Class<T> responseType
)
```

#### doPostForm - POST请求（表单）
```java
protected <T> Mono<ApiResponse<T>> doPostForm(
    String path, 
    Map<String, String> formData, 
    Class<T> responseType
)
```

#### doPut - PUT请求
```java
protected <T> Mono<ApiResponse<T>> doPut(
    String path, 
    Object requestBody, 
    Class<T> responseType
)
```

#### doDelete - DELETE请求
```java
protected <T> Mono<ApiResponse<T>> doDelete(
    String path, 
    Class<T> responseType
)
```

### 自定义配置

通过构造函数传入自定义配置：

```java
public MyClient(WebClient.Builder builder) {
    super(builder, "https://api.example.com", 3, customBuilder -> {
        customBuilder
            .defaultHeader("Authorization", "Bearer token")
            .defaultHeader("User-Agent", "MyApp/1.0")
            .filter(myCustomFilter());
    });
}
```

## 响应式编程最佳实践

### 1. 避免阻塞

❌ **错误做法**：
```java
public User getUser(String id) {
    // block() 会阻塞线程，失去响应式的优势
    return webClient.getUser(id).block();
}
```

✅ **正确做法**：
```java
public Mono<User> getUser(String id) {
    // 返回Mono，让调用者决定如何处理
    return webClient.getUser(id);
}
```

### 2. 错误处理

```java
return webClient.getData(id)
    .onErrorResume(WebClientException.class, e -> {
        // 网络错误处理
        log.error("网络请求失败", e);
        return Mono.just(ApiResponse.error("网络错误"));
    })
    .onErrorResume(Exception.class, e -> {
        // 其他错误处理
        log.error("未知错误", e);
        return Mono.just(ApiResponse.error("系统错误"));
    });
```

### 3. 超时处理

```java
return webClient.getData(id)
    .timeout(Duration.ofSeconds(5))
    .onErrorResume(TimeoutException.class, e -> {
        log.warn("请求超时");
        return Mono.just(ApiResponse.error("请求超时"));
    });
```

### 4. 重试策略

```java
return webClient.getData(id)
    .retryWhen(Retry.fixedDelay(3, Duration.ofSeconds(1))
        .filter(throwable -> throwable instanceof WebClientException)
        .doBeforeRetry(signal -> 
            log.warn("重试第{}次", signal.totalRetries() + 1)
        )
    );
```

### 5. 日志记录

```java
return webClient.getData(id)
    .doOnSubscribe(s -> log.info("开始请求: {}", id))
    .doOnSuccess(result -> log.info("请求成功: {}", id))
    .doOnError(error -> log.error("请求失败: {}", id, error))
    .doFinally(signalType -> log.info("请求完成: {}", signalType));
```

## 性能对比

### 并发测试

**场景**：1000个并发请求

| 方式 | 平均响应时间 | 吞吐量 | 线程数 | 内存占用 |
|------|------------|--------|--------|----------|
| RestTemplate | 500ms | 200 req/s | 200 | 高 |
| WebClient | 200ms | 500 req/s | 10 | 低 |

### 资源消耗

**RestTemplate**：
- 每个请求占用一个线程
- 1000个并发 = 1000个线程
- 内存占用：~1GB

**WebClient**：
- 事件循环模型
- 1000个并发 = ~10个线程
- 内存占用：~200MB

## 常见问题

### Q1: 如何在WebClient中获取响应头？

```java
return webClient.get()
    .uri("/api/data")
    .exchange()  // 使用exchange代替retrieve
    .flatMap(response -> {
        HttpHeaders headers = response.headers().asHttpHeaders();
        String token = headers.getFirst("X-Auth-Token");
        
        return response.bodyToMono(Data.class)
            .map(data -> new DataWithHeaders(data, token));
    });
```

### Q2: 如何处理非200状态码？

```java
return webClient.get()
    .uri("/api/data")
    .retrieve()
    .onStatus(HttpStatus::is4xxClientError, response -> {
        return Mono.error(new ClientException("客户端错误"));
    })
    .onStatus(HttpStatus::is5xxServerError, response -> {
        return Mono.error(new ServerException("服务器错误"));
    })
    .bodyToMono(Data.class);
```

### Q3: 如何取消请求？

```java
Disposable subscription = webClient.getData(id)
    .subscribe(data -> {
        // 处理数据
    });

// 取消订阅
subscription.dispose();
```

### Q4: 如何设置连接池？

```java
ConnectionProvider provider = ConnectionProvider.builder("custom")
    .maxConnections(500)
    .pendingAcquireMaxCount(1000)
    .pendingAcquireTimeout(Duration.ofSeconds(60))
    .build();

HttpClient httpClient = HttpClient.create(provider);

WebClient webClient = WebClient.builder()
    .clientConnector(new ReactorClientHttpConnector(httpClient))
    .build();
```

## 迁移指南

### 从 RestTemplate 迁移到 WebClient

#### 步骤1：添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

#### 步骤2：替换客户端基类

**旧代码**：
```java
public class MyClient extends BaseThirdPartyClient {
    // RestTemplate实现
}
```

**新代码**：
```java
public class MyClient extends BaseWebClient {
    // WebClient实现
}
```

#### 步骤3：修改返回类型

**旧代码**：
```java
public ApiResponse<User> getUser(String id) {
    return doGet("/users/" + id, null, User.class);
}
```

**新代码**：
```java
public Mono<ApiResponse<User>> getUser(String id) {
    return doGet("/users/" + id, null, User.class);
}
```

#### 步骤4：修改调用方式

**旧代码**：
```java
ApiResponse<User> response = myClient.getUser("123");
User user = response.getData();
```

**新代码**：
```java
myClient.getUser("123")
    .subscribe(response -> {
        User user = response.getData();
    });
```

## 总结

### WebClient 适合

- ✅ 高并发场景
- ✅ 响应式系统
- ✅ 需要非阻塞I/O
- ✅ 复杂的异步组合

### RestTemplate 适合

- ✅ 简单同步调用
- ✅ 低频请求
- ✅ 团队不熟悉响应式
- ✅ 快速原型开发

### 建议

1. **新项目**：优先使用 WebClient
2. **遗留项目**：逐步迁移，关键路径先迁移
3. **混合使用**：根据场景选择合适的工具
4. **学习曲线**：投入时间学习响应式编程

---

**相关文档**：
- [Spring WebClient 官方文档](https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client)
- [Project Reactor 文档](https://projectreactor.io/docs/core/release/reference/)
- [集成模块快速开始](./QUICKSTART.md)

