/**
 * 简历渲染系统快速参考
 */

// ============================================
// 1. 导入组件
// ============================================
import ResumeRenderer from '@/modules/vitaPolish/components/resume/ResumeRenderer.vue'

// ============================================
// 2. 基本使用
// ============================================
<template>
  <ResumeRenderer
    :resume="resumeData"
    @export-start="handleExportStart"
    @export-success="handleExportSuccess"
    @export-error="handleExportError"
  />
</template>

// ============================================
// 3. 简历数据结构
// ============================================
interface Resume {
  personalInfo: {
    name: string
    title: string
    phone: string
    email: string
    location: string
    experience: string
    coreSkills: string[]
    linkedin?: string
  }
  strengths: string[]
  desiredRole?: {
    title: string
    salary: string
    location: string
    industries: string[]
  }
  workExperiences: Array<{
    company: string
    role: string
    period: string
    summary: string
    highlights: string[]
  }>
  projects: Array<{
    name: string
    role: string
    period: string
    summary: string
    highlights: string[]
  }>
  education: Array<{
    school: string
    major: string
    degree: string
    period: string
  }>
}

// ============================================
// 4. 可用模板
// ============================================
const templates = [
  'neo-brutalism',      // 新野兽主义
  'glassmorphism',      // 玻璃态
  'swiss-design',       // 瑞士设计
  'cyberpunk',          // 赛博朋克
  'japanese-zen',       // 日式禅意
  'art-deco',           // 装饰艺术
  'nordic-minimal',     // 北欧极简
  'gradient-flow',      // 渐变流动
]

// ============================================
// 5. 导出功能
// ============================================
import { ResumeExportService } from '@/modules/vitaPolish/service/resumeExportService'

// 导出为 PNG
await ResumeExportService.exportAndDownload(element, {
  format: 'png',
  quality: 0.95,
  scale: 2,
  filename: 'my-resume'
})

// 导出为 JPEG
await ResumeExportService.exportAndDownload(element, {
  format: 'jpeg',
  quality: 0.9,
  scale: 2,
  filename: 'my-resume'
})

// 复制到剪贴板
await ResumeExportService.copyToClipboard(element, {
  format: 'png',
  scale: 2
})

// 获取 Data URL
const dataUrl = await ResumeExportService.getDataURL(element, {
  format: 'png'
})

// ============================================
// 6. 状态管理
// ============================================
import { useResumeTemplateState } from '@/modules/vitaPolish/state/resumeTemplateState'

const {
  selectedTemplate,      // 当前选中的模板
  effectiveColors,       // 有效的颜色配置
  effectiveFonts,        // 有效的字体配置
  allTemplates,          // 所有可用模板
  selectTemplate,        // 选择模板
  updateCustomColors,    // 更新自定义颜色
  updateCustomFonts,     // 更新自定义字体
  resetCustomization,    // 重置自定义
} = useResumeTemplateState()

// 切换模板
selectTemplate('neo-brutalism')

// 自定义颜色
updateCustomColors({
  primary: '#FF0000',
  secondary: '#00FF00'
})

// ============================================
// 7. 创建自定义模板
// ============================================

// Step 1: 创建模板组件 (MyTemplate.vue)
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  resume: any
  colors: any
  fonts: any
}>()

const styles = computed(() => ({
  '--color-primary': props.colors.primary,
  '--color-secondary': props.colors.secondary,
  // ... 其他样式变量
}))
</script>

<template>
  <div class="my-template" :style="styles">
    <!-- 你的模板内容 -->
  </div>
</template>

// Step 2: 注册模板 (resumeTemplates.ts)
export const RESUME_TEMPLATES: ResumeTemplate[] = [
  // ... 现有模板
  {
    id: 'my-template',
    name: '我的模板',
    description: '模板描述',
    category: 'modern',
    colors: { /* 颜色配置 */ },
    fonts: { /* 字体配置 */ },
    layout: 'single-column',
  }
]

// Step 3: 导入到 ResumeRenderer.vue
import MyTemplate from './templates/MyTemplate.vue'

const templateComponents: Record<string, any> = {
  // ... 现有模板
  'my-template': MyTemplate,
}

// ============================================
// 8. 事件处理
// ============================================
const handleExportStart = () => {
  // 导出开始时的处理
  console.log('开始导出...')
}

const handleExportSuccess = () => {
  // 导出成功时的处理
  console.log('导出成功！')
}

const handleExportError = (error: Error) => {
  // 导出失败时的处理
  console.error('导出失败:', error.message)
}

// ============================================
// 9. 响应式设计
// ============================================
// 所有模板都包含响应式样式
@media (max-width: 768px) {
  .template {
    padding: 20px;
  }
  
  .name {
    font-size: 32px;
  }
}

// ============================================
// 10. 打印优化
// ============================================
// 所有模板都包含打印样式
@media print {
  .template {
    padding: 24px;
  }
  
  .decorative-element {
    display: none;
  }
}

// ============================================
// 11. 性能优化建议
// ============================================
// 1. 使用 computed 缓存计算结果
// 2. 避免在模板中使用复杂计算
// 3. 使用 CSS transform 而非 position 做动画
// 4. 导出前确保所有图片和字体已加载
// 5. 大型简历考虑分页导出

// ============================================
// 12. 常见问题
// ============================================

// Q: 导出的图片模糊？
// A: 增加 scale 参数，例如 scale: 3

// Q: 自定义字体未显示？
// A: 确保字体已加载，可以使用 document.fonts.ready

// Q: 导出速度慢？
// A: 减少复杂的 CSS 效果，或降低 scale 参数

// Q: 复制到剪贴板失败？
// A: 检查浏览器是否支持 Clipboard API

// Q: 如何添加水印？
// A: 在模板中添加绝对定位的水印元素

