<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  resume: Object,
})

defineEmits(['add-education', 'remove-education'])
</script>

<template>
  <ResumeSectionCard title="教育经历" icon="mdi-school-outline">
    <div class="d-flex justify-end mb-3">
      <v-btn color="primary" prepend-icon="mdi-plus" variant="tonal" @click="$emit('add-education')">
        新增教育经历
      </v-btn>
    </div>
    <v-alert v-if="!resume.education.length" type="info" variant="tonal" class="mb-4">
      目前暂无教育经历，请先点击"新增教育经历"补充内容。
    </v-alert>
    <v-expansion-panels v-if="resume.education.length" variant="accordion" multiple>
      <v-expansion-panel v-for="(edu, index) in resume.education" :key="index">
        <v-expansion-panel-title>
          <div class="text-body-1 font-weight-medium">
            {{ edu.school }} · {{ edu.degree }}
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field v-model="edu.school" label="学校" />
          <v-text-field v-model="edu.major" label="专业" />
          <v-text-field v-model="edu.degree" label="学位" />
          <v-text-field v-model="edu.period" label="时间段" />
          <div class="d-flex justify-end mt-4">
            <v-btn
              color="error"
              prepend-icon="mdi-delete-outline"
              variant="text"
              @click="$emit('remove-education', index)"
            >
              删除该教育经历
            </v-btn>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </ResumeSectionCard>
</template>
