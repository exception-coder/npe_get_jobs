<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'
import DraggableChips from '../resume/DraggableChips.vue'
import { copyTextToClipboard } from '../../service/resumeApplyService'

defineProps({
  resume: Object,
  aiCompletion: Object,
  getProjectState: Function,
})

defineEmits([
  'add-project',
  'remove-project',
  'optimize-project-summary',
  'optimize-project-highlights',
  'apply-optimized-summary',
  'apply-optimized-achievements',
  'apply-suggested-projects',
])

const handleCopyOptimizedSummary = async (project) => {
  const state = getProjectState(project)
  if (!state.optimizedSummary) return
  await copyTextToClipboard(state.optimizedSummary)
}

const handleCopyOptimizedAchievements = async (project) => {
  const state = getProjectState(project)
  if (!state.optimizedAchievementsRaw) return
  await copyTextToClipboard(state.optimizedAchievementsRaw)
}
</script>

<template>
  <ResumeSectionCard title="项目经历" icon="mdi-rocket-launch-outline">
    <div class="d-flex justify-space-between align-center mb-3">
      <div class="text-caption text-medium-emphasis">
        💡 提示：项目会根据时间段自动倒序排序，最新的项目在最前面
      </div>
      <v-btn color="primary" prepend-icon="mdi-plus" variant="tonal" @click="$emit('add-project')">
        新增项目经历
      </v-btn>
    </div>
    <v-alert v-if="!resume.projects.length" type="info" variant="tonal" class="mb-4">
      目前暂无项目经历，请先点击"新增项目经历"补充内容。
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
              @click="$emit('optimize-project-summary', project)"
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
                @click="handleCopyOptimizedSummary(project)"
              >
                复制结果
              </v-btn>
              <v-btn
                size="small"
                variant="tonal"
                color="primary"
                @click="$emit('apply-optimized-summary', project)"
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
              @click="$emit('optimize-project-highlights', project)"
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
                @click="handleCopyOptimizedAchievements(project)"
              >
                复制结果
              </v-btn>
              <v-btn
                size="small"
                variant="tonal"
                color="primary"
                @click="$emit('apply-optimized-achievements', project)"
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
              @click="$emit('remove-project', index)"
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
        <v-btn size="small" variant="tonal" color="primary" @click="$emit('apply-suggested-projects')">
          添加到项目经历
        </v-btn>
      </div>
    </v-alert>
  </ResumeSectionCard>
</template>
