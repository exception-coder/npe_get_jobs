# Cursor Rules - npe_get_jobs 项目规则

这个目录包含 npe_get_jobs 项目的 Cursor IDE 规则文件，用于指导前后端开发人员遵循统一的架构和编码规范。

## 📋 文件说明

### 1. backend.md - 后端架构与编码规则

**核心内容：**
- DDD-lite 分层架构（Controller → Application → Domain → Infrastructure）
- 后端项目结构规范
- Controller、Application Service、Domain Service、Repository 规范
- 领域模块开发指南
- 命名规范和方法规范
- 代码质量检查清单

**适用于：**
- Java 后端代码
- Spring Boot 应用
- 业务逻辑实现
- 新增领域模块开发

**关键原则：**
- ✅ 职责分离：每层只做本层该做的事
- ✅ 低耦合高内聚：通过接口通信，不直接依赖实现类
- ✅ 领域自治：按业务能力拆分，每个领域自行维护
- ✅ 可维护性优先：结构简单、边界清晰

---

### 2. frontend.md - 前端架构与编码规则

**核心内容：**
- Vue 3 Composition API 分层架构（View → Components + Composables → Services → API）
- 前端项目结构规范
- View、Components、Composables、Services、API 规范
- 命名规范和事件通信规范
- 样式规范和类型定义规范
- 代码质量检查清单

**适用于：**
- Vue 3 前端代码
- 组件开发
- 业务逻辑实现
- 新增业务模块开发

**关键原则：**
- ✅ 职责分离：每层只做本层该做的事
- ✅ 低耦合高内聚：通过 Props 和 Events 通信
- ✅ 可维护性优先：结构简单、边界清晰
- ✅ 代码质量：遵循 Vue 3 最佳实践

---

### 3. common.md - 通用编码规范

**核心内容：**
- 通用命名规范（类、方法、变量、常量、文件、目录）
- 方法规范（单一职责、参数数量、方法长度、返回值）
- 异常处理规范
- 注释规范
- Commit 消息格式和分支命名规范
- 文档规范
- 测试规范
- 性能优化指南
- 安全规范
- 代码审查清单

**适用于：**
- 所有代码文件
- 所有开发人员
- 版本控制操作

**关键原则：**
- ✅ 代码质量优先：遵循 SOLID 原则
- ✅ 团队协作：义务团队维护开发
- ✅ 一致性：统一的编码风格
- ✅ 可维护性：清晰的注释和文档

---

## 🚀 使用方式

### 在 Cursor 中自动加载

Cursor 会自动加载 `.cursor/rules/` 目录下的所有规则文件，无需手动配置。

### 查看规则

1. 在 Cursor 中按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows/Linux）
2. 搜索 "Cursor Rules" 或 "Show Rules"
3. 查看当前项目的规则

### 编辑规则

- 直接编辑 `.cursor/rules/` 目录下的 Markdown 文件
- 保存后 Cursor 会自动重新加载规则

---

## 📊 规则优先级

当规则冲突时，按以下优先级应用：

1. **backend.md** - 后端项目特定规则（优先级最高）
2. **frontend.md** - 前端项目特定规则（优先级最高）
3. **common.md** - 通用规则（优先级较低）

---

## 🎯 快速参考

### 后端开发快速检查

| 检查项 | 规范 | 示例 |
|--------|------|------|
| 分层架构 | Controller → Application → Domain → Infrastructure | 见 backend.md |
| Controller | 只做协议处理，调用应用层服务 | `UserController.register()` |
| Application Service | 编排用例，调用领域服务和仓储 | `UserApplicationService.registerUser()` |
| Domain Service | 实现业务规则，不依赖技术细节 | `UserDomainService.validateEmail()` |
| Repository | 数据持久化，不包含业务逻辑 | `UserRepository.save()` |
| 命名 | 类名 PascalCase，方法名 camelCase | `UserController`、`getUserById()` |
| 参数 | 不超过 3 个，超过使用 DTO | `findBySearchCriteria(UserSearchCriteria)` |
| 方法长度 | 不超过 50 行 | 见 backend.md 示例 |

