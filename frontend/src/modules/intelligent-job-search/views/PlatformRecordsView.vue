<template>
  <div v-if="!meta" class="empty-container">
    <v-empty-state
      headline="未找到平台"
      title="无法识别的平台代码"
      text="请从左侧菜单重新选择一个平台。"
      icon="mdi-alert"
    />
  </div>
  <div v-else class="records-container">
    <!-- 岗位列表卡片 -->
    <div class="modern-card">
      <div class="card-header">
        <div class="header-icon-wrapper records">
          <v-icon size="24">mdi-table-large</v-icon>
        </div>
        <div class="header-content">
          <h2 class="card-title">{{ meta.displayName }} 岗位明细</h2>
          <p class="card-subtitle">共 {{ totalItems }} 条岗位记录</p>
        </div>
        <div class="header-actions">
          <v-btn
            variant="outlined"
            color="primary"
            class="action-btn-header"
            @click="loadData(0)"
          >
            <v-icon start>mdi-reload</v-icon>
            刷新
          </v-btn>
          <v-btn
            variant="outlined"
            color="warning"
            class="action-btn-header"
            @click="openConfirm('重置岗位状态', `确定要重置${meta.displayName}的岗位状态吗？`, handleReset)"
          >
            <v-icon start>mdi-broom</v-icon>
            重置状态
          </v-btn>
          <v-btn
            variant="flat"
            color="error"
            class="action-btn-header"
            @click="openConfirm('删除岗位记录', `确定删除${meta.displayName}的所有岗位吗？\n\n注意：已投递成功/失败的岗位不会被删除，系统保留这些记录用于防止重复投递。`, handleDelete)"
          >
            <v-icon start>mdi-delete-outline</v-icon>
            删除全部
          </v-btn>
        </div>
      </div>

      <div class="card-body">
        <!-- 搜索栏 -->
        <div class="search-bar">
          <v-text-field
            v-model="keyword"
            label="搜索岗位关键字"
            variant="outlined"
            density="comfortable"
            class="search-input"
            clearable
            @keyup.enter="loadData(0)"
          >
            <template #prepend-inner>
              <v-icon color="primary">mdi-magnify</v-icon>
            </template>
          </v-text-field>
          <v-select
            v-model="statusFilter"
            :items="statusOptions"
            item-title="title"
            item-value="value"
            label="状态筛选"
            variant="outlined"
            density="comfortable"
            class="status-filter-select"
            clearable
            @update:modelValue="loadData(0)"
          />
          <v-select
            v-model="pageSize"
            :items="pageSizes"
            label="每页数量"
            variant="outlined"
            density="comfortable"
            class="page-size-select"
          />
          <v-btn
            color="primary"
            size="large"
            class="search-btn"
            @click="loadData(0)"
          >
            <v-icon start>mdi-magnify</v-icon>
            搜索
          </v-btn>
        </div>

        <!-- 数据表格 -->
        <v-data-table-server
          :headers="headers"
          :items="jobs"
          :items-length="totalItems"
          :loading="loading"
          :page="page + 1"
          :items-per-page="pageSize"
          loading-text="加载中..."
          class="modern-table"
          @update:options="onOptionsUpdate"
        >
          <template #item.jobTitle="{ item }">
            <div class="job-info">
              <div class="job-title">{{ item.jobTitle }}</div>
              <div class="job-salary">{{ item.salaryRange || '-' }}</div>
            </div>
          </template>
          <template #item.companyName="{ item }">
            <div class="company-info">
              <v-avatar size="40" class="company-avatar" v-if="item.companyLogo">
                <v-img :src="item.companyLogo" :alt="item.companyName" />
              </v-avatar>
              <v-avatar size="40" class="company-avatar-placeholder" v-else>
                <v-icon>mdi-office-building</v-icon>
              </v-avatar>
              <div class="company-details">
                <div class="company-name">{{ item.companyName }}</div>
                <div class="company-meta">
                  {{ item.companyIndustry || '-' }} · {{ item.companyScale || '-' }}
                </div>
              </div>
            </div>
          </template>
          <template #item.status="{ item }">
            <v-chip :color="statusColor(item.status)" variant="flat" size="small" class="status-chip">
              {{ statusText(item.status) }}
            </v-chip>
          </template>
          <template #item.isContacted="{ item }">
            <v-tooltip text="双击切换「是否联系过」" location="top">
              <template #activator="{ props: tooltipProps }">
                <span
                  v-bind="tooltipProps"
                  class="is-contacted-cell"
                  @dblclick="toggleContactedItem(item)"
                >
                  {{ item.isContacted ? '是' : '否' }}
                </span>
              </template>
            </v-tooltip>
          </template>
          <template #item.isProxyJob="{ item }">
            <span class="text-medium-emphasis">{{ item.isProxyJob ? '是' : '否' }}</span>
          </template>
          <template #item.filterReason="{ item }">
            <v-tooltip v-if="item.filterReason" location="bottom" max-width="320">
              <template #activator="{ props: tooltipProps }">
                <span v-bind="tooltipProps" class="filter-reason-text">{{ item.filterReason }}</span>
              </template>
              <span>{{ item.filterReason }}</span>
            </v-tooltip>
            <span v-else class="text-medium-emphasis">-</span>
          </template>
          <template #item.aiMatched="{ item }">
            <div class="ai-match-cell">
              <v-tooltip location="bottom" max-width="360">
                <template #activator="{ props: tooltipProps }">
                  <span v-bind="tooltipProps">
                    <v-chip
                      :color="aiMatchChipColor(item.aiMatched)"
                      variant="flat"
                      size="small"
                      class="ai-chip"
                    >
                      <v-icon v-if="item.aiMatched === true" start size="16">mdi-check-circle</v-icon>
                      <v-icon v-else-if="item.aiMatched === false" start size="16">mdi-close-circle</v-icon>
                      {{ aiMatchLabel(item.aiMatched) }}
                    </v-chip>
                  </span>
                </template>
                <div v-if="item.aiMatchScore || item.aiMatchReason" class="ai-match-tooltip">
                  <div v-if="item.aiMatchScore" class="tooltip-line"><strong>分数：</strong>{{ item.aiMatchScore }}</div>
                  <div v-if="item.aiMatchReason" class="tooltip-line"><strong>原因：</strong>{{ item.aiMatchReason }}</div>
                </div>
                <span v-else>无详情</span>
              </v-tooltip>
            </div>
          </template>
          <template #item.aiMatchReason="{ item }">
            <v-tooltip v-if="item.aiMatchReason" location="bottom" max-width="360">
              <template #activator="{ props: tooltipProps }">
                <span v-bind="tooltipProps" class="ai-match-desc-text">{{ item.aiMatchReason }}</span>
              </template>
              <span>{{ item.aiMatchReason }}</span>
            </v-tooltip>
            <span v-else class="text-medium-emphasis">-</span>
          </template>
          <template #item.publishTime="{ item }">
            <span class="time-text">{{ formatDate(item.publishTime) }}</span>
          </template>
          <template #item.actions="{ item }">
            <div class="action-buttons">
              <v-tooltip text="打开链接" location="top">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon
                    size="small"
                    variant="text"
                    @click="openJob(item.jobUrl)"
                    :disabled="!item.jobUrl"
                  >
                    <v-icon size="20">mdi-open-in-new</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip text="复制链接" location="top">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon
                    size="small"
                    variant="text"
                    @click="copyUrl(item.jobUrl)"
                    :disabled="!item.jobUrl"
                  >
                    <v-icon size="20">mdi-content-copy</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip :text="item.isFavorite ? '取消收藏' : '收藏'" location="top">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon
                    size="small"
                    variant="text"
                    @click="toggleFavoriteItem(item)"
                    :color="item.isFavorite ? 'warning' : 'default'"
                  >
                    <v-icon size="20">{{ item.isFavorite ? 'mdi-star' : 'mdi-star-outline' }}</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip text="公司详情" location="top">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon
                    size="small"
                    variant="text"
                    @click="showCompany(item)"
                  >
                    <v-icon size="20">mdi-domain</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </template>
        </v-data-table-server>
      </div>
    </div>

    <!-- 公司详情对话框 -->
    <v-dialog v-model="companyDialog.visible" max-width="800" class="company-dialog">
      <div class="modern-card dialog-card">
        <div class="card-header">
          <div class="header-icon-wrapper company">
            <v-icon size="24">mdi-domain</v-icon>
          </div>
          <div class="header-content">
            <h2 class="card-title">{{ companyDialog.company?.companyName }}</h2>
            <p class="card-subtitle">公司详细信息</p>
          </div>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="companyDialog.visible = false"
          />
        </div>
        <div class="card-body" v-if="companyDialog.company">
          <v-row>
            <v-col cols="12" md="4">
              <div class="company-logo-section">
                <v-img
                  v-if="companyDialog.company.companyLogo"
                  :src="companyDialog.company.companyLogo"
                  :alt="companyDialog.company.companyName"
                  class="company-logo"
                  :aspect-ratio="1"
                />
                <div v-else class="company-logo-placeholder">
                  <v-icon size="64">mdi-office-building</v-icon>
                </div>
              </div>
              <v-list density="compact" lines="two" class="company-info-list">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-factory</v-icon>
                  </template>
                  <v-list-item-title>行业</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.companyIndustry || '-' }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success">mdi-account-group</v-icon>
                  </template>
                  <v-list-item-title>规模</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.companyScale || '-' }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="warning">mdi-chart-line</v-icon>
                  </template>
                  <v-list-item-title>阶段</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.companyStage || '-' }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-map-marker</v-icon>
                  </template>
                  <v-list-item-title>城市</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.workCity || '-' }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="8">
              <div class="company-intro-card">
                <div class="intro-header">
                  <v-icon size="20" color="primary">mdi-information-outline</v-icon>
                  <span>公司介绍</span>
                </div>
                <div class="intro-content">
                  {{ companyDialog.company.brandIntroduce || '暂无公司介绍' }}
                </div>
              </div>
              <div v-if="companyLabels(companyDialog.company).length" class="company-benefits">
                <div class="benefits-header">
                  <v-icon size="20" color="success">mdi-gift-outline</v-icon>
                  <span>公司福利</span>
                </div>
                <div class="benefits-chips">
                  <v-chip
                    v-for="label in companyLabels(companyDialog.company)"
                    :key="label"
                    color="success"
                    variant="flat"
                    size="small"
                  >
                    {{ label }}
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-dialog>

    <!-- 确认对话框 -->
    <v-dialog v-model="confirmDialog.visible" max-width="480">
      <div class="modern-card dialog-card confirm-dialog">
        <div class="dialog-header">
          <v-icon size="32" color="warning">mdi-alert-circle-outline</v-icon>
          <h3 class="dialog-title">{{ confirmDialog.title }}</h3>
        </div>
        <div class="dialog-body">
          <p class="dialog-message">{{ confirmDialog.message }}</p>
        </div>
        <div class="dialog-footer">
          <v-btn
            variant="outlined"
            size="large"
            @click="confirmDialog.visible = false"
          >
            取消
          </v-btn>
          <v-btn
            color="primary"
            size="large"
            @click="confirmDialog.confirm"
          >
            确定
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { fetchJobRecords, toggleFavorite, updateContacted, resetJobFilter, deleteAllJobs, type JobRecord } from '../api/jobRecordsApi';
import type { PlatformCode } from '../api/platformConfigApi';
import { PLATFORM_METAS } from '../constants/platformMeta';
import { useSnackbarStore } from '@/stores/snackbar';

