# npe_get_jobs 规则体系架构总览

## 📐 规则体系结构

```
.cursor/rules/
├── README.md                      # 规则总览和快速参考
├── MIGRATION.md                   # 迁移指南
├── ARCHITECTURE_OVERVIEW.md       # 本文件：规则体系架构
├── backend.md                     # 后端架构与编码规范
├── frontend.md                    # 前端架构与编码规范
└── common.md                      # 通用编码规范
```

---

## 🏗️ 规则体系分层

```
┌─────────────────────────────────────────────────────────┐
│                    项目级规则体系                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │           通用编码规范 (common.md)               │   │
│  │  • 命名规范  • 方法规范  • 异常处理              │   │
│  │  • 注释规范  • 版本控制  • 文档规范              │   │
│  │  • 测试规范  • 性能优化  • 安全规范              │   │
│  └──────────────────────────────────────────────────┘   │
│                          ▲                                │
│                          │ 应用于所有代码                │
│                          │                                │
│  ┌──────────────────────┴──────────────────────────┐    │
│  │                                                  │    │
│  │  ┌─────────────────────┐  ┌─────────────────┐  │    │
│  │  │ 后端规范            │  │ 前端规范        │  │    │
│  │  │ (backend.md)        │  │ (frontend.md)   │  │    │
│  │  │                     │  │                 │  │    │
│  │  │ • 分层架构          │  │ • 分层架构      │  │    │
│  │  │ • 项目结构          │  │ • 项目结构      │  │    │
│  │  │ • 层级规范          │  │ • 层级规范      │  │    │
│  │  │ • 模块开发          │  │ • 模块开发      │  │    │
│  │  │ • 命名规范          │  │ • 命名规范      │  │    │
│  │  │ • 质量检查          │  │ • 质量检查      │  │    │
│  │  └─────────────────────┘  └─────────────────┘  │    │
│  │                                                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 📋 规则文件详细说明

### 1. common.md - 通用编码规范（基础层）

**职责：** 定义所有代码必须遵循的通用规范

**包含内容：**

| 类别 | 内容 | 适用范围 |
|------|------|---------|
| 命名规范 | 类、方法、变量、常量、文件、目录命名 | 所有代码 |
| 方法规范 | 单一职责、参数数量、方法长度、返回值 | 所有方法 |
| 异常处理 | 异常捕获、日志记录、自定义异常 | 所有异常处理 |
| 注释规范 | 文档注释、代码注释、何时写注释 | 所有代码 |
| 版本控制 | Commit 格式、分支命名、提交规范 | 所有提交 |
| 文档规范 | README、代码注释、API 文档 | 所有文档 |
| 测试规范 | 单元测试、集成测试、测试命名 | 所有测试 |
| 性能优化 | 数据库优化、代码优化、前端优化 | 所有代码 |
| 安全规范 | 认证、授权、数据安全、XSS 防护 | 所有代码 |

**使用场景：**
- ✅ 所有代码开发
- ✅ 代码审查
- ✅ 版本控制操作
- ✅ 文档编写

---

### 2. backend.md - 后端架构与编码规范（后端层）

**职责：** 定义后端项目的架构和编码规范

**核心架构：** DDD-lite 分层架构

```
Request
  ↓
Controller (API 层)
  ↓ 调用
Application Service (应用层)
  ↓ 调用
Domain Service (领域层)
  ↓ 调用
Repository (基础设施层)
  ↓
Database
```

**包含内容：**

| 层级 | 职责 | 禁止 | 示例 |
|------|------|------|------|
| Controller | 协议处理、参数校验、调用应用层 | 业务逻辑、直接调 Repository | `UserController.register()` |
| Application Service | 编排用例、调用领域服务、事务管理 | 复杂业务规则、技术细节 | `UserApplicationService.registerUser()` |
| Domain Service | 业务规则实现、领域模型 | 技术细节、HTTP 依赖 | `UserDomainService.validateEmail()` |
| Repository | 数据持久化、数据查询 | 业务逻辑、跨领域查询 | `UserRepository.save()` |

**项目结构：**

```
src/main/java/getjobs/
├── controller/              # API 层
├── service/                 # 应用层
├── modules/                 # 领域模块
│   ├── user/
│   │   ├── web/            # 本领域 Controller
│   │   ├── service/        # 本领域服务
│   │   ├── domain/         # 领域模型
│   │   ├── dto/            # 数据传输对象
│   │   ├── assembler/      # DTO 转换
│   │   └── infrastructure/ # 基础设施
│   └── ...
├── common/                  # 通用模块
├── config/                  # Spring 配置
└── repository/              # 数据访问
```

**使用场景：**
- ✅ 后端功能开发
- ✅ 新增领域模块
- ✅ 后端代码审查
- ✅ 架构设计

---

### 3. frontend.md - 前端架构与编码规范（前端层）

**职责：** 定义前端项目的架构和编码规范

**核心架构：** Vue 3 Composition API 分层架构

```
User Interaction
  ↓
