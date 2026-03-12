import { reactive, computed, watch } from 'vue'
import { saveResume, getAllResumes, getResumeById } from '../api/resume'

const RESUME_STORAGE_KEY = 'vita-polish:resume'
const isBrowser = typeof window !== 'undefined'

export const createDefaultResume = () => ({
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
  strengths: [],
  desiredRole: {
    title: '',
    salary: '',
    location: '',
    industries: [],
  },
  workExperiences: [],
  projects: [],
  education: [],
})

export function useResumeData() {
  const resume = reactive(createDefaultResume())

  const resumeListState = reactive({
    loading: false,
    error: null,
    resumes: [],
    selectedResumeId: null,
  })

  const resumeLoadState = reactive({
    loading: false,
    error: null,
  })

  const saveState = reactive({
    loading: false,
    error: null,
    success: false,
    savedResumeId: null,
    lastSavedAt: null,
  })

  const cloneArray = (value, fallback = []) =>
    Array.isArray(value) ? [...value] : fallback

  const applyResumeData = (data) => {
    if (!data || typeof data !== 'object') return

    if (data.personalInfo && typeof data.personalInfo === 'object') {
      resume.personalInfo.name = data.personalInfo.name ?? resume.personalInfo.name
      resume.personalInfo.title = data.personalInfo.title ?? resume.personalInfo.title
      resume.personalInfo.phone = data.personalInfo.phone ?? resume.personalInfo.phone
      resume.personalInfo.email = data.personalInfo.email ?? resume.personalInfo.email
      resume.personalInfo.location = data.personalInfo.location ?? resume.personalInfo.location
      resume.personalInfo.experience = data.personalInfo.experience ?? resume.personalInfo.experience
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
      const serialized = JSON.stringify(resume)
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
        saveResumeToStorage()
      }
    } catch (error) {
      console.error('加载简历失败', error)
      resumeLoadState.error = error?.message || '加载简历失败，请稍后重试。'
    } finally {
      resumeLoadState.loading = false
    }
  }

  const selectResume = async (resumeId) => {
    resumeListState.selectedResumeId = resumeId
    await loadResumeFromDatabase(resumeId)
  }

  const createNewResume = () => {
    resumeListState.selectedResumeId = null
    saveState.savedResumeId = null
    saveState.lastSavedAt = null
    const defaultData = createDefaultResume()
    applyResumeData(defaultData)
  }

  const handleSaveResume = async () => {
    saveState.loading = true
    saveState.error = null
    saveState.success = false

    try {
      const payload = {
        id: saveState.savedResumeId,
        personalInfo: resume.personalInfo,
        strengths: resume.strengths || [],
        desiredRole: resume.desiredRole,
        workExperiences: resume.workExperiences,
        projects: resume.projects,
        education: resume.education,
      }

      const result = await saveResume(payload)
      saveState.success = true
      saveState.savedResumeId = result.id
      saveState.lastSavedAt = new Date().toLocaleString()

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

  // 自动保存到本地存储
  watch(
    resume,
    () => {
      saveResumeToStorage()
    },
    { deep: true },
  )

  return {
    resume,
    resumeListState,
    resumeLoadState,
    saveState,
    loadResumeList,
    selectResume,
    createNewResume,
    handleSaveResume,
    loadResumeFromStorage,
  }
}
