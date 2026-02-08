<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 导入所有模板
import NeoBrutalismTemplate from '../components/resume/templates/NeoBrutalismTemplate.vue'
import GlassmorphismTemplate from '../components/resume/templates/GlassmorphismTemplate.vue'
import SwissDesignTemplate from '../components/resume/templates/SwissDesignTemplate.vue'
import CyberpunkTemplate from '../components/resume/templates/CyberpunkTemplate.vue'
import JapaneseZenTemplate from '../components/resume/templates/JapaneseZenTemplate.vue'
import ArtDecoTemplate from '../components/resume/templates/ArtDecoTemplate.vue'
import NordicMinimalTemplate from '../components/resume/templates/NordicMinimalTemplate.vue'
import GradientFlowTemplate from '../components/resume/templates/GradientFlowTemplate.vue'

const route = useRoute()

// 模板组件映射
const templateComponents: Record<string, any> = {
  'neo-brutalism': NeoBrutalismTemplate,
  'glassmorphism': GlassmorphismTemplate,
  'swiss-design': SwissDesignTemplate,
  'cyberpunk': CyberpunkTemplate,
  'japanese-zen': JapaneseZenTemplate,
  'art-deco': ArtDecoTemplate,
  'nordic-minimal': NordicMinimalTemplate,
  'gradient-flow': GradientFlowTemplate,
}

// 从 URL 参数或 localStorage 获取数据
const templateId = ref('neo-brutalism')
const resumeData = ref<any>(null)
const colors = ref<any>(null)
const fonts = ref<any>(null)

const currentTemplateComponent = computed(() => {
  return templateComponents[templateId.value] || templateComponents['neo-brutalism']
})

// 监听来自父窗口的消息
const handleMessage = (event: MessageEvent) => {
  if (event.data.type === 'RESUME_DATA') {
    templateId.value = event.data.templateId || 'neo-brutalism'
    resumeData.value = event.data.resume
    colors.value = event.data.colors
    fonts.value = event.data.fonts
  }
}

onMounted(() => {
  // 监听消息
  window.addEventListener('message', handleMessage)
  
  // 尝试从 sessionStorage 获取数据
  try {
    const stored = sessionStorage.getItem('resume-preview-data')
    if (stored) {
      const data = JSON.parse(stored)
      templateId.value = data.templateId || 'neo-brutalism'
      resumeData.value = data.resume
      colors.value = data.colors
      fonts.value = data.fonts
    }
  } catch (error) {
    console.error('Failed to load preview data:', error)
  }
  
  // 通知父窗口已准备好
  if (window.opener) {
    window.opener.postMessage({ type: 'PREVIEW_READY' }, '*')
  }
})
</script>

<template>
  <div class="preview-page">
    <component
      v-if="resumeData && colors && fonts"
      :is="currentTemplateComponent"
      :resume="resumeData"
      :colors="colors"
      :fonts="fonts"
    />
    <div v-else class="loading">
      <div class="loading-spinner"></div>
      <p>加载简历数据中...</p>
    </div>
  </div>
</template>

<style scoped>
.preview-page {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: sans-serif;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>

