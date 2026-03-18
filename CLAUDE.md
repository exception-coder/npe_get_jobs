# npe_get_jobs 项目开发指南

## 项目概述

这是一个 Java 求职招聘信息聚合应用，采用 Spring Boot + Vue 3 技术栈。

---

## 核心原则

- **职责分离**：每层只做本层该做的事，不在 Controller 写业务/编排逻辑
- **低耦合高内聚**：领域间通过接口通信，不直接依赖实现类
- **领域自治**：按业务能力拆分，每个领域自行维护本领域的处理逻辑
- **代码质量**：遵循 SOLID 原则，保持代码简洁、可读、可测试

---

## 分层架构（DDD-lite）

```
Request → Controller → Application Service → Domain Service → Repository → Database
                                          ↓
                                    Infrastructure
```

| 层 | 位置 | 职责 | 禁止 |
|---|---|---|---|
| **API / Controller** | `controller/`、`modules/*/web/` | 协议处理：入参校验、调用应用层、返回 HTTP 响应 | 业务逻辑、直接调 Repository |
| **Application** | `service/`、`modules/*/service/` | 编排用例：调领域/仓储、事务边界、跨领域协调 | 复杂领域规则实现、技术细节 |
| **Domain** | `modules/*/domain/`、`modules/*/service/` | 业务规则、领域模型、值对象 | 依赖 HTTP、技术框架 |
| **Infrastructure** | `infrastructure/`、`repository/` | 技术实现：DB、HTTP、缓存、外部系统 | 业务决策、跨领域逻辑 |

---

## 项目结构

```
src/main/java/getjobs/
├── controller/                    # API 层
├── service/                       # 应用层
├── modules/                       # 领域模块（按业务能力拆分）
│   ├── user/
│   ├── job/
│   ├── boss/
│   ├── job51/
│   ├── liepin/
│   ├── zhilian/
│   └── task/
├── common/                        # 通用模块
├── infrastructure/                # 基础设施层
│   ├── ai/                        # AI 平台适配
│   ├── playwright/                 # Playwright 浏览器自动化
│   └── ...
└── repository/                    # 数据访问
```

---

## 编码规范

### 命名规范

| 类型 | 格式 | 示例 |
|---|---|---|
| 类/接口 | PascalCase | `UserService`、`UserRepository` |
| 方法/函数 | camelCase | `getUserById`、`saveUser` |
| 常量 | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| 文件名 | 与类名一致 | `UserService.java` |

### 方法规范

- **单一职责**：每个方法只做一件事
- **参数数量**：不超过 3 个，超过使用 DTO
- **方法长度**：不超过 50 行
- **返回值**：避免返回 null，使用 Optional

### 异常处理

- **不要吞异常**：捕获后必须处理或重新抛出
- **使用具体异常**：避免捕获 `Exception`
- **记录日志**：使用 log 记录异常信息

```java
// ✅ 好的异常处理
try {
    userRepository.save(user);
} catch (DataIntegrityViolationException e) {
    log.error("用户已存在", e);
    throw new UserAlreadyExistsException("用户已存在", e);
}

// ❌ 不好的异常处理
try {
    userRepository.save(user);
} catch (Exception e) {
    // 吞异常，不处理
}
```

---

## Playwright 最佳实践

### Cookie 管理

获取 Cookie 前必须等待页面完全加载：

```java
// 必须等待网络空闲，确保所有异步请求（包括设置Cookie的请求）都已完成
page.waitForLoadState(LoadState.NETWORKIDLE);
// 额外等待确保JavaScript有足够时间处理并写入Cookie
page.waitForTimeout(500);
```

### Cookie 字段保存

保存 Cookie 时必须包含以下字段（从 Playwright Cookie 对象获取）：
- name, value, domain, path
- expires, secure, httpOnly

---

## 开发日志规范

**每次代码变更必须登记到开发日志**

- 文件位置：`docs/dev-log.md`
- 每条记录包含：日期、任务描述、创建/修改的文件、关键设计决策
- 追加写入，不覆盖已有日志

---

## Git 提交规范

遵循 Conventional Commits：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**
- `feat` - 新功能
- `fix` - Bug 修复
- `docs` - 文档
- `refactor` - 重构
- `perf` - 性能优化
- `test` - 测试

**示例：**
```
feat(user): 添加用户注册功能
```

---

## 代码审查清单

- [ ] Controller 只做协议处理，不包含业务逻辑
- [ ] Application Service 编排用例，调用领域服务和仓储
- [ ] Domain Service 实现业务规则，不依赖技术细节
- [ ] 方法参数不超过 3 个
- [ ] 方法长度不超过 50 行
- [ ] 异常处理正确，不吞异常
- [ ] 命名清晰，遵循规范

---

## 常用命令

```bash
# 编译项目
./mvnw compile

# 运行测试
./mvnw test

# 启动应用
./mvnw spring-boot:run
```
