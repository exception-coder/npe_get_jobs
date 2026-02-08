# 智能求职助手前端（Vue 3 + Vite + Vuetify 3）

## 快速开始

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs/frontend
npm install
npm run dev
```

在浏览器访问 `http://localhost:5173`，即可以 Vuetify 风格查看和配置各招聘平台。

> 开发服务器已经通过 Vite 代理 `/api` 与 `/dicts`，默认会转发到 `http://localhost:8080`，无须额外配置。

## 构建生产包

```bash
npm run build
```

构建产物位于 `frontend/dist`，可直接交由后端静态资源托管或放置到任意 Web 服务器上。

## 主要技术栈

- Vue 3 + `<script setup>`
- Vite 5
- Vuetify 3（搭配 Material Design Icons）
- Pinia 状态管理
- TypeScript（严格模式）

## 目录结构

```
frontend/
├── index.html           # Vite 入口文件
├── package.json
├── src/
│   ├── api/             # 后端接口模块
│   ├── components/      # 可复用组件（如全局提示、状态标签）
│   ├── composables/     # 通用业务逻辑（例如任务执行器）
│   ├── router/          # 前端路由
│   ├── stores/          # Pinia 全局状态
│   ├── views/           # 页面视图（公共配置、平台配置、岗位列表）
│   └── styles/          # 全局样式
└── vite.config.ts       # 构建配置，包含代理与路径别名
```

## 常见问题

- **依赖安装报权限错误**：在沙箱环境中需要为 `npm install` 提升到全权限执行，可参考日志中的提示重新运行。
- **Sass 警告**：当前使用的是 `sass` 的 legacy API，后续可在升级 Vuetify 时同步提升 Sass 版本。

## 后续优化建议

- 针对接口失败场景补充离线缓存策略
- 为岗位列表增加条件筛选（状态、收藏、城市等）
- 编写端到端测试保障重构后的交互流程
