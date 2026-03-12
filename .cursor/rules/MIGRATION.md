# 规则迁移指南

## 迁移概述

本项目已从旧的 `.cursorrules` 配置方式迁移到新的 `.cursor/rules/` 标准化规则目录结构。

**迁移时间：** 2026-03-12  
**迁移状态：** ✅ 完成

---

## 什么是 `.cursor/rules/`？

`.cursor/rules/` 是 Cursor IDE 的标准化规则目录，用于存放项目级别的编码规范和架构指南。

**优势：**
- ✅ 标准化的目录结构
- ✅ 支持多个规则文件
- ✅ 自动加载，无需手动配置
- ✅ 易于版本控制和团队协作
- ✅ 支持 Markdown 格式，易于阅读和编辑

---

## 迁移内容

### 旧结构（已弃用）

```
frontend/.cursorrules          # 前端规则（旧）
.cursorrules                   # 后端规则（旧）
```

### 新结构（现行）

```
.cursor/rules/
├── README.md                  # 规则总览和使用指南
├── backend.md                 # 后端架构与编码规范
├── frontend.md                # 前端架构与编码规范
├── common.md                  # 通用编码规范
└── MIGRATION.md               # 迁移指南（本文件）
```

---

## 规则文件说明

### 1. backend.md - 后端规范

**包含内容：**
- DDD-lite 分层架构详解
- 后端项目结构规范
- Controller、Application Service、Domain Service、Repository 规范
- 领域模块开发指南
- 命名规范和方法规范
- 代码质量检查清单

**何时使用：**
- 开发后端功能
- 新增领域模块
- 代码审查

---

### 2. frontend.md - 前端规范

**包含内容：**
- Vue 3 Composition API 分层架构详解
- 前端项目结构规范
- View、Components、Composables、Services、API 规范
- 命名规范和事件通信规范
- 样式规范和类型定义规范
- 代码质量检查清单

**何时使用：**
- 开发前端功能
- 新增业务模块
- 代码审查

---

### 3. common.md - 通用规范

**包含内容：**
- 通用命名规范
- 方法规范
- 异常处理规范
- 注释规范
- Commit 消息格式
- 分支命名规范
- 文档规范
- 测试规范
- 性能优化指南
- 安全规范

**何时使用：**
- 所有代码开发
- 版本控制操作
- 代码审查

---

## 如何使用新规则

### 1. 自动加载

Cursor 会自动加载 `.cursor/rules/` 目录下的所有规则文件，无需手动配置。

### 2. 查看规则

在 Cursor 中：
1. 按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows/Linux）
2. 搜索 "Cursor Rules" 或 "Show Rules"
3. 查看当前项目的规则

### 3. 编辑规则

- 直接编辑 `.cursor/rules/` 目录下的 Markdown 文件
- 保存后 Cursor 会自动重新加载规则

### 4. 快速参考

查看 `.cursor/rules/README.md` 中的"快速参考"部分，快速了解各层规范。

---

## 主要改进

### 1. 结构更清晰

**旧方式：**
- 规则分散在不同位置
- 难以维护和查找

**新方式：**
- 统一放在 `.cursor/rules/` 目录
- 按功能分类（backend、frontend、common）
- 易于维护和查找

### 2. 内容更详细

**旧方式：**
- 规范简洁，缺少示例

**新方式：**
- 包含详细的规范说明
- 提供代码示例
- 包含快速参考表格

### 3. 易于协作

**旧方式：**
- 规则难以版本控制

**新方式：**
- 规则文件易于版本控制
- 支持团队协作
- 支持 Pull Request 审查

### 4. 标准化

**旧方式：**
- 自定义格式

**新方式：**
- 遵循 Cursor IDE 标准
- 与其他项目保持一致
- 易于新成员上手

---

## 迁移检查清单

- [x] 创建 `.cursor/rules/` 目录
- [x] 创建 `backend.md` 规范文件
- [x] 创建 `frontend.md` 规范文件
- [x] 创建 `common.md` 规范文件
- [x] 创建 `README.md` 总览文件
- [x] 创建 `MIGRATION.md` 迁移指南
- [x] 验证 Cursor 自动加载规则
- [x] 更新团队文档

---

## 常见问题

### Q: 旧的 `.cursorrules` 文件还需要吗？

A: 不需要。旧的 `.cursorrules` 文件已被新的 `.cursor/rules/` 目录替代。建议删除旧文件以避免混淆。

### Q: 如何确保团队成员使用新规则？

A: 
1. 确保 `.cursor/rules/` 目录已提交到 Git
2. 通知团队成员更新项目
3. Cursor 会自动加载新规则

### Q: 可以自定义规则吗？

A: 可以。直接编辑 `.cursor/rules/` 目录下的 Markdown 文件，保存后 Cursor 会自动重新加载。

### Q: 规则优先级如何确定？

A: 
1. **backend.md** - 后端项目特定规则（优先级最高）
2. **frontend.md** - 前端项目特定规则（优先级最高）
3. **common.md** - 通用规则（优先级较低）

### Q: 如何添加新规则？

A: 在 `.cursor/rules/` 目录下创建新的 Markdown 文件，Cursor 会自动加载。

### Q: 规则文件的格式有要求吗？

A: 使用 Markdown 格式，遵循以下结构：
- 标题（# 或 ##）
- 内容说明
- 代码示例（可选）
- 参考资源（可选）

---

## 后续维护

### 规则更新流程

1. **识别需求**：发现规范不足或需要改进
2. **讨论**：与团队讨论新规范
3. **编辑**：更新相应的规则文件
4. **审查**：提交 Pull Request，团队审查
5. **合并**：审查通过后合并到主分支
6. **通知**：通知团队成员新规范

### 规则版本管理

- 规则版本记录在 `.cursor/rules/README.md` 中
- 重大更新时更新版本号
- 保持更新日期最新

---

## 相关资源

- [Cursor 官方文档](https://cursor.com/docs)
- [项目 README](../../README.md)
- [后端开发指南](backend.md)
- [前端开发指南](frontend.md)
- [通用编码规范](common.md)
- [规则总览](README.md)

---

## 反馈和建议

如有任何关于规则的建议或改进，请：

1. 提交 Issue 描述问题或建议
2. 提交 Pull Request 提议改进
3. 在团队讨论中提出想法

---

**迁移完成日期：** 2026-03-12  
**维护者：** npe_get_jobs 开发团队
