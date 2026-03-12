<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'
import DraggableChips from '../resume/DraggableChips.vue'

defineProps({
  resume: Object,
})

defineEmits(['add-work-experience', 'remove-work-experience'])
</script>

<template>
  <ResumeSectionCard title="工作经历" icon="mdi-briefcase-outline">
    <div class="d-flex justify-end mb-3">
      <v-btn
        color="primary"
        prepend-icon="mdi-plus"
        variant="tonal"
        @click="$emit('add-work-experience')"
      >
        新增工作经历
      </v-btn>
    </div>
    <v-alert
      v-if="!resume.workExperiences.length"
      type="info"
      variant="tonal"
      class="mb-4"
    >
      目前暂无工作经历，请先点击"新增工作经历"补充内容。
    </v-alert>
    <v-expansion-panels
      v-if="resume.workExperiences.length"
      variant="accordion"
      multiple
    >
      <v-expansion-panel
        v-for="(experience, index) in resume.workExperiences"
        :key="index"
      >
        <v-expansion-panel-title>
          <div class="text-body-1 font-weight-medium">
            {{ experience.role }} · {{ experience.company }}
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field v-model="experience.company" label="公司" />
          <v-text-field v-model="experience.role" label="职位" />
          <v-text-field v-model="experience.period" label="时间段" />
          <v-textarea v-model="experience.summary" label="职责概述" rows="2" />
          <div class="mt-3">
            <div class="text-subtitle-2 mb-2">关键成果（可拖拽排序）</div>
            <DraggableChips
              v-model="experience.highlights"
              label="添加关键成果（回车新增）"
            />
          </div>
          <div class="d-flex justify-end mt-4">
            <v-btn
              color="error"
              prepend-icon="mdi-delete-outline"
              variant="text"
              @click="$emit('remove-work-experience', index)"
            >
              删除该经历
            </v-btn>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </ResumeSectionCard>
</template>
