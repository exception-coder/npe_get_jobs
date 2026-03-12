<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  resume: Object,
  aiCompletion: Object,
  canTriggerAiCompletion: Boolean,
})

defineEmits(['trigger-ai-completion'])

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
</script>

<template>
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
            @click="$emit('trigger-ai-completion')"
          >
            AI 智能补全
          </v-btn>
          <span v-if="!canTriggerAiCompletion" class="text-body-2 text-medium-emphasis">
            请先填写"当前头衔"与"工作年限 / 经验标签"后再尝试 AI 补全。
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
          @click="$emit('apply-personal-title')"
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
          @click="$emit('apply-experience')"
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
</template>
