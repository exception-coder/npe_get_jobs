# 项目文档索引 📚

快速查找项目中所有文档的位置和用途。

---

## 📖 核心文档

### 项目根目录

| 文档 | 路径 | 用途 | 更新频率 |
|------|------|------|---------|
| **README** | `README.md` | 项目介绍、安装指南 | 按需 |
| **更新日志** | `CHANGELOG.md` | 所有版本更新记录 | 每次发版 |
| **技术问题汇总** | `TECHNICAL_ISSUES.md` | 常见技术问题详解 | 遇到新问题 |
| **快速参考** | `QUICK_TECH_REFERENCE.md` | 技术问题速查卡片 | 遇到新问题 |
| **文档索引** | `DOCUMENTATION_INDEX.md` | 本文件 | 新增文档时 |
| **任务中断机制** | `任务中断机制说明.md` | 任务取消机制说明 | 稳定 |

---

## 🏗️ 基础设施模块文档

### 任务调度基础设施

**路径**: `src/main/java/getjobs/common/infrastructure/task/docs/`

| 文档 | 文件名 | 内容 |
|------|--------|------|
| 任务中断机制 | `任务中断机制说明.md` | 详细的任务取消机制 |
| 快速参考 | `任务取消快速参考.md` | 快速使用指南 |
| 方案对比 | `任务取消方案对比.md` | 不同方案对比 |
| 模块说明 | `README.md` | 任务调度模块说明 |

### AI 模型健康检查模块 ⭐ 新增

**路径**: `src/main/java/getjobs/common/infrastructure/health/`

| 文档 | 文件名 | 用途 | 重要性 |
|------|--------|------|---------|
| **使用指南** | `AI_MODELS_HEALTH_GUIDE.md` | 详细使用说明 | ⭐⭐⭐ |
| **模块说明** | `MODULE_SUMMARY.md` | 模块概述和快速开始 | ⭐⭐⭐ |
| 详细文档 | `README.md` | 完整功能文档 | ⭐⭐ |
| 使用示例 | `USAGE_EXAMPLE.md` | 丰富的集成示例 | ⭐⭐ |

**相关文档**:
- `docs/AI_HEALTH_MONITORING_SUMMARY.md` - 完整总结
- `docs/OPENAI_HEALTH_CHECK_GUIDE.md` - 快速指南
- `docs/OPENAI_HEALTH_MODULE_CHANGELOG.md` - 更新日志

**测试工具**:
- `test-ai-models-health.sh` - 自动化测试脚本

---

## 🛠️ 技术深度分析

### Playwright 相关

| 文档 | 路径 | 内容 |
|------|------|------|
| Page 生命周期分析 | `docs/PLAYWRIGHT_PAGE_LIFECYCLE_ANALYSIS.md` | Playwright 内部机制深度分析 |

### 健康检查相关

| 文档 | 路径 | 内容 |
|------|------|------|
| 健康检查快速指南 | `docs/OPENAI_HEALTH_CHECK_GUIDE.md` | 快速测试和使用 |
| 健康检查完整总结 | `docs/AI_HEALTH_MONITORING_SUMMARY.md` | 模块完整说明 |
| 健康检查更新日志 | `docs/OPENAI_HEALTH_MODULE_CHANGELOG.md` | 模块版本变更 |

---

## 🎯 功能模块文档

### AI 智能模块

**路径**: `src/main/java/getjobs/modules/ai/`

| 模块 | 文档位置 | 说明 |
|------|---------|------|
| AI 模块总览 | `README.md` | AI 功能总体介绍 |
| Greeting 模块 | `greeting/` | 智能打招呼功能 |
| Job 匹配模块 | `job/` | 岗位智能匹配 |
| Job Skill 模块 | `job_skill/` | 岗位技能分析 |

### 快速投递模块

**路径**: `src/main/java/getjobs/modules/task/quickdelivery/`

| 文档 | 文件名 | 内容 |
|------|--------|------|
| 模块说明 | `README.md` | 快速投递功能说明 |
| API 文档 | `package-info.java` | 接口文档和示例 |

---

## 🔧 配置文件说明

### Spring Boot 配置

| 文件 | 路径 | 用途 |
|------|------|------|
| 主配置 | `src/main/resources/application.yml` | 主配置文件（数据库、JPA等） |
| 开发环境 | `src/main/resources/application-dev.yml` | 开发环境配置 |
| GPT 配置 | `src/main/resources/application-gpt.yml` | AI 模型配置 |
| Actuator 配置 | `src/main/resources/application-actuator.yml` | 健康检查和监控配置 ⭐ |

