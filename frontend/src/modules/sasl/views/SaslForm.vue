<template>
  <div class="sasl-form apple-surface">
  <v-sheet class="hero-card" color="transparent" elevation="0">
    <v-row align="center">
      <v-col cols="12" md="6" class="hero-copy">
        <div class="hero-emblem">CSL</div>
        <div>
          <div class="hero-eyebrow">SASL Campaign Console</div>
          <div class="hero-title">移動通訊精準營銷中心</div>
          <div class="hero-meta">即時掌握客戶旅程，快速同步呼叫進度與資訊</div>
        </div>
        <v-chip-group v-model="selectedTag" class="hero-tags" column filter mandatory>
          <v-chip
            v-for="tag in telecomTags"
            :key="tag"
            :value="tag"
            class="elevated-chip"
            color="primary"
            variant="tonal"
            prepend-icon="mdi-signal-5g"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <v-col cols="12" md="6" class="hero-stats">
        <div v-for="stat in heroStats" :key="stat.label" class="hero-stat">
          <div class="stat-icon">
            <v-icon :icon="stat.icon" size="26" />
          </div>
          <div class="stat-content">
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-value">{{ stat.value }}</div>
          </div>
          <div class="stat-trend" :class="stat.tone">{{ stat.trend }}</div>
        </div>
      </v-col>
    </v-row>
  </v-sheet>

  <!-- 最新公告横幅区域 -->
  <v-sheet v-if="announcements.length > 0" class="announcement-banner" color="transparent" elevation="0">
    <div class="announcement-banner-content">
      <div class="announcement-banner-header d-flex align-center" :class="{ 'mb-3': announcementExpanded }">
        <v-icon icon="mdi-bullhorn" class="announcement-banner-icon mr-2" size="24" />
        <span class="announcement-banner-title">最新公告</span>
        <!-- 折叠状态下显示第一条公告 -->
        <div 
          v-if="!announcementExpanded && announcements.length > 0" 
          class="announcement-preview-text mr-3"
          @click="announcementExpanded = true"
        >
          <span class="announcement-preview-content">{{ announcements[0] }}</span>
        </div>
        <v-btn
          :icon="announcementExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          variant="text"
          size="small"
          class="announcement-toggle-btn"
          @click="announcementExpanded = !announcementExpanded"
        />
      </div>
      <v-expand-transition>
        <div v-show="announcementExpanded" class="announcement-banner-list">
          <div v-for="(item, i) in announcements" :key="i" class="announcement-banner-item d-flex align-start py-2">
            <v-icon icon="mdi-circle-small" class="announcement-banner-dot mr-3 mt-1" size="small" />
            <span class="announcement-banner-text">{{ item }}</span>
          </div>
        </div>
      </v-expand-transition>
    </div>
  </v-sheet>

  <v-row dense>
    <v-col cols="12" md="7" lg="8">
      <v-card class="section-card" :loading="loading" elevation="0">
        <v-card-title class="section-title d-flex align-center">
          <div class="title-icon">
            <v-icon color="primary">mdi-form-select</v-icon>
          </div>
          <div>
            <div class="title-label">SASL</div>
            <div class="title-sub">客戶資訊登記</div>
          </div>
        </v-card-title>
        <v-card-text>
          <v-sheet class="search-panel" elevation="0">
            <div class="search-panel-title">
              <v-icon icon="mdi-radar" color="primary" size="26" />
              <span>快速檢索客戶</span>
            </div>
            <div class="search-panel-subtitle">依據最新 5G 通訊資料庫，即時回傳查詢結果</div>
          </v-sheet>
          <v-row dense class="mb-4" align="center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="mrtSearch"
                label="MRT 搜尋"
                placeholder="輸入 MRT 號碼（可選）"
                prepend-inner-icon="mdi-magnify"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="searchCallStatus"
                :items="callStatusOptions"
                label="致電狀態"
                placeholder="全部"
                prepend-inner-icon="mdi-phone"
                clearable
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="searchDataSource"
                :items="dataSourceOptions"
                label="數據源"
                placeholder="請選擇數據源（必選）"
                prepend-inner-icon="mdi-database"
                :rules="[(v) => !!v || '數據源為必選項']"
                hint="請選擇一個數據源進行搜索"
                persistent-hint
              />
            </v-col>
          </v-row>
          <v-form ref="formRef">
            <v-row dense>
                <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.mrtNumber"
                  label="MRT"
                  placeholder="例如：92479132"
                  prepend-inner-icon="mdi-cellphone"
                  readonly
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.category"
                  label="類別"
                  placeholder="例如：638(出機 5G+數據王)"
                  prepend-inner-icon="mdi-tag"
                  readonly
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.lastTurnNetworkMonth"
                  label="最後轉網月份"
                  placeholder="例如：202011"
                  prepend-inner-icon="mdi-calendar-month"
                  readonly
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.oldContract"
                  label="舊合約"
                  placeholder="例如：2024.01"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.sales"
                  label="銷售員"
                  placeholder="例如：Jackson Hung"
                  prepend-inner-icon="mdi-account-tie"
                  readonly
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.callStatus"
                  :items="callStatusOptions"
                  label="致電狀態"
                  placeholder="請選擇"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-phone"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-menu v-model="nextCallTimeMenu" :close-on-content-click="false" @update:model-value="handleMenuOpen">
                  <template #activator="{ props: activatorProps }">
                    <v-text-field
                      v-bind="activatorProps"
                      v-model="form.nextCallTime"
                      label="下次致電時間"
                      placeholder="請選擇日期和時間（可選）"
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      :rules="[rules.nextCallTime]"
                      readonly
                      clearable
                    />
                  </template>
                  <v-card min-width="300">
                    <v-card-text class="pa-0">
                      <v-row no-gutters>
                        <v-col cols="12" md="6">
                          <v-date-picker
                            v-model="nextCallDate"
                            :min="minDate"
                            @update:model-value="handleDateChange"
                          />
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-time-picker
                            v-model="nextCallTime"
                            format="24hr"
                            @update:model-value="handleTimeChange"
                          />
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn variant="text" color="error" @click="handleClearNextCallTime">
                        清除
                      </v-btn>
                      <v-spacer />
                      <v-btn variant="text" color="primary" @click="handleConfirmNextCallTime">
                        完成
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.remark"
                  label="備註"
                  rows="4"
                  auto-grow
                  prepend-inner-icon="mdi-note-text-outline"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider />
        <v-card-actions class="px-6 py-4 last-call-action">
          <div class="last-call-pill">
            <v-icon icon="mdi-clock-time-four-outline" size="20" />
            <div class="pill-content">
              <div class="pill-label">上次致電時間</div>
              <div class="pill-value">{{ form.lastCallTime || '—' }}</div>
            </div>
          </div>
          <v-spacer />
          <v-btn class="apple-primary-btn" color="primary" :loading="submitting" :disabled="loading" @click="handleSubmit">
            NEXT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="5" lg="4">
      <v-card class="section-card translucent" elevation="0">
        <v-card-title class="section-title d-flex align-center">
          <div class="title-icon soft">
            <v-icon color="primary">mdi-card-account-details</v-icon>
          </div>
          <div>
            <div class="title-label">資訊預覽</div>
            <div class="title-sub">Quick Review</div>
          </div>
        </v-card-title>
        <v-card-text>
          <v-alert
            v-if="!isFormFilled"
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-4"
          >
            填寫左側表單後，可在此快速覆核內容。
          </v-alert>

          <v-list v-else density="compact" class="preview-list">
            <v-list-item
              v-for="item in previewItems"
              :key="item.label"
              :title="item.label"
              :subtitle="item.value || '—'"
            >
              <template #prepend>
                <v-icon :icon="item.icon" color="primary" />
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="plan-detail-row" dense>
    <v-col cols="12">
      <section class="plan-section-surface">
        <div class="plan-section-header section-title d-flex align-center">
          <div class="title-icon soft">
            <v-icon color="primary">mdi-table-large</v-icon>
          </div>
          <div>
            <div class="title-label">套餐明細檢視</div>
            <div class="title-sub">csl 及 1O1O 最新優惠</div>
          </div>
        </div>

        <v-alert
          type="info"
          variant="tonal"
          color="primary"
          border="start"
          class="mb-6"
        >
          以下表格整理自最新銷售資料表，可於客服對談時快速查閱主要資費、贈品及漫遊數據。
        </v-alert>

        <v-tabs v-model="activePlanTab" class="plan-tabs" grow density="comfortable" slider-color="primary">
          <v-tab
            v-for="section in planComparisonSections"
            :key="section.id"
            :value="section.id"
            class="plan-tab"
          >
            <div class="plan-tab-title">{{ section.title }}</div>
            <div class="plan-tab-subtitle">{{ section.subtitle }}</div>
          </v-tab>
        </v-tabs>
        <v-tabs-window v-model="activePlanTab" class="plan-window">
          <v-tabs-window-item
            v-for="section in planComparisonSections"
            :key="section.id"
            :value="section.id"
            class="plan-window-item"
          >
            <div class="panel-title">
              <div class="panel-title-text">
                <div class="panel-title-label">{{ section.title }}</div>
                <div class="panel-title-sub">{{ section.subtitle }}</div>
              </div>
            </div>
            <div class="plan-matrix-wrapper">
              <table class="plan-matrix">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th v-for="column in section.columns" :key="column">
                      {{ column }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in section.rows" :key="row.label">
                    <th>{{ row.label }}</th>
                    <td v-for="(value, idx) in row.values" :key="`${row.label}-${idx}`">
                      {{ value }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="section.footnote" class="plan-footnote">
              {{ section.footnote }}
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </section>
    </v-col>
  </v-row>

  <!-- 模态框组件 -->
  <SaslFormModal
    v-model="showTestModal"
    :record="testRecord"
    @submitted="handleModalSubmitted"
  />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSnackbarStore } from '@/stores/snackbar';
import { useSaslState } from '../state/saslState';
import { useSaslService } from '../service/saslService';
import SaslFormModal from '../components/SaslFormModal.vue';
import type { SaslRecordResponse } from '../api/saslConfigApi';
import { getAllAnnouncements, type AnnouncementResponse } from '../api/saslConfigApi';

const router = useRouter();
const snackbar = useSnackbarStore();

const saslState = useSaslState();

const {
  loading,
  submitting,
  searchingMrt,
  formRef,
  mrtSearch,
  searchCallStatus,
  searchDataSource,
  searchResults,
  selectedRecord,
  telecomTags,
  selectedTag,
  form,
  callStatusOptions,
  dataSourceOptions,
  loadDocumentTitles,
  heroStats,
  loadHeroStats,
  rules,
  isFormFilled,
  previewItems,
  planComparisonSections,
  loadPlanSections,
  activePlanTab,
} = saslState;

const { performSearch, handleSubmit, fillFormFromRecord } = useSaslService(saslState, snackbar);

// 公告数据
const announcements = ref<string[]>([]);
const loadingAnnouncements = ref(false);
const announcementExpanded = ref(false); // 默认折叠公告

// 加载公告数据
const loadAnnouncements = async () => {
  if (loadingAnnouncements.value) {
    return;
  }
  loadingAnnouncements.value = true;
  try {
    const response = await getAllAnnouncements();
    // 只显示启用的公告，并按 sortOrder 排序
    const enabledAnnouncements = response
      .filter((announcement) => announcement.enabled)
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map((announcement) => announcement.content);
    announcements.value = enabledAnnouncements;
  } catch (error) {
    console.error('获取公告失败', error);
    // 如果加载失败，保持当前值不变
  } finally {
    loadingAnnouncements.value = false;
  }
};

// 公告轮询定时器
let announcementPollingTimer: number | null = null;

// 启动公告轮询
const startAnnouncementPolling = () => {
  // 清除已存在的定时器（如果存在）
  if (announcementPollingTimer !== null) {
    clearInterval(announcementPollingTimer);
  }
  
  // 立即加载一次
  loadAnnouncements();
  
  // 每10秒轮询一次
  announcementPollingTimer = window.setInterval(() => {
    loadAnnouncements();
  }, 10000);
};

// 停止公告轮询
const stopAnnouncementPolling = () => {
  if (announcementPollingTimer !== null) {
    clearInterval(announcementPollingTimer);
    announcementPollingTimer = null;
  }
};

// 模态框相关
const showTestModal = ref(false);
const testRecord = ref<SaslRecordResponse | null>(null);

// 处理模态框提交
const handleModalSubmitted = () => {
  snackbar.show({ message: '模态框表单已提交', color: 'success' });
};

// SSE连接相关
let sseEventSource: EventSource | null = null;
let heartbeatTimer: number | null = null; // 心跳超时定时器
let reconnectTimer: number | null = null; // 重连定时器
let reconnectAttempts = 0; // 重连尝试次数
let lastHeartbeatTime = 0; // 最后一次收到心跳的时间
let isManualClose = false; // 是否手动关闭连接
let connectionStateCheckTimer: number | null = null; // 连接状态检查定时器

// SSE连接配置
const SSE_CONFIG = {
  HEARTBEAT_TIMEOUT: 60000, // 心跳超时时间（60秒）
  MAX_RECONNECT_ATTEMPTS: 10, // 最大重连次数
  INITIAL_RECONNECT_DELAY: 1000, // 初始重连延迟（1秒）
  MAX_RECONNECT_DELAY: 30000, // 最大重连延迟（30秒）
  CONNECTION_CHECK_INTERVAL: 10000, // 连接状态检查间隔（10秒）
};

// 计算重连延迟（指数退避）
const getReconnectDelay = (attempt: number): number => {
  const delay = Math.min(
    SSE_CONFIG.INITIAL_RECONNECT_DELAY * Math.pow(2, attempt),
    SSE_CONFIG.MAX_RECONNECT_DELAY
  );
  // 添加随机抖动，避免多个客户端同时重连
  const jitter = Math.random() * 1000;
  return delay + jitter;
};

// 清除所有定时器
const clearAllTimers = () => {
  if (heartbeatTimer !== null) {
    clearTimeout(heartbeatTimer);
    heartbeatTimer = null;
  }
  if (reconnectTimer !== null) {
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }
  if (connectionStateCheckTimer !== null) {
    clearInterval(connectionStateCheckTimer);
    connectionStateCheckTimer = null;
  }
};

// 启动心跳超时检测
const startHeartbeatTimeout = () => {
  clearHeartbeatTimeout();
  lastHeartbeatTime = Date.now();
  heartbeatTimer = window.setTimeout(() => {
    console.warn('SSE心跳超时，连接可能已断开');
    // 检查连接状态
    if (sseEventSource && sseEventSource.readyState === EventSource.OPEN) {
      // 连接状态显示为OPEN，但没有收到心跳，可能是服务端重启了
      console.log('检测到连接异常，准备重连');
      handleReconnect();
    }
  }, SSE_CONFIG.HEARTBEAT_TIMEOUT);
};

// 清除心跳超时定时器
const clearHeartbeatTimeout = () => {
  if (heartbeatTimer !== null) {
    clearTimeout(heartbeatTimer);
    heartbeatTimer = null;
  }
};

// 更新心跳时间
const updateHeartbeat = () => {
  lastHeartbeatTime = Date.now();
  // 重置心跳超时定时器
  startHeartbeatTimeout();
};

// 处理重连逻辑
const handleReconnect = () => {
  if (isManualClose) {
    console.log('连接已手动关闭，不进行重连');
    return;
  }

  if (reconnectAttempts >= SSE_CONFIG.MAX_RECONNECT_ATTEMPTS) {
    console.error('已达到最大重连次数，停止重连');
    snackbar.show({ 
      message: `SSE连接失败，已尝试${SSE_CONFIG.MAX_RECONNECT_ATTEMPTS}次重连`, 
      color: 'error' 
    });
    return;
  }

  // 关闭当前连接
  if (sseEventSource) {
    try {
      sseEventSource.close();
    } catch (error) {
      console.error('关闭SSE连接时出错', error);
    }
    sseEventSource = null;
  }

  // 清除所有定时器
  clearAllTimers();

  // 计算重连延迟
  const delay = getReconnectDelay(reconnectAttempts);
  reconnectAttempts++;

  console.log(`SSE连接断开，将在${Math.round(delay / 1000)}秒后尝试第${reconnectAttempts}次重连`);

  reconnectTimer = window.setTimeout(() => {
    reconnectTimer = null;
    startSseConnection();
  }, delay);
};

// 启动连接状态检查
const startConnectionStateCheck = () => {
  if (connectionStateCheckTimer !== null) {
    clearInterval(connectionStateCheckTimer);
  }

  connectionStateCheckTimer = window.setInterval(() => {
    if (!sseEventSource || isManualClose) {
      return;
    }

    const now = Date.now();
    const state = sseEventSource.readyState;

    // 检查连接状态
    if (state === EventSource.CLOSED) {
      console.log('检测到连接已关闭，准备重连');
      handleReconnect();
      return;
    }

    // 检查心跳超时（即使连接状态是OPEN，也可能已经实际断开）
    if (state === EventSource.OPEN) {
      const timeSinceLastHeartbeat = now - lastHeartbeatTime;
      if (timeSinceLastHeartbeat > SSE_CONFIG.HEARTBEAT_TIMEOUT) {
        console.warn('心跳超时，连接可能已断开，准备重连');
        handleReconnect();
        return;
      }
    }

    // 如果连接状态是CONNECTING且持续太久，可能需要重连
    if (state === EventSource.CONNECTING) {
      // 这里可以添加额外的逻辑，比如记录连接开始时间
      console.log('SSE连接中...');
    }
  }, SSE_CONFIG.CONNECTION_CHECK_INTERVAL);
};

// 启动SSE连接
const startSseConnection = () => {
  // 如果已经存在连接，先关闭
  if (sseEventSource) {
    try {
      sseEventSource.close();
    } catch (error) {
      console.error('关闭旧SSE连接时出错', error);
    }
    sseEventSource = null;
  }

  // 清除所有定时器
  clearAllTimers();

  try {
    // 创建EventSource连接
    const url = '/api/sasl/form/records/next-call-time-near-now';
    sseEventSource = new EventSource(url);

    // 监听连接建立事件
    sseEventSource.addEventListener('connected', (event) => {
      console.log('SSE连接已建立:', event.data);
      // 重置重连次数
      reconnectAttempts = 0;
      // 启动心跳超时检测
      startHeartbeatTimeout();
      // 启动连接状态检查
      startConnectionStateCheck();
    });

    // 监听record事件
    sseEventSource.addEventListener('record', (event) => {
      try {
        const recordData = JSON.parse(event.data) as SaslRecordResponse;
        console.log('收到符合条件的记录:', recordData);
        // 设置记录并显示模态框
        testRecord.value = recordData;
        showTestModal.value = true;
        // 更新心跳时间（收到任何事件都表示连接正常）
        updateHeartbeat();
      } catch (error) {
        console.error('解析SSE记录数据失败', error);
        snackbar.show({ message: '解析记录数据失败', color: 'error' });
      }
    });

    // 监听heartbeat事件（心跳，保持连接）
    sseEventSource.addEventListener('heartbeat', (event) => {
      console.log('SSE心跳:', event.data);
      // 更新心跳时间
      updateHeartbeat();
    });

    // 监听error事件（业务错误，由后端发送）
    sseEventSource.addEventListener('error', (event) => {
      console.error('SSE业务错误事件:', event);
      try {
        const errorData = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (errorData?.message) {
          // 如果错误消息是用户未认证，说明token已过期，跳转到登录页
          if (errorData.message === '用户未认证') {
            isManualClose = true; // 标记为手动关闭，不进行重连
            stopSseConnection();
            router.replace('/login');
            return;
          }
          snackbar.show({ message: errorData.message, color: 'error' });
        }
        // 业务错误后，后端会关闭连接，前端需要准备重连
        // 但先等待一下，让后端先关闭连接
        setTimeout(() => {
          if (sseEventSource?.readyState === EventSource.CLOSED) {
            handleReconnect();
          }
        }, 1000);
      } catch (parseError) {
        console.error('解析SSE错误数据失败', parseError);
        snackbar.show({ message: '收到错误消息', color: 'error' });
      }
    });

    // 监听通用message事件（作为fallback）
    sseEventSource.onmessage = (event) => {
      console.log('SSE消息:', event);
      // 更新心跳时间
      updateHeartbeat();
    };

    // 监听连接错误（网络错误或连接关闭）
    sseEventSource.onerror = (error) => {
      console.error('SSE连接错误', error);
      
      if (!sseEventSource) {
        return;
      }

      const state = sseEventSource.readyState;

      if (state === EventSource.CLOSED) {
        console.log('SSE连接已关闭');
        // 如果不是手动关闭，则准备重连
        if (!isManualClose) {
          handleReconnect();
        }
      } else if (state === EventSource.CONNECTING) {
        // 连接中，可能是网络问题，等待重试
        console.log('SSE连接中，等待重试...');
        // 如果连接中状态持续太久，也会触发重连（通过连接状态检查）
      } else if (state === EventSource.OPEN) {
        // 连接状态是OPEN但触发了error事件，可能是网络波动
        // 不立即重连，等待心跳超时或连接状态检查来判定
        console.warn('SSE连接状态为OPEN但触发了error事件，继续监控');
      }
    };
  } catch (error) {
    console.error('创建SSE连接失败', error);
    snackbar.show({ message: '创建SSE连接失败', color: 'error' });
    // 创建失败也尝试重连
    if (!isManualClose) {
      handleReconnect();
    }
  }
};

// 停止SSE连接
const stopSseConnection = () => {
  isManualClose = true;
  
  if (sseEventSource) {
    try {
      sseEventSource.close();
    } catch (error) {
      console.error('关闭SSE连接时出错', error);
    }
    sseEventSource = null;
  }

  // 清除所有定时器
  clearAllTimers();
  
  // 重置状态
  reconnectAttempts = 0;
  lastHeartbeatTime = 0;
};

// 日期时间选择器相关
const nextCallTimeMenu = ref(false);
const nextCallDate = ref<string>('');
const nextCallTime = ref<string>('');

// 获取当前日期作为最小日期（YYYY-MM-DD格式）
const minDate = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
});

