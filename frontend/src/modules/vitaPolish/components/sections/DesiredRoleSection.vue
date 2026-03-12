<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  resume: Object,
  aiCompletion: Object,
})

defineEmits(['apply-desired-role-title', 'apply-hot-industries'])
</script>

<template>
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
          @click="$emit('apply-desired-role-title')"
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
          @click="$emit('apply-hot-industries')"
        >
          添加到行业方向
        </v-btn>
      </div>
    </v-alert>
  </ResumeSectionCard>
</template>
