# Access 日志模块

## 📋 概述

Access 日志基础设施模块，提供按秒级聚合同一 IP 请求的访问日志功能，用于记录和分析 HTTP 请求。

## ✨ 主要特性

- ⏱️ **秒级聚合**：同一秒内同一 IP 的请求自动合并为一个记录
- 📊 **请求统计**：记录请求方法 + 请求路径的 KV 集合，方便快速查阅
- 🔢 **计数功能**：统计同一秒内的请求次数
- 🚀 **自动输出**：每秒自动输出日志并清空缓存
- ⚙️ **灵活配置**：支持自定义拦截路径和排除路径
- 🛡️ **线程安全**：使用 ConcurrentHashMap 和锁机制保证线程安全

## 📦 模块结构

```
accesslog/
├── AccessLogInterceptor.java    # 访问日志拦截器（核心组件）
├── AccessLogService.java        # 访问日志服务（聚合和输出）
├── AccessLogConfig.java         # 访问日志配置类
├── AccessLogProperties.java     # 配置属性类
├── AccessLogRecord.java         # 访问日志记录数据类
├── package-info.java           # 包文档
└── README.md                   # 使用文档
```

## 🚀 快速开始

### 1. 基本使用

模块会自动注册拦截器并开始记录访问日志。无需额外代码，只需在配置文件中启用即可。

### 2. 配置示例

在 `application.yml` 中配置：

```yaml
# Access 日志配置
access:
  log:
    enabled: true                    # 是否启用（默认 true）
    include-patterns:                # 需要记录的路径（Ant 路径模式）
      - /api/**
    exclude-patterns:                # 排除的路径（Ant 路径模式）
      - /api/auth/**                 # 认证相关接口
      - /actuator/**                 # 监控端点
      - /error                       # 错误处理
      - /favicon.ico                 # 网站图标
    log-level: INFO                  # 日志级别（默认 INFO）
```

**注意**：如果不配置，将使用默认值。默认配置如下：
- `enabled`: `true`
- `include-patterns`: `["/**"]`（记录所有路径）
- `exclude-patterns`: `["/actuator/**", "/error", "/favicon.ico"]`
- `log-level`: `"INFO"`

## 📝 日志输出格式

### 格式说明

```
ACCESS_LOG - IP: {IP地址} | Timestamp: {秒级时间戳} | Count: {请求次数} | Requests: {请求方法+路径集合}
```

### 示例

```
ACCESS_LOG - IP: 192.168.1.1 | Timestamp: 1704067200 | Count: 5 | Requests: {GET:/api/users, POST:/api/auth/login, GET:/api/products}
```

### 字段说明

- **IP**：客户端 IP 地址（支持从 X-Forwarded-For、X-Real-IP 等请求头获取）
- **Timestamp**：秒级时间戳（Unix 时间戳，秒）
- **Count**：该秒内该 IP 的总请求次数
- **Requests**：该秒内该 IP 的所有不同请求方法+路径组合（格式：`METHOD:path`）

## 🔍 工作原理

### 1. 请求拦截

`AccessLogInterceptor` 拦截所有配置的 HTTP 请求，提取以下信息：
- 客户端 IP 地址
- 请求方法（GET、POST、PUT、DELETE 等）
- 请求路径

### 2. 请求聚合

`AccessLogService` 使用 `ConcurrentHashMap` 存储请求记录：
- **Key**：`"IP-timestamp"`（例如 `"192.168.1.1-1704067200"`）
- **Value**：`AccessLogRecord` 对象，包含：
  - IP 地址
  - 时间戳（秒级）
  - 请求方法+路径集合（Set）
  - 请求次数（Count）

### 3. 日志输出

使用 `@Scheduled` 定时任务每秒执行一次：
- 输出上一秒的日志记录（避免丢失当前秒的请求）
- 清空已输出的记录
- 自动清理过期记录（超过 2 秒的记录）

### 4. 应用关闭

应用关闭时（`@PreDestroy`），会自动输出所有剩余的日志记录。

## 💡 使用场景

