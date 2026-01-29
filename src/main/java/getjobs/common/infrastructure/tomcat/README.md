# Tomcat 基础设施扩展

## 概述

本模块提供了 Tomcat 的自定义扩展，主要用于处理非标准的 HTTP 请求和探针请求。

## 组件说明

### 1. NonHttpProbeValve

**功能：**
- 处理非标准的 HTTP 请求
- 记录来自 `parseRequestLine` 之前的错误日志
- 在事件触发时捕获异常

**特点：**
- 使用 SLF4J 进行日志记录
- 不会阻止正常的 HTTP 请求处理
- 所有合法 HTTP 请求都会正常传递到下一个 Valve
- 仅用于记录和监控非标准请求

### 2. TomcatConfig

**功能：**
- 注册 `NonHttpProbeValve` 到 Tomcat 的 Pipeline
- 自定义 Connector 配置（如需要）
- 确保配置的健壮性和错误处理

## 对 Tomcat 的影响分析

### ✅ 正面影响

1. **不影响正常请求处理**
   - `NonHttpProbeValve` 的 `invoke()` 方法会立即调用 `getNext().invoke()`，不会阻塞或修改正常请求
   - 所有合法的 HTTP 请求都会正常传递到下一个 Valve

2. **增强监控能力**
   - 可以记录非标准请求和探针请求
   - 帮助识别潜在的安全威胁
   - 提供更详细的错误日志

3. **健壮的错误处理**
   - 所有异常都被捕获，不会导致 Tomcat 启动失败
   - 即使 Valve 注册失败，应用仍能正常启动

### ⚠️ 潜在影响

1. **性能影响（极小）**
   - 每个请求都会经过 `NonHttpProbeValve`，增加一次方法调用
   - 影响可以忽略不计（纳秒级别）

2. **日志量增加**
   - 会记录所有非标准请求的日志
   - 在高流量环境下可能产生较多日志
   - 建议配置日志级别和日志轮转策略

3. **Pipeline 顺序**
   - Valve 的注册顺序可能影响请求处理流程
   - 当前实现将 Valve 添加到 Pipeline 末尾，不会影响现有 Valve

## 配置说明

### 自动配置

`TomcatConfig` 使用 `@Configuration` 注解，会在 Spring Boot 启动时自动加载。

### 日志配置建议

在 `application.yml` 中配置日志级别：

```yaml
logging:
  level:
    getjobs.common.infrastructure.tomcat: INFO
    # 如果需要详细日志，可以设置为 DEBUG
    # getjobs.common.infrastructure.tomcat: DEBUG
```

### 禁用配置（如需要）

如果需要禁用此配置，可以使用条件注解：

```java
@ConditionalOnProperty(name = "tomcat.non-http-probe.enabled", havingValue = "true", matchIfMissing = true)
```

## 测试建议

1. **功能测试**
   - 验证正常 HTTP 请求是否能够正常处理
   - 验证非标准请求是否被正确记录

2. **性能测试**
   - 在高并发场景下测试性能影响
   - 监控日志量是否在可接受范围内

3. **异常测试**
   - 测试 Valve 注册失败时的行为
   - 验证应用是否仍能正常启动

## 最佳实践

1. **生产环境部署前**
   - 在测试环境充分验证
   - 监控日志量和性能指标
   - 配置适当的日志级别

2. **监控和告警**
   - 监控非标准请求的数量
   - 设置告警规则，识别异常请求模式

3. **定期审查**
   - 定期审查日志，识别潜在的安全威胁
   - 根据实际情况调整配置

## 故障排查

### 问题：应用启动失败

**可能原因：**
- Valve 注册时发生异常

**解决方案：**
- 检查日志中的异常信息
- 验证 Tomcat 版本兼容性
- 确认依赖是否正确

### 问题：日志过多

**可能原因：**
- 非标准请求过多
- 日志级别设置过低

**解决方案：**
- 调整日志级别为 WARN 或 ERROR
- 配置日志过滤规则
- 考虑添加请求频率限制

## 版本兼容性

- Spring Boot: 3.2.x
- Tomcat: 10.x（由 Spring Boot 管理）
- Java: 21

## 相关文档

- [Tomcat Valve 文档](https://tomcat.apache.org/tomcat-10.1-doc/config/valve.html)
- [Spring Boot 嵌入式 Tomcat 文档](https://docs.spring.io/spring-boot/docs/current/reference/html/howto.html#howto.webserver.embedded-container.customization)