const props = defineProps<{ platform: PlatformCode }>();
const snackbar = useSnackbarStore();

const meta = computed(() => PLATFORM_METAS[props.platform]);

const keyword = ref('');
const page = ref(0);
const pageSize = ref(10);
const pageSizes = [10, 20, 30, 50];
const statusFilter = ref<number | null>(null);
const statusOptions = [
  { title: '全部', value: null },
  { title: '待处理', value: 0 },
  { title: '待投递', value: 1 },
  { title: '已过滤', value: 2 },
  { title: '投递成功', value: 3 },
  { title: '投递失败', value: 4 },
];
const loading = ref(false);
const jobs = ref<JobRecord[]>([]);
const totalItems = ref(0);

const headers = [
  { title: '岗位信息', key: 'jobTitle', sortable: false },
  { title: '公司', key: 'companyName', sortable: false },
  { title: 'HR', key: 'hrName', sortable: false },
  { title: '状态', key: 'status', sortable: false },
  { title: '是否联系过', key: 'isContacted', sortable: false },
  { title: '是否代理职位', key: 'isProxyJob', sortable: false },
  { title: '过滤原因', key: 'filterReason', sortable: false },
  { title: 'AI匹配', key: 'aiMatched', sortable: false },
  { title: 'AI匹配说明', key: 'aiMatchReason', sortable: false },
  { title: '城市', key: 'workCity', sortable: false },
  { title: '发布时间', key: 'publishTime', sortable: false },
  { title: '操作', key: 'actions', sortable: false },
];

