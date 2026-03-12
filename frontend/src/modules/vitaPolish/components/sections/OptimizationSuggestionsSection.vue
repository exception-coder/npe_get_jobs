<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  optimisationFocus: Array,
  suggestions: Array,
  lastGeneratedAt: String,
})

defineEmits(['generate-suggestions'])
</script>

<template>
  <ResumeSectionCard
    title="AI 优化建议"
    subtitle="根据内容及时生成引导，持续在正确的方向上打磨简历"
    icon="mdi-sparkles"
  >
    <div class="d-flex flex-wrap align-center mb-4 ga-2">
      <v-chip
        v-for="(item, index) in optimisationFocus"
        :key="index"
        color="primary"
        variant="tonal"
        class="me-2 mb-2"
      >
        {{ item }}
      </v-chip>
    </div>
    <v-btn color="primary" prepend-icon="mdi-magic-staff" @click="$emit('generate-suggestions')">
      生成优化建议
    </v-btn>
    <div v-if="lastGeneratedAt" class="text-body-2 text-medium-emphasis mt-2">
      最近生成时间：{{ lastGeneratedAt }}
    </div>
    <v-alert
      v-for="(suggestion, index) in suggestions"
      :key="index"
      type="info"
      class="mt-4"
      variant="tonal"
      border="start"
    >
      {{ suggestion }}
    </v-alert>
  </ResumeSectionCard>
</template>