View (页面容器)
  ↓ 使用
Components (UI 展示) + Composables (业务逻辑)
  ↓ 调用
Services (工具函数)
  ↓ 调用
API (HTTP 请求)
  ↓
Backend
```

**包含内容：**

| 层级 | 职责 | 禁止 | 示例 |
|------|------|------|------|
| View | 页面容器、组织组件、状态协调 | 业务逻辑、API 调用、DOM 操作 | `UserPage.vue` |
| Component | UI 展示、Props 接收、Events 触发 | 业务逻辑、API 调用、状态管理 | `UserForm.vue` |
| Composable | 业务逻辑、状态管理、API 调用 | UI 渲染、DOM 操作、Props 修改 | `useUserData.ts` |
| Service | 工具函数、数据转换、格式化 | 业务决策、状态管理、API 调用 | `userService.ts` |
| API | HTTP 请求、与后端通信 | 业务逻辑、数据处理 | `userApi.ts` |

**项目结构：**

```
frontend/src/
├── api/                     # HTTP 请求层
├── modules/                 # 业务模块
│   ├── user/
│   │   ├── views/          # 页面容器
│   │   ├── components/     # UI 组件
│   │   ├── composables/    # 业务逻辑
│   │   ├── service/        # 工具函数
│   │   ├── api/            # 本模块 API
│   │   ├── types/          # 类型定义
│   │   ├── constants/      # 常量
│   │   └── stores/         # 模块状态
│   └── ...
├── components/              # 通用组件
├── composables/             # 通用组合式函数
├── plugins/                 # Vue 插件
├── router/                  # 路由配置
├── stores/                  # 全局状态
└── styles/                  # 全局样式
```

**使用场景：**
- ✅ 前端功能开发
- ✅ 新增业务模块
- ✅ 前端代码审查
- ✅ 组件设计

---

## 🔄 规则应用流程

### 后端开发流程

```
1. 需求分析
   ↓
2. 确定领域模块 (参考 backend.md)
   ↓
3. 设计领域模型 (参考 backend.md)
   ↓
4. 实现 Controller (参考 backend.md)
   ↓
5. 实现 Application Service (参考 backend.md)
   ↓
6. 实现 Domain Service (参考 backend.md)
   ↓
7. 实现 Repository (参考 backend.md)
   ↓
8. 编写单元测试 (参考 common.md)
   ↓
9. 代码审查 (参考 backend.md + common.md)
   ↓
10. 提交代码 (参考 common.md)
```

### 前端开发流程

```
1. 需求分析
   ↓
2. 确定业务模块 (参考 frontend.md)
   ↓
3. 设计页面结构 (参考 frontend.md)
   ↓
4. 创建 View (参考 frontend.md)
   ↓
5. 创建 Components (参考 frontend.md)
   ↓
6. 创建 Composables (参考 frontend.md)
   ↓
7. 创建 Services (参考 frontend.md)
   ↓
8. 创建 API (参考 frontend.md)
   ↓
9. 编写单元测试 (参考 common.md)
   ↓
10. 代码审查 (参考 frontend.md + common.md)
   ↓