const companyDialog = reactive({
  visible: false,
  company: null as JobRecord | null,
});

const confirmDialog = reactive({
  visible: false,
  title: '',
  message: '',
  onConfirm: null as (() => void) | null,
  confirm: () => {
    if (confirmDialog.onConfirm) {
      confirmDialog.onConfirm();
    }
    confirmDialog.visible = false;
  },
});

const openConfirm = (title: string, message: string, onConfirm: () => void) => {
  confirmDialog.title = title;
  confirmDialog.message = message;
  confirmDialog.onConfirm = onConfirm;
  confirmDialog.visible = true;
};

const loadData = async (targetPage = page.value) => {
  if (!meta.value) return;
  loading.value = true;
  try {
    const kw = keyword.value != null ? String(keyword.value).trim() : '';
    const response = await fetchJobRecords({
      platform: props.platform,
      ...(kw !== '' ? { keyword: kw } : {}),
      ...(statusFilter.value !== null ? { status: statusFilter.value } : {}),
      page: targetPage,
      size: pageSize.value,
    });
    jobs.value = response.content ?? [];
    totalItems.value = response.totalElements ?? 0;
    page.value = response.number ?? targetPage;
  } catch (error) {
    console.error('加载岗位列表失败', error);
    snackbar.show({ message: '加载岗位数据失败', color: 'error' });
  } finally {
    loading.value = false;
  }
};

