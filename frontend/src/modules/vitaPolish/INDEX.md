# 📚 简历渲染系统 - 文档索引

欢迎使用简历渲染系统！这里是所有文档的导航中心。

---

## 🚀 快速开始

### 新手入门
- **[5分钟快速开始](./QUICK_START.md)** ⭐
  - 3步集成指南
  - 测试清单
  - 常见问题解决

### 完整教程
- **[用户使用指南](./USER_GUIDE.md)**
  - 详细使用方法
  - 8种模板展示
  - API 文档
  - 高级用法

---

## 📖 核心文档

### 功能说明
- **[README - 功能概览](./README_RESUME_RENDERER.md)**
  - 功能特性
  - 技术栈
  - 浏览器兼容性
  - 贡献指南

### 实现总结
- **[实现总结](./IMPLEMENTATION_SUMMARY.md)**
  - 架构设计
  - 技术实现
  - 设计亮点
  - 性能优化

### 最终总结
- **[完整总结](./FINAL_SUMMARY.md)**
  - 项目概述
  - 已完成功能
  - 解决的问题
  - 未来规划

---

## 🔧 技术文档

### 方案对比
- **[渲染方案对比](./RENDERER_COMPARISON.md)** ⭐
  - 问题分析
  - 两种方案详解
  - 性能对比
  - 推荐方案

### 集成指南
- **[iframe 集成指南](./IFRAME_INTEGRATION_GUIDE.md)** ⭐
  - 快速集成
  - 验证步骤
  - 故障排查
  - 最佳实践

### API 参考
- **[快速参考](./RESUME_RENDERER_QUICK_REFERENCE.js)**
  - 导入组件
  - 基本使用
  - 可用模板
  - 导出功能
  - 状态管理
  - 常见问题

---

## 📂 文件结构

### 组件文件

#### 渲染器组件
```
components/resume/
├── ResumeRenderer.vue              # 方案一：直接渲染
├── ResumeRendererIframe.vue        # 方案二：iframe 隔离 ⭐
├── ResumePreview.vue               # 旧版预览
├── ResumeSectionCard.vue           # 区块卡片
└── DraggableChips.vue              # 可拖拽标签
```

#### 模板组件
```
components/resume/templates/
├── NeoBrutalismTemplate.vue        # 新野兽主义
├── GlassmorphismTemplate.vue       # 玻璃态
├── SwissDesignTemplate.vue         # 瑞士设计
├── CyberpunkTemplate.vue           # 赛博朋克
├── JapaneseZenTemplate.vue         # 日式禅意
├── ArtDecoTemplate.vue             # 装饰艺术
├── NordicMinimalTemplate.vue       # 北欧极简
└── GradientFlowTemplate.vue        # 渐变流动
```

### 视图文件
```
views/
├── ResumeOptimizer.vue             # 主编辑页面
├── ResumePreviewPage.vue           # 独立预览页面 ⭐
└── ResumeRendererDemo.vue          # 演示页面
```

### 服务文件
```
service/
└── resumeExportService.ts          # 导出服务
    ├── exportToImage()             # 导出为图片
    ├── downloadImage()             # 下载图片
    ├── exportAndDownload()         # 导出并下载
    ├── copyToClipboard()           # 复制到剪贴板
    └── getDataURL()                # 获取 Data URL
```

### 状态管理
```
state/
└── resumeTemplateState.ts          # 模板状态管理
    ├── selectedTemplate            # 当前模板
    ├── effectiveColors             # 有效颜色
    ├── effectiveFonts              # 有效字体
    ├── selectTemplate()            # 选择模板
    ├── updateCustomColors()        # 自定义颜色
    └── resetCustomization()        # 重置自定义
```

### 配置文件
```
constants/
└── resumeTemplates.ts              # 模板配置
    ├── RESUME_TEMPLATES[]          # 所有模板
    ├── getTemplateById()           # 根据 ID 获取
    └── getTemplatesByCategory()    # 根据类别获取
```

---

## 🎯 按场景查找

### 我想快速开始
→ [5分钟快速开始](./QUICK_START.md)

### 我想了解所有功能
→ [用户使用指南](./USER_GUIDE.md)

### 我想了解技术实现
→ [实现总结](./IMPLEMENTATION_SUMMARY.md)

### 我想解决样式不一致问题
→ [渲染方案对比](./RENDERER_COMPARISON.md)

### 我想集成 iframe 方案
→ [iframe 集成指南](./IFRAME_INTEGRATION_GUIDE.md)

### 我想查看 API
→ [快速参考](./RESUME_RENDERER_QUICK_REFERENCE.js)