// 将日期转换为 YYYY-MM-DD 格式（处理 Date 对象或字符串）
const normalizeDate = (date: string | Date | null | undefined): string => {
  if (!date) return '';
  
  // 如果已经是字符串格式，直接返回
  if (typeof date === 'string') {
    // 检查是否是 YYYY-MM-DD 格式
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }
    // 如果是其他格式的字符串，尝试解析为 Date 对象
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    }
    return '';
  }
  
  // 如果是 Date 对象，转换为 YYYY-MM-DD 格式
  if (date instanceof Date) {
    if (isNaN(date.getTime())) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }
  
  return '';
};

// 格式化日期时间为 YYYY-MM-DD HH:mm
const formatDateTime = (date: string | Date, time: string): string => {
  const normalizedDate = normalizeDate(date);
  if (!normalizedDate || !time) return '';
  return `${normalizedDate} ${time}`;
};

// 从 form.nextCallTime 解析日期和时间
const parseDateTime = (dateTime: string) => {
  if (!dateTime) {
    return { date: '', time: '' };
  }
  const [date, time] = dateTime.split(' ');
  return { date: date || '', time: time || '' };
};

// 获取默认日期（今天）
const getDefaultDate = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

// 获取默认时间（当前时间+2小时）
const getDefaultTime = (): string => {
  const now = new Date();
  now.setHours(now.getHours() + 2);
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
};

