import { reactive } from 'vue'
import {
  optimizeProjectDescription,
  optimizeProjectAchievement,
} from '../api/projectOptimization'

export function useProjectOptimization() {
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

  const buildProjectOptimizeBasePayload = (resume) => ({
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

  const optimizeProjectSummary = async (project, resume) => {
    const state = getProjectState(project)
    state.descriptionError = null

    if (!project.summary || !project.summary.trim()) {
      state.descriptionError = '请先填写项目概述后再尝试优化。'
      return
    }

    state.descriptionLoading = true

    try {
      const payload = {
        ...buildProjectOptimizeBasePayload(resume),
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

  const optimizeProjectHighlights = async (project, resume) => {
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
        ...buildProjectOptimizeBasePayload(resume),
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

  const applyOptimizedAchievements = (project) => {
    const state = getProjectState(project)
    if (!Array.isArray(state.optimizedAchievements) || !state.optimizedAchievements.length) return
    project.highlights.splice(0, project.highlights.length, ...state.optimizedAchievements)
  }

  return {
    projectOptimizationStates,
    getProjectState,
    optimizeProjectSummary,
    optimizeProjectHighlights,
    applyOptimizedSummary,
    applyOptimizedAchievements,
  }
}
