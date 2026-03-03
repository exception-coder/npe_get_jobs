<script setup>
import { computed, reactive, ref, watch, onMounted, toRaw } from 'vue'
import ResumePreview from '../components/resume/ResumePreview.vue'
import ResumeRenderer from '../components/resume/ResumeRenderer.vue'
import ResumeSectionCard from '../components/resume/ResumeSectionCard.vue'
import DraggableChips from '../components/resume/DraggableChips.vue'
import { analyzeJobSkill } from '../api/jobSkill'
import {
  optimizeProjectDescription,
  optimizeProjectAchievement,
} from '../api/projectOptimization'
import { saveResume, getAllResumes, getResumeById } from '../api/resume'

const RESUME_STORAGE_KEY = 'vita-polish:resume'
const isBrowser = typeof window !== 'undefined'

// 简历列表加载状态
const resumeListState = reactive({
  loading: false,
  error: null,
  resumes: [],
  selectedResumeId: null,
})

// 简历加载状态
const resumeLoadState = reactive({
  loading: false,
  error: null,
})

const createDefaultResume = () => ({
  personalInfo: {
    name: '张三',
    title: '高级Java开发工程师',
    phone: '138-8888-8888',
    email: '425485346@qq.com',
    location: '广州 · 可远程',
    experience: '8年以上',
    coreSkills: [],
    linkedin: '',
  },
  strengths: [
  
  ],
  desiredRole: {
    title: '',
    salary: '',
    location: '',
    industries: [],
  },
  workExperiences: [
   
  ],
  projects: [
    
  ],
  education: [
    
  ],
})

const experienceOptions = [
  '1年以下',
  '1-3年',
  '3-5年',
  '5-8年',
  '8年以上',
  '初级',
  '中级',
  '高级',
  '资深',
]

const resume = reactive(createDefaultResume())

const optimisationFocus = ref([
  '补充量化指标，提升说服力',
  '凸显跨部门协作成果',
  '强化 AI / 大模型项目实践',
])

const suggestions = ref([])
const lastGeneratedAt = ref(null)

const aiCompletion = reactive({
  loading: false,
  error: null,
  result: null,
  lastSyncedAt: null,
})

const saveState = reactive({
  loading: false,
  error: null,
  success: false,
  savedResumeId: null,
  lastSavedAt: null,
})

// 导出状态
const exportState = reactive({
  loading: false,
  error: null,
  success: false,
  message: '',
})

// 简历渲染器引用
const resumeRendererRef = ref(null)

// 使用新渲染器
const useNewRenderer = ref(true)

const canTriggerAiCompletion = computed(() => {
  const title = resume.personalInfo.title?.trim()
  const experience = resume.personalInfo.experience?.toString().trim()
  return Boolean(title) && Boolean(experience)
})

const totalHighlights = computed(() =>
  resume.workExperiences.reduce((acc, exp) => acc + exp.highlights.length, 0),
)

const projectOptimizationStates = reactive(new Map())

const getProjectState = (project) => {
  if (!projectOptimizationStates.has(project)) {
    projectOptimizationStates.set(
      project,
      reactive({
        descriptionLoading: false,
        descriptionError: null,
        lastDescriptionOptimizedAt: null,
        optimizedSummary: '',
        achievementLoading: false,
        achievementError: null,
        lastAchievementOptimizedAt: null,
        optimizedAchievementsRaw: '',
        optimizedAchievements: [],
      }),
    )
  }
  return projectOptimizationStates.get(project)
}

const buildProjectOptimizeBasePayload = () => ({
  resumeSummary: resume.strengths.join('；'),
  experienceYears: resume.personalInfo.experience || '',
  targetPosition: resume.desiredRole.title || resume.personalInfo.title || '',
  skills: Array.isArray(resume.personalInfo.coreSkills)
    ? resume.personalInfo.coreSkills
    : [],
})

const normalizeAchievements = (content) => {
  if (!content) return []
  const lines = content
    .split(/\r?\n+/)
    .map((line) => line.replace(/^[\-\*\u2022•]\s*/, '').trim())
    .filter(Boolean)

  if (lines.length) {
    return lines
  }

  return [content.trim()].filter(Boolean)
}