### 前端开发快速检查

| 检查项 | 规范 | 示例 |
|--------|------|------|
| 分层架构 | View → Components + Composables → Services → API | 见 frontend.md |
| View | 页面容器，组织 Composables 和 Components | `UserPage.vue` |
| Component | UI 展示，接收 Props，触发 Events | `UserForm.vue` |
| Composable | 业务逻辑，管理状态，调用 API | `useUserData.ts` |
| Service | 工具函数，数据转换，不管理状态 | `userService.ts` |
| API | HTTP 请求，与后端通信 | `userApi.ts` |
| 命名 | Composable 用 `use` 前缀，Component 用 PascalCase | `useUserData`、`UserForm` |
| 通信 | Props 向下，Events 向上 | `@submit="handleSubmit"` |
| 样式 | 使用 `<style scoped>`，避免污染 | 见 frontend.md 示例 |

### 通用编码快速检查

| 检查项 | 规范 | 示例 |
|--------|------|------|
| 命名 | 类 PascalCase，方法 camelCase，常量 UPPER_SNAKE_CASE | `UserService`、`getUserById`、`MAX_RETRY` |
| 异常处理 | 不吞异常，使用具体异常，记录日志 | 见 common.md 示例 |
| Commit | `<type>(<scope>): <subject>` | `feat(user): 添加用户注册功能` |
| 分支 | `feature/`、`fix/`、`refactor/` 等 | `feature/user-registration` |
| 测试 | 覆盖率 > 80%，命名 `test{Method}{Scenario}{Expected}` | `testFindByEmailWhenUserExistsShouldReturnUser` |
| 注释 | 复杂逻辑、非显而易见的实现、重要决策 | 见 common.md 示例 |

---

## 📚 项目结构概览

### 后端结构

```
src/main/java/getjobs/
├── controller/              # API 层
├── service/                 # 应用层
├── modules/                 # 领域模块
│   ├── user/
│   ├── job/
│   └── ...
├── common/                  # 通用模块
├── config/                  # Spring 配置
└── repository/              # 数据访问
```

### 前端结构

```
frontend/src/
├── api/                     # HTTP 请求层
├── modules/                 # 业务模块
│   ├── user/
│   ├── job/
│   └── ...
├── components/              # 通用组件
├── composables/             # 通用组合式函数
├── plugins/                 # Vue 插件
├── router/                  # 路由配置
├── stores/                  # 全局状态
└── styles/                  # 全局样式
```

---

## ❓ 常见问题

### Q: 规则文件在哪里？
A: 在项目根目录的 `.cursor/rules/` 目录下

### Q: 如何添加新规则？
A: 在 `.cursor/rules/` 目录下创建新的 Markdown 文件，Cursor 会自动加载

### Q: 规则如何生效？
A: Cursor 会在编写代码时根据规则提供建议和检查

### Q: 可以禁用某些规则吗？
A: 可以在 Cursor 设置中配置规则的启用/禁用

### Q: 后端新增领域模块如何开发？
A: 参考 backend.md 中的"领域模块开发指南"部分

### Q: 前端新增业务模块如何开发？
A: 参考 frontend.md 中的"项目结构规范"部分

### Q: 如何提交代码？
A: 参考 common.md 中的"版本控制规范"部分

---

## 🔗 相关文档

- [Cursor 官方文档](https://cursor.com/docs)
- [项目 README](../../README.md)
- [后端开发指南](backend.md)
- [前端开发指南](frontend.md)
- [通用编码规范](common.md)

---

## 📝 规则维护

这些规则由团队共同维护，如有建议或改进，请提交 Issue 或 Pull Request。

**最后更新：** 2026-03-12  
**版本：** 2.0  
**维护者：** npe_get_jobs 开发团队
