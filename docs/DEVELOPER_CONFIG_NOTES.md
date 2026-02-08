# 开发者配置登记簿

记录所有对全局配置、UI 框架行为或者跨模块可复用策略的约定，方便团队成员快速了解新增配置的背景、实现位置与验证方法。

---

## 目录

1. [UI 行为调整](#ui-行为调整)

---

## UI 行为调整

| 配置项 | 目标 | 实现位置 | 说明 | 验证方式 |
|--------|------|----------|------|----------|
| 显示 App 顶部导航条（求职模块） | 仅在求职模块相关页面展示 `v-app-bar`，其他页面（知识库、SASL、Web Docs 等）隐藏以提供更大编辑空间 | `frontend/src/App.vue` -> `showAppBar` 计算属性 | `showAppBar = computed(() => routePath === '/common' || ['platform-config', 'platform-records', 'resume-optimizer'].includes(routeName));` 采用白名单机制，只有求职模块的路由（公共配置 `/common`、平台配置 `platform-config`、岗位明细 `platform-records`、简历优化 `resume-optimizer`）才显示顶部导航条 | 在浏览器访问 `/common`、`/platform/*/config`、`/platform/*/records`、`/resume-optimizer` 确认顶部导航显示；访问 `/web-docs`、`/sasl/*`、`/knowledge-base/*` 等应隐藏顶部导航 |
| 隐藏 App 侧边导航（SASL） | SASL 表单页面需要全幅布局，不展示 `v-navigation-drawer` | `frontend/src/App.vue` -> `showDrawer` 计算属性 + `v-if="showDrawer"` | `const showDrawer = computed(() => route.name !== 'sasl');` 仅在路由名称非 `sasl` 时渲染抽屉；SASL 页面自动隐藏 | 访问 `/sasl` 确认侧边导航不再出现；切换至其他页面（如 `/common`）应正常显示 |

> 更新日期：2025-11-15  
> 维护者：前端团队


