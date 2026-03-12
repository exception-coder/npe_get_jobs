<script setup>
import ResumeSectionCard from '../resume/ResumeSectionCard.vue'

defineProps({
  resumeListState: Object,
  resumeLoadState: Object,
  saveState: Object,
})

defineEmits(['select-resume', 'create-new-resume', 'load-resume-list'])
</script>

<template>
  <ResumeSectionCard title="简历管理" icon="mdi-file-document-multiple-outline">
    <v-row class="g-4">
      <v-col cols="12">
        <div class="d-flex flex-wrap align-center ga-3">
          <v-select
            :model-value="resumeListState.selectedResumeId"
            :items="resumeListState.resumes"
            item-title="personalInfo.name"
            item-value="id"
            label="选择要编辑的简历"
            :loading="resumeListState.loading"
            :disabled="resumeListState.loading || resumeLoadState.loading"
            @update:model-value="$emit('select-resume', $event)"
            clearable
          >
            <template v-slot:item="{ props, item }">
              <v-list-item v-bind="props">
                <template v-slot:title>
                  {{ item.raw.personalInfo?.name || '未命名简历' }}
                </template>
                <template v-slot:subtitle>
                  {{ item.raw.personalInfo?.title || '无职位' }} · 
                  更新于 {{ item.raw.updatedAt ? new Date(item.raw.updatedAt).toLocaleString() : '未知' }}
                </template>
              </v-list-item>
            </template>
          </v-select>
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            variant="tonal"
            @click="$emit('create-new-resume')"
            :disabled="resumeLoadState.loading"
          >
            新建简历
          </v-btn>
          <v-btn
            color="secondary"
            prepend-icon="mdi-refresh"
            variant="text"
            @click="$emit('load-resume-list')"
            :loading="resumeListState.loading"
            :disabled="resumeLoadState.loading"
          >
            刷新列表
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" v-if="resumeListState.error">
        <v-alert type="error" variant="tonal" border="start">
          {{ resumeListState.error }}
        </v-alert>
      </v-col>
      <v-col cols="12" v-if="resumeLoadState.loading">
        <v-alert type="info" variant="tonal" border="start">
          <div class="d-flex align-center ga-3">
            <v-progress-circular indeterminate size="20" width="2" />
            <span>正在加载简历数据...</span>
          </div>
        </v-alert>
      </v-col>
      <v-col cols="12" v-if="resumeLoadState.error">
        <v-alert type="error" variant="tonal" border="start">
          {{ resumeLoadState.error }}
        </v-alert>
      </v-col>
      <v-col cols="12" v-if="!resumeListState.loading && resumeListState.resumes.length === 0">
        <v-alert type="info" variant="tonal" border="start">
          暂无简历数据，请点击"新建简历"开始创建。
        </v-alert>
      </v-col>
      <v-col cols="12" v-if="saveState.savedResumeId">
        <v-alert type="success" variant="tonal" border="start">
          当前编辑的简历ID：{{ saveState.savedResumeId }}
          <span v-if="saveState.lastSavedAt"> · 最后保存：{{ saveState.lastSavedAt }}</span>
        </v-alert>
      </v-col>
    </v-row>
  </ResumeSectionCard>
</template>
