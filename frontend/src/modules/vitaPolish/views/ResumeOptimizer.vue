<script setup>
import { ref, onMounted } from 'vue'
import ResumePreview from '../components/resume/ResumePreview.vue'
import ResumeRenderer from '../components/resume/ResumeRenderer.vue'
import PersonalInfoSection from '../components/sections/PersonalInfoSection.vue'
import CoreSkillsSection from '../components/sections/CoreSkillsSection.vue'
import StrengthsSection from '../components/sections/StrengthsSection.vue'
import DesiredRoleSection from '../components/sections/DesiredRoleSection.vue'
import AiCompletionSection from '../components/sections/AiCompletionSection.vue'
import WorkExperienceSection from '../components/sections/WorkExperienceSection.vue'
import ProjectExperienceSection from '../components/sections/ProjectExperienceSection.vue'
import EducationSection from '../components/sections/EducationSection.vue'
import OptimizationSuggestionsSection from '../components/sections/OptimizationSuggestionsSection.vue'
import SaveResumeSection from '../components/sections/SaveResumeSection.vue'
import ResumeManagementSection from '../components/sections/ResumeManagementSection.vue'
import { useResumeData } from '../composables/useResumeData'
import { useAiCompletion } from '../composables/useAiCompletion'
import { useProjectOptimization } from '../composables/useProjectOptimization'
import { useResumeManagement } from '../composables/useResumeManagement'
import '../styles/ResumeOptimizer.css'

// 数据管理
const {
  resume,
  resumeListState,
  resumeLoadState,
  saveState,
  loadResumeList,
  selectResume,
  createNewResume,
  handleSaveResume,
  loadResumeFromStorage,
} = useResumeData()

// AI 补全
const { aiCompletion, canTriggerAiCompletion, triggerAiCompletion } = useAiCompletion()

// 项目优化
const {
  projectOptimizationStates,
  getProjectState,
  optimizeProjectSummary,
  optimizeProjectHighlights,
  applyOptimizedSummary,
  applyOptimizedAchievements,
} = useProjectOptimization()

// 简历管理
const {
  experienceOptions,
  optimisationFocus,
  suggestions,
  lastGeneratedAt,
  exportState,
  generateSuggestions,
  addWorkExperience,
  removeWorkExperience,
  addProject,
  removeProject,
  addEducation,
  removeEducation,
  mergeUnique,
  applySuggestedProjects,
  handleExportStart,
  handleExportSuccess,
  handleExportError,
} = useResumeManagement()

// 渲染器引用
const resumeRendererRef = ref(null)
const useNewRenderer = ref(true)

onMounted(async () => {
  await loadResumeList()
  if (resumeListState.resumes.length > 0) {
    await selectResume(resumeListState.resumes[0].id)
  } else {
    loadResumeFromStorage()
  }
})

// 处理 AI 补全触发
const handleTriggerAiCompletion = async () => {
  await triggerAiCompletion(
    resume.personalInfo.title,
    resume.personalInfo.experience,
    resume.strengths,
  )
}

// 处理项目优化
const handleOptimizeProjectSummary = async (project) => {
  await optimizeProjectSummary(project, resume)
}

const handleOptimizeProjectHighlights = async (project) => {
  await optimizeProjectHighlights(project, resume)
}

// 处理 AI 结果应用
const handleApplySuggestedProjects = () => {
  if (aiCompletion.result?.projectExperiences?.length) {
    applySuggestedProjects(resume, aiCompletion.result.projectExperiences)
  }
}
</script>