### AI 提示词模板

**路径**: `src/main/resources/prompts/`

| 文件 | 用途 |
|------|------|
| `greeting-v1.yml` | 打招呼提示词模板 |
| `job-match-v1.yml` | 岗位匹配提示词 |
| `job-match-by-title-v1.yml` | 按标题匹配提示词 |
| `job-skill-prompt.yml` | 技能分析提示词 |

---

## 📊 按使用场景查找文档

### 场景 1: 遇到技术问题

```
问题排查流程:
1. 查看错误信息
2. 查阅 QUICK_TECH_REFERENCE.md（快速参考）
3. 查阅 TECHNICAL_ISSUES.md（详细说明）
4. 查看 CHANGELOG.md（历史问题）
5. 查看具体模块文档
```

### 场景 2: 了解新功能

```
功能学习流程:
1. 查看 CHANGELOG.md 最新版本
2. 查看对应模块的 README.md
3. 查看使用示例和 API 文档
4. 运行测试脚本验证
```

### 场景 3: 配置健康检查

```
配置流程:
1. 查看 docs/OPENAI_HEALTH_CHECK_GUIDE.md
2. 查看 AI_MODELS_HEALTH_GUIDE.md
3. 修改 application-actuator.yml
4. 运行 test-ai-models-health.sh
```

### 场景 4: 添加新的 AI 模型

```
添加流程:
1. 参考 GptConfig.java 或 DeepseekGptConfig.java
2. 创建配置类，注册 ChatModel Bean
3. 无需修改健康检查代码（自动发现）
4. 查看启动日志确认模型被发现
```

### 场景 5: 排查 Playwright 问题

```
排查流程:
1. 查看 docs/PLAYWRIGHT_PAGE_LIFECYCLE_ANALYSIS.md
2. 查看 TECHNICAL_ISSUES.md 第 2 节
3. 检查是否使用 PageHealthChecker
4. 查看重试机制是否生效
```

---

## 🗂️ 文档分类

### 用户文档（面向使用者）

- ✅ README.md - 项目介绍
- ✅ 各模块的 README.md - 功能说明
- ✅ CHANGELOG.md - 更新记录

### 开发文档（面向开发者）

- ✅ TECHNICAL_ISSUES.md - 技术问题详解
- ✅ QUICK_TECH_REFERENCE.md - 快速参考
- ✅ AI_MODELS_HEALTH_GUIDE.md - 健康检查指南
- ✅ PLAYWRIGHT_PAGE_LIFECYCLE_ANALYSIS.md - 深度分析

### API 文档（面向集成）

- ✅ package-info.java - 各模块 API 文档
- ✅ 各模块的 Controller 类注释

### 运维文档（面向运维）

- ✅ OPENAI_HEALTH_CHECK_GUIDE.md - 监控配置
- ✅ application*.yml - 配置说明

---

## 🔍 文档搜索技巧

### 按关键词查找

| 关键词 | 相关文档 |
|--------|---------|
| Bean 冲突 | TECHNICAL_ISSUES.md § 1.1, 1.2 |
| Playwright 异常 | TECHNICAL_ISSUES.md § 2.1, 2.2 |
| Cookie | TECHNICAL_ISSUES.md § 3.1 |
| 配置优化 | TECHNICAL_ISSUES.md § 3.2, 4.1 |
| 健康检查 | AI_MODELS_HEALTH_GUIDE.md |
| 任务调度 | task/docs/ |
| AI 功能 | modules/ai/README.md |

### 按问题类型查找

| 问题类型 | 查找文档 |
|---------|---------|
| 启动失败 | TECHNICAL_ISSUES.md + QUICK_TECH_REFERENCE.md |
| 配置不生效 | application*.yml + 对应模块文档 |
| 数据查询为空 | TECHNICAL_ISSUES.md § 1.3 |
| Page 操作失败 | TECHNICAL_ISSUES.md § 2.1, 2.2 |
| 性能问题 | TECHNICAL_ISSUES.md § 3.2 |

---

## 📝 文档编写规范

### 文档命名

- **全大写 + 下划线**: 项目级文档（README.md、CHANGELOG.md）
- **PascalCase**: 模块文档（AI_MODELS_HEALTH_GUIDE.md）
- **小写 + 连字符**: 功能文档（user-guide.md）

### 文档结构

```markdown
# 标题

## 概述
简短说明文档目的

## 目录
（可选，长文档使用）

## 主要内容
- 问题描述
- 解决方案
- 代码示例
- 最佳实践

## 参考链接
相关文档和外部链接

---
**最后更新**: 日期
```

