import { reactive, computed } from 'vue'
import { analyzeJobSkill } from '../api/jobSkill'

export function useAiCompletion() {
  const aiCompletion = reactive({
    loading: false,
    error: null,
    result: null,
    lastSyncedAt: null,
  })

  const canTriggerAiCompletion = (title, experience) => {
    const titleStr = title?.trim()
    const expStr = experience?.toString().trim()
    return Boolean(titleStr) && Boolean(expStr)
  }

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

  const triggerAiCompletion = async (jobTitle, experienceYears, personalStrengths) => {
    if (!canTriggerAiCompletion(jobTitle, experienceYears) || aiCompletion.loading) return

    aiCompletion.error = null
    aiCompletion.loading = true

    try {
      const rawResult = await analyzeJobSkill({
        jobTitle,
        experienceYears,
        personalStrengths,
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

      aiCompletion.result = normalizedResult
      aiCompletion.lastSyncedAt = new Date().toLocaleString()
    } catch (error) {
      console.error('AI 智能补全失败', error)
      aiCompletion.error = error?.message || 'AI 智能补全失败，请稍后重试。'
    } finally {
      aiCompletion.loading = false
    }
  }

  return {
    aiCompletion,
    canTriggerAiCompletion,
    triggerAiCompletion,
  }
}