<template>
  <v-container class="py-8" fluid>
    <v-row justify="center" class="g-6">
      <!-- 左侧编辑区 -->
      <v-col cols="12" xl="6" lg="6" md="7">
        <!-- 简历管理 -->
        <ResumeManagementSection
          :resume-list-state="resumeListState"
          :resume-load-state="resumeLoadState"
          :save-state="saveState"
          @select-resume="selectResume"
          @create-new-resume="createNewResume"
          @load-resume-list="loadResumeList"
        />

        <!-- 个人信息 -->
        <PersonalInfoSection
          :resume="resume"
          :ai-completion="aiCompletion"
          :can-trigger-ai-completion="canTriggerAiCompletion(resume.personalInfo.title, resume.personalInfo.experience)"
          @trigger-ai-completion="handleTriggerAiCompletion"
        />

        <!-- 核心技能 -->
        <CoreSkillsSection
          :resume="resume"
          :ai-completion="aiCompletion"
          @apply-tech-stack="() => mergeUnique(resume.personalInfo.coreSkills, aiCompletion.result?.techStack || [])"
        />

        <!-- 个人优势 -->
        <StrengthsSection
          :resume="resume"
          :ai-completion="aiCompletion"
          @apply-essential-strengths="() => mergeUnique(resume.strengths, aiCompletion.result?.essentialStrengths || [])"
          @apply-related-domains="() => mergeUnique(resume.strengths, aiCompletion.result?.relatedDomains || [])"
        />

        <!-- 期望职位 -->
        <DesiredRoleSection
          :resume="resume"
          :ai-completion="aiCompletion"
          @apply-desired-role-title="() => resume.desiredRole.title = aiCompletion.result?.inferredJobTitle || ''"
          @apply-hot-industries="() => mergeUnique(resume.desiredRole.industries, aiCompletion.result?.hotIndustries || [])"
        />

        <!-- AI 补全结果 -->
        <AiCompletionSection
          :ai-completion="aiCompletion"
          @apply-personal-title="() => resume.personalInfo.title = aiCompletion.result?.inferredJobTitle || ''"
          @apply-experience="() => resume.personalInfo.experience = aiCompletion.result?.experienceRange || ''"
          @apply-tech-stack="() => mergeUnique(resume.personalInfo.coreSkills, aiCompletion.result?.techStack || [])"
          @apply-essential-strengths="() => mergeUnique(resume.strengths, aiCompletion.result?.essentialStrengths || [])"
          @apply-related-domains="() => mergeUnique(resume.strengths, aiCompletion.result?.relatedDomains || [])"
          @apply-desired-role-title="() => resume.desiredRole.title = aiCompletion.result?.inferredJobTitle || ''"
          @apply-hot-industries="() => mergeUnique(resume.desiredRole.industries, aiCompletion.result?.hotIndustries || [])"
          @apply-suggested-projects="handleApplySuggestedProjects"
        />

        <!-- 工作经历 -->
        <WorkExperienceSection
          :resume="resume"
          @add-work-experience="() => addWorkExperience(resume)"
          @remove-work-experience="(index) => removeWorkExperience(resume, index)"
        />

        <!-- 项目经历 -->
        <ProjectExperienceSection
          :resume="resume"
          :ai-completion="aiCompletion"
          :get-project-state="getProjectState"
          @add-project="() => addProject(resume)"
          @remove-project="(index) => removeProject(resume, index)"
          @optimize-project-summary="handleOptimizeProjectSummary"
          @optimize-project-highlights="handleOptimizeProjectHighlights"
          @apply-optimized-summary="applyOptimizedSummary"
          @apply-optimized-achievements="applyOptimizedAchievements"
          @apply-suggested-projects="handleApplySuggestedProjects"
        />

        <!-- 教育经历 -->
        <EducationSection
          :resume="resume"
          @add-education="() => addEducation(resume)"
          @remove-education="(index) => removeEducation(resume, index)"
        />

        <!-- 优化建议 -->
        <OptimizationSuggestionsSection
          :optimization-focus="optimisationFocus"
          :suggestions="suggestions"
          :last-generated-at="lastGeneratedAt"
          @generate-suggestions="() => generateSuggestions(resume)"
        />

        <!-- 保存简历 -->
        <SaveResumeSection
          :save-state="saveState"
          @save-resume="handleSaveResume"
        />
      </v-col>

      <!-- 右侧预览区 -->
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
        <v-alert v-if="exportState.loading" type="info" variant="tonal" class="mb-4">
          {{ exportState.message }}
        </v-alert>
        <v-alert v-if="exportState.success" type="success" variant="tonal" class="mb-4">
          {{ exportState.message }}
        </v-alert>
        <v-alert v-if="exportState.error" type="error" variant="tonal" class="mb-4">
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

