<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  saveState: Object,
})

defineEmits(['save-resume'])
</script>

<template>
  <ResumeSectionCard
    title="保存简历"
    subtitle="将简历数据保存到数据库"
    icon="mdi-content-save"
  >
    <div class="d-flex flex-wrap align-center ga-3 mb-3">
      <v-btn
        color="success"
        prepend-icon="mdi-content-save"
        size="large"
        :loading="saveState.loading"
        @click="$emit('save-resume')"
      >
        {{ saveState.savedResumeId ? '更新简历' : '保存新简历' }}
      </v-btn>
      <span v-if="saveState.lastSavedAt" class="text-body-2 text-medium-emphasis">
        最近保存时间：{{ saveState.lastSavedAt }}
      </span>
    </div>
    <v-alert v-if="saveState.success" type="success" variant="tonal" border="start" class="mb-3">
      简历保存成功！简历ID：{{ saveState.savedResumeId }}
    </v-alert>
    <v-alert v-if="saveState.error" type="error" variant="tonal" border="start">
      {{ saveState.error }}
    </v-alert>
    <v-alert type="info" variant="tonal" border="start" class="mt-3">
      <div class="text-body-2">
        <strong>提示：</strong>
        <ul class="mt-2 ps-4">
          <li>简历数据会自动保存到浏览器本地存储作为备份</li>
          <li>点击"保存简历"按钮将数据持久化到数据库</li>
          <li>保存后可以在简历列表中选择和编辑</li>
        </ul>
      </div>
    </v-alert>
  </ResumeSectionCard>
</template>