// 初始化日期和时间
const initDateTime = () => {
  const { date, time } = parseDateTime(form.nextCallTime);
  nextCallDate.value = date;
  nextCallTime.value = time;
};

// 处理菜单打开事件
const handleMenuOpen = (isOpen: boolean) => {
  if (!isOpen) {
    // 菜单关闭时，同步选择器状态到 form.nextCallTime
    // 如果 form.nextCallTime 有值，初始化选择器；如果为空，清空选择器
    if (form.nextCallTime) {
      initDateTime();
    } else {
      nextCallDate.value = '';
      nextCallTime.value = '';
    }
  } else {
    // 菜单打开时，如果 form.nextCallTime 为空，设置默认值（今天 + 当前时间+2小时）
    if (!form.nextCallTime) {
      nextCallDate.value = getDefaultDate();
      nextCallTime.value = getDefaultTime();
      console.log('[handleMenuOpen] 设置默认值 - 日期:', nextCallDate.value, '时间:', nextCallTime.value);
    } else {
      // 如果已有值，使用现有值初始化选择器
      initDateTime();
    }
  }
};

// 监听 form.nextCallTime 变化，更新日期和时间选择器
watch(() => form.nextCallTime, () => {
  if (!nextCallTimeMenu.value) {
    initDateTime();
  }
}, { immediate: true });

