<!-- 
  简历渲染系统使用演示
  展示如何在实际项目中使用新的简历渲染系统
-->

<template>
  <v-container fluid class="pa-8">
    <v-row>
      <!-- 左侧：控制面板 -->
      <v-col cols="12" md="4">
        <v-card elevation="3">
          <v-card-title class="bg-primary">
            <v-icon class="mr-2">mdi-cog</v-icon>
            控制面板
          </v-card-title>

          <v-card-text class="pa-6">
            <!-- 模板选择 -->
            <div class="mb-6">
              <h3 class="text-h6 mb-3">选择模板</h3>
              <v-select
                v-model="selectedTemplateId"
                :items="templateOptions"
                item-title="name"
                item-value="id"
                label="简历模板"
                variant="outlined"
                @update:model-value="handleTemplateChange"
              >
                <template v-slot:item="{ props, item }">
                  <v-list-item v-bind="props">
                    <template v-slot:prepend>
                      <v-avatar :color="item.raw.colors.primary" size="32">
                        <v-icon color="white">{{ getCategoryIcon(item.raw.category) }}</v-icon>
                      </v-avatar>
                    </template>
                    <template v-slot:subtitle>
                      {{ item.raw.description }}
                    </template>
                  </v-list-item>
                </template>
              </v-select>
            </div>

            <!-- 导出选项 -->
            <div class="mb-6">
              <h3 class="text-h6 mb-3">导出设置</h3>
              <v-select
                v-model="exportFormat"
                :items="formatOptions"
                label="导出格式"
                variant="outlined"
                class="mb-3"
              />
              <v-slider
                v-model="exportScale"
                :min="1"
                :max="4"
                :step="0.5"
                label="导出质量"
                thumb-label
                class="mb-3"
              >
                <template v-slot:append>
                  <v-chip size="small">{{ exportScale }}x</v-chip>
                </template>
              </v-slider>
              <v-text-field
                v-model="exportFilename"
                label="文件名"
                variant="outlined"
                hint="不含扩展名"
                persistent-hint
              />
            </div>

            <!-- 操作按钮 -->
            <div class="d-flex flex-column ga-3">
              <v-btn
                color="success"
                size="large"
                prepend-icon="mdi-download"
                @click="handleExport"
                :loading="isExporting"
                block
              >
                导出简历
              </v-btn>
              <v-btn
                color="primary"
                size="large"
                prepend-icon="mdi-content-copy"
                @click="handleCopyToClipboard"
                :loading="isExporting"
                block
              >
                复制到剪贴板
              </v-btn>
              <v-btn
                color="secondary"
                size="large"
                prepend-icon="mdi-refresh"
                @click="handleReset"
                variant="outlined"
                block
              >
                重置设置
              </v-btn>
            </div>

            <!-- 状态提示 -->
            <v-alert
              v-if="statusMessage"
              :type="statusType"
              variant="tonal"
              class="mt-4"
              closable
              @click:close="statusMessage = ''"
            >
              {{ statusMessage }}
            </v-alert>

            <!-- 模板信息 -->
            <v-divider class="my-6" />
            <div v-if="currentTemplate">
              <h3 class="text-h6 mb-3">当前模板信息</h3>
              <v-list density="compact" bg-color="transparent">
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-palette</v-icon>
                  </template>
                  <v-list-item-title>{{ currentTemplate.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ getCategoryLabel(currentTemplate.category) }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-format-font</v-icon>
                  </template>
                  <v-list-item-title>字体</v-list-item-title>
                  <v-list-item-subtitle>{{ currentTemplate.fonts.heading }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon>mdi-view-column</v-icon>
                  </template>
                  <v-list-item-title>布局</v-list-item-title>
                  <v-list-item-subtitle>{{ getLayoutLabel(currentTemplate.layout) }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <!-- 颜色预览 -->
              <div class="mt-4">
                <div class="text-subtitle-2 mb-2">配色方案</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-tooltip
                    v-for="(color, key) in currentTemplate.colors"
                    :key="key"
                    location="top"
                  >
                    <template v-slot:activator="{ props }">
                      <div
                        v-bind="props"
                        class="color-swatch"
                        :style="{ background: color }"
                      />
                    </template>
                    <span>{{ key }}: {{ color }}</span>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 右侧：简历预览 -->
      <v-col cols="12" md="8">
        <ResumeRenderer
          ref="resumeRendererRef"
          :resume="sampleResume"
          @export-start="handleExportStart"
          @export-success="handleExportSuccess"
          @export-error="handleExportError"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ResumeRenderer from '../components/resume/ResumeRenderer.vue'
import { useResumeTemplateState } from '../state/resumeTemplateState'
import { ResumeExportService } from '../service/resumeExportService'

// 状态管理
const {
  selectedTemplate,
  allTemplates,
  selectTemplate,
  resetCustomization,
} = useResumeTemplateState()

// 组件引用
const resumeRendererRef = ref(null)

// 导出设置
const selectedTemplateId = ref('neo-brutalism')
const exportFormat = ref<'png' | 'jpeg'>('png')
const exportScale = ref(2)
const exportFilename = ref('my-resume')
const isExporting = ref(false)

// 状态消息
const statusMessage = ref('')
const statusType = ref<'success' | 'error' | 'info'>('info')

// 示例简历数据
const sampleResume = ref({
  personalInfo: {
    name: '张凯',
    title: '高级Java开发工程师',
    phone: '18665045307',
    email: '425485346@qq.com',
    location: '广州 · 可远程',
    experience: '8年以上',
    coreSkills: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Redis',
      'Kafka',
      'Docker',
      'Kubernetes',
      'Microservices',
    ],
    linkedin: 'https://linkedin.com/in/zhangkai',
  },
  strengths: [
    '精通高并发系统架构设计与性能调优',
    '具备微服务治理与稳定性保障体系建设经验',
    '掌握复杂业务场景下的技术方案选型与风险评估',
    '具备跨团队协作与大型项目技术主导能力',
    '注重系统可观测性与线上问题快速定位',
  ],
  desiredRole: {
    title: '高级JAVA开发',
    salary: '20K-30K',
    location: '广州',
    industries: ['AI应用', '互联网应用', '企业服务'],
  },
  workExperiences: [
    {
      company: '某互联网公司',
      role: '高级Java开发工程师',
      period: '2020.01 - 至今',
      summary: '负责核心业务系统的架构设计与开发，带领团队完成多个重要项目',
      highlights: [
        '主导设计并实现了分布式任务调度系统，支持每日百万级任务调度',
        '优化核心接口性能，将响应时间从500ms降低至50ms，提升90%',
        '建立完善的监控告警体系，系统可用性达到99.95%',
        '指导初级开发人员，提升团队整体技术水平',
      ],
    },
    {
      company: '某科技公司',
      role: 'Java开发工程师',
      period: '2017.06 - 2019.12',
      summary: '参与多个核心业务系统的开发与维护',
      highlights: [
        '参与电商平台核心交易系统开发，支持日均10万订单处理',
        '实现Redis缓存优化方案，缓存命中率提升至95%',
        '完成系统重构，代码质量显著提升',
      ],
    },
  ],
  projects: [
    {
      name: '智能招聘系统',
      role: '技术负责人',
      period: '2023.01 - 2023.12',
      summary: '基于AI的智能招聘匹配系统，实现简历智能解析、岗位推荐等功能',
      highlights: [
        '设计并实现了基于NLP的简历解析引擎，准确率达到92%',
        '开发智能推荐算法，匹配准确率提升40%',
        '系统日活用户突破10万，获得用户高度评价',
      ],
    },
    {
      name: '分布式任务调度平台',
      role: '核心开发',
      period: '2021.06 - 2022.06',
      summary: '企业级分布式任务调度平台，支持多种任务类型和调度策略',
      highlights: [
        '实现了高可用的任务调度引擎，支持秒级调度',
        '开发任务监控和告警系统，及时发现和处理异常',
        '系统稳定运行2年，零重大故障',
      ],
    },
  ],
  education: [
    {
      school: '某大学',
      major: '计算机科学与技术',
      degree: '本科',
      period: '2013.09 - 2017.06',
    },
  ],
})

// 计算属性
const templateOptions = computed(() => allTemplates.value)

const currentTemplate = computed(() => selectedTemplate.value)

const formatOptions = [
  { title: 'PNG（高质量）', value: 'png' },
  { title: 'JPEG（压缩）', value: 'jpeg' },
]

// 方法
const getCategoryIcon = (category: string) => {
  const icons = {
    modern: 'mdi-lightning-bolt',
    classic: 'mdi-book-open-variant',
    creative: 'mdi-palette',
    minimal: 'mdi-circle-outline',
  }
  return icons[category] || 'mdi-file-document'
}

const getCategoryLabel = (category: string) => {
  const labels = {
    modern: '现代风格',
    classic: '经典风格',
    creative: '创意风格',
    minimal: '极简风格',
  }
  return labels[category] || category
}

const getLayoutLabel = (layout: string) => {
  const labels = {
    'single-column': '单列布局',
    'two-column': '双列布局',
    'sidebar': '侧边栏布局',
  }
  return labels[layout] || layout
}

const handleTemplateChange = (templateId: string) => {
  selectTemplate(templateId)
  showStatus('success', `已切换到 ${currentTemplate.value?.name}`)
}

const handleExport = async () => {
  if (!resumeRendererRef.value) return

  isExporting.value = true
  showStatus('info', '正在导出简历...')

  try {
    await resumeRendererRef.value.exportAsImage(exportFormat.value)
  } catch (error) {
    console.error('Export failed:', error)
  } finally {
    isExporting.value = false
  }
}

const handleCopyToClipboard = async () => {
  if (!resumeRendererRef.value) return

  isExporting.value = true
  showStatus('info', '正在复制到剪贴板...')

  try {
    await resumeRendererRef.value.copyToClipboard()
  } catch (error) {
    console.error('Copy failed:', error)
  } finally {
    isExporting.value = false
  }
}

const handleReset = () => {
  resetCustomization()
  selectedTemplateId.value = 'neo-brutalism'
  exportFormat.value = 'png'
  exportScale.value = 2
  exportFilename.value = 'my-resume'
  showStatus('success', '设置已重置')
}

const handleExportStart = () => {
  isExporting.value = true
  showStatus('info', '正在导出简历...')
}

const handleExportSuccess = () => {
  isExporting.value = false
  showStatus('success', '简历导出成功！')
}

const handleExportError = (error: Error) => {
  isExporting.value = false
  showStatus('error', `导出失败：${error.message}`)
}

const showStatus = (type: 'success' | 'error' | 'info', message: string) => {
  statusType.value = type
  statusMessage.value = message
  
  if (type === 'success' || type === 'info') {
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  }
}

onMounted(() => {
  selectTemplate(selectedTemplateId.value)
})
</script>

<style scoped>
.color-swatch {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-swatch:hover {
  transform: scale(1.1);
}
</style>

