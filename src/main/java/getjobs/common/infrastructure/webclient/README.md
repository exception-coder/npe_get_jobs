# WebClient 基础设施配置

## 📋 概述

WebClient 基础设施模块提供全局的 WebClient 基础配置，供各个模块使用。包含代理、SSL、超时等通用配置。

## ✨ 主要特性

- ✅ **统一配置管理**：所有 WebClient 配置集中在基础设施层
- ✅ **类型安全**：使用 `@ConfigurationProperties` 实现类型安全的配置绑定
- ✅ **灵活配置**：支持通过 YAML 配置文件自定义所有参数
- ✅ **默认值**：所有配置项都有合理的默认值
- ✅ **代理支持**：可选的 HTTP 代理配置

## 🚀 快速开始

### 1. 添加配置

在 `application.yml` 或 `application-{profile}.yml` 中添加配置：

```yaml
# 代理配置（可选）
proxy:
  host: 127.0.0.1
  port: 7890

# WebClient 基础配置
webclient:
  response-timeout: 30000  # 响应超时（毫秒）
  connect-timeout: 2000    # 连接超时（毫秒）
  read-timeout: 30         # 读取超时（秒）
  write-timeout: 30        # 写入超时（秒）
  follow-redirect: true    # 是否跟随重定向
  compress: true           # 是否启用压缩
```

### 2. 使用 WebClient.Builder

在其他配置类中注入基础设施层的 `webClientBuilder`：

```java
@Configuration
public class MyConfig {
    @Bean
    public MyService myService(@Qualifier("webClientBuilder") WebClient.Builder webClientBuilder) {
        // 使用 clone() 避免污染全局配置
        WebClient.Builder builder = webClientBuilder.clone();
        // 可以添加模块特定的配置
        return new MyService(builder.build());
    }
}
```

## ⚙️ 配置说明

### 代理配置（proxy）

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `host` | String | `""` | 代理主机地址，为空则不使用代理 |
| `port` | int | `0` | 代理端口，为 0 则不使用代理 |

**示例**：
```yaml
proxy:
  host: 127.0.0.1
  port: 7890
```

### WebClient 配置（webclient）

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `response-timeout` | long | `30000` | 响应超时（毫秒），从发送请求到接收到完整响应的最大等待时间 |
| `connect-timeout` | int | `2000` | 连接超时（毫秒），建立 TCP 连接的最大等待时间 |
| `read-timeout` | int | `30` | 读取超时（秒），从连接建立后等待服务器发送数据的最大时间 |
| `write-timeout` | int | `30` | 写入超时（秒），向服务器发送数据的最大时间 |
| `follow-redirect` | boolean | `true` | 是否跟随 HTTP 重定向（3xx 状态码） |
| `compress` | boolean | `true` | 是否启用 HTTP 压缩（gzip/deflate） |

**示例**：
```yaml
webclient:
  response-timeout: 30000
  connect-timeout: 2000
  read-timeout: 30
  write-timeout: 30
  follow-redirect: true
  compress: true
```

## 📝 配置建议

### 生产环境

```yaml
webclient:
  response-timeout: 60000  # 生产环境可以设置更长的超时时间
  connect-timeout: 5000
  read-timeout: 60
  write-timeout: 60
  follow-redirect: true
  compress: true
```

### 开发环境

```yaml
webclient:
  response-timeout: 30000
  connect-timeout: 2000
  read-timeout: 30
  write-timeout: 30
  follow-redirect: true
  compress: true
```

### 禁用代理

如果不需要代理，可以不配置或留空：

```yaml
# 方式1：不配置 proxy 节点
# proxy:

# 方式2：配置为空值
proxy:
  host: ""
  port: 0
```

## 🔧 核心类说明

### WebClientInfrastructureConfig

WebClient 基础设施配置类，负责创建全局的 `webClientBuilder` Bean。

### WebClientProperties

WebClient 配置属性类，绑定 `webclient.*` 配置项。

### ProxyProperties

代理配置属性类，绑定 `proxy.*` 配置项。

## 📚 相关文档

- [配置示例文件](../../../../resources/webclient-config-example.yml)
- [package-info.java](./package-info.java)

## 🎯 最佳实践

1. **使用 clone()**：在创建自定义 WebClient 时，始终使用 `clone()` 避免污染全局配置
2. **合理设置超时**：根据实际网络环境和 API 响应时间调整超时配置
3. **启用压缩**：在生产环境中启用压缩可以提升传输效率
4. **代理配置**：如果在中国大陆访问国外 API，建议配置代理

## 📞 获取帮助

如有问题，请查看：
- 配置示例：`src/main/resources/webclient-config-example.yml`
- 源码注释：各个配置类的 JavaDoc

---

**作者**：getjobs  
**创建时间**：2025-12-06  
**版本**：1.0.0