const copyTextToClipboard = async (text) => {
  if (!text || !isBrowser) return
  if (window.navigator?.clipboard?.writeText) {
    try {
      await window.navigator.clipboard.writeText(text)
      return
    } catch (error) {
      console.error('复制到剪贴板失败', error)
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
  } catch (error) {
    console.error('复制到剪贴板失败', error)
  } finally {
    document.body.removeChild(textarea)
  }
}

const optimizeProjectSummary = async (project) => {
  const state = getProjectState(project)
  state.descriptionError = null

  if (!project.summary || !project.summary.trim()) {
    state.descriptionError = '请先填写项目概述后再尝试优化。'
    return
  }

  state.descriptionLoading = true

  try {
    const payload = {
      ...buildProjectOptimizeBasePayload(),
      projectDescription: project.summary,
    }

    const result = await optimizeProjectDescription(payload)
    const optimized = result?.optimizedContent?.trim()

    if (!optimized) {
      state.descriptionError = 'AI 未返回优化内容，请稍后重试。'
      return
    }

    state.optimizedSummary = optimized
    state.lastDescriptionOptimizedAt = new Date().toLocaleString()
  } catch (error) {
    console.error('AI 优化项目概述失败', error)
    state.descriptionError = error?.message || 'AI 优化失败，请稍后重试。'
  } finally {
    state.descriptionLoading = false
  }
}

const optimizeProjectHighlights = async (project) => {
  const state = getProjectState(project)
  state.achievementError = null

  const highlights = Array.isArray(project.highlights)
    ? project.highlights.map((item) => item?.trim()).filter(Boolean)
    : []

  if (!highlights.length) {
    state.achievementError = '请至少录入一条关键成果后再尝试优化。'
    return
  }

  state.achievementLoading = true

  try {
    const payload = {
      ...buildProjectOptimizeBasePayload(),
      projectAchievement: highlights.join('\n'),
    }

    const result = await optimizeProjectAchievement(payload)
    const optimized = result?.optimizedContent?.trim()

    if (!optimized) {
      state.achievementError = 'AI 未返回优化内容，请稍后重试。'
      return
    }

    const normalized = normalizeAchievements(optimized)
    state.optimizedAchievementsRaw = optimized
    state.optimizedAchievements = normalized
    state.lastAchievementOptimizedAt = new Date().toLocaleString()
  } catch (error) {
    console.error('AI 优化项目业绩失败', error)
    state.achievementError = error?.message || 'AI 优化失败，请稍后重试。'
  } finally {
    state.achievementLoading = false
  }
}

const applyOptimizedSummary = (project) => {
  const state = getProjectState(project)
  if (!state.optimizedSummary) return
  project.summary = state.optimizedSummary
}

const copyOptimizedSummary = async (project) => {
  const state = getProjectState(project)
  if (!state.optimizedSummary) return
  await copyTextToClipboard(state.optimizedSummary)
}

const applyOptimizedAchievements = (project) => {
  const state = getProjectState(project)
  if (!Array.isArray(state.optimizedAchievements) || !state.optimizedAchievements.length) return
  project.highlights.splice(0, project.highlights.length, ...state.optimizedAchievements)
}

const copyOptimizedAchievements = async (project) => {
  const state = getProjectState(project)
  if (!state.optimizedAchievementsRaw) return
  await copyTextToClipboard(state.optimizedAchievementsRaw)
}

const mergeUnique = (target, source) => {
  if (!Array.isArray(target) || !Array.isArray(source) || !source.length) return
  const normalized = source.filter(
    (item) => item !== undefined && item !== null && item !== '',
  )
  if (!normalized.length) return

  const merged = new Set(target)
  normalized.forEach((item) => merged.add(item))
  target.splice(0, target.length, ...merged)
}

const applyAiCompletionResult = (result) => {
  if (!result) return

  aiCompletion.result = result
  aiCompletion.lastSyncedAt = new Date().toLocaleString()
}

const applySuggestedPersonalTitle = () => {
  const title = aiCompletion.result?.inferredJobTitle
  if (!title) return
  resume.personalInfo.title = title
}

const applySuggestedExperience = () => {
  const experience = aiCompletion.result?.experienceRange
  if (!experience) return
  resume.personalInfo.experience = experience
}

const applySuggestedTechStack = () => {
  const techStack = aiCompletion.result?.techStack
  if (!Array.isArray(techStack) || !techStack.length) return
  mergeUnique(resume.personalInfo.coreSkills, techStack)
}

const applySuggestedEssentialStrengths = () => {
  const strengths = aiCompletion.result?.essentialStrengths
  if (!Array.isArray(strengths) || !strengths.length) return
  mergeUnique(resume.strengths, strengths)
}

const applySuggestedRelatedDomains = () => {
  const domains = aiCompletion.result?.relatedDomains
  if (!Array.isArray(domains) || !domains.length) return
  mergeUnique(resume.strengths, domains)
}

const applySuggestedDesiredRoleTitle = () => {
  const title = aiCompletion.result?.inferredJobTitle
  if (!title) return
  resume.desiredRole.title = title
}

const applySuggestedHotIndustries = () => {
  const industries = aiCompletion.result?.hotIndustries
  if (!Array.isArray(industries) || !industries.length) return
  mergeUnique(resume.desiredRole.industries, industries)
}

const buildProjectFromSuggestion = (projectSuggestion, fallbackPeriod) => ({
  name: projectSuggestion.projectName || 'AI 推荐项目案例',
  role: resume.personalInfo.title || aiCompletion.result?.inferredJobTitle || '',
  period: projectSuggestion.period || fallbackPeriod || '',
  summary: projectSuggestion.projectDescription || '',
  highlights: Array.isArray(projectSuggestion.projectAchievements)
    ? projectSuggestion.projectAchievements
    : [],
})

const applySuggestedProjects = () => {
  const projectSuggestions = aiCompletion.result?.projectExperiences
  if (!Array.isArray(projectSuggestions) || !projectSuggestions.length) return

  const fallbackPeriod = resume.workExperiences[0]?.period || ''
  projectSuggestions.forEach((suggestion) => {
    const project = buildProjectFromSuggestion(suggestion, fallbackPeriod)
    const existingIndex = resume.projects.findIndex((item) => item.name === project.name)
    if (existingIndex >= 0) {
      resume.projects.splice(existingIndex, 1, project)
    } else {
      resume.projects.unshift(project)
    }
  })
  sortProjectsByPeriod()
}

const cloneArray = (value, fallback = []) => (Array.isArray(value) ? [...value] : fallback)

const applyResumeData = (data) => {
  if (!data || typeof data !== 'object') return

  if (data.personalInfo && typeof data.personalInfo === 'object') {
    resume.personalInfo.name = data.personalInfo.name ?? resume.personalInfo.name
    resume.personalInfo.title = data.personalInfo.title ?? resume.personalInfo.title
    resume.personalInfo.phone = data.personalInfo.phone ?? resume.personalInfo.phone
    resume.personalInfo.email = data.personalInfo.email ?? resume.personalInfo.email
    resume.personalInfo.location = data.personalInfo.location ?? resume.personalInfo.location
    resume.personalInfo.experience =
      data.personalInfo.experience ?? resume.personalInfo.experience
    resume.personalInfo.coreSkills = cloneArray(
      data.personalInfo.coreSkills,
      resume.personalInfo.coreSkills,
    )
    resume.personalInfo.linkedin = data.personalInfo.linkedin ?? resume.personalInfo.linkedin
  }

  if (Array.isArray(data.strengths)) {
    resume.strengths.splice(0, resume.strengths.length, ...data.strengths)
  }

  if (data.desiredRole && typeof data.desiredRole === 'object') {
    resume.desiredRole.title = data.desiredRole.title ?? resume.desiredRole.title
    resume.desiredRole.salary = data.desiredRole.salary ?? resume.desiredRole.salary
    resume.desiredRole.location = data.desiredRole.location ?? resume.desiredRole.location
    resume.desiredRole.industries = cloneArray(
      data.desiredRole.industries,
      resume.desiredRole.industries,
    )
  }

  if (Array.isArray(data.workExperiences)) {
    resume.workExperiences.splice(0, resume.workExperiences.length, ...data.workExperiences)
  }

  if (Array.isArray(data.projects)) {
    resume.projects.splice(0, resume.projects.length, ...data.projects)
  }

  if (Array.isArray(data.education)) {
    resume.education.splice(0, resume.education.length, ...data.education)
  }
}

const saveResumeToStorage = () => {
  if (!isBrowser) return
  try {
    const serialized = JSON.stringify(toRaw(resume))
    window.localStorage.setItem(RESUME_STORAGE_KEY, serialized)
  } catch (error) {
    console.error('保存简历数据到本地存储失败', error)
  }
}

const loadResumeFromStorage = () => {
  if (!isBrowser) return
  try {
    const cached = window.localStorage.getItem(RESUME_STORAGE_KEY)
    if (!cached) return
    const parsed = JSON.parse(cached)
    applyResumeData(parsed)
  } catch (error) {
    console.error('从本地存储加载简历数据失败', error)
  }
}

// 从数据库加载简历列表
const loadResumeList = async () => {
  resumeListState.loading = true
  resumeListState.error = null
  
  try {
    const resumes = await getAllResumes()
    resumeListState.resumes = resumes || []
  } catch (error) {
    console.error('加载简历列表失败', error)
    resumeListState.error = error?.message || '加载简历列表失败，请稍后重试。'
  } finally {
    resumeListState.loading = false
  }
}

// 从数据库加载指定简历
const loadResumeFromDatabase = async (resumeId) => {
  if (!resumeId) return
  
  resumeLoadState.loading = true
  resumeLoadState.error = null
  
  try {
    const resumeData = await getResumeById(resumeId)
    if (resumeData) {
      applyResumeData(resumeData)
      saveState.savedResumeId = resumeData.id
      saveState.lastSavedAt = resumeData.updatedAt 
        ? new Date(resumeData.updatedAt).toLocaleString() 
        : null
      // 同时保存到本地存储作为备份
      saveResumeToStorage()
    }
  } catch (error) {
    console.error('加载简历失败', error)
    resumeLoadState.error = error?.message || '加载简历失败，请稍后重试。'
  } finally {
    resumeLoadState.loading = false
  }
}

// 选择简历
const selectResume = async (resumeId) => {
  resumeListState.selectedResumeId = resumeId
  await loadResumeFromDatabase(resumeId)
}

// 创建新简历
const createNewResume = () => {
  resumeListState.selectedResumeId = null
  saveState.savedResumeId = null
  saveState.lastSavedAt = null
  const defaultData = createDefaultResume()
  applyResumeData(defaultData)
}

onMounted(async () => {
  // 优先从数据库加载简历列表
  await loadResumeList()
  
  // 如果有简历，默认加载第一个
  if (resumeListState.resumes.length > 0) {
    await selectResume(resumeListState.resumes[0].id)
  } else {
    // 如果数据库没有简历，尝试从本地存储加载
    loadResumeFromStorage()
  }
})

watch(
  resume,
  () => {
    // 自动保存到本地存储作为备份
    saveResumeToStorage()
  },
  { deep: true },
)

// 监听项目时间段变化，自动排序
watch(
  () => resume.projects.map(p => p.period),
  () => {
    sortProjectsByPeriod()
  },
  { deep: true }
)

const generateSuggestions = () => {
  const results = []

  if (!resume.personalInfo.title.includes('AI')) {
    results.push('在职位头衔中增加 AI 关键词，匹配 AI 简历场景。')
  }

  if (resume.strengths.length < 4) {
    results.push('个人优势可补充团队管理、跨端协同等信息，突出综合能力。')
  }

  if (totalHighlights.value < 6) {
    results.push('工作经历亮点建议至少 6 条，覆盖战略、执行与指标成果。')
  }

  const hasProjectMetrics = resume.projects.some((project) =>
    project.highlights.some((item) => /\d/.test(item)),
  )
  if (!hasProjectMetrics) {
    results.push('为项目亮点补充量化数字（转化率、效率、覆盖人群等）增强可信度。')
  }

  if (!results.length) {
    results.push('当前内容结构完整，可聚焦故事化表达与个性标签强化。')
  }

  suggestions.value = results
  lastGeneratedAt.value = new Date().toLocaleString()
}

const addStrength = (value) => {
  if (!value) return
  resume.strengths.push(value)
}

const addWorkExperience = () => {
  resume.workExperiences.push({
    company: '',
    role: '',
    period: '',
    summary: '',
    highlights: [],
  })
}

const removeWorkExperience = (index) => {
  resume.workExperiences.splice(index, 1)
}

const addProject = () => {
  resume.projects.push({
    name: '',
    role: '',
    period: '',
    summary: '',
    highlights: [],
  })
  sortProjectsByPeriod()
}

// 解析时间段字符串，返回可比较的时间戳
const parsePeriod = (period) => {
  if (!period || typeof period !== 'string') return 0
  
  // 匹配格式：2025/10-2025/12 或 2025/10 - 2025/12 或 2025-10 - 2025-12
  const match = period.match(/(\d{4})[\/\-](\d{1,2})\s*[-~至]\s*(\d{4})[\/\-](\d{1,2})/)
  if (match) {
    const [, startYear, startMonth] = match
    // 使用开始时间作为排序依据
    return new Date(parseInt(startYear), parseInt(startMonth) - 1).getTime()
  }
  
  // 匹配单个时间点：2025/10 或 2025-10
  const singleMatch = period.match(/(\d{4})[\/\-](\d{1,2})/)
  if (singleMatch) {
    const [, year, month] = singleMatch
    return new Date(parseInt(year), parseInt(month) - 1).getTime()
  }
  
  // 匹配年份：2025
  const yearMatch = period.match(/(\d{4})/)
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1]), 0).getTime()
  }
  
  return 0
}

