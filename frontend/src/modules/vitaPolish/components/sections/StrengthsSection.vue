<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  resume: Object,
  aiCompletion: Object,
})

defineEmits(['apply-essential-strengths', 'apply-related-domains'])
</script>

<template>
  <ResumeSectionCard
    title="个人优势"
    subtitle="建议覆盖技术栈、业务理解、团队协同等维度"
    icon="mdi-star-outline"
  >
    <v-combobox
      v-model="resume.strengths"
      label="关键词"
      multiple
      chips
      closable-chips
    />
    <v-alert
      v-if="
        (aiCompletion.result?.essentialStrengths?.length ||
          aiCompletion.result?.relatedDomains?.length) &&
        aiCompletion.result
      "
      type="info"
      variant="tonal"
      border="start"
      class="mt-4 d-flex flex-column ga-3"
    >
      <div
        v-if="aiCompletion.result?.essentialStrengths?.length"
        class="d-flex flex-column ga-2"
      >
        <div class="text-body-2 text-medium-emphasis">AI 推荐核心优势</div>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="strength in aiCompletion.result.essentialStrengths"
            :key="strength"
            color="secondary"
            variant="tonal"
          >
            {{ strength }}
          </v-chip>
        </div>
        <v-btn
          size="small"
          variant="tonal"
          color="primary"
          @click="$emit('apply-essential-strengths')"
        >
          添加到个人优势
        </v-btn>
      </div>
      <div
        v-if="aiCompletion.result?.relatedDomains?.length"
        class="d-flex flex-column ga-2"
      >
        <div class="text-body-2 text-medium-emphasis">关联领域标签</div>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="domain in aiCompletion.result.relatedDomains"
            :key="domain"
            color="secondary"
            variant="outlined"
          >
            {{ domain }}
          </v-chip>
        </div>
        <v-btn
          size="small"
          variant="tonal"
          color="primary"
          @click="$emit('apply-related-domains')"
        >
          添加到个人优势
        </v-btn>
      </div>
    </v-alert>
  </ResumeSectionCard>
</template>
