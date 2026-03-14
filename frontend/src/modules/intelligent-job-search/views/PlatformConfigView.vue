<template>
  <div v-if="!meta" class="empty-container">
    <v-empty-state
      headline="未找到平台"
      title="无法识别的平台代码"
      text="请从左侧菜单重新选择一个平台。"
      icon="mdi-alert"
    />
  </div>
  <div v-else class="config-container">
    <v-row dense>
      <v-col cols="12" lg="7">
        <!-- 条件配置卡片 -->
        <div class="modern-card" :class="{ 'loading': loadingDicts || loadingConfig }">
          <div class="card-header">
            <div class="header-icon-wrapper config">
              <v-icon size="24">mdi-tune-variant</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">{{ meta.displayName }} 条件配置</h2>
              <p class="card-subtitle">设置筛选条件，精准匹配目标岗位</p>
            </div>
          </div>
          
          <div class="card-body">
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
                      :rules="state.getFieldRules(field)"
                      clearable
                      variant="outlined"
                      density="comfortable"
                      class="modern-input"
                    >
                      <template #prepend-inner>
                        <v-icon :color="getFieldIconColor(field)">{{ field.icon }}</v-icon>
                      </template>
                    </v-text-field>
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
                      :rules="state.getFieldRules(field)"
                      item-props="props"
                      @update:model-value="state.handleAutocompleteUpdate(field, $event)"
                      :multiple="field.multiple"
                      :chips="field.multiple"
                      :closable-chips="field.multiple"
                      :hide-selected="field.multiple"
                      :max-values="field.maxSelection"
                      clearable
                      variant="outlined"
                      density="comfortable"
                      class="modern-input"
                    >
                      <template #prepend-inner>
                        <v-icon :color="getFieldIconColor(field)">{{ field.icon }}</v-icon>
                      </template>
                    </v-autocomplete>
                    <div v-else class="switch-item">
                      <div class="switch-info">
                        <div class="switch-label">
                          <v-icon size="20" color="primary">{{ field.icon }}</v-icon>
                          <span>{{ field.label }}</span>
                        </div>
                        <p v-if="field.hint" class="switch-desc">{{ field.hint }}</p>
                      </div>
                      <v-switch
                        v-model="state.form[field.key]"
                        color="primary"
                        hide-details
                        inset
                      />
                    </div>
                  </v-col>
                </template>
              </v-row>
            </v-form>
          </div>

          <div class="card-footer">
            <v-btn
              variant="outlined"
              size="large"
              class="action-btn secondary"
              @click="service.resetForm"
              :disabled="loadingConfig || loadingDicts"
            >
              <v-icon start>mdi-refresh</v-icon>
              重置
            </v-btn>
            <v-btn
              color="primary"
              size="large"
              class="action-btn primary"
              @click="service.handleSave"
              :loading="saving"
              :disabled="loadingConfig || loadingDicts"
            >
              <v-icon start>mdi-content-save-outline</v-icon>
              保存配置
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" lg="5">
        <!-- 投递流程控制卡片 -->
        <div class="modern-card delivery-flow-card">
          <div class="card-header">
            <div class="header-icon-wrapper flow">
              <v-icon size="24">mdi-format-list-checks</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">投递流程控制</h2>
              <p class="card-subtitle">按顺序开启或关闭采集、过滤、投递环节</p>
            </div>
          </div>
          <div class="card-body">
            <v-row dense>
              <v-col cols="12">
                <div class="switch-item">
                  <div class="switch-info">
                    <div class="switch-label">
                      <v-icon size="20" color="primary">mdi-database-search-outline</v-icon>
                      <span>采集</span>
                    </div>
                    <p class="switch-desc">是否执行岗位采集</p>
                  </div>
                  <v-switch
                    v-model="deliveryFlow.collect"
                    color="primary"
                    hide-details
                    inset
                  />
                </div>
              </v-col>
              <v-col cols="12">
                <div class="switch-item">
                  <div class="switch-info">
                    <div class="switch-label">
                      <v-icon size="20" color="primary">mdi-filter-outline</v-icon>
                      <span>过滤</span>
                    </div>
                    <p class="switch-desc">是否对采集结果进行条件过滤</p>
                  </div>
                  <v-switch
                    v-model="deliveryFlow.filter"
                    color="primary"
                    hide-details
                    inset
                  />
                </div>
              </v-col>
              <v-col cols="12">
                <div class="switch-item">
                  <div class="switch-info">
                    <div class="switch-label">
                      <v-icon size="20" color="primary">mdi-send-check-outline</v-icon>
                      <span>投递</span>
                    </div>
                    <p class="switch-desc">是否执行一键投递</p>
                  </div>
                  <v-switch
                    v-model="deliveryFlow.deliver"
                    color="primary"
                    hide-details
                    inset
                  />
                </div>
              </v-col>
            </v-row>
          </div>
        </div>

        <!-- 任务流程卡片 -->
        <div class="modern-card">
          <div class="card-header">
            <div class="header-icon-wrapper task">
              <v-icon size="24">mdi-robot-outline</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">任务流程</h2>
              <p class="card-subtitle">一键投递，智能管理求职流程</p>
            </div>
          </div>
          
          <div class="card-body">
            <v-row dense>
              <v-col cols="12">
                <div class="switch-item">
                  <div class="switch-info">
                    <div class="switch-label">
                      <v-icon size="20" color="primary">mdi-login</v-icon>
                      <span>进行登录检测</span>
                    </div>
                    <p class="switch-desc">任务开始前检测平台登录状态，未登录时可提示或跳过</p>
                  </div>
                  <v-switch
                    v-model="state.form.enableLoginCheck"
                    color="primary"
                    hide-details
                    inset
                    @update:model-value="service.updateLoginCheck($event)"
                  />
                </div>
              </v-col>
              <v-col cols="12">
                <v-btn
                  block
                  color="primary"
                  size="x-large"
                  class="delivery-btn"
                  :loading="quickDeliveryLoading"
                  :disabled="taskStatus?.hasTask && !taskStatus?.isTerminated"
                  @click="() => service.handleQuickDelivery(deliveryFlow)"
                >
                  <v-icon start size="24">mdi-send-check</v-icon>
                  <span class="text-h6">一键投递</span>
                </v-btn>
              </v-col>

              <!-- 任务执行状态展示 -->
              <v-col cols="12" v-if="taskStatus && taskStatus.hasTask">
                <div class="task-status-card">
                  <div class="status-header">
                    <div class="status-badge" :class="getStatusClass()">
                      <v-icon size="20">{{ getStatusIcon() }}</v-icon>
                      <span>{{ getStatusText() }}</span>
                    </div>
                    <v-chip
                      :color="getStatusColor()"
                      size="small"
                      variant="flat"
                      class="status-chip"
                    >
                      {{ taskStatus.isTerminated ? '已结束' : taskStatus.terminateRequested ? '终止中' : '执行中' }}
                    </v-chip>
                  </div>

                  <div class="status-body">
                    <div class="status-info">
                      <v-icon size="18" class="mr-2" color="primary">mdi-information-outline</v-icon>
                      <span class="info-label">当前步骤：</span>
                      <span class="info-value">{{ taskStatus.stepDescription || taskStatus.currentStep }}</span>
                    </div>
                    
                    <v-progress-linear
                      :model-value="getProgressValue()"
                      :color="getStatusColor()"
                      height="8"
                      rounded
                      striped
                      :indeterminate="!taskStatus.isTerminated && !taskStatus.terminateRequested"
                      class="my-3"
                    />

                    <div class="time-info">
                      <div class="time-item">
                        <v-icon size="16" class="mr-1">mdi-clock-start</v-icon>
                        <span>{{ formatTime(taskStatus.startTime) }}</span>
                      </div>
                      <div class="time-item" v-if="taskStatus.lastUpdateTime">
                        <v-icon size="16" class="mr-1">mdi-clock-check</v-icon>
                        <span>{{ formatTime(taskStatus.lastUpdateTime) }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="status-actions">
                    <v-btn
                      v-if="!taskStatus.isTerminated && !taskStatus.terminateRequested"
                      size="small"
                      color="error"
                      variant="flat"
                      :loading="terminatingTask"
                      @click="service.handleTerminateTask"
                      class="flex-1"
                    >
                      <v-icon start size="18">mdi-stop-circle-outline</v-icon>
                      终止任务
                    </v-btn>
                    <v-btn
                      v-if="taskStatus.isTerminated"
                      size="small"
                      color="secondary"
                      variant="flat"
                      :loading="clearingTask"
                      @click="service.handleClearTask"
                      class="flex-1"
                    >
                      <v-icon start size="18">mdi-delete-sweep-outline</v-icon>
                      清除状态
                    </v-btn>
                    <v-btn
                      size="small"
                      color="primary"
                      variant="outlined"
                      @click="service.refreshTaskStatus"
                    >
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>

              <!-- 调试信息（开发模式） -->
              <v-col cols="12" v-if="false">
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-icon class="mr-2">mdi-bug-outline</v-icon>
                      调试信息
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-btn
                        block
                        size="small"
                        color="secondary"
                        variant="tonal"
                        class="mb-3"
                        @click="service.loadTaskStatus"
                      >
                        <v-icon start>mdi-reload</v-icon>
                        手动加载任务状态
                      </v-btn>
                      <pre class="debug-info">{{ JSON.stringify(taskStatus, null, 2) }}</pre>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, toRef, reactive, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSnackbarStore } from '@/stores/snackbar';