// 监听日期变化，当选择当前日期时，检查时间是否合法
watch(() => nextCallDate.value, (newDate) => {
  // 如果日期是 Date 对象，立即转换为字符串格式
  if (newDate instanceof Date) {
    const normalizedDate = normalizeDate(newDate);
    if (normalizedDate) {
      nextCallDate.value = normalizedDate;
      return; // 转换后返回，让下一次 watch 触发来处理后续逻辑
    }
  } else if (typeof newDate === 'string' && newDate && !/^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
    // 如果是字符串但不是 YYYY-MM-DD 格式，也进行转换
    const normalizedDate = normalizeDate(newDate);
    if (normalizedDate && normalizedDate !== newDate) {
      nextCallDate.value = normalizedDate;
      return;
    }
  }
  
  // 使用规范化后的日期进行比较
  const currentDate = normalizeDate(nextCallDate.value);
  if (currentDate && nextCallTime.value) {
    const today = minDate.value;
    if (currentDate === today) {
      // 如果选择的是今天，检查时间是否早于当前时间
      const [hours, minutes] = nextCallTime.value.split(':').map(Number);
      const now = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      if (selectedTime <= now) {
        // 如果时间早于或等于当前时间，设置为当前时间+1分钟
        const nextMinute = new Date(now);
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);
        nextCallTime.value = `${String(nextMinute.getHours()).padStart(2, '0')}:${String(nextMinute.getMinutes()).padStart(2, '0')}`;
      }
    }
    // 不立即更新 form.nextCallTime，等用户点击"完成"后再更新
  }
});

