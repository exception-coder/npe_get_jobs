import { reactive, computed } from 'vue'

export function useResumeManagement() {
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

  const optimisationFocus = [
    '补充量化指标，提升说服力',
    '凸显跨部门协作成果',
    '强化 AI / 大模型项目实践',
  ]

  const suggestions = reactive([])
  const lastGeneratedAt = reactive(null)

  const exportState = reactive({
    loading: false,
    error: null,
    success: false,
    message: '',
  })

  const totalHighlights = computed(() => (resume) =>
    resume.workExperiences.reduce((acc, exp) => acc + exp.highlights.length, 0),
  )

  const generateSuggestions = (resume) => {
    const results = []
    const highlights = resume.workExperiences.reduce((acc, exp) => acc + exp.highlights.length, 0)

    if (!resume.personalInfo.title.includes('AI')) {
      results.push('在职位头衔中增加 AI 关键词，匹配 AI 简历场景。')
    }

    if (resume.strengths.length < 4) {
      results.push('个人优势可补充团队管理、跨端协同等信息，突出综合能力。')
    }

    if (highlights < 6) {
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

    suggestions.splice(0, suggestions.length, ...results)
    lastGeneratedAt.value = new Date().toLocaleString()
  }

  const addWorkExperience = (resume) => {
    resume.workExperiences.push({
      company: '',
      role: '',
      period: '',
      summary: '',
      highlights: [],
    })
  }

  const removeWorkExperience = (resume, index) => {
    resume.workExperiences.splice(index, 1)
  }

  const addProject = (resume) => {
    resume.projects.push({
      name: '',
      role: '',
      period: '',
      summary: '',
      highlights: [],
    })
    sortProjectsByPeriod(resume)
  }

  const removeProject = (resume, index) => {
    resume.projects.splice(index, 1)
  }

  const addEducation = (resume) => {
    resume.education.push({
      school: '',
      major: '',
      degree: '',
      period: '',
    })
  }

  const removeEducation = (resume, index) => {
    resume.education.splice(index, 1)
  }

  const parsePeriod = (period) => {
    if (!period || typeof period !== 'string') return 0

    const match = period.match(/(\d{4})[\/\-](\d{1,2})\s*[-~至]\s*(\d{4})[\/\-](\d{1,2})/)
    if (match) {
      const [, startYear, startMonth] = match
      return new Date(parseInt(startYear), parseInt(startMonth) - 1).getTime()
    }

    const singleMatch = period.match(/(\d{4})[\/\-](\d{1,2})/)
    if (singleMatch) {
      const [, year, month] = singleMatch
      return new Date(parseInt(year), parseInt(month) - 1).getTime()
    }

    const yearMatch = period.match(/(\d{4})/)
    if (yearMatch) {
      return new Date(parseInt(yearMatch[1]), 0).getTime()
    }

    return 0
  }

  const sortProjectsByPeriod = (resume) => {
    resume.projects.sort((a, b) => {
      const timeA = parsePeriod(a.period)
      const timeB = parsePeriod(b.period)
      return timeB - timeA
    })
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

  const buildProjectFromSuggestion = (projectSuggestion, resume) => ({
    name: projectSuggestion.projectName || 'AI 推荐项目案例',
    role: resume.personalInfo.title || '',
    period: projectSuggestion.period || '',
    summary: projectSuggestion.projectDescription || '',
    highlights: Array.isArray(projectSuggestion.projectAchievements)
      ? projectSuggestion.projectAchievements
      : [],
  })

  const applySuggestedProjects = (resume, projectSuggestions) => {
    if (!Array.isArray(projectSuggestions) || !projectSuggestions.length) return

    projectSuggestions.forEach((suggestion) => {
      const project = buildProjectFromSuggestion(suggestion, resume)
      const existingIndex = resume.projects.findIndex((item) => item.name === project.name)
      if (existingIndex >= 0) {
        resume.projects.splice(existingIndex, 1, project)
      } else {
        resume.projects.unshift(project)
      }
    })
    sortProjectsByPeriod(resume)
  }

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

  return {
    experienceOptions,
    optimisationFocus,
    suggestions,
    lastGeneratedAt,
    exportState,
    totalHighlights,
    generateSuggestions,
    addWorkExperience,
    removeWorkExperience,
    addProject,
    removeProject,
    addEducation,
    removeEducation,
    sortProjectsByPeriod,
    mergeUnique,
    applySuggestedProjects,
    handleExportStart,
    handleExportSuccess,
    handleExportError,
  }
}