// 按时间段倒序排序项目（最新的在前面）
const sortProjectsByPeriod = () => {
  resume.projects.sort((a, b) => {
    const timeA = parsePeriod(a.period)
    const timeB = parsePeriod(b.period)
    return timeB - timeA // 倒序：新的在前
  })
}

const removeProject = (index) => {
  resume.projects.splice(index, 1)
}

const addEducation = () => {
  resume.education.push({
    school: '',
    major: '',
    degree: '',
    period: '',
  })
}

const removeEducation = (index) => {
  resume.education.splice(index, 1)
}

const triggerAiCompletion = async () => {
  if (!canTriggerAiCompletion.value || aiCompletion.loading) return

  aiCompletion.error = null
  aiCompletion.loading = true

  try {
    const rawResult = await analyzeJobSkill({
      jobTitle: resume.personalInfo.title,
      experienceYears: resume.personalInfo.experience,
      personalStrengths: resume.strengths,
    })

    const normalizeProjectSuggestion = (item = {}) => ({
      projectName: item?.project_name || item?.projectName || '',
      projectDescription: item?.project_description || item?.projectDescription || '',
      projectAchievements: Array.isArray(item?.project_achievements)
        ? item.project_achievements
        : Array.isArray(item?.projectAchievements)
          ? item.projectAchievements
          : [],
      period: item?.period || '',
    })

    const projectExperiences = Array.isArray(rawResult?.project_experience)
      ? rawResult.project_experience.map((item) => normalizeProjectSuggestion(item))
      : rawResult?.project_experience
        ? [normalizeProjectSuggestion(rawResult.project_experience)]
        : []

    const normalizedResult = {
      inferredJobTitle: rawResult?.inferred_job_title || '',
      jobLevel: rawResult?.job_level || '',
      experienceRange: rawResult?.experience_range || '',
      techStack: rawResult?.tech_stack || [],
      hotIndustries: rawResult?.hot_industries || [],
      relatedDomains: rawResult?.related_domains || [],
      greetingMessage: rawResult?.greeting_message || '',
      essentialStrengths: rawResult?.essential_strengths || [],
      projectExperiences,
    }

    applyAiCompletionResult(normalizedResult)
  } catch (error) {
    console.error('AI 智能补全失败', error)
    aiCompletion.error = error?.message || 'AI 智能补全失败，请稍后重试。'
  } finally {
    aiCompletion.loading = false
  }
}