### 场景 1：API 访问统计

记录所有 API 请求，分析接口调用频率和分布：

```yaml
access:
  log:
    enabled: true
    include-patterns:
      - /api/**
    exclude-patterns:
      - /api/auth/**
      - /actuator/**
```

### 场景 2：特定路径监控

只记录特定路径的请求：

```yaml
access:
  log:
    enabled: true
    include-patterns:
      - /api/orders/**
      - /api/payments/**
    exclude-patterns:
      - /actuator/**
```

### 场景 3：排除健康检查

排除健康检查和监控端点，减少日志噪音：

```yaml
access:
  log:
    enabled: true
    include-patterns:
      - /**
    exclude-patterns:
      - /actuator/**
      - /health/**
      - /metrics/**
```

## ⚙️ 高级配置

### 自定义日志级别

```yaml
access:
  log:
    log-level: DEBUG  # 可选值：TRACE, DEBUG, INFO, WARN, ERROR
```

### 禁用 Access 日志

```yaml
access:
  log:
    enabled: false
```

## 🔧 技术实现

### 线程安全

- 使用 `ConcurrentHashMap` 存储请求记录，保证并发安全
- 使用 `ReentrantLock` 保护日志输出操作，避免并发输出

### 内存管理

- 每秒自动清理已输出的记录
- 自动清理过期记录（超过 2 秒），防止内存泄漏
- 应用关闭时输出所有剩余记录

### IP 地址获取

支持从以下请求头获取客户端 IP（按优先级）：
1. `X-Forwarded-For`（代理服务器转发）
2. `X-Real-IP`（Nginx 等反向代理）
3. `Proxy-Client-IP`（代理客户端 IP）
4. `WL-Proxy-Client-IP`（WebLogic 代理）
5. `request.getRemoteAddr()`（直接连接）

如果 `X-Forwarded-For` 包含多个 IP（逗号分隔），会取第一个 IP。

## 📊 性能考虑

- **轻量级**：拦截器只提取基本信息，不进行复杂操作
- **异步聚合**：请求记录是异步聚合的，不影响请求处理性能
- **定时输出**：每秒输出一次，避免频繁 I/O 操作
- **内存优化**：自动清理过期记录，防止内存泄漏

## 🐛 故障排查

### 问题 1：日志没有输出

**可能原因**：
- 配置中 `enabled: false`
- 请求路径被排除
- 日志级别设置过高

**解决方法**：
1. 检查配置文件中 `access.log.enabled` 是否为 `true`
2. 检查请求路径是否在 `include-patterns` 中
3. 检查请求路径是否在 `exclude-patterns` 中
4. 检查日志级别设置

### 问题 2：IP 地址显示不正确

**可能原因**：
- 反向代理未正确设置请求头
- 请求头被中间件修改

**解决方法**：
1. 检查反向代理（Nginx、Apache 等）是否设置了 `X-Forwarded-For` 或 `X-Real-IP`
2. 检查是否有中间件修改了请求头

### 问题 3：内存占用过高

**可能原因**：
- 请求量过大
- 过期记录未及时清理

**解决方法**：
1. 检查是否有大量请求
2. 检查定时任务是否正常运行
3. 考虑调整清理策略（减少过期时间阈值）

## 📚 相关文档

- [package-info.java](./package-info.java) - 包文档
- [USAGE_EXAMPLE.md](./USAGE_EXAMPLE.md) - 使用示例

## 🔗 相关模块

- [认证拦截器模块](../auth/README.md) - 提供 JWT 认证功能
- [Tomcat 配置模块](../tomcat/README.md) - 提供 Tomcat 相关配置

## 📝 更新日志

### 2025-01-XX

- ✨ 初始版本
- ✨ 支持按秒级聚合同一 IP 的请求
- ✨ 支持记录请求方法 + 请求路径的 KV 集合
- ✨ 支持统计同一秒内的请求次数
- ✨ 支持自定义拦截路径和排除路径

## 👥 贡献者

- getjobs

## 📄 许可证

本项目采用 MIT 许可证。