11. 提交代码 (参考 common.md)
```

---

## 📊 规则优先级

当规则冲突时，按以下优先级应用：

```
┌─────────────────────────────────────┐
│  backend.md / frontend.md           │  优先级最高
│  (项目特定规则)                      │
├─────────────────────────────────────┤
│  common.md                          │  优先级较低
│  (通用规则)                          │
└─────────────────────────────────────┘
```

**示例：**
- 如果 backend.md 和 common.md 对命名规范有不同要求，使用 backend.md 的规范
- 如果 frontend.md 和 common.md 对异常处理有不同要求，使用 frontend.md 的规范

---

## 🎯 快速查找指南

### 我想了解...

| 问题 | 查看文件 | 部分 |
|------|---------|------|
| 后端分层架构 | backend.md | 分层架构（DDD-lite） |
| 前端分层架构 | frontend.md | 分层架构（Vue 3 Composition API） |
| 命名规范 | common.md | 通用命名规范 |
| 方法规范 | common.md | 方法规范 |
| 异常处理 | common.md | 异常处理 |
| Commit 格式 | common.md | 版本控制规范 |
| 分支命名 | common.md | 版本控制规范 |
| 测试规范 | common.md | 测试规范 |
| 性能优化 | common.md | 性能优化 |
| 安全规范 | common.md | 安全规范 |
| Controller 规范 | backend.md | Controller 规范 |
| Service 规范 | backend.md | Application Service 规范 |
| Repository 规范 | backend.md | Repository 规范 |
| View 规范 | frontend.md | View（页面）规范 |
| Component 规范 | frontend.md | Components（组件）规范 |
| Composable 规范 | frontend.md | Composables（组合式函数）规范 |
| 新增后端模块 | backend.md | 领域模块开发指南 |
| 新增前端模块 | frontend.md | 项目结构规范 |

---

## 🔗 文件关系图

```
README.md (总览和快速参考)
    ↓
    ├─→ backend.md (后端规范)
    │       ├─→ 分层架构
    │       ├─→ 项目结构
    │       ├─→ 层级规范
    │       ├─→ 命名规范 (参考 common.md)
    │       └─→ 质量检查 (参考 common.md)
    │
    ├─→ frontend.md (前端规范)
    │       ├─→ 分层架构
    │       ├─→ 项目结构
    │       ├─→ 层级规范
    │       ├─→ 命名规范 (参考 common.md)
    │       └─→ 质量检查 (参考 common.md)
    │
    ├─→ common.md (通用规范)
    │       ├─→ 命名规范
    │       ├─→ 方法规范
    │       ├─→ 异常处理
    │       ├─→ 注释规范
    │       ├─→ 版本控制
    │       ├─→ 文档规范
    │       ├─→ 测试规范
    │       ├─→ 性能优化
    │       └─→ 安全规范
    │
    ├─→ MIGRATION.md (迁移指南)
    │       └─→ 从 .cursorrules 迁移到 .cursor/rules/
    │
    └─→ ARCHITECTURE_OVERVIEW.md (本文件)
            └─→ 规则体系架构总览
```

---

## 📚 学习路径

### 新成员快速上手

1. **第一步：** 阅读 `README.md` 了解规则体系
2. **第二步：** 根据岗位选择：
   - 后端开发：阅读 `backend.md`
   - 前端开发：阅读 `frontend.md`
3. **第三步：** 阅读 `common.md` 了解通用规范
4. **第四步：** 在实际开发中参考规则

### 深入学习

1. **架构设计：** 阅读 `backend.md` 或 `frontend.md` 的分层架构部分
2. **项目结构：** 阅读 `backend.md` 或 `frontend.md` 的项目结构部分
3. **代码质量：** 阅读 `common.md` 的代码质量规范部分
4. **版本控制：** 阅读 `common.md` 的版本控制规范部分

---

## 🔄 规则维护流程

```
1. 识别需求
   ↓
2. 讨论和设计
   ↓
3. 编辑规则文件
   ↓
4. 提交 Pull Request
   ↓
5. 团队审查
   ↓
6. 合并到主分支
   ↓
7. 通知团队成员
   ↓
8. Cursor 自动加载新规则
```

---

## 📞 获取帮助

### 常见问题

- 查看 `README.md` 中的"常见问题"部分
- 查看 `MIGRATION.md` 中的"常见问题"部分

### 提交建议

1. 提交 Issue 描述问题或建议
2. 提交 Pull Request 提议改进
3. 在团队讨论中提出想法

### 联系维护者

- npe_get_jobs 开发团队

---

**文档版本：** 1.0  
**最后更新：** 2026-03-12  
**维护者：** npe_get_jobs 开发团队