const handleSaveResume = async () => {
  saveState.loading = true
  saveState.error = null
  saveState.success = false

  try {
    const payload = {
      id: saveState.savedResumeId,
      personalInfo: {
        name: resume.personalInfo.name,
        title: resume.personalInfo.title,
        phone: resume.personalInfo.phone,
        email: resume.personalInfo.email,
        location: resume.personalInfo.location,
        experience: resume.personalInfo.experience,
        coreSkills: resume.personalInfo.coreSkills || [],
        linkedin: resume.personalInfo.linkedin,
      },
      strengths: resume.strengths || [],
      desiredRole: {
        title: resume.desiredRole.title,
        salary: resume.desiredRole.salary,
        location: resume.desiredRole.location,
        industries: resume.desiredRole.industries || [],
      },
      workExperiences: resume.workExperiences.map((exp) => ({
        company: exp.company,
        role: exp.role,
        period: exp.period,
        summary: exp.summary,
        highlights: exp.highlights || [],
      })),
      projects: resume.projects.map((proj) => ({
        name: proj.name,
        role: proj.role,
        period: proj.period,
        summary: proj.summary,
        highlights: proj.highlights || [],
      })),
      education: resume.education.map((edu) => ({
        school: edu.school,
        major: edu.major,
        degree: edu.degree,
        period: edu.period,
      })),
    }

    const result = await saveResume(payload)
    saveState.success = true
    saveState.savedResumeId = result.id
    saveState.lastSavedAt = new Date().toLocaleString()
    
    // 刷新简历列表
    await loadResumeList()
    resumeListState.selectedResumeId = result.id
    
    console.log('简历保存成功', result)
  } catch (error) {
    console.error('保存简历失败', error)
    saveState.error = error?.response?.data?.message || error?.message || '保存简历失败，请稍后重试。'
  } finally {
    saveState.loading = false
  }
}

// 导出处理
const handleExportStart = () => {
  exportState.loading = true
  exportState.error = null
  exportState.success = false
  exportState.message = '正在导出简历...'
}

const handleExportSuccess = () => {
  exportState.loading = false
  exportState.success = true
  exportState.message = '简历导出成功！'
  setTimeout(() => {
    exportState.success = false
    exportState.message = ''
  }, 3000)
}

const handleExportError = (error) => {
  exportState.loading = false
  exportState.error = error.message || '导出失败，请稍后重试'
  setTimeout(() => {
    exportState.error = null
  }, 5000)
}
</script>