// 处理日期变化
const handleDateChange = (date: string | Date | null) => {
  // 将日期转换为标准格式
  if (date) {
    const normalizedDate = normalizeDate(date);
    if (normalizedDate) {
      nextCallDate.value = normalizedDate;
    }
  }
  
  if (nextCallDate.value && nextCallTime.value) {
    const today = minDate.value;
    const currentDate = normalizeDate(nextCallDate.value);
    if (currentDate === today) {
      // 如果选择的是今天，检查时间是否早于当前时间
      const [hours, minutes] = nextCallTime.value.split(':').map(Number);
      const now = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      if (selectedTime <= now) {
        // 如果时间早于或等于当前时间，设置为当前时间+1分钟
        const nextMinute = new Date(now);
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);
        nextCallTime.value = `${String(nextMinute.getHours()).padStart(2, '0')}:${String(nextMinute.getMinutes()).padStart(2, '0')}`;
      }
    }
    // 不立即更新 form.nextCallTime，等用户点击"完成"后再更新
  }
};

// 处理时间变化
const handleTimeChange = () => {
  if (nextCallDate.value && nextCallTime.value) {
    const today = minDate.value;
    const currentDate = normalizeDate(nextCallDate.value);
    if (currentDate === today) {
      // 如果选择的是今天，检查时间是否早于当前时间
      const [hours, minutes] = nextCallTime.value.split(':').map(Number);
      const now = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      if (selectedTime <= now) {
        // 如果时间早于或等于当前时间，设置为当前时间+1分钟
        const nextMinute = new Date(now);
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);
        nextCallTime.value = `${String(nextMinute.getHours()).padStart(2, '0')}:${String(nextMinute.getMinutes()).padStart(2, '0')}`;
      }
    }
    // 不立即更新 form.nextCallTime，等用户点击"完成"后再更新
  }
};

