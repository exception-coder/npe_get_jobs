# 知识库模块 (Knowledge Base Module)

## 模块概述

知识库模块用于展示技术知识点，采用流程图的方式直观呈现知识点之间的关系。

## 目录结构

```
knowledge-base/
└── views/
    └── MySQLMVCCView.vue    # MySQL MVCC 知识图谱视图
```

## 功能特性

- 使用 Vue Flow 构建交互式知识图谱
- 支持节点拖拽、缩放、平移等交互操作
- 不同知识点使用不同颜色区分（核心概念、机制、字段、隔离级别等）
- 知识点之间的连接关系清晰展示

## 技术栈

- Vue 3 Composition API
- @vue-flow/core - 流程图组件库
- Vuetify 3 - UI 组件库

## 使用说明

访问路由 `/knowledge-base/mysql-mvcc` 即可查看 MySQL MVCC 知识图谱。

## 扩展

如需添加新的知识点视图，可以：

1. 在 `views/` 目录下创建新的 Vue 组件
2. 在 `src/router/index.ts` 中添加路由配置
3. 在 `src/App.vue` 中添加菜单项