### Markdown 格式

- ✅ 使用代码块标记代码（```java）
- ✅ 使用表格展示对比数据
- ✅ 使用 emoji 增强可读性（适度）
- ✅ 使用引用块标记重要信息
- ✅ 添加章节链接便于导航

---

## 🚀 新文档添加流程

### 1. 确定文档类型

- 用户文档 → 放在模块 README
- 技术问题 → 添加到 TECHNICAL_ISSUES.md
- 快速参考 → 添加到 QUICK_TECH_REFERENCE.md
- 深度分析 → 创建独立 MD 文件

### 2. 选择位置

- 项目级 → 根目录
- 模块级 → 模块目录
- 通用技术 → docs/

### 3. 更新索引

- 在本文件中添加新文档条目
- 在 README.md 中添加链接（如需要）
- 在 CHANGELOG.md 中记录（如需要）

---

## 📱 快速访问

### 🔥 最常用文档

1. **遇到错误** → `QUICK_TECH_REFERENCE.md`
2. **配置功能** → 各模块 `README.md`
3. **查看更新** → `CHANGELOG.md`
4. **健康检查** → `AI_MODELS_HEALTH_GUIDE.md`

### 📚 学习路径

**新手入门**:
1. README.md - 了解项目
2. CHANGELOG.md - 了解功能
3. application*.yml - 了解配置

**进阶开发**:
1. 各模块 README - 了解架构
2. TECHNICAL_ISSUES.md - 了解坑点
3. 源代码 + JavaDoc - 深入理解

**问题排查**:
1. QUICK_TECH_REFERENCE.md - 快速查找
2. TECHNICAL_ISSUES.md - 详细分析
3. CHANGELOG.md - 历史问题
4. 源代码日志 - 定位问题

---

## 📊 文档统计

### 按类型统计

| 类型 | 数量 | 位置 |
|------|------|------|
| 项目文档 | 6 | 根目录 |
| 技术文档 | 4 | docs/ |
| 模块文档 | 15+ | 各模块目录 |
| 配置说明 | 4 | resources/ |
| 测试脚本 | 1 | 根目录 |

### 按模块统计

| 模块 | 文档数 | 主要文档 |
|------|--------|---------|
| 健康检查 | 7 | AI_MODELS_HEALTH_GUIDE.md |
| 任务调度 | 4 | 任务中断机制说明.md |
| AI 功能 | 5+ | modules/ai/README.md |
| 快速投递 | 2 | quickdelivery/README.md |

---

## 🎯 文档维护建议

### 定期维护

- **每周**: 检查文档是否需要更新
- **每月**: 回顾并优化文档结构
- **每季度**: 归档过时文档

### 质量标准

1. ✅ **准确性**: 内容与代码保持一致
2. ✅ **完整性**: 包含必要的示例和说明
3. ✅ **可读性**: 结构清晰，易于理解
4. ✅ **时效性**: 及时更新，避免过时

### 更新触发条件

- ✅ 新增功能或模块
- ✅ 遇到新的技术问题
- ✅ 架构重构
- ✅ 配置变更
- ✅ 外部依赖升级

---

## 🔗 外部资源

### Spring Framework

- [Spring Boot 官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Spring Framework 核心文档](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html)
- [Spring Boot Actuator](https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html)

### Playwright

- [Playwright Java 文档](https://playwright.dev/java/)
- [Playwright API 参考](https://playwright.dev/java/docs/api/class-playwright)

### 数据库

- [SQLite 官方文档](https://www.sqlite.org/docs.html)
- [HikariCP 配置](https://github.com/brettwooldridge/HikariCP)
- [Hibernate 文档](https://hibernate.org/orm/documentation/)

### Spring AI

- [Spring AI 文档](https://docs.spring.io/spring-ai/reference/)
- [OpenAI API 文档](https://platform.openai.com/docs/)

---

## 💡 使用建议

### 查找文档

```bash
# 搜索关键词
grep -r "Bean 冲突" *.md docs/*.md

# 查看特定文档
cat QUICK_TECH_REFERENCE.md
cat docs/AI_HEALTH_MONITORING_SUMMARY.md

# 查看模块文档
cat src/main/java/getjobs/common/infrastructure/health/README.md
```

### 更新文档

1. 修改对应文档
2. 更新"最后更新"日期
3. 更新 DOCUMENTATION_INDEX.md（本文件）
4. 如果是重要更新，记录到 CHANGELOG.md

---

**文档版本**: 1.0  
**创建日期**: 2025-11-05  
**最后更新**: 2025-11-05  
**维护者**: 项目开发团队