// 清除下次致电时间
const handleClearNextCallTime = () => {
  nextCallDate.value = '';
  nextCallTime.value = '';
  form.nextCallTime = '';
  nextCallTimeMenu.value = false;
};

// 确认下次致电时间
const handleConfirmNextCallTime = () => {
  console.log('[handleConfirmNextCallTime] 开始执行');
  console.log('[handleConfirmNextCallTime] nextCallDate.value (原始):', nextCallDate.value);
  console.log('[handleConfirmNextCallTime] nextCallDate.value (规范化):', normalizeDate(nextCallDate.value));
  console.log('[handleConfirmNextCallTime] nextCallTime.value:', nextCallTime.value);
  console.log('[handleConfirmNextCallTime] 条件判断结果:', !!(nextCallDate.value && nextCallTime.value));
  
  if (nextCallDate.value && nextCallTime.value) {
    // 确保日期格式正确
    const normalizedDate = normalizeDate(nextCallDate.value);
    if (normalizedDate) {
      nextCallDate.value = normalizedDate;
    }
    const formattedTime = formatDateTime(nextCallDate.value, nextCallTime.value);
    console.log('[handleConfirmNextCallTime] 格式化后的时间:', formattedTime);
    // 直接设置值，Vue 的响应式更新是同步的
    form.nextCallTime = formattedTime;
    console.log('[handleConfirmNextCallTime] 设置后的 form.nextCallTime:', form.nextCallTime);
  } else {
    console.log('[handleConfirmNextCallTime] 条件不满足，清空 form.nextCallTime');
    form.nextCallTime = '';
  }
  // 关闭菜单
  nextCallTimeMenu.value = false;
  console.log('[handleConfirmNextCallTime] 执行完成，菜单已关闭');
};

