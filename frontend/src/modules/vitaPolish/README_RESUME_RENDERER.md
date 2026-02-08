# 简历渲染系统

## 概述

这是一个现代化的、模块化的简历渲染系统，支持多种设计风格和图片导出功能。

## 功能特性

### 🎨 多种设计风格

系统提供 8 种精心设计的简历模板：

1. **新野兽主义 (Neo-Brutalism)**
   - 大胆的色块、粗黑边框、强烈对比
   - 充满视觉冲击力
   - 适合创意行业

2. **玻璃态 (Glassmorphism)**
   - 半透明毛玻璃效果
   - 柔和渐变，现代科技感
   - 适合科技、设计行业

3. **瑞士设计 (Swiss Design)**
   - 极简网格系统，精确排版
   - 理性克制，专业感强
   - 适合金融、咨询行业

4. **赛博朋克 (Cyberpunk)**
   - 霓虹色彩、未来科技
   - 数字美学，个性鲜明
   - 适合游戏、科技行业

5. **日式禅意 (Japanese Zen)**
   - 留白艺术、和风配色
   - 宁静优雅，东方美学
   - 适合文化、艺术行业

6. **装饰艺术 (Art Deco)**
   - 几何图案、奢华金色
   - 复古优雅，高端大气
   - 适合奢侈品、时尚行业

7. **北欧极简 (Nordic Minimal)**
   - 清新淡雅、自然舒适
   - 功能至上，简洁明了
   - 适合互联网、教育行业

8. **渐变流动 (Gradient Flow)**
   - 流体渐变、动感曲线
   - 活力四射，年轻时尚
   - 适合创业、新媒体行业

### 📸 图片导出功能

- **PNG 格式导出**：高质量无损图片
- **JPEG 格式导出**：压缩格式，文件更小
- **复制到剪贴板**：一键复制，快速分享
- **高清导出**：2倍缩放，确保清晰度

### 🎯 模块化设计

系统采用职责分离的模块化架构：

```
vitaPolish/
├── components/
│   └── resume/
│       ├── ResumeRenderer.vue          # 主渲染器组件
│       ├── ResumePreview.vue           # 旧版预览组件
│       └── templates/                  # 模板目录
│           ├── NeoBrutalismTemplate.vue
│           ├── GlassmorphismTemplate.vue
│           ├── SwissDesignTemplate.vue
│           ├── CyberpunkTemplate.vue
│           ├── JapaneseZenTemplate.vue
│           ├── ArtDecoTemplate.vue
│           ├── NordicMinimalTemplate.vue
│           └── GradientFlowTemplate.vue
├── constants/
│   └── resumeTemplates.ts              # 模板配置
├── service/
│   └── resumeExportService.ts          # 导出服务
└── state/
    └── resumeTemplateState.ts          # 状态管理
```

## 使用方法

### 基本使用

```vue
<template>
  <ResumeRenderer
    :resume="resumeData"
    @export-start="handleExportStart"
    @export-success="handleExportSuccess"
    @export-error="handleExportError"
  />
</template>

<script setup>
import ResumeRenderer from '@/modules/vitaPolish/components/resume/ResumeRenderer.vue'

const resumeData = {
  personalInfo: {
    name: '张三',
    title: '高级Java开发工程师',
    phone: '138-8888-8888',
    email: 'example@qq.com',
    location: '广州 · 可远程',
    experience: '8年以上',
    coreSkills: ['Java', 'Spring Boot', 'MySQL'],
  },
  strengths: ['精通高并发系统架构设计'],
  workExperiences: [...],
  projects: [...],
  education: [...]
}

const handleExportStart = () => {
  console.log('开始导出...')
}

const handleExportSuccess = () => {
  console.log('导出成功！')
}

const handleExportError = (error) => {
  console.error('导出失败:', error)
}
</script>
```

### 切换模板

在渲染器界面点击"切换样式"按钮，选择喜欢的模板风格。

### 导出图片

1. 点击"导出图片"按钮
2. 选择导出格式（PNG/JPEG）
3. 或选择"复制到剪贴板"直接复制

### 自定义模板

如需添加新模板：

1. 在 `templates/` 目录创建新的 Vue 组件
2. 在 `resumeTemplates.ts` 中注册模板配置
3. 在 `ResumeRenderer.vue` 中导入并注册组件

```typescript
// resumeTemplates.ts
export const RESUME_TEMPLATES: ResumeTemplate[] = [
  // ... 现有模板
  {
    id: 'my-custom-template',
    name: '我的自定义模板',
    description: '模板描述',
    category: 'modern',
    colors: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#00D9FF',
      background: '#FFFEF2',
      text: '#1A1A1A',
      textSecondary: '#4A4A4A',
    },
    fonts: {
      heading: 'Space Grotesk, sans-serif',
      body: 'Inter, sans-serif',
    },
    layout: 'single-column',
  },
]
```

## 技术栈

- **Vue 3**: 组合式 API
- **TypeScript**: 类型安全
- **Vuetify 3**: UI 组件库
- **html2canvas**: 图片导出

## 设计原则

### 1. 职责分离

- **ResumeRenderer**: 负责渲染控制和用户交互
- **Templates**: 负责具体的样式呈现
- **ExportService**: 负责图片导出逻辑
- **TemplateState**: 负责状态管理

### 2. 可扩展性

- 模板系统易于扩展
- 支持自定义颜色和字体
- 配置与实现分离

### 3. 用户体验

- 实时预览
- 流畅的动画效果
- 响应式设计
- 打印友好

## 性能优化

- 使用 `computed` 缓存计算结果
- 懒加载模板组件
- 优化图片导出质量和速度
- CSS 动画使用 GPU 加速

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 注意事项

1. **图片导出**：需要浏览器支持 `html2canvas` 和 Clipboard API
2. **字体加载**：确保自定义字体已正确加载
3. **打印样式**：每个模板都包含打印优化样式
4. **性能**：复杂模板可能影响导出速度

## 未来计划

- [ ] 支持更多模板风格
- [ ] 支持 PDF 导出
- [ ] 支持在线编辑器
- [ ] 支持模板市场
- [ ] 支持多语言
- [ ] 支持主题定制器

## 贡献指南

欢迎贡献新的模板设计！请遵循以下步骤：

1. Fork 项目
2. 创建新的模板组件
3. 添加模板配置
4. 提交 Pull Request

## 许可证

MIT License

## 联系方式

如有问题或建议，请提交 Issue。

