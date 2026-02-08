<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useResumeTemplateState } from '../../state/resumeTemplateState'
import { ResumeExportService } from '../../service/resumeExportService'

const props = defineProps<{
  resume: any
}>()

const emit = defineEmits<{
  (e: 'export-start'): void
  (e: 'export-success'): void
  (e: 'export-error', error: Error): void
}>()

const {
  selectedTemplate,
  effectiveColors,
  effectiveFonts,
  allTemplates,
  selectTemplate,
} = useResumeTemplateState()

const iframeRef = ref<HTMLIFrameElement | null>(null)
const isExporting = ref(false)
const showTemplateSelector = ref(false)
const previewReady = ref(false)

// 按类别分组模板
const templatesByCategory = computed(() => {
  const grouped: Record<string, typeof allTemplates.value> = {}
  allTemplates.value.forEach((template) => {
    if (!grouped[template.category]) {
      grouped[template.category] = []
    }
    grouped[template.category].push(template)
  })
  return grouped
})

const categoryLabels: Record<string, string> = {
  modern: '现代风格',
  classic: '经典风格',
  creative: '创意风格',
  minimal: '极简风格',
}

// 生成预览 URL
const previewUrl = computed(() => {
  // 使用独立的预览页面
  return '/vitaPolish/preview'
})