import type { PlatformCode } from '../api/platformConfigApi';
import { usePlatformState } from '../state/platformState';
import { usePlatformService } from '../service/platformService';
import CascaderSelect from '@/components/CascaderSelect.vue';

const DELIVERY_FLOW_STORAGE_PREFIX = 'npe_get_jobs.deliveryFlowControl';

const props = defineProps<{ platform: PlatformCode }>();
const router = useRouter();
const snackbar = useSnackbarStore();

// 投递流程控制：采集、过滤、投递，仅存浏览器本地
const deliveryFlow = reactive({
  collect: true,
  filter: true,
  deliver: true,
});

function getDeliveryFlowStorageKey() {
  return `${DELIVERY_FLOW_STORAGE_PREFIX}.${props.platform}`;
}

function loadDeliveryFlowFromStorage() {
  try {
    const raw = localStorage.getItem(getDeliveryFlowStorageKey());
    if (raw) {
      const o = JSON.parse(raw);
      if (o && typeof o.collect === 'boolean') deliveryFlow.collect = o.collect;
      if (o && typeof o.filter === 'boolean') deliveryFlow.filter = o.filter;
      if (o && typeof o.deliver === 'boolean') deliveryFlow.deliver = o.deliver;
    }
  } catch {
    // 忽略解析错误，使用默认值
  }
}

