<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  resume: Object,
  aiCompletion: Object,
})

defineEmits(['apply-tech-stack'])
</script>

<template>
  <ResumeSectionCard
    title="核心技能"
    subtitle="建议聚焦 5-8 个能力标签，突出技术栈与领域优势"
    icon="mdi-lightning-bolt-outline"
  >
    <v-combobox
      v-model="resume.personalInfo.coreSkills"
      label="核心技能（回车新增）"
      multiple
      chips
      closable-chips
    />
    <v-alert
      v-if="aiCompletion.result?.techStack?.length"
      type="info"
      variant="tonal"
      border="start"
      class="mt-4"
    >
      <div class="text-body-2 text-medium-emphasis mb-3">AI 推荐技术栈</div>
      <div class="d-flex flex-wrap ga-2 mb-3">
        <v-chip
          v-for="skill in aiCompletion.result.techStack"
          :key="skill"
          color="primary"
          variant="tonal"
        >
          {{ skill }}
        </v-chip>
      </div>
      <v-btn size="small" variant="tonal" color="primary" @click="$emit('apply-tech-stack')">
        批量添加到核心技能
      </v-btn>
    </v-alert>
  </ResumeSectionCard>
</template>