// 统计数据轮询定时器
let heroStatsPollingTimer: number | null = null;

// 启动统计数据轮询
const startHeroStatsPolling = () => {
  // 清除已存在的定时器（如果存在）
  if (heroStatsPollingTimer !== null) {
    clearInterval(heroStatsPollingTimer);
  }
  
  // 立即加载一次
  loadHeroStats();
  
  // 每10秒轮询一次
  heroStatsPollingTimer = window.setInterval(() => {
    loadHeroStats();
  }, 10000);
};

// 停止统计数据轮询
const stopHeroStatsPolling = () => {
  if (heroStatsPollingTimer !== null) {
    clearInterval(heroStatsPollingTimer);
    heroStatsPollingTimer = null;
  }
};

// localStorage 键名
const STORAGE_KEY_SEARCH_STATE = 'sasl_search_state';

// 保存搜索状态到 localStorage
const saveSearchState = () => {
  try {
    const searchState = {
      searchDataSource: searchDataSource.value || null,
      mrtNumber: form.mrtNumber || null,
    };
    localStorage.setItem(STORAGE_KEY_SEARCH_STATE, JSON.stringify(searchState));
  } catch (error) {
    console.error('保存搜索状态失败', error);
  }
};

// 从 localStorage 恢复搜索状态
const restoreSearchState = async () => {
  try {
    const savedStateStr = localStorage.getItem(STORAGE_KEY_SEARCH_STATE);
    if (!savedStateStr) {
      return false;
    }

    const savedState = JSON.parse(savedStateStr);
    
    // 等待数据源选项加载完成
    // 如果数据源选项为空，等待一段时间后重试
    let retryCount = 0;
    const maxRetries = 10;
    while (dataSourceOptions.value.length === 0 && retryCount < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, 100));
      retryCount++;
    }
    
    // 恢复数据源（验证保存的数据源是否在选项中）
    if (savedState.searchDataSource) {
      if (dataSourceOptions.value.includes(savedState.searchDataSource)) {
        searchDataSource.value = savedState.searchDataSource;
      } else {
        console.warn('保存的数据源不在当前选项中:', savedState.searchDataSource);
      }
    }
    
    // 如果有保存的 mrtNumber，将其设置为搜索条件并触发搜索
    if (savedState.mrtNumber && searchDataSource.value) {
      mrtSearch.value = savedState.mrtNumber;
      // 等待下一个 tick 确保响应式更新完成，然后触发搜索
      await new Promise(resolve => setTimeout(resolve, 100));
      if (searchDataSource.value) {
        void performSearch();
      }
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('恢复搜索状态失败', error);
    return false;
  }
};