<template>
  <v-container class="py-8" fluid>
    <v-row justify="center" class="g-6">
      <v-col cols="12" xl="6" lg="6" md="7">
        <!-- 简历选择器 -->
        <ResumeSectionCard title="简历管理" icon="mdi-file-document-multiple-outline">
          <v-row class="g-4">
            <v-col cols="12">
              <div class="d-flex flex-wrap align-center ga-3">
                <v-select
                  v-model="resumeListState.selectedResumeId"
                  :items="resumeListState.resumes"
                  item-title="personalInfo.name"
                  item-value="id"
                  label="选择要编辑的简历"
                  :loading="resumeListState.loading"
                  :disabled="resumeListState.loading || resumeLoadState.loading"
                  @update:model-value="selectResume"
                  clearable
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props">
                      <template v-slot:title>
                        {{ item.raw.personalInfo?.name || '未命名简历' }}
                      </template>
                      <template v-slot:subtitle>
                        {{ item.raw.personalInfo?.title || '无职位' }} · 
                        更新于 {{ item.raw.updatedAt ? new Date(item.raw.updatedAt).toLocaleString() : '未知' }}
                      </template>
                    </v-list-item>
                  </template>
                </v-select>
                <v-btn
                  color="primary"
                  prepend-icon="mdi-plus"
                  variant="tonal"
                  @click="createNewResume"
                  :disabled="resumeLoadState.loading"
                >
                  新建简历
                </v-btn>
                <v-btn
                  color="secondary"
                  prepend-icon="mdi-refresh"
                  variant="text"
                  @click="loadResumeList"
                  :loading="resumeListState.loading"
                  :disabled="resumeLoadState.loading"
                >
                  刷新列表
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" v-if="resumeListState.error">
              <v-alert type="error" variant="tonal" border="start">
                {{ resumeListState.error }}
              </v-alert>
            </v-col>
            <v-col cols="12" v-if="resumeLoadState.loading">
              <v-alert type="info" variant="tonal" border="start">
                <div class="d-flex align-center ga-3">
                  <v-progress-circular indeterminate size="20" width="2" />
                  <span>正在加载简历数据...</span>
                </div>
              </v-alert>
            </v-col>
            <v-col cols="12" v-if="resumeLoadState.error">
              <v-alert type="error" variant="tonal" border="start">
                {{ resumeLoadState.error }}
              </v-alert>
            </v-col>
            <v-col cols="12" v-if="!resumeListState.loading && resumeListState.resumes.length === 0">
              <v-alert type="info" variant="tonal" border="start">
                暂无简历数据，请点击"新建简历"开始创建。
              </v-alert>
            </v-col>
            <v-col cols="12" v-if="saveState.savedResumeId">
              <v-alert type="success" variant="tonal" border="start">
                当前编辑的简历ID：{{ saveState.savedResumeId }}
                <span v-if="saveState.lastSavedAt"> · 最后保存：{{ saveState.lastSavedAt }}</span>
              </v-alert>
            </v-col>
          </v-row>
        </ResumeSectionCard>

        <ResumeSectionCard title="个人信息" icon="mdi-account-badge-outline">
          <v-row class="g-4">
            <v-col cols="12" sm="6">
              <v-text-field v-model="resume.personalInfo.name" label="姓名" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="resume.personalInfo.title" label="当前头衔" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="resume.personalInfo.phone" label="联系电话" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="resume.personalInfo.email" label="邮箱" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="resume.personalInfo.location" label="所在城市 / 工作形式" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="resume.personalInfo.experience"
                :items="experienceOptions"
                label="工作年限 / 经验标签"
                clearable
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="resume.personalInfo.linkedin" label="LinkedIn / 个人主页" />
            </v-col>
            <v-col cols="12">
              <div class="d-flex flex-wrap align-center ga-3">
                <v-btn
                  color="secondary"
                  prepend-icon="mdi-robot-happy"
                  variant="tonal"
                  :disabled="!canTriggerAiCompletion || aiCompletion.loading"
                  :loading="aiCompletion.loading"
                  @click="triggerAiCompletion"
                >
                  AI 智能补全
                </v-btn>
                <span v-if="!canTriggerAiCompletion" class="text-body-2 text-medium-emphasis">
                  请先填写“当前头衔”与“工作年限 / 经验标签”后再尝试 AI 补全。
                </span>
                <span v-else-if="aiCompletion.lastSyncedAt" class="text-body-2 text-medium-emphasis">
                  最近补全时间：{{ aiCompletion.lastSyncedAt }}
                </span>
              </div>
            </v-col>
            <v-col cols="12" v-if="aiCompletion.error">
              <v-alert type="error" variant="tonal" border="start">
                {{ aiCompletion.error }}
              </v-alert>
            </v-col>
          </v-row>
          <v-divider v-if="aiCompletion.result" class="my-4" />
          <v-alert
            v-if="aiCompletion.result"
            type="info"
            variant="tonal"
            border="start"
            class="d-flex flex-column ga-3"
          >
            <div class="d-flex flex-wrap align-center ga-3">
              <span class="text-body-2 text-medium-emphasis">
                推荐头衔：{{ aiCompletion.result.inferredJobTitle || '暂无建议' }}
              </span>
              <v-btn
                v-if="aiCompletion.result.inferredJobTitle"
                size="small"
                variant="tonal"
                color="primary"
                @click="applySuggestedPersonalTitle"
              >
                应用到当前头衔
              </v-btn>
            </div>
            <div class="d-flex flex-wrap align-center ga-3">
              <span class="text-body-2 text-medium-emphasis">
                推荐经验标签：{{ aiCompletion.result.experienceRange || '暂无建议' }}
              </span>
              <v-btn
                v-if="aiCompletion.result.experienceRange"
                size="small"
                variant="tonal"
                color="primary"
                @click="applySuggestedExperience"
              >
                应用到经验标签
              </v-btn>
            </div>
            <div
              v-if="aiCompletion.result.greetingMessage"
              class="text-body-2 text-medium-emphasis"
            >
              推荐开场语：{{ aiCompletion.result.greetingMessage }}
            </div>
          </v-alert>
        </ResumeSectionCard>

        <ResumeSectionCard
          title="核心技能"
          subtitle="建议聚焦 5-8 个能力标签，突出技术栈与领域优势"
          icon="mdi-lightning-bolt-outline"
        >
          <v-combobox
            v-model="resume.personalInfo.coreSkills"
            label="核心技能（回车新增）"
            multiple
            chips
            closable-chips
          />
          <v-alert
            v-if="aiCompletion.result?.techStack?.length"
            type="info"
            variant="tonal"
            border="start"
            class="mt-4"
          >
            <div class="text-body-2 text-medium-emphasis mb-3">AI 推荐技术栈</div>
            <div class="d-flex flex-wrap ga-2 mb-3">
              <v-chip
                v-for="skill in aiCompletion.result.techStack"
                :key="skill"
                color="primary"
                variant="tonal"
              >
                {{ skill }}
              </v-chip>
            </div>
            <v-btn size="small" variant="tonal" color="primary" @click="applySuggestedTechStack">
              批量添加到核心技能
            </v-btn>
          </v-alert>
        </ResumeSectionCard>

        <ResumeSectionCard
          title="个人优势"
          subtitle="建议覆盖技术栈、业务理解、团队协同等维度"
          icon="mdi-star-outline"
        >
          <v-combobox
            v-model="resume.strengths"
            label="关键词"
            multiple
            chips
            closable-chips
            @change="addStrength"
          />
          <v-alert
            v-if="
              (aiCompletion.result?.essentialStrengths?.length ||
                aiCompletion.result?.relatedDomains?.length) &&
              aiCompletion.result
            "
            type="info"
            variant="tonal"
            border="start"
            class="mt-4 d-flex flex-column ga-3"
          >
            <div
              v-if="aiCompletion.result?.essentialStrengths?.length"
              class="d-flex flex-column ga-2"
            >
              <div class="text-body-2 text-medium-emphasis">AI 推荐核心优势</div>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="strength in aiCompletion.result.essentialStrengths"
                  :key="strength"
                  color="secondary"
                  variant="tonal"
                >
                  {{ strength }}
                </v-chip>
              </div>
              <v-btn
                size="small"
                variant="tonal"
                color="primary"
                @click="applySuggestedEssentialStrengths"
              >
                添加到个人优势
              </v-btn>
            </div>
            <div
              v-if="aiCompletion.result?.relatedDomains?.length"
              class="d-flex flex-column ga-2"
            >
              <div class="text-body-2 text-medium-emphasis">关联领域标签</div>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="domain in aiCompletion.result.relatedDomains"
                  :key="domain"
                  color="secondary"
                  variant="outlined"
                >
                  {{ domain }}
                </v-chip>
              </div>
              <v-btn
                size="small"
                variant="tonal"
                color="primary"
                @click="applySuggestedRelatedDomains"
              >
                添加到个人优势
              </v-btn>
            </div>
          </v-alert>
        </ResumeSectionCard>

        <ResumeSectionCard title="期望职位" icon="mdi-target-account">
          <v-text-field v-model="resume.desiredRole.title" label="目标岗位 / 角色" />
          <v-text-field v-model="resume.desiredRole.location" label="目标地点 / 工作方式" />
          <v-text-field v-model="resume.desiredRole.salary" label="薪资期望" />
          <v-combobox
            v-model="resume.desiredRole.industries"
            label="感兴趣的行业方向"
            multiple
            chips
            closable-chips
          />
          <v-alert
            v-if="
              aiCompletion.result &&
              (aiCompletion.result.inferredJobTitle || aiCompletion.result?.hotIndustries?.length)
            "
            type="info"
            variant="tonal"
            border="start"
            class="mt-4 d-flex flex-column ga-3"
          >
            <div class="d-flex flex-wrap align-center ga-3">
              <span class="text-body-2 text-medium-emphasis">
                推荐目标岗位：{{ aiCompletion.result?.inferredJobTitle || '暂无建议' }}
              </span>
              <v-btn
                v-if="aiCompletion.result?.inferredJobTitle"
                size="small"
                variant="tonal"
                color="primary"
                @click="applySuggestedDesiredRoleTitle"
              >
                应用到目标岗位
              </v-btn>
            </div>
            <div v-if="aiCompletion.result?.hotIndustries?.length" class="d-flex flex-column ga-2">
              <div class="text-body-2 text-medium-emphasis">热门行业方向</div>
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="industry in aiCompletion.result.hotIndustries"
                  :key="industry"
                  color="primary"
                  variant="outlined"
                >
                  {{ industry }}
                </v-chip>
              </div>
              <v-btn
                size="small"
                variant="tonal"
                color="primary"
                @click="applySuggestedHotIndustries"
              >
                添加到行业方向
              </v-btn>
            </div>
          </v-alert>
        </ResumeSectionCard>

        <ResumeSectionCard
          title="AI 补全结果"
          subtitle="基于当前头衔与工作年限，自动补全推荐的技能、行业与项目案例"
          icon="mdi-robot-excited-outline"
        >
          <div v-if="aiCompletion.loading" class="py-6 text-center text-medium-emphasis">
            <v-progress-circular indeterminate color="primary" />
            <div class="mt-3">AI 正在补全简历内容，请稍候…</div>
          </div>
          <div v-else-if="aiCompletion.result">
            <v-row class="g-4">
              <v-col cols="12" md="6">
                <v-sheet variant="outlined" class="pa-4 rounded-lg">
                  <div class="text-subtitle-2 text-medium-emphasis mb-1">推荐岗位</div>
                  <div class="text-body-1 font-weight-medium">
                    {{ aiCompletion.result.inferredJobTitle || '—' }}
                  </div>
                  <div class="text-body-2 text-medium-emphasis mt-1">
                    {{ aiCompletion.result.jobLevel || '岗位级别未提供' }} ·
                    {{ aiCompletion.result.experienceRange || '经验范围未提供' }}
                  </div>
                </v-sheet>
              </v-col>
              <v-col cols="12" md="6" v-if="aiCompletion.result.greetingMessage">
                <v-alert type="success" variant="tonal" border="start" class="h-100">
                  <div class="text-subtitle-2 mb-2">AI 打招呼消息</div>
                  <div class="text-body-2">{{ aiCompletion.result.greetingMessage }}</div>
                </v-alert>
              </v-col>
              <v-col cols="12" v-if="aiCompletion.result.techStack?.length">
                <div class="text-subtitle-2 text-medium-emphasis mb-2">推荐技术栈</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip v-for="skill in aiCompletion.result.techStack" :key="skill" color="primary" variant="tonal">
                    {{ skill }}
                  </v-chip>
                </div>
              </v-col>
              <v-col cols="12" md="6" v-if="aiCompletion.result.hotIndustries?.length">
                <div class="text-subtitle-2 text-medium-emphasis mb-2">热门行业方向</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip v-for="industry in aiCompletion.result.hotIndustries" :key="industry" color="primary" variant="outlined">
                    {{ industry }}
                  </v-chip>
                </div>
              </v-col>
              <v-col cols="12" md="6" v-if="aiCompletion.result.relatedDomains?.length">
                <div class="text-subtitle-2 text-medium-emphasis mb-2">关联领域标签</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip v-for="domain in aiCompletion.result.relatedDomains" :key="domain" color="secondary" variant="tonal">
                    {{ domain }}
                  </v-chip>
                </div>
              </v-col>
              <v-col cols="12" v-if="aiCompletion.result.essentialStrengths?.length">
                <div class="text-subtitle-2 text-medium-emphasis mb-2">核心优势亮点</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip
                    v-for="strength in aiCompletion.result.essentialStrengths"
                    :key="strength"
                    color="secondary"
                    variant="outlined"
                  >
                    {{ strength }}
                  </v-chip>
                </div>
              </v-col>
              <v-col cols="12" v-if="aiCompletion.result.projectExperiences?.length">
                <div class="text-subtitle-2 text-medium-emphasis mb-2">AI 推荐项目案例</div>
                <div class="d-flex flex-column ga-3">
                  <v-sheet
                    v-for="(project, index) in aiCompletion.result.projectExperiences"
                    :key="project.projectName || index"
                    variant="outlined"
                    class="pa-4 rounded-lg"
                  >
                    <div class="text-body-1 font-weight-medium">
                      {{ project.projectName || '—' }}
                    </div>
                    <div v-if="project.projectDescription" class="text-body-2 text-medium-emphasis mt-2">
                      {{ project.projectDescription }}
                    </div>
                    <ul v-if="project.projectAchievements?.length" class="text-body-2 mt-3 ps-4">
                      <li v-for="achievement in project.projectAchievements" :key="achievement">
                        {{ achievement }}
                      </li>
                    </ul>
                  </v-sheet>
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else class="text-body-2 text-medium-emphasis">
            尚未生成 AI 补全结果。请在上方填写当前头衔与工作年限后点击“AI 智能补全”按钮获取推荐内容。
          </div>
        </ResumeSectionCard>

        <ResumeSectionCard title="工作经历" icon="mdi-briefcase-outline">
          <div class="d-flex justify-end mb-3">
            <v-btn
              color="primary"
              prepend-icon="mdi-plus"
              variant="tonal"
              @click="addWorkExperience"
            >
              新增工作经历
            </v-btn>
          </div>
          <v-alert
            v-if="!resume.workExperiences.length"
            type="info"
            variant="tonal"
            class="mb-4"
          >
            目前暂无工作经历，请先点击“新增工作经历”补充内容。
          </v-alert>
          <v-expansion-panels
            v-if="resume.workExperiences.length"
            variant="accordion"
            multiple
          >
            <v-expansion-panel
              v-for="(experience, index) in resume.workExperiences"
              :key="index"
            >
              <v-expansion-panel-title>
                <div class="text-body-1 font-weight-medium">
                  {{ experience.role }} · {{ experience.company }}
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="experience.company" label="公司" />
                <v-text-field v-model="experience.role" label="职位" />
                <v-text-field v-model="experience.period" label="时间段" />
                <v-textarea v-model="experience.summary" label="职责概述" rows="2" />
                <div class="mt-3">
                  <div class="text-subtitle-2 mb-2">关键成果（可拖拽排序）</div>
                  <DraggableChips
                    v-model="experience.highlights"
                    label="添加关键成果（回车新增）"
                  />
                </div>
                <div class="d-flex justify-end mt-4">
                  <v-btn
                    color="error"
                    prepend-icon="mdi-delete-outline"
                    variant="text"
                    @click="removeWorkExperience(index)"
                  >
                    删除该经历
                  </v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </ResumeSectionCard>

        <ResumeSectionCard title="项目经历" icon="mdi-rocket-launch-outline">
          <div class="d-flex justify-space-between align-center mb-3">
            <div class="text-caption text-medium-emphasis">
              💡 提示：项目会根据时间段自动倒序排序，最新的项目在最前面
            </div>
            <v-btn color="primary" prepend-icon="mdi-plus" variant="tonal" @click="addProject">
              新增项目经历
            </v-btn>
          </div>
          <v-alert v-if="!resume.projects.length" type="info" variant="tonal" class="mb-4">
            目前暂无项目经历，请先点击“新增项目经历”补充内容。
          </v-alert>
          <v-expansion-panels v-if="resume.projects.length" variant="accordion" multiple>
            <v-expansion-panel v-for="(project, index) in resume.projects" :key="index">
              <v-expansion-panel-title>
                <div class="text-body-1 font-weight-medium">
                  {{ project.name }} · {{ project.role }}
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="project.name" label="项目名称" />
                <v-text-field v-model="project.role" label="角色" />
                <v-text-field v-model="project.period" label="时间段" />
                <v-textarea v-model="project.summary" label="项目概述" rows="2" />
                <div class="d-flex flex-wrap align-center justify-end ga-2 mt-2">
                  <v-btn
                    size="small"
                    color="primary"
                    variant="tonal"
                    prepend-icon="mdi-sparkles"
                    :loading="getProjectState(project).descriptionLoading"
                    @click="optimizeProjectSummary(project)"
                  >
                    AI 优化项目概述
                  </v-btn>
                  <span
                    v-if="getProjectState(project).lastDescriptionOptimizedAt"
                    class="text-caption text-medium-emphasis"
                  >
                    最近优化：{{ getProjectState(project).lastDescriptionOptimizedAt }}
                  </span>
                </div>
                <v-alert
                  v-if="getProjectState(project).descriptionError"
                  type="error"
                  variant="tonal"
                  border="start"
                  class="mt-2"
                >
                  {{ getProjectState(project).descriptionError }}
                </v-alert>
                <v-sheet
                  v-if="getProjectState(project).optimizedSummary"
                  class="mt-3 pa-3 rounded-lg"
                  variant="outlined"
                >
                  <div class="text-body-2 text-medium-emphasis mb-2">AI 优化项目概述结果</div>
                  <div class="text-body-2">{{ getProjectState(project).optimizedSummary }}</div>
                  <div class="d-flex justify-end ga-2 mt-3">
                    <v-btn
                      size="small"
                      variant="text"
                      color="primary"
                      @click="copyOptimizedSummary(project)"
                    >
                      复制结果
                    </v-btn>
                    <v-btn
                      size="small"
                      variant="tonal"
                      color="primary"
                      @click="applyOptimizedSummary(project)"
                    >
                      应用到项目概述
                    </v-btn>
                  </div>
                </v-sheet>
                <div class="mt-3">
                  <div class="text-subtitle-2 mb-2">关键成果（可拖拽排序）</div>
                  <DraggableChips
                    v-model="project.highlights"
                    label="添加关键成果（回车新增）"
                  />
                </div>
                <div class="d-flex flex-wrap align-center justify-end ga-2 mt-2">
                  <v-btn
                    size="small"
                    color="primary"
                    variant="tonal"
                    prepend-icon="mdi-sparkles"
                    :loading="getProjectState(project).achievementLoading"
                    @click="optimizeProjectHighlights(project)"
                  >
                    AI 优化关键成果
                  </v-btn>
                  <span
                    v-if="getProjectState(project).lastAchievementOptimizedAt"
                    class="text-caption text-medium-emphasis"
                  >
                    最近优化：{{ getProjectState(project).lastAchievementOptimizedAt }}
                  </span>
                </div>
                <v-alert
                  v-if="getProjectState(project).achievementError"
                  type="error"
                  variant="tonal"
                  border="start"
                  class="mt-2"
                >
                  {{ getProjectState(project).achievementError }}
                </v-alert>
                <v-sheet
                  v-if="getProjectState(project).optimizedAchievements?.length"
                  class="mt-3 pa-3 rounded-lg"
                  variant="outlined"
                >
                  <div class="text-body-2 text-medium-emphasis mb-2">AI 优化关键成果结果</div>
                  <ul class="text-body-2 ps-4 mb-0">
                    <li v-for="item in getProjectState(project).optimizedAchievements" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                  <div class="d-flex justify-end ga-2 mt-3">
                    <v-btn
                      size="small"
                      variant="text"
                      color="primary"
                      @click="copyOptimizedAchievements(project)"
                    >
                      复制结果
                    </v-btn>
                    <v-btn
                      size="small"
                      variant="tonal"
                      color="primary"
                      @click="applyOptimizedAchievements(project)"
                    >
                      应用到关键成果
                    </v-btn>
                  </div>
                </v-sheet>
                <div class="d-flex justify-end mt-4">
                  <v-btn
                    color="error"
                    prepend-icon="mdi-delete-outline"
                    variant="text"
                    @click="removeProject(index)"
                  >
                    删除该项目
                  </v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-alert
            v-if="aiCompletion.result?.projectExperiences?.length"
            type="info"
            variant="tonal"
            border="start"
            class="mt-4"
          >
            <div class="d-flex flex-column ga-3">
              <div class="text-body-2 text-medium-emphasis">AI 推荐项目案例</div>
              <v-sheet
                v-for="(project, index) in aiCompletion.result.projectExperiences"
                :key="project.projectName || index"
                variant="text"
                class="pa-0"
              >
                <div class="text-body-2 font-weight-medium">
                  {{ project.projectName || 'AI 推荐项目案例' }}
                </div>
                <div v-if="project.projectDescription" class="text-body-2 text-medium-emphasis">
                  {{ project.projectDescription }}
                </div>
                <ul v-if="project.projectAchievements?.length" class="text-body-2 ps-4 mb-0 mt-1">
                  <li v-for="achievement in project.projectAchievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
                <v-divider v-if="index < aiCompletion.result.projectExperiences.length - 1" class="my-3" />
              </v-sheet>
              <v-btn size="small" variant="tonal" color="primary" @click="applySuggestedProjects">
                添加到项目经历
              </v-btn>
            </div>
          </v-alert>
        </ResumeSectionCard>

        <ResumeSectionCard title="教育经历" icon="mdi-school-outline">
          <div class="d-flex justify-end mb-3">
            <v-btn color="primary" prepend-icon="mdi-plus" variant="tonal" @click="addEducation">
              新增教育经历
            </v-btn>
          </div>
          <v-alert v-if="!resume.education.length" type="info" variant="tonal" class="mb-4">
            目前暂无教育经历，请先点击“新增教育经历”补充内容。
          </v-alert>
          <v-expansion-panels v-if="resume.education.length" variant="accordion" multiple>
            <v-expansion-panel v-for="(edu, index) in resume.education" :key="index">
              <v-expansion-panel-title>
                <div class="text-body-1 font-weight-medium">
                  {{ edu.school }} · {{ edu.degree }}
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="edu.school" label="学校" />
                <v-text-field v-model="edu.major" label="专业" />
                <v-text-field v-model="edu.degree" label="学位" />
                <v-text-field v-model="edu.period" label="时间段" />
                <div class="d-flex justify-end mt-4">
                  <v-btn
                    color="error"
                    prepend-icon="mdi-delete-outline"
                    variant="text"
                    @click="removeEducation(index)"
                  >
                    删除该教育经历
                  </v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </ResumeSectionCard>

        <ResumeSectionCard
          title="AI 优化建议"
          subtitle="根据内容及时生成引导，持续在正确的方向上打磨简历"
          icon="mdi-sparkles"
        >
          <div class="d-flex flex-wrap align-center mb-4 ga-2">
            <v-chip
              v-for="(item, index) in optimisationFocus"
              :key="index"
              color="primary"
              variant="tonal"
              class="me-2 mb-2"
            >
              {{ item }}
            </v-chip>
          </div>
          <v-btn color="primary" prepend-icon="mdi-magic-staff" @click="generateSuggestions">
            生成优化建议
          </v-btn>
          <div v-if="lastGeneratedAt" class="text-body-2 text-medium-emphasis mt-2">
            最近生成时间：{{ lastGeneratedAt }}
          </div>
          <v-alert
            v-for="(suggestion, index) in suggestions"
            :key="index"
            type="info"
            class="mt-4"
            variant="tonal"
            border="start"
          >
            {{ suggestion }}
          </v-alert>
        </ResumeSectionCard>

        <ResumeSectionCard
          title="保存简历"
          subtitle="将简历数据保存到数据库"
          icon="mdi-content-save"
        >
          <div class="d-flex flex-wrap align-center ga-3 mb-3">
            <v-btn
              color="success"
              prepend-icon="mdi-content-save"
              size="large"
              :loading="saveState.loading"
              @click="handleSaveResume"
            >
              {{ saveState.savedResumeId ? '更新简历' : '保存新简历' }}
            </v-btn>
            <span v-if="saveState.lastSavedAt" class="text-body-2 text-medium-emphasis">
              最近保存时间：{{ saveState.lastSavedAt }}
            </span>
          </div>
          <v-alert v-if="saveState.success" type="success" variant="tonal" border="start" class="mb-3">
            简历保存成功！简历ID：{{ saveState.savedResumeId }}
          </v-alert>
          <v-alert v-if="saveState.error" type="error" variant="tonal" border="start">
            {{ saveState.error }}
          </v-alert>
          <v-alert type="info" variant="tonal" border="start" class="mt-3">
            <div class="text-body-2">
              <strong>提示：</strong>
              <ul class="mt-2 ps-4">
                <li>简历数据会自动保存到浏览器本地存储作为备份</li>
                <li>点击"保存简历"按钮将数据持久化到数据库</li>
                <li>保存后可以在简历列表中选择和编辑</li>
              </ul>
            </div>
          </v-alert>
        </ResumeSectionCard>
      </v-col>

      <v-col cols="12" xl="4" lg="5" md="5">
        <!-- 渲染器切换 -->
        <v-card elevation="2" class="mb-4">
          <v-card-text>
            <v-switch
              v-model="useNewRenderer"
              label="使用新版简历渲染器（支持多种样式和图片导出）"
              color="primary"
              hide-details
            />
          </v-card-text>
        </v-card>

        <!-- 导出状态提示 -->
        <v-alert
          v-if="exportState.loading"
          type="info"
          variant="tonal"
          class="mb-4"
        >
          {{ exportState.message }}
        </v-alert>
        <v-alert
          v-if="exportState.success"
          type="success"
          variant="tonal"
          class="mb-4"
        >
          {{ exportState.message }}
        </v-alert>
        <v-alert
          v-if="exportState.error"
          type="error"
          variant="tonal"
          class="mb-4"
        >
          {{ exportState.error }}
        </v-alert>

        <!-- 新版渲染器 -->
        <ResumeRenderer
          v-if="useNewRenderer"
          ref="resumeRendererRef"
          :resume="resume"
          @export-start="handleExportStart"
          @export-success="handleExportSuccess"
          @export-error="handleExportError"
        />

        <!-- 旧版预览 -->
        <ResumePreview v-else :resume="resume" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* 容器样式 */
