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
    <v-card class="section-card" elevation="2">
      <v-card-title class="section-title d-flex align-center">
        <v-icon class="mr-2" color="primary">mdi-table</v-icon>
        {{ meta.displayName }} 岗位明细
        <v-spacer />
        <v-btn
          variant="tonal"
          color="primary"
          class="mr-2"
          prepend-icon="mdi-reload"
          @click="loadData(0)"
        >
          刷新
        </v-btn>
        <v-btn
          variant="tonal"
          color="warning"
          class="mr-2"
          prepend-icon="mdi-broom"
          @click="openConfirm('重置岗位状态', `确定要重置${meta.displayName}的岗位状态吗？`, handleReset)"
        >
          重置状态
        </v-btn>
        <v-btn
          color="error"
          prepend-icon="mdi-delete"
          @click="openConfirm('删除岗位记录', `确定删除${meta.displayName}的所有岗位吗？`, handleDelete)"
        >
          删除全部
        </v-btn>
      </v-card-title>
      <v-card-subtitle>
        共 {{ totalItems }} 条岗位记录
      </v-card-subtitle>
      <v-card-text>
        <v-row dense class="mb-4">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="keyword"
              label="搜索岗位关键字"
              prepend-inner-icon="mdi-magnify"
              clearable
              @keyup.enter="loadData(0)"
            />
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="pageSize"
              :items="pageSizes"
              label="每页数量"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center">
            <v-btn color="primary" prepend-icon="mdi-magnify" @click="loadData(0)">
              搜索
            </v-btn>
          </v-col>
        </v-row>

        <v-data-table-server
          :headers="headers"
          :items="jobs"
          :items-length="totalItems"
          :loading="loading"
          :page="page + 1"
          :items-per-page="pageSize"
          loading-text="加载中..."
          @update:options="onOptionsUpdate"
        >
          <template #item.jobTitle="{ item }">
            <div>
              <div class="font-weight-medium text-primary">{{ item.jobTitle }}</div>
              <div class="text-caption text-secondary">{{ item.salaryRange || '-' }}</div>
            </div>
          </template>
          <template #item.companyName="{ item }">
            <div class="d-flex align-center">
              <v-avatar size="32" class="mr-2" v-if="item.companyLogo">
                <v-img :src="item.companyLogo" :alt="item.companyName" />
              </v-avatar>
              <div>
                <div class="font-weight-medium">{{ item.companyName }}</div>
                <div class="text-caption text-secondary">
                  {{ item.companyIndustry || '-' }} · {{ item.companyScale || '-' }}
                </div>
              </div>
            </div>
          </template>
          <template #item.status="{ item }">
            <v-chip :color="statusColor(item.status)" variant="tonal" size="small">
              {{ statusText(item.status) }}
            </v-chip>
          </template>
          <template #item.aiMatched="{ item }">
            <div v-if="item.aiMatched !== null && item.aiMatched !== undefined">
              <v-tooltip location="bottom">
                <template #activator="{ props: tooltipProps }">
                  <v-chip
                    v-bind="tooltipProps"
                    :color="aiMatchColor(item.aiMatched)"
                    variant="tonal"
                    size="small"
                    :prepend-icon="aiMatchIcon(item.aiMatched)"
                  >
                    {{ aiMatchText(item.aiMatched) }}
                  </v-chip>
                </template>
                <div class="pa-2" style="max-width: 400px;">
                  <div class="text-subtitle-2 mb-1">
                    <v-icon size="small" class="mr-1">mdi-chart-line</v-icon>
                    置信度: {{ item.aiMatchScore || 'N/A' }}
                  </div>
                  <div class="text-body-2">
                    <v-icon size="small" class="mr-1">mdi-information</v-icon>
                    {{ item.aiMatchReason || '无详细信息' }}
                  </div>
                </div>
              </v-tooltip>
            </div>
            <v-chip v-else color="grey" variant="tonal" size="small">
              未检测
            </v-chip>
          </template>
          <template #item.publishTime="{ item }">
            {{ formatDate(item.publishTime) }}
          </template>
          <template #item.actions="{ item }">
            <v-btn-group density="compact">
              <v-btn icon="mdi-open-in-new" @click="openJob(item.jobUrl)" :disabled="!item.jobUrl" />
              <v-btn icon="mdi-content-copy" @click="copyUrl(item.jobUrl)" :disabled="!item.jobUrl" />
              <v-btn
                :icon="item.isFavorite ? 'mdi-star' : 'mdi-star-outline'"
                @click="toggleFavoriteItem(item)"
              />
              <v-btn icon="mdi-domain" @click="showCompany(item)" />
            </v-btn-group>
          </template>
        </v-data-table-server>
      </v-card-text>
    </v-card>

    <v-dialog v-model="companyDialog.visible" max-width="720">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-domain</v-icon>
          {{ companyDialog.company?.companyName }}
          <v-spacer />
          <v-btn icon="mdi-close" variant="text" @click="companyDialog.visible = false" />
        </v-card-title>
        <v-card-text v-if="companyDialog.company">
          <v-row>
            <v-col cols="12" md="4">
              <v-img
                v-if="companyDialog.company.companyLogo"
                :src="companyDialog.company.companyLogo"
                :alt="companyDialog.company.companyName"
                class="rounded-lg mb-4"
                :aspect-ratio="1"
              />
              <v-list density="compact" lines="two">
                <v-list-item>
                  <v-list-item-title>行业</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.companyIndustry || '-' }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>规模</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.companyScale || '-' }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>阶段</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.companyStage || '-' }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>城市</v-list-item-title>
                  <v-list-item-subtitle>{{ companyDialog.company.workCity || '-' }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="8">
              <v-card variant="tonal" color="primary" class="mb-4">
                <v-card-title class="text-subtitle-1">公司介绍</v-card-title>
                <v-card-text class="text-body-2" style="max-height: 280px; overflow-y: auto;">
                  {{ companyDialog.company.brandIntroduce || '暂无公司介绍' }}
                </v-card-text>
              </v-card>
              <div v-if="companyLabels(companyDialog.company).length">
                <div class="text-subtitle-2 mb-2">公司福利</div>
                <v-chip-group column>
                  <v-chip
                    v-for="label in companyLabels(companyDialog.company)"
                    :key="label"
                    color="success"
                    variant="tonal"
                  >
                    {{ label }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog.visible" max-width="420">
      <v-card>
        <v-card-title class="text-h6">{{ confirmDialog.title }}</v-card-title>
        <v-card-text>{{ confirmDialog.message }}</v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="confirmDialog.visible = false">取消</v-btn>
          <v-btn color="primary" @click="confirmDialog.confirm">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { fetchJobRecords, toggleFavorite, resetJobFilter, deleteAllJobs, type JobRecord } from '../api/jobRecordsApi';
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
const loading = ref(false);
const jobs = ref<JobRecord[]>([]);
const totalItems = ref(0);

const headers = [
  { title: '岗位信息', key: 'jobTitle', sortable: false },
  { title: '公司', key: 'companyName', sortable: false },
  { title: 'HR', key: 'hrName', sortable: false },
  { title: '状态', key: 'status', sortable: false },
  { title: 'AI匹配', key: 'aiMatched', sortable: false },
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
    const response = await fetchJobRecords({
      platform: props.platform,
      keyword: keyword.value.trim(),
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
    1: '待处理',
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

const aiMatchText = (matched?: boolean) => {
  if (matched === true) return '匹配';
  if (matched === false) return '不匹配';
  return '未检测';
};

const aiMatchColor = (matched?: boolean) => {
  if (matched === true) return 'success';
  if (matched === false) return 'error';
  return 'grey';
};

const aiMatchIcon = (matched?: boolean) => {
  if (matched === true) return 'mdi-check-circle';
  if (matched === false) return 'mdi-close-circle';
  return 'mdi-help-circle';
};

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
    await resetJobFilter(meta.value.backendName);
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
    await deleteAllJobs(meta.value.backendName);
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
    await loadData(0);
  },
  { immediate: true },
);
</script>

