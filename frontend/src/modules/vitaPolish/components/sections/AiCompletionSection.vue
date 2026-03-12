<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  aiCompletion: Object,
})

defineEmits([
  'apply-personal-title',
  'apply-experience',
  'apply-tech-stack',
  'apply-essential-strengths',
  'apply-related-domains',
  'apply-desired-role-title',
  'apply-hot-industries',
  'apply-suggested-projects',
])
</script>

<template>
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
      尚未生成 AI 补全结果。请在上方填写当前头衔与工作年限后点击"AI 智能补全"按钮获取推荐内容。
    </div>
  </ResumeSectionCard>
</template>