function saveDeliveryFlowToStorage() {
  try {
    localStorage.setItem(
      getDeliveryFlowStorageKey(),
      JSON.stringify({
        collect: deliveryFlow.collect,
        filter: deliveryFlow.filter,
        deliver: deliveryFlow.deliver,
      }),
    );
  } catch {
    // 忽略写入错误
  }
}

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

// 字段图标颜色
const getFieldIconColor = (field: any) => {
  const colorMap: Record<string, string> = {
    'mdi-briefcase': 'primary',
    'mdi-map-marker': 'error',
    'mdi-currency-cny': 'success',
    'mdi-school': 'info',
    'mdi-calendar': 'warning',
    'mdi-account-tie': 'purple',
    'mdi-office-building': 'orange',
  };
  return colorMap[field.icon] || 'primary';
};

// 任务状态相关方法
const getStatusColor = () => {
  if (!taskStatus.value) return 'grey';
  if (taskStatus.value.isTerminated) return 'success';
  if (taskStatus.value.terminateRequested) return 'warning';
  return 'primary';
};

const getStatusClass = () => {
  if (!taskStatus.value) return 'status-idle';
  if (taskStatus.value.isTerminated) return 'status-success';
  if (taskStatus.value.terminateRequested) return 'status-warning';
  return 'status-running';
};

