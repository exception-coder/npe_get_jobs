<template>
  <div v-if="!meta">
    <v-empty-state
      headline="未找到平台"
      title="无法识别的平台代码"
      text="请从左侧菜单重新选择一个平台。"
      icon="mdi-alert"
    />
  </div>
  <div v-else>
    <v-row dense>
      <v-col cols="12" lg="7">
        <v-card class="section-card" :loading="loadingDicts || loadingConfig" elevation="2">
          <v-card-title class="section-title d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-tune-variant</v-icon>
            {{ meta.displayName }} 条件配置
          </v-card-title>
          <v-card-text>
            <v-form ref="formRef">
              <v-row dense>
                <template v-for="field in meta.fields" :key="field.key">
                  <v-col :cols="12" :md="field.type === 'text' ? 12 : 6">
                    <v-text-field
                      v-if="field.type === 'text'"
                      v-model="state.form[field.key]"
                      :label="field.label"
                      :hint="field.hint"
                      :persistent-hint="Boolean(field.hint)"
                      :prepend-inner-icon="field.icon"
                      :rules="state.getFieldRules(field)"
                      clearable
                    />
                    <CascaderSelect
                      v-else-if="field.type === 'select' && field.cascade"
                      v-model="state.form[field.key]"
                      :items="state.getFieldOptions(field)"
                      :label="field.label"
                      :hint="field.hint"
                      :icon="field.icon"
                      :rules="state.getFieldRules(field)"
                      :multiple="field.multiple"
                    />
                    <v-autocomplete
                      v-else-if="field.type === 'select'"
                      v-model="state.form[field.key]"
                      :items="state.getFieldOptions(field)"
                      item-title="label"
                      item-value="value"
                      item-children="children"
                      :label="field.label"
                      :hint="field.hint"
                      :persistent-hint="Boolean(field.hint)"
                      :prepend-inner-icon="field.icon"
                      :rules="state.getFieldRules(field)"
                      item-props="props"
                      @update:model-value="state.handleAutocompleteUpdate(field, $event)"
                      :multiple="field.multiple"
                      :chips="field.multiple"
                      :closable-chips="field.multiple"
                      :hide-selected="field.multiple"
                      :max-values="field.maxSelection"
                      clearable
                    />
                    <v-switch
                      v-else
                      v-model="state.form[field.key]"
                      :label="field.label"
                      :hint="field.hint"
                      :persistent-hint="Boolean(field.hint)"
                    />
                  </v-col>
                </template>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="tonal" color="secondary" @click="service.resetForm" :disabled="loadingConfig || loadingDicts">
              重置
            </v-btn>
            <v-btn color="primary" @click="service.handleSave" :loading="saving" :disabled="loadingConfig || loadingDicts">
              保存配置
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" lg="5">
        <v-card class="section-card" elevation="2">
          <v-card-title class="section-title d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-robot</v-icon>
            任务流程
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12">
                <v-btn
                  block
                  color="primary"
                  prepend-icon="mdi-send-check"
                  :loading="quickDeliveryLoading"
                  :disabled="taskStatus?.hasTask && !taskStatus?.isTerminated"
                  @click="service.handleQuickDelivery"
                >
                  一键投递
                </v-btn>
              </v-col>

              <!-- 手动加载任务状态按钮（调试用） -->
              <v-col cols="12">
                <v-btn
                  block
                  size="small"
                  color="secondary"
                  variant="tonal"
                  prepend-icon="mdi-reload"
                  @click="service.loadTaskStatus"
                >
                  手动加载任务状态
                </v-btn>
              </v-col>

              <!-- 调试信息 -->
              <v-col cols="12">
                <v-alert type="info" density="compact">
                  <div class="text-caption">调试信息：</div>
                  <pre style="font-size: 10px; max-height: 200px; overflow: auto;">{{ JSON.stringify(taskStatus, null, 2) }}</pre>
                </v-alert>
              </v-col>

              <!-- 任务执行状态展示 -->
              <v-col cols="12" v-if="taskStatus && taskStatus.hasTask">
                <v-divider class="my-2" />
                <div class="task-status-container">
                  <div class="d-flex align-center justify-space-between mb-3">
                    <div class="d-flex align-center">
                      <v-icon 
                        :color="getStatusColor()" 
                        class="mr-2"
                        size="small"
                      >
                        {{ getStatusIcon() }}
                      </v-icon>
                      <span class="text-subtitle-2 font-weight-medium">
                        {{ getStatusText() }}
                      </span>
                    </div>
                    <v-chip
                      :color="getStatusColor()"
                      size="small"
                      variant="tonal"
                    >
                      {{ taskStatus.isTerminated ? '已结束' : taskStatus.terminateRequested ? '终止中' : '执行中' }}
                    </v-chip>
                  </div>

                  <div class="task-info mb-3">
                    <div class="text-caption text-medium-emphasis mb-1">
                      当前步骤：{{ taskStatus.stepDescription || taskStatus.currentStep }}
                    </div>
                    <v-progress-linear
                      :model-value="getProgressValue()"
                      :color="getStatusColor()"
                      height="6"
                      rounded
                      striped
                      :indeterminate="!taskStatus.isTerminated && !taskStatus.terminateRequested"
                    />
                    <div class="text-caption text-medium-emphasis mt-1">
                      开始时间：{{ formatTime(taskStatus.startTime) }}
                    </div>
                    <div class="text-caption text-medium-emphasis" v-if="taskStatus.lastUpdateTime">
                      更新时间：{{ formatTime(taskStatus.lastUpdateTime) }}
                    </div>
                  </div>

                  <div class="d-flex gap-2">
                    <v-btn
                      v-if="!taskStatus.isTerminated && !taskStatus.terminateRequested"
                      size="small"
                      color="error"
                      variant="tonal"
                      prepend-icon="mdi-stop-circle"
                      :loading="terminatingTask"
                      @click="service.handleTerminateTask"
                      block
                    >
                      终止任务
                    </v-btn>
                    <v-btn
                      v-if="taskStatus.isTerminated"
                      size="small"
                      color="secondary"
                      variant="tonal"
                      prepend-icon="mdi-delete-sweep"
                      :loading="clearingTask"
                      @click="service.handleClearTask"
                      block
                    >
                      清除状态
                    </v-btn>
                    <v-btn
                      size="small"
                      color="primary"
                      variant="text"
                      prepend-icon="mdi-refresh"
                      @click="service.refreshTaskStatus"
                    >
                      刷新
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, toRef, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSnackbarStore } from '@/stores/snackbar';
import type { PlatformCode } from '../api/platformConfigApi';
import { usePlatformState } from '../state/platformState';
import { usePlatformService } from '../service/platformService';
import CascaderSelect from '@/components/CascaderSelect.vue';