.resume-optimizer-container {
  padding: 24px;
  max-width: 1800px;
  margin: 0 auto;
}

/* 覆盖 ResumeSectionCard 组件样式，使其与现代卡片风格一致 */
:deep(.v-card) {
  border-radius: 16px !important;
  border: 1px solid #E5E7EB !important;
  box-shadow: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

:deep(.v-card:hover) {
  border-color: #D1D5DB !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06) !important;
  transform: translateY(-2px) !important;
}

:deep(.v-card-title) {
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #111827 !important;
  letter-spacing: -0.02em !important;
  padding: 24px 28px !important;
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%) !important;
  border-bottom: 1px solid #F3F4F6 !important;
}

:deep(.v-card-subtitle) {
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #6B7280 !important;
  padding: 0 28px 16px !important;
}

:deep(.v-card-text) {
  padding: 28px !important;
}

/* 现代输入框样式 */
:deep(.v-text-field .v-field),
:deep(.v-select .v-field),
:deep(.v-textarea .v-field),
:deep(.v-combobox .v-field),
:deep(.v-autocomplete .v-field) {
  border-radius: 10px !important;
  transition: all 0.2s ease !important;
}

:deep(.v-text-field .v-field:hover),
:deep(.v-select .v-field:hover),
:deep(.v-textarea .v-field:hover),
:deep(.v-combobox .v-field:hover),
:deep(.v-autocomplete .v-field:hover) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
}

