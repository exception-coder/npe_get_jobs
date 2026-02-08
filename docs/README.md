# NPE Get Jobs 项目文档

本目录包含项目的技术文档、设计指南和问题解决方案。

---

## 📚 文档分类

### Spring 框架相关

#### [Spring Boot 配置常见问题指南](./SPRING_BOOT_CONFIGURATION_COMMON_ISSUES.md)
记录 Spring Boot 配置管理中的常见问题和解决方案，包括：
- `@ConfigurationProperties` Bean 注册失败问题
- Bean 创建顺序和循环依赖问题
- 配置属性绑定的最佳实践

**适用场景**：
- 遇到 "bean could not be found" 错误
- Properties 类无法自动装配
- 配置类依赖注入失败

---

#### [Spring 事务常见问题指南](./SPRING_TRANSACTION_COMMON_ISSUES.md)
记录 Spring 事务管理中的常见问题和解决方案，包括：
- 定时任务中事务不生效问题
- AOP 代理机制导致的事务失效
- `@Scheduled` + `@Transactional` 组合使用问题

**适用场景**：
- 定时任务中执行数据库更新/删除操作报错
- `@Modifying` 查询抛出 `TransactionRequiredException`
- 同类方法调用导致事务不生效

---

### Hibernate / JPA 相关

#### [Hibernate 懒加载异常详解](./HIBERNATE_LAZY_LOADING_EXCEPTION.md)
深入分析 Hibernate 懒加载异常的原因和解决方案，包括：
- `LazyInitializationException` 的根本原因
- Session 生命周期管理
- 多种解决方案的对比和选择

**适用场景**：
- 遇到 `LazyInitializationException` 异常
- 关联实体无法访问
- 需要理解 Hibernate Session 管理机制

---

#### [Hibernate 懒加载快速参考](./HIBERNATE_LAZY_LOADING_QUICK_REFERENCE.md)
Hibernate 懒加载的快速参考指南，包括：
- 懒加载的基本概念
- 常见问题速查
- 解决方案速查表

**适用场景**：
- 快速查找懒加载问题的解决方案
- 需要快速参考 Hibernate 懒加载配置

---

### 认证授权相关

#### [JWT Token 设计指南](./JWT_TOKEN_DESIGN_GUIDE.md)
JWT Token 的设计理念、实现细节和最佳实践，包括：
- JWT Token 的结构和工作原理
- Access Token 和 Refresh Token 的设计
- Token 安全性和最佳实践

**适用场景**：
- 设计和实现 JWT 认证系统
- 理解 Token 刷新机制
- 解决 Token 安全性问题

---

#### [Token 刷新策略](./token-refresh-strategy.md)
Token 刷新策略的详细说明，包括：
- 主动刷新 vs 被动刷新
- 刷新策略的实现细节
- 前后端协作方案

**适用场景**：
- 实现 Token 自动刷新功能
- 设计 Token 过期处理机制
- 优化用户体验

---

### 模块设计文档

#### [智能职位搜索模块](./INTELLIGENT_JOB_SEARCH_MODULE.md)
智能职位搜索模块的设计文档，包括：
- 模块架构设计
- 核心功能实现
- AI 集成方案

**适用场景**：
- 了解智能搜索模块的设计
- 开发和维护搜索功能
- 集成 AI 能力

---

### AI 监控相关

#### [AI 健康监控总结](./AI_HEALTH_MONITORING_SUMMARY.md)
AI 健康监控系统的总结文档，包括：
- 监控系统架构
- 监控指标和告警
- 系统优化建议

---

#### [OpenAI 健康检查指南](./OPENAI_HEALTH_CHECK_GUIDE.md)
OpenAI API 健康检查的实施指南，包括：
- 健康检查的实现方式
- 监控指标和阈值
- 故障处理流程

---

#### [OpenAI 健康模块变更日志](./OPENAI_HEALTH_MODULE_CHANGELOG.md)
OpenAI 健康监控模块的版本变更记录。

---

### 前端技术相关

#### [Playwright 页面生命周期分析](./PLAYWRIGHT_PAGE_LIFECYCLE_ANALYSIS.md)
Playwright 页面生命周期的深入分析，包括：
- 页面生命周期事件
- 等待策略和最佳实践
- 常见问题和解决方案

**适用场景**：
- 开发和调试自动化测试
- 优化页面加载性能
- 解决页面交互问题

---

### 部署运维相关

#### [部署指南](./DEPLOYMENT_GUIDE.md)
项目部署的详细指南，包括：
- 部署环境准备
- 部署步骤和配置
- 常见部署问题