const onOptionsUpdate = (options: { page: number; itemsPerPage: number }) => {
  const newPage = options.page - 1;
  const newSize = options.itemsPerPage;
  if (newSize !== pageSize.value) {
    pageSize.value = newSize;
  }
  loadData(newPage);
};

const statusText = (status?: number) => {
  const map: Record<number, string> = {
    0: '待处理',
    1: '待投递',
    2: '已过滤',
    3: '投递成功',
    4: '投递失败',
  };
  return map[status ?? 0] ?? '未知';
};

const statusColor = (status?: number) => {
  const map: Record<number, string> = {
    0: 'secondary',
    1: 'info',
    2: 'warning',
    3: 'success',
    4: 'error',
  };
  return map[status ?? 0] ?? 'secondary';
};

/** AI 匹配展示：null/undefined=未检测，false=不匹配，true=匹配 */
function aiMatchLabel(aiMatched: boolean | null | undefined): string {
  if (aiMatched === true) return '匹配';
  if (aiMatched === false) return '不匹配';
  return '未检测';
}

function aiMatchChipColor(aiMatched: boolean | null | undefined): string {
  if (aiMatched === true) return 'success';
  if (aiMatched === false) return 'error';
  return 'grey';
}

const formatDate = (value?: string) => {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes(),
  ).padStart(2, '0')}`;
};

const openJob = (url?: string) => {
  if (!url) {
    snackbar.show({ message: '岗位链接不可用', color: 'warning' });
    return;
  }
  window.open(url, '_blank');
};

const copyUrl = async (url?: string) => {
  if (!url) {
    snackbar.show({ message: '岗位链接不可用', color: 'warning' });
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
    snackbar.show({ message: '链接已复制到剪贴板', color: 'success' });
  } catch (error) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      snackbar.show({ message: '链接已复制到剪贴板', color: 'success' });
    } catch (fallbackError) {
      console.error('复制失败', fallbackError);
      snackbar.show({ message: '复制失败，请稍后重试', color: 'error' });
    }
  }
};

const toggleFavoriteItem = async (item: JobRecord) => {
  try {
    await toggleFavorite(item.id, !item.isFavorite);
    item.isFavorite = !item.isFavorite;
    snackbar.show({ message: item.isFavorite ? '已收藏该岗位' : '已取消收藏', color: 'success' });
  } catch (error) {
    console.error('收藏失败', error);
    snackbar.show({ message: '收藏状态更新失败', color: 'error' });
  }
};

const toggleContactedItem = async (item: JobRecord) => {
  const jobId = item.id != null ? String(item.id) : '';
  if (!jobId) {
    snackbar.show({ message: '无法识别岗位 ID', color: 'warning' });
    return;
  }
  const next = !item.isContacted;
  try {
    await updateContacted(jobId, next);
    item.isContacted = next;
    snackbar.show({ message: next ? '已标记为联系过' : '已标记为未联系', color: 'success' });
  } catch (error) {
    console.error('更新联系状态失败', error);
    snackbar.show({ message: '联系状态更新失败', color: 'error' });
  }
};

const companyLabels = (record: JobRecord) => {
  if (!record) return [];
  if (Array.isArray(record.brandLabels)) return record.brandLabels;
  if (typeof record.brandLabels === 'string') {
    return record.brandLabels
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }
  return [];
};

const showCompany = (record: JobRecord) => {
  companyDialog.company = record;
  companyDialog.visible = true;
};

const handleReset = async () => {
  if (!meta.value) return;
  try {
    await resetJobFilter(meta.value.recordsPlatform);
    snackbar.show({ message: '岗位状态已重置', color: 'success' });
    loadData(page.value);
  } catch (error) {
    console.error('重置岗位状态失败', error);
    snackbar.show({ message: '重置失败，请稍后再试', color: 'error' });
  }
};

const handleDelete = async () => {
  if (!meta.value) return;
  try {
    await deleteAllJobs(meta.value.recordsPlatform);
    snackbar.show({ message: '岗位记录已清空', color: 'success' });
    loadData(0);
  } catch (error) {
    console.error('删除岗位失败', error);
    snackbar.show({ message: '删除失败，请稍后再试', color: 'error' });
  }
};

watch(pageSize, () => {
  loadData(0);
});

watch(
  () => props.platform,
  async (newPlatform, oldPlatform) => {
    // 如果平台没有变化，跳过（避免首次加载时重复执行）
    if (newPlatform === oldPlatform && oldPlatform !== undefined) {
      return;
    }
    
    // 平台变化时，重置分页和搜索条件，重新加载数据
    keyword.value = '';
    page.value = 0;
    statusFilter.value = null;
    await loadData(0);
  },
  { immediate: true },
);
</script>

<style scoped>
/* 容器样式 */
.empty-container {
  padding: 48px 24px;
}

.records-container {
  padding: 24px;
  max-width: 1800px;
  margin: 0 auto;
}

/* 现代卡片样式 */
.modern-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
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

.header-icon-wrapper.records {
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  color: #D97706;
}

.header-icon-wrapper.company {
  background: linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%);
  color: #4F46E5;
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

.header-actions {
  display: flex;
  gap: 8px;
}

.action-btn-header {
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  text-transform: none;
  transition: all 0.2s ease;
}

.action-btn-header:hover {
  transform: translateY(-1px);
}

/* 卡片主体 */
.card-body {
  padding: 28px;
}

/* 搜索栏 */
.search-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  align-items: flex-start;
}

.search-input {
  flex: 1;
}

.search-input :deep(.v-field) {
  border-radius: 10px;
}

.page-size-select {
  width: 140px;
}

.status-filter-select {
  width: 160px;
}

.status-filter-select :deep(.v-field) {
  border-radius: 10px;
}

.page-size-select :deep(.v-field) {
  border-radius: 10px;
}

.search-btn {
  height: 48px;
  border-radius: 10px;
  font-weight: 600;
  min-width: 120px;
}

/* 数据表格 */
.modern-table {
  border-radius: 12px;
  overflow: hidden;
}

.modern-table :deep(.v-table__wrapper) {
  border-radius: 12px;
}

.modern-table :deep(thead) {
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
}

.modern-table :deep(th) {
  font-weight: 700 !important;
  color: #374151 !important;
  font-size: 13px !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.modern-table :deep(tbody tr) {
  transition: all 0.2s ease;
}

.modern-table :deep(tbody tr:hover) {
  background: #F9FAFB !important;
}

/* 岗位信息 */
.job-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.job-title {
  font-size: 15px;
  font-weight: 600;
  color: #1677FF;
  line-height: 1.3;
}

.job-salary {
  font-size: 13px;
  font-weight: 500;
  color: #059669;
}

/* 公司信息 */
.company-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-avatar {
  border-radius: 8px;
  border: 1px solid #E5E7EB;
}

.company-avatar-placeholder {
  border-radius: 8px;
  background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
  color: #9CA3AF;
}

.company-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.company-name {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
}

.company-meta {
  font-size: 12px;
  color: #6B7280;
  line-height: 1.3;
}

/* 状态芯片 */
.status-chip {
  font-weight: 600;
  font-size: 12px;
}

.is-contacted-cell {
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  user-select: none;
}
.is-contacted-cell:hover {
  background: rgba(var(--v-theme-primary), 0.08);
}

/* AI 芯片 */
.ai-chip {
  font-weight: 600;
  font-size: 12px;
}

.ai-match-cell {
  display: inline-block;
}

.ai-match-tooltip .tooltip-line {
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 1.5;
  word-break: break-word;
}
.ai-match-tooltip .tooltip-line:last-child {
  margin-bottom: 0;
}

.ai-tooltip {
  padding: 8px;
  max-width: 400px;
}

.tooltip-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 1.5;
}

.tooltip-row:last-child {
  margin-bottom: 0;
}

/* 时间文本 */
.time-text {
  font-size: 13px;
  color: #6B7280;
}

.filter-reason-text {
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  color: #6B7280;
}

.ai-match-desc-text {
  display: inline-block;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  color: #6B7280;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 4px;
}

/* 对话框样式 */
.dialog-card {
  margin: 0;
}

.company-logo-section {
  margin-bottom: 20px;
}

.company-logo {
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
}

.company-logo-placeholder {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
}

.company-info-list {
  background: #F9FAFB;
  border-radius: 12px;
  padding: 8px;
}

.company-intro-card {
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #BFDBFE;
}

.intro-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #1E40AF;
  margin-bottom: 12px;
}

.intro-content {
  font-size: 14px;
  color: #1E3A8A;
  line-height: 1.7;
  max-height: 280px;
  overflow-y: auto;
}

.company-benefits {
  background: #F0FDF4;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #BBF7D0;
}

.benefits-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #065F46;
  margin-bottom: 12px;
}

.benefits-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 确认对话框 */
.confirm-dialog {
  text-align: center;
}

.dialog-header {
  padding: 32px 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.dialog-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.dialog-body {
  padding: 16px 32px;
}

.dialog-message {
  font-size: 15px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;
}

.dialog-footer {
  padding: 16px 32px 32px;
  display: flex;
  gap: 12px;
  justify-content: center;
}

.dialog-footer .v-btn {
  min-width: 120px;
  height: 44px;
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
}

/* 响应式设计 */
@media (max-width: 960px) {
  .records-container {
    padding: 16px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .header-actions {
    width: 100%;
    flex-direction: column;
  }

  .action-btn-header {
    width: 100%;
  }

  .card-body {
    padding: 20px;
  }

  .search-bar {
    flex-direction: column;
  }

  .page-size-select {
    width: 100%;
  }

  .search-btn {
    width: 100%;
  }

  .card-title {
    font-size: 18px;
  }

  .card-subtitle {
    font-size: 12px;
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