const getStatusIcon = () => {
  if (!taskStatus.value) return 'mdi-help-circle-outline';
  if (taskStatus.value.isTerminated) return 'mdi-check-circle-outline';
  if (taskStatus.value.terminateRequested) return 'mdi-pause-circle-outline';
  return 'mdi-play-circle-outline';
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

// 投递流程控制变更时写入本地存储
watch(deliveryFlow, saveDeliveryFlowToStorage, { deep: true });

watch(
  () => props.platform,
  async (newPlatform, oldPlatform) => {
    // 如果平台没有变化，跳过（避免首次加载时重复执行）
    if (newPlatform === oldPlatform && oldPlatform !== undefined) {
      return;
    }
    loadDeliveryFlowFromStorage();
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
/* 容器样式 */
.empty-container {
  padding: 48px 24px;
}

.config-container {
  padding: 24px;
  max-width: 1600px;
  margin: 0 auto;
}

/* 现代卡片样式 */
.modern-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin-bottom: 24px;
}

.modern-card:hover {
  border-color: #D1D5DB;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.modern-card.loading {
  opacity: 0.6;
  pointer-events: none;
}

.modern-card.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #1677FF, transparent);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 28px;
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  border-bottom: 1px solid #F3F4F6;
}

.header-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.header-icon-wrapper.config {
  background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
  color: #2563EB;
}

.header-icon-wrapper.task {
  background: linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%);
  color: #4F46E5;
}

.header-icon-wrapper.flow {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
  color: #059669;
}

.modern-card:hover .header-icon-wrapper {
  transform: scale(1.05) rotate(3deg);
}

.header-content {
  flex: 1;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0;
}

.card-subtitle {
  font-size: 13px;
  font-weight: 500;
  color: #6B7280;
  margin: 4px 0 0;
  line-height: 1.4;
}

/* 卡片主体 */
.card-body {
  padding: 28px;
}

/* 现代输入框样式 */
.modern-input :deep(.v-field) {
  border-radius: 10px;
  transition: all 0.2s ease;
}

.modern-input :deep(.v-field:hover) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.modern-input :deep(.v-field--focused) {
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.12);
}

.modern-input :deep(.v-chip) {
  border-radius: 6px;
  font-weight: 500;
}

/* 开关样式 */
.switch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.switch-item:hover {
  background: #F3F4F6;
}

.switch-info {
  flex: 1;
}

.switch-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.switch-desc {
  font-size: 13px;
  color: #6B7280;
  margin: 0;
  line-height: 1.4;
}

/* 卡片底部 */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 28px;
  background: #F9FAFB;
  border-top: 1px solid #F3F4F6;
}

.action-btn {
  min-width: 120px;
  height: 44px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: none;
  transition: all 0.2s ease;
}

.action-btn.secondary {
  border-width: 2px;
}

.action-btn.secondary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.action-btn.primary {
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.3);
}

/* 一键投递按钮 */
.delivery-btn {
  height: 64px !important;
  border-radius: 12px;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.25);
  transition: all 0.3s ease;
}

.delivery-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(22, 119, 255, 0.35);
}

/* 任务状态卡片 */
.task-status-card {
  background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #BAE6FD;
}

.status-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.status-badge.status-running {
  background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
  color: #1E40AF;
}

.status-badge.status-success {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
  color: #065F46;
}

.status-badge.status-warning {
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  color: #92400E;
}

.status-badge.status-idle {
  background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
  color: #4B5563;
}

.status-chip {
  font-weight: 600;
  font-size: 12px;
}

.status-body {
  margin-bottom: 16px;
}

.status-info {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #0C4A6E;
  margin-bottom: 12px;
}

.info-label {
  font-weight: 600;
  margin-right: 4px;
}

.info-value {
  font-weight: 500;
}

.time-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
}

.time-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #0369A1;
}

.status-actions {
  display: flex;
  gap: 8px;
}

.flex-1 {
  flex: 1;
}

/* 调试信息 */
.debug-info {
  font-size: 11px;
  max-height: 200px;
  overflow: auto;
  background: #F9FAFB;
  padding: 12px;
  border-radius: 8px;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 960px) {
  .config-container {
    padding: 16px;
  }

  .card-header {
    padding: 20px;
  }

  .card-body {
    padding: 20px;
  }

  .card-footer {
    padding: 16px 20px;
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }

  .card-title {
    font-size: 18px;
  }

  .card-subtitle {
    font-size: 12px;
  }

  .delivery-btn {
    height: 56px !important;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modern-card {
  animation: fadeIn 0.4s ease-out;
}
</style>