// 监听页面刷新前事件，保存搜索状态
const handleBeforeUnload = () => {
  saveSearchState();
};

// 监听搜索条件和选中记录的变化，自动保存状态
watch([() => searchDataSource.value, () => form.mrtNumber], () => {
  // 只有当数据源和 mrtNumber 都有值时才保存
  if (searchDataSource.value && form.mrtNumber) {
    saveSearchState();
  }
}, { deep: true });

// 组件挂载时加载文档标题、套餐方案和统计数据，并启动轮询和SSE连接
onMounted(async () => {
  // 先加载文档标题（数据源选项）
  await loadDocumentTitles();
  
  loadPlanSections();
  startHeroStatsPolling();
  startAnnouncementPolling();
  initDateTime();
  
  // 重置手动关闭标志，允许启动SSE连接
  isManualClose = false;
  startSseConnection();
  
  // 恢复搜索状态（在数据源选项加载完成后）
  await restoreSearchState();
  
  // 监听页面刷新前事件
  window.addEventListener('beforeunload', handleBeforeUnload);
});

// 组件卸载时停止轮询和SSE连接
onBeforeUnmount(() => {
  stopHeroStatsPolling();
  stopAnnouncementPolling();
  stopSseConnection();
  
  // 移除事件监听器
  window.removeEventListener('beforeunload', handleBeforeUnload);
  
  // 保存搜索状态（作为备用，beforeunload 可能不可靠）
  saveSearchState();
});
</script>

<style scoped lang="scss">
@import '../styles/saslForm.scss';

.announcement-banner {
  margin-bottom: 28px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.18), rgba(255, 174, 69, 0.15));
  border: 1px solid rgba(255, 158, 56, 0.4);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(255, 153, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(255, 158, 56, 0.8), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  .announcement-banner-content {
    padding: 20px 28px;
    position: relative;
    z-index: 1;
  }

  .announcement-banner-header {
    position: relative;
  }

  .announcement-banner-icon {
    color: #ff9e38 !important;
    filter: drop-shadow(0 2px 6px rgba(255, 158, 56, 0.5));
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .announcement-banner-title {
    font-size: 1.1rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ff9e38, #ffc947);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 0.8px;
    text-shadow: 0 0 20px rgba(255, 158, 56, 0.4);
  }

  .announcement-toggle-btn {
    color: #ff9e38 !important;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  .announcement-preview-text {
    flex: 1;
    min-width: 0;
    max-width: 80%;
    margin-left: auto;
    text-align: right;
    overflow: hidden;
    padding: 4px 12px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 158, 56, 0.15);
    }
  }

  .announcement-preview-content {
    font-size: 0.9rem;
    font-weight: 500;
    color: #ffe7c2;
    line-height: 1.5;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s ease;

    .announcement-preview-text:hover & {
      color: #ffffff;
    }
  }

  .announcement-banner-list {
    margin-top: 8px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 158, 56, 0.25);
  }

  .announcement-banner-item {
    color: #ffe7c2;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    border-radius: 8px;
    padding: 8px 12px;
    margin-bottom: 6px;

    &:hover {
      color: #ffffff;
      background: linear-gradient(90deg, rgba(255, 158, 56, 0.25), rgba(255, 201, 71, 0.2));
      transform: translateX(6px);
      box-shadow: 0 4px 12px rgba(255, 158, 56, 0.25);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .announcement-banner-dot {
    color: #ff9e38 !important;
    filter: drop-shadow(0 0 4px rgba(255, 158, 56, 0.7));
    flex-shrink: 0;
    margin-top: 4px;
  }

  .announcement-banner-text {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.6;
    color: inherit;
    word-break: break-word;
    flex: 1;
  }
}

</style>