const props = defineProps<{ platform: PlatformCode }>();
const router = useRouter();
const snackbar = useSnackbarStore();

// 使用 toRef 使 platform 响应式，确保 state 和 service 能响应变化
const platformRef = toRef(props, 'platform');
const state = usePlatformState(platformRef as any);
const service = usePlatformService(state, snackbar, platformRef as any);

// 创建本地 formRef，用于模板绑定
const formRef = state.formRef;

// 解包 ref 值，确保模板中接收到的是原始值而不是 ref 对象
const meta = computed(() => state.meta.value);
const loadingDicts = computed(() => state.loadingDicts.value);
const loadingConfig = computed(() => state.loadingConfig.value);
const saving = computed(() => state.saving.value);
const quickDeliveryLoading = computed(() => state.quickDeliveryLoading.value);
const taskStatus = computed(() => state.taskStatus.value);
const terminatingTask = computed(() => state.terminatingTask.value);
const clearingTask = computed(() => state.clearingTask.value);

// 任务状态相关方法
const getStatusColor = () => {
  if (!taskStatus.value) return 'grey';
  if (taskStatus.value.isTerminated) return 'success';
  if (taskStatus.value.terminateRequested) return 'warning';
  return 'primary';
};

const getStatusIcon = () => {
  if (!taskStatus.value) return 'mdi-help-circle';
  if (taskStatus.value.isTerminated) return 'mdi-check-circle';
  if (taskStatus.value.terminateRequested) return 'mdi-pause-circle';
  return 'mdi-play-circle';
};

const getStatusText = () => {
  if (!taskStatus.value) return '无任务';
  if (taskStatus.value.isTerminated) return '任务已完成';
  if (taskStatus.value.terminateRequested) return '正在终止任务';
  return '任务执行中';
};

const getProgressValue = () => {
  if (!taskStatus.value) return 0;
  if (taskStatus.value.isTerminated) return 100;
  if (taskStatus.value.stepOrder) {
    // 假设总共有10个步骤
    return Math.min((taskStatus.value.stepOrder / 10) * 100, 95);
  }
  return 50;
};

const formatTime = (time?: string) => {
  if (!time) return '-';
  try {
    const date = new Date(time);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  } catch {
    return time;
  }
};

if (!state.meta.value) {
  snackbar.show({ message: '未找到对应平台配置', color: 'warning' });
}

watch(
  () => props.platform,
  async (newPlatform, oldPlatform) => {
    // 如果平台没有变化，跳过（避免首次加载时重复执行）
    if (newPlatform === oldPlatform && oldPlatform !== undefined) {
      return;
    }
    
    if (!state.meta.value) {
      router.replace('/common');
      return;
    }
    try {
      state.initializeForm();
      await service.loadDicts();
      await service.loadConfig();
      // 加载任务状态
      await service.loadTaskStatus();
      console.log('[PlatformConfigView] 任务状态已加载:', state.taskStatus.value);
    } catch (error) {
      console.error('初始化平台配置失败', error);
      snackbar.show({ message: '初始化平台配置失败', color: 'error' });
    }
  },
  { immediate: true },
);

// 定时刷新任务状态
let statusRefreshTimer: number | null = null;

onMounted(() => {
  // 首次加载任务状态（确保加载）
  console.log('[PlatformConfigView] onMounted - 加载任务状态');
  service.loadTaskStatus();
  
  // 每5秒刷新一次任务状态
  statusRefreshTimer = window.setInterval(() => {
    if (taskStatus.value?.hasTask && !taskStatus.value?.isTerminated) {
      service.refreshTaskStatus();
    }
  }, 5000);
});

onUnmounted(() => {
  if (statusRefreshTimer) {
    clearInterval(statusRefreshTimer);
    statusRefreshTimer = null;
  }
});
</script>

<style scoped>
.task-status-container {
  padding: 12px;
  background-color: rgba(var(--v-theme-surface-variant), 0.3);
  border-radius: 8px;
}

.task-info {
  padding: 8px 0;
}

.gap-2 {
  gap: 8px;
}
</style>