### 我想自定义模板
→ [用户使用指南 - 高级用法](./USER_GUIDE.md#高级用法)

### 我遇到了问题
→ [快速开始 - 故障排查](./QUICK_START.md#遇到问题)

---

## 🎨 按模板查找

### 创意风格
- **新野兽主义** - 粗黑边框、强烈对比
  - 文件：`NeoBrutalismTemplate.vue`
  - 适用：创意、设计行业

- **赛博朋克** - 霓虹色彩、未来科技
  - 文件：`CyberpunkTemplate.vue`
  - 适用：游戏、科技行业

### 现代风格
- **玻璃态** - 毛玻璃效果、柔和渐变
  - 文件：`GlassmorphismTemplate.vue`
  - 适用：科技、设计行业

- **渐变流动** - 流体渐变、动感曲线
  - 文件：`GradientFlowTemplate.vue`
  - 适用：创业、新媒体行业

### 极简风格
- **瑞士设计** - 网格系统、精确排版
  - 文件：`SwissDesignTemplate.vue`
  - 适用：金融、咨询行业

- **日式禅意** - 留白艺术、和风配色
  - 文件：`JapaneseZenTemplate.vue`
  - 适用：文化、艺术行业

- **北欧极简** - 清新淡雅、自然舒适
  - 文件：`NordicMinimalTemplate.vue`
  - 适用：互联网、教育行业

### 经典风格
- **装饰艺术** - 几何图案、奢华金色
  - 文件：`ArtDecoTemplate.vue`
  - 适用：奢侈品、时尚行业

---

## 🔍 按功能查找

### 模板切换
- 组件：`ResumeRenderer.vue` / `ResumeRendererIframe.vue`
- 状态：`resumeTemplateState.ts`
- 配置：`resumeTemplates.ts`

### 图片导出
- 服务：`resumeExportService.ts`
- 方法：`exportAsImage()`, `copyToClipboard()`
- 文档：[用户使用指南 - 导出功能](./USER_GUIDE.md#导出功能)

### 样式隔离
- 方案：iframe 隔离
- 组件：`ResumeRendererIframe.vue`
- 页面：`ResumePreviewPage.vue`
- 文档：[渲染方案对比](./RENDERER_COMPARISON.md)

### 状态管理
- 文件：`resumeTemplateState.ts`
- 功能：模板选择、颜色定制、字体定制
- 文档：[快速参考 - 状态管理](./RESUME_RENDERER_QUICK_REFERENCE.js#状态管理)

---

## 📊 文档类型

### 📘 教程类
- [5分钟快速开始](./QUICK_START.md) - 入门教程
- [用户使用指南](./USER_GUIDE.md) - 完整教程
- [iframe 集成指南](./IFRAME_INTEGRATION_GUIDE.md) - 集成教程

### 📗 参考类
- [快速参考](./RESUME_RENDERER_QUICK_REFERENCE.js) - API 参考
- [README](./README_RESUME_RENDERER.md) - 功能参考

### 📙 分析类
- [渲染方案对比](./RENDERER_COMPARISON.md) - 方案分析
- [实现总结](./IMPLEMENTATION_SUMMARY.md) - 技术分析

### 📕 总结类
- [完整总结](./FINAL_SUMMARY.md) - 项目总结

---

## 🎓 学习路径

### 初级（1小时）
1. 阅读 [5分钟快速开始](./QUICK_START.md)
2. 完成基本集成
3. 测试所有功能

### 中级（2小时）
1. 阅读 [用户使用指南](./USER_GUIDE.md)
2. 了解所有模板
3. 学习高级用法

### 高级（4小时）
1. 阅读 [渲染方案对比](./RENDERER_COMPARISON.md)
2. 理解技术实现
3. 自定义模板

---

## 🆘 获取帮助

### 常见问题
1. [快速开始 - 遇到问题？](./QUICK_START.md#遇到问题)
2. [用户指南 - 常见问题](./USER_GUIDE.md#常见问题)
3. [快速参考 - 常见问题](./RESUME_RENDERER_QUICK_REFERENCE.js#常见问题)

### 调试技巧
- [渲染方案对比 - 调试技巧](./RENDERER_COMPARISON.md#调试技巧)
- [实现总结 - 性能优化](./IMPLEMENTATION_SUMMARY.md#性能优化)

### 最佳实践
- [用户指南 - 最佳实践](./USER_GUIDE.md#最佳实践)
- [iframe 集成指南 - 最佳实践](./IFRAME_INTEGRATION_GUIDE.md#最佳实践)

---

## 📝 更新日志

### v1.0.0 (当前版本)
- ✅ 8种精美模板
- ✅ 图片导出功能
- ✅ iframe 隔离方案
- ✅ 完整文档体系

---

## 🎉 开始使用

**推荐路径：**
1. 📖 阅读 [5分钟快速开始](./QUICK_START.md)
2. 🚀 完成集成
3. 🎨 创建你的第一份简历
4. 📸 导出并分享

**祝你使用愉快！** 😊

---

## 📞 联系方式

如有问题或建议：
- 查看文档
- 提交 Issue
- 参与贡献

**感谢使用简历渲染系统！** 🙏