**适用场景**：
- 首次部署项目
- 环境迁移和升级
- 排查部署问题

---

#### [开发者配置说明](./DEVELOPER_CONFIG_NOTES.md)
开发环境配置的注意事项和说明。

**适用场景**：
- 新开发者加入项目
- 配置本地开发环境
- 解决环境配置问题

---

### 其他文档

#### [周报](./周报.md)
项目进度周报。

---

## 🔍 快速查找

### 按问题类型查找

| 问题类型 | 相关文档 |
|---------|---------|
| Spring Boot 配置错误 | [Spring Boot 配置常见问题指南](./SPRING_BOOT_CONFIGURATION_COMMON_ISSUES.md) |
| Bean 无法注入 | [Spring Boot 配置常见问题指南](./SPRING_BOOT_CONFIGURATION_COMMON_ISSUES.md) |
| 事务不生效 | [Spring 事务常见问题指南](./SPRING_TRANSACTION_COMMON_ISSUES.md) |
| 懒加载异常 | [Hibernate 懒加载异常详解](./HIBERNATE_LAZY_LOADING_EXCEPTION.md) |
| JWT 认证问题 | [JWT Token 设计指南](./JWT_TOKEN_DESIGN_GUIDE.md) |
| Token 刷新问题 | [Token 刷新策略](./token-refresh-strategy.md) |
| OpenAI API 问题 | [OpenAI 健康检查指南](./OPENAI_HEALTH_CHECK_GUIDE.md) |
| 部署问题 | [部署指南](./DEPLOYMENT_GUIDE.md) |

### 按技术栈查找

| 技术栈 | 相关文档 |
|-------|---------|
| Spring Boot | [配置问题](./SPRING_BOOT_CONFIGURATION_COMMON_ISSUES.md) · [事务问题](./SPRING_TRANSACTION_COMMON_ISSUES.md) |
| Hibernate/JPA | [懒加载异常](./HIBERNATE_LAZY_LOADING_EXCEPTION.md) · [快速参考](./HIBERNATE_LAZY_LOADING_QUICK_REFERENCE.md) |
| JWT | [设计指南](./JWT_TOKEN_DESIGN_GUIDE.md) · [刷新策略](./token-refresh-strategy.md) |
| AI/OpenAI | [健康监控](./AI_HEALTH_MONITORING_SUMMARY.md) · [检查指南](./OPENAI_HEALTH_CHECK_GUIDE.md) |
| Playwright | [页面生命周期](./PLAYWRIGHT_PAGE_LIFECYCLE_ANALYSIS.md) |

---

## 📝 文档编写规范

### 文档命名

- 使用大写字母和下划线命名：`MY_DOCUMENT_NAME.md`
- 文件名应该清晰表达文档内容
- 指南类文档使用 `_GUIDE` 后缀
- 问题类文档使用 `_COMMON_ISSUES` 或 `_EXCEPTION` 后缀

### 文档结构

每个技术文档应包含以下部分：

1. **标题和简介**：说明文档的目的和内容
2. **目录**：方便快速定位
3. **问题描述**：详细描述问题现象
4. **错误示例**：提供可复现的错误代码
5. **原因分析**：深入分析问题的根本原因
6. **解决方案**：提供多种解决方案并对比
7. **最佳实践**：总结推荐的做法
8. **参考资料**：列出相关的官方文档和资源
9. **版本信息**：记录文档版本和更新时间

### 文档维护

- 当发现新的问题或解决方案时，及时更新相关文档
- 每次更新后，修改文档底部的版本号和更新时间
- 重大更新应该在更新日志中记录

---

## 🤝 贡献指南

欢迎补充和完善文档！

### 如何贡献

1. 发现新的问题或解决方案时，创建新文档或更新现有文档
2. 确保文档格式符合编写规范
3. 在本 README 中添加文档索引
4. 提供清晰的代码示例和说明

### 文档模板

参考现有文档的结构，或使用以下模板：

```markdown
# 文档标题

简要描述文档内容和目的。

---

## 目录

1. [问题描述](#问题描述)
2. [解决方案](#解决方案)
3. [最佳实践](#最佳实践)

---

## 问题描述

### 问题现象

描述问题的具体表现...

### 错误示例

提供代码示例...

## 解决方案

### 方案 1：XXX

说明和代码示例...

## 最佳实践

总结推荐的做法...

---

**文档版本**: 1.0  
**最后更新**: YYYY-MM-DD  
**维护者**: getjobs team
```

---

**索引版本**: 1.0  
**最后更新**: 2025-12-03  
**维护者**: getjobs team

