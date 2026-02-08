/**
 * 简历模板状态管理
 */

import { reactive, computed } from 'vue'
import { RESUME_TEMPLATES, getTemplateById, type ResumeTemplate } from '../constants/resumeTemplates'

const STORAGE_KEY = 'vita-polish:selected-template'

interface TemplateState {
  selectedTemplateId: string
  customColors: Record<string, string> | null
  customFonts: Record<string, string> | null
}

const state = reactive<TemplateState>({
  selectedTemplateId: 'neo-brutalism',
  customColors: null,
  customFonts: null,
})

export const useResumeTemplateState = () => {
  const selectedTemplate = computed<ResumeTemplate | undefined>(() => {
    return getTemplateById(state.selectedTemplateId)
  })

  const effectiveColors = computed(() => {
    if (state.customColors) {
      return { ...selectedTemplate.value?.colors, ...state.customColors }
    }
    return selectedTemplate.value?.colors
  })

  const effectiveFonts = computed(() => {
    if (state.customFonts) {
      return { ...selectedTemplate.value?.fonts, ...state.customFonts }
    }
    return selectedTemplate.value?.fonts
  })

  const allTemplates = computed(() => RESUME_TEMPLATES)

  const selectTemplate = (templateId: string) => {
    state.selectedTemplateId = templateId
    state.customColors = null
    state.customFonts = null
    saveToStorage()
  }

  const updateCustomColors = (colors: Record<string, string>) => {
    state.customColors = colors
    saveToStorage()
  }

  const updateCustomFonts = (fonts: Record<string, string>) => {
    state.customFonts = fonts
    saveToStorage()
  }

  const resetCustomization = () => {
    state.customColors = null
    state.customFonts = null
    saveToStorage()
  }

  const saveToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.error('Failed to save template state:', error)
    }
  }

  const loadFromStorage = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        state.selectedTemplateId = parsed.selectedTemplateId || state.selectedTemplateId
        state.customColors = parsed.customColors || null
        state.customFonts = parsed.customFonts || null
      }
    } catch (error) {
      console.error('Failed to load template state:', error)
    }
  }

  // 初始化时加载
  loadFromStorage()

  return {
    state,
    selectedTemplate,
    effectiveColors,
    effectiveFonts,
    allTemplates,
    selectTemplate,
    updateCustomColors,
    updateCustomFonts,
    resetCustomization,
  }
}