:deep(.v-field--focused) {
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.12) !important;
}

:deep(.v-chip) {
  border-radius: 6px !important;
  font-weight: 500 !important;
}

/* 按钮样式优化 */
:deep(.v-btn) {
  border-radius: 10px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.02em !important;
  transition: all 0.2s ease !important;
}

:deep(.v-btn:hover) {
  transform: translateY(-1px) !important;
}

:deep(.v-btn--size-large) {
  height: 44px !important;
  font-size: 14px !important;
}

:deep(.v-btn--size-small) {
  height: 32px !important;
  font-size: 12px !important;
}

/* Alert 样式优化 */
:deep(.v-alert) {
  border-radius: 10px !important;
  border-left-width: 3px !important;
}

/* Expansion Panel 样式优化 */
:deep(.v-expansion-panel) {
  border-radius: 12px !important;
  margin-bottom: 12px !important;
  border: 1px solid #E5E7EB !important;
  overflow: hidden !important;
}

:deep(.v-expansion-panel:hover) {
  border-color: #D1D5DB !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04) !important;
}

:deep(.v-expansion-panel-title) {
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%) !important;
  font-weight: 600 !important;
  padding: 16px 20px !important;
}

:deep(.v-expansion-panel-text__wrapper) {
  padding: 20px !important;
}

/* Sheet 样式优化 */
:deep(.v-sheet) {
  border-radius: 12px !important;
}

/* Switch 样式优化 */
:deep(.v-switch) {
  margin-top: 8px !important;
}

/* 分割线样式 */
:deep(.v-divider) {
  margin: 24px 0 !important;
  opacity: 0.12 !important;
}

/* 响应式设计 */
@media (max-width: 960px) {
  .resume-optimizer-container {
    padding: 16px;
  }

  :deep(.v-card-title) {
    font-size: 18px !important;
    padding: 20px !important;
  }

  :deep(.v-card-text) {
    padding: 20px !important;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.v-card) {
  animation: fadeIn 0.4s ease-out;
}
</style>