// 发送数据到 iframe
const sendDataToIframe = () => {
  if (!iframeRef.value?.contentWindow || !previewReady.value) return

  const data = {
    type: 'RESUME_DATA',
    templateId: selectedTemplate.value?.id,
    resume: props.resume,
    colors: effectiveColors.value,
    fonts: effectiveFonts.value,
  }

  // 同时保存到 sessionStorage 作为备份
  try {
    sessionStorage.setItem('resume-preview-data', JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save to sessionStorage:', error)
  }

  iframeRef.value.contentWindow.postMessage(data, '*')
}

// 监听 iframe 消息
const handleMessage = (event: MessageEvent) => {
  if (event.data.type === 'PREVIEW_READY') {
    previewReady.value = true
    sendDataToIframe()
  }
}

// 监听数据变化
watch([() => props.resume, selectedTemplate, effectiveColors, effectiveFonts], () => {
  if (previewReady.value) {
    sendDataToIframe()
  }
}, { deep: true })

// 导出为图片
const exportAsImage = async (format: 'png' | 'jpeg' = 'png') => {
  if (!iframeRef.value?.contentWindow || isExporting.value) return

  isExporting.value = true
  emit('export-start')

  try {
    // 获取 iframe 中的文档
    const iframeDoc = iframeRef.value.contentDocument || iframeRef.value.contentWindow.document
    const templateElement = iframeDoc.body.firstElementChild as HTMLElement

    if (!templateElement) {
      throw new Error('找不到简历模板元素')
    }

    const filename = `${props.resume.personalInfo.name || 'resume'}-${Date.now()}`
    
    // 根据模板背景色决定导出背景
    let bgColor = effectiveColors.value?.background || '#ffffff'
    if (bgColor.includes('gradient')) {
      bgColor = '#ffffff'
    }
    
    await ResumeExportService.exportAndDownload(templateElement, {
      format,
      quality: 0.95,
      scale: 2,
      backgroundColor: bgColor,
      filename,
    })
    emit('export-success')
  } catch (error) {
    console.error('Export failed:', error)
    emit('export-error', error as Error)
  } finally {
    isExporting.value = false
  }
}

// 复制到剪贴板
const copyToClipboard = async () => {
  if (!iframeRef.value?.contentWindow || isExporting.value) return

  isExporting.value = true
  emit('export-start')

  try {
    const iframeDoc = iframeRef.value.contentDocument || iframeRef.value.contentWindow.document
    const templateElement = iframeDoc.body.firstElementChild as HTMLElement

    if (!templateElement) {
      throw new Error('找不到简历模板元素')
    }

    let bgColor = effectiveColors.value?.background || '#ffffff'
    if (bgColor.includes('gradient')) {
      bgColor = '#ffffff'
    }

    await ResumeExportService.copyToClipboard(templateElement, {
      format: 'png',
      scale: 2,
      backgroundColor: bgColor,
    })
    emit('export-success')
  } catch (error) {
    console.error('Copy to clipboard failed:', error)
    emit('export-error', error as Error)
  } finally {
    isExporting.value = false
  }
}

// 切换模板
const handleTemplateChange = (templateId: string) => {
  selectTemplate(templateId)
  showTemplateSelector.value = false
  // 等待状态更新后发送数据
  nextTick(() => {
    sendDataToIframe()
  })
}

// 挂载时添加消息监听
if (typeof window !== 'undefined') {
  window.addEventListener('message', handleMessage)
}

defineExpose({
  exportAsImage,
  copyToClipboard,
})
</script>

<template>
  <div class="resume-renderer-iframe">
    <!-- 工具栏 -->
    <div class="toolbar">
      <v-btn
        color="primary"
        prepend-icon="mdi-palette"
        variant="tonal"
        @click="showTemplateSelector = !showTemplateSelector"
      >
        切换样式
      </v-btn>
      
      <v-menu>
        <template v-slot:activator="{ props: menuProps }">
          <v-btn
            color="success"
            prepend-icon="mdi-download"
            variant="tonal"
            v-bind="menuProps"
            :loading="isExporting"
            :disabled="!previewReady"
          >
            导出图片
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="exportAsImage('png')">
            <v-list-item-title>导出为 PNG</v-list-item-title>
          </v-list-item>
          <v-list-item @click="exportAsImage('jpeg')">
            <v-list-item-title>导出为 JPEG</v-list-item-title>
          </v-list-item>
          <v-list-item @click="copyToClipboard">
            <v-list-item-title>复制到剪贴板</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="template-info">
        <v-chip color="secondary" variant="tonal" size="small">
          {{ selectedTemplate?.name }}
        </v-chip>
      </div>

      <v-chip
        v-if="!previewReady"
        color="warning"
        variant="tonal"
        size="small"
        prepend-icon="mdi-loading"
      >
        加载中...
      </v-chip>
    </div>

    <!-- 模板选择器 -->
    <v-expand-transition>
      <div v-if="showTemplateSelector" class="template-selector">
        <div class="selector-header">
          <h3>选择简历样式</h3>
          <v-btn
            icon="mdi-close"
            size="small"
            variant="text"
            @click.stop="showTemplateSelector = false"
          />
        </div>
        
        <div
          v-for="(templates, category) in templatesByCategory"
          :key="category"
          class="category-section"
        >
          <h4 class="category-title">{{ categoryLabels[category] }}</h4>
          <div class="templates-grid">
            <div
              v-for="template in templates"
              :key="template.id"
              class="template-card"
              :class="{ active: selectedTemplate?.id === template.id }"
              @click.stop="handleTemplateChange(template.id)"
            >
              <div class="template-preview">
                <div class="preview-colors">
                  <span
                    v-for="(color, key) in template.colors"
                    :key="key"
                    class="color-dot"
                    :style="{ background: color }"
                  />
                </div>
              </div>
              <div class="template-info-card">
                <div class="template-name">{{ template.name }}</div>
                <div class="template-desc">{{ template.description }}</div>
              </div>
              <v-icon
                v-if="selectedTemplate?.id === template.id"
                class="check-icon"
                color="success"
              >
                mdi-check-circle
              </v-icon>
            </div>
          </div>
        </div>
      </div>
    </v-expand-transition>

    <!-- iframe 预览区域 -->
    <div class="iframe-container">
      <iframe
        ref="iframeRef"
        :src="previewUrl"
        class="preview-iframe"
        frameborder="0"
        @load="() => {}"
      />
    </div>
  </div>
</template>

<style scoped>
.resume-renderer-iframe {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 16px;
  z-index: 100;
  flex-shrink: 0;
}

.template-info {
  margin-left: auto;
}

.template-selector {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  z-index: 50;
  flex-shrink: 0;
}

.selector-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.selector-header h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.category-section {
  margin-bottom: 32px;
}

.category-section:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #666;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.template-card {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  user-select: none;
}

.template-card:hover {
  border-color: #1976d2;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
  transform: translateY(-2px);
}

.template-card.active {
  border-color: #4caf50;
  background: #f1f8f4;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.template-preview {
  margin-bottom: 12px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}

.preview-colors {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.color-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.template-info-card {
  margin-bottom: 8px;
}

.template-name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

.template-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

.check-icon {
  position: absolute;
  top: 12px;
  right: 12px;
}

.iframe-container {
  flex: 1;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-height: 600px;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  min-height: 600px;
  border: none;
  display: block;
}

@media (max-width: 768px) {
  .toolbar {
    flex-wrap: wrap;
  }
  
  .template-info {
    margin-left: 0;
    width: 100%;
  }
  
  .templates-grid {
    grid-template-columns: 1fr;
  }
}
</style>

