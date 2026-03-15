<template>
  <div class="company-evaluation-container">
    <!-- 发起评估 -->
    <div class="modern-card" :class="{ loading: evaluating }">
      <div class="card-header">
        <div class="header-icon-wrapper eval">
          <v-icon size="24">mdi-office-building-cog-outline</v-icon>
        </div>
        <div class="header-content">
          <h2 class="card-title">企业评估</h2>
          <p class="card-subtitle">输入企业名称或公司描述，AI 评估欠薪风险与外包/皮包属性</p>
        </div>
      </div>
      <div class="card-body">
        <div class="eval-form">
          <v-text-field
            v-model="companyNameInput"
            label="企业名称或公司描述"
            placeholder="例如：某某科技有限公司"
            variant="outlined"
            density="comfortable"
            class="eval-input"
            clearable
            :disabled="evaluating"
            @keyup.enter="runEvaluate"
          >
            <template #prepend-inner>
              <v-icon color="primary">mdi-domain</v-icon>
            </template>
          </v-text-field>
          <v-btn
            color="primary"
            size="large"
            :loading="evaluating"
            :disabled="!companyNameInput?.trim()"
            class="eval-btn"
            @click="runEvaluate"
          >
            <v-icon start>mdi-robot</v-icon>
            评估
          </v-btn>
        </div>
        <v-alert v-if="evaluateError" type="error" density="compact" class="mt-3" closable>
          {{ evaluateError }}
        </v-alert>
        <!-- 本次评估结果 -->
        <div v-if="lastResult" class="result-preview mt-4">
          <v-divider class="mb-3" />
          <h3 class="result-preview-title">本次评估结果</h3>
          <ResultCard :result="lastResult" />
        </div>
      </div>
    </div>

    <!-- 历史记录 -->
    <div class="modern-card mt-6" :class="{ loading: loadingList }">
      <div class="card-header">
        <div class="header-icon-wrapper list">
          <v-icon size="24">mdi-format-list-bulleted</v-icon>
        </div>
        <div class="header-content">
          <h2 class="card-title">评估记录</h2>
          <p class="card-subtitle">共 {{ totalElements }} 条，按时间倒序</p>
        </div>
        <div class="header-actions">
          <v-btn
            variant="outlined"
            color="error"
            size="small"
            :disabled="!selected.length || deleting"
            :loading="deleting"
            @click="openConfirm('删除所选记录', `确定删除所选 ${selected.length} 条评估记录？`, handleDeleteSelected)"
          >
            <v-icon start>mdi-delete-outline</v-icon>
            勾选删除
          </v-btn>
          <v-btn
            variant="flat"
            color="error"
            size="small"
            :disabled="deleting || totalElements === 0"
            :loading="deleting"
            @click="openConfirm('全部删除', '确定删除全部评估记录？', handleDeleteAll)"
          >
            <v-icon start>mdi-delete-sweep</v-icon>
            全部删除
          </v-btn>
          <v-btn variant="outlined" color="primary" size="small" @click="loadPage(0)">
            <v-icon start>mdi-reload</v-icon>
            刷新
          </v-btn>
        </div>
      </div>
      <div class="card-body">
        <v-data-table-server
          v-model="selected"
          :headers="listHeaders"
          :items="listItems"
          :items-length="totalElements"
          :loading="loadingList"
          :page="page + 1"
          :items-per-page="pageSize"
          item-value="id"
          show-select
          return-object
          loading-text="加载中..."
          class="modern-table"
          @update:options="onListOptionsUpdate"
        >
          <template #item.company_info="{ item }">
            <span class="company-info-cell">{{ truncate(item.company_info, 60) }}</span>
          </template>
          <template #item.result="{ item }">
            <template v-if="item.result">
              <v-chip
                :color="recommendationColor(item.result.recommendation_code)"
                size="small"
                variant="flat"
              >
                {{ item.result.recommendation_level || item.result.recommendation_code }}
              </v-chip>
              <span class="ml-2">{{ item.result.total_score ?? '-' }} 分</span>
            </template>
            <span v-else class="text-medium-emphasis">-</span>
          </template>
          <template #item.created_at="{ item }">
            {{ formatDate(item.created_at) }}
          </template>
          <template #item.actions="{ item }">
            <v-btn
              v-if="item.result"
              variant="text"
              size="small"
              color="primary"
              @click="openDetail(item)"
            >
              详情
            </v-btn>
          </template>
        </v-data-table-server>
        <div class="pagination-wrapper">
          <v-pagination
            v-model="pageOneBased"
            :length="totalPages"
            :total-visible="7"
            density="comfortable"
            @update:model-value="onPageChange"
          />
        </div>
      </div>
    </div>

    <!-- 删除确认弹窗 -->
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
          <v-btn variant="outlined" size="large" @click="confirmDialog.visible = false">
            取消
          </v-btn>
          <v-btn color="primary" size="large" @click="confirmDialog.confirm">
            确定
          </v-btn>
        </div>
      </div>
    </v-dialog>

    <!-- 详情弹窗 -->
    <v-dialog v-model="detailDialog" max-width="640" persistent>
      <v-card v-if="detailItem?.result">
        <v-card-title class="d-flex align-center">
          <v-icon start>mdi-office-building</v-icon>
          {{ detailItem.result.company_name || '企业评估详情' }}
        </v-card-title>
        <v-divider />
        <v-card-text>
          <ResultCard :result="detailItem.result" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" variant="text" @click="detailDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';
import {
  evaluateCompany,
  fetchCompanyEvaluationPage,
  deleteCompanyEvaluationsByIds,
  deleteAllCompanyEvaluations,
  type CompanyEvaluationResult,
  type CompanyEvaluationListItem,
} from '../api/companyEvaluationApi';
import ResultCard from '../components/CompanyEvaluationResultCard.vue';
import { useSnackbarStore } from '@/stores/snackbar';

const companyNameInput = ref('');
const evaluating = ref(false);
const evaluateError = ref('');
const lastResult = ref<CompanyEvaluationResult | null>(null);

const listItems = ref<CompanyEvaluationListItem[]>([]);
const totalElements = ref(0);
const totalPages = ref(0);
const page = ref(0);
const pageSize = ref(20);
const loadingList = ref(false);
const detailDialog = ref(false);
const detailItem = ref<CompanyEvaluationListItem | null>(null);
const selected = ref<CompanyEvaluationListItem[]>([]);
const deleting = ref(false);
const snackbar = useSnackbarStore();

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

function openConfirm(title: string, message: string, onConfirm: () => void) {
  confirmDialog.title = title;
  confirmDialog.message = message;
  confirmDialog.onConfirm = onConfirm;
  confirmDialog.visible = true;
}

const pageOneBased = computed({
  get: () => page.value + 1,
  set: (v: number) => { page.value = Math.max(0, v - 1); },
});

const listHeaders = [
  { title: '公司信息', key: 'company_info', sortable: false, width: '40%' },
  { title: '推荐等级 / 总分', key: 'result', sortable: false, width: '28%' },
  { title: '评估时间', key: 'created_at', sortable: false, width: '18%' },
  { title: '', key: 'actions', sortable: false, width: '14%' },
];

async function runEvaluate() {
  const name = companyNameInput.value?.trim();
  if (!name) return;
  evaluating.value = true;
  evaluateError.value = '';
  lastResult.value = null;
  try {
    const res = await evaluateCompany(name);
    lastResult.value = res.result;
    if (res.record_id != null) {
      snackbar.show({ message: `已入库，记录 #${res.record_id}`, color: 'success' });
    }
    loadPage(0);
  } catch (e: unknown) {
    const err = e as { status?: number; payload?: { message?: string } };
    evaluateError.value = err?.payload?.message || (err?.status ? `请求失败: ${err.status}` : '评估失败，请重试');
  } finally {
    evaluating.value = false;
  }
}

function recommendationColor(code?: string): string {
  if (!code) return 'grey';
  switch (code.toUpperCase()) {
    case 'STRONGLY_RECOMMENDED': return 'success';
    case 'RECOMMENDED': return 'primary';
    case 'CAUTIOUS': return 'warning';
    case 'NOT_RECOMMENDED': return 'error';
    default: return 'grey';
  }
}

function truncate(s: string, len: number): string {
  if (!s) return '';
  return s.length <= len ? s : s.slice(0, len) + '…';
}

function formatDate(v: string | number[]): string {
  if (typeof v === 'string') return v.slice(0, 19).replace('T', ' ');
  if (Array.isArray(v) && v.length >= 6) {
    const [y, m, d, h, min, sec] = v;
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')} ${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  return '-';
}

function openDetail(item: CompanyEvaluationListItem) {
  detailItem.value = item;
  detailDialog.value = true;
}

function onListOptionsUpdate(opts: { page?: number; itemsPerPage?: number }) {
  if (opts.page != null) page.value = opts.page - 1;
  if (opts.itemsPerPage != null) pageSize.value = opts.itemsPerPage;
  loadPage(page.value);
}

function onPageChange(oneBased: number) {
  page.value = oneBased - 1;
  loadPage(page.value);
}

async function loadPage(p: number) {
  loadingList.value = true;
  try {
    const res = await fetchCompanyEvaluationPage(p, pageSize.value);
    listItems.value = res.content || [];
    totalElements.value = res.total_elements ?? 0;
    totalPages.value = Math.max(1, res.total_pages ?? 0);
    page.value = res.number ?? p;
  } catch {
    listItems.value = [];
    totalElements.value = 0;
    totalPages.value = 1;
  } finally {
    loadingList.value = false;
  }
}

async function handleDeleteSelected() {
  const ids = selected.value.map((i) => i.id);
  if (!ids.length) return;
  deleting.value = true;
  try {
    const res = await deleteCompanyEvaluationsByIds(ids);
    snackbar.show({ message: `已删除 ${res.deleted} 条记录`, color: 'success' });
    selected.value = [];
    await loadPage(page.value);
  } catch {
    snackbar.show({ message: '删除失败，请重试', color: 'error' });
  } finally {
    deleting.value = false;
  }
}

async function handleDeleteAll() {
  deleting.value = true;
  try {
    const res = await deleteAllCompanyEvaluations();
    snackbar.show({ message: `已删除 ${res.deleted} 条记录`, color: 'success' });
    selected.value = [];
    await loadPage(0);
  } catch {
    snackbar.show({ message: '删除失败，请重试', color: 'error' });
  } finally {
    deleting.value = false;
  }
}

onMounted(() => {
  loadPage(0);
});
</script>

<style scoped>
.company-evaluation-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.modern-card {
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  background: rgb(var(--v-theme-surface));
  overflow: hidden;
}

.modern-card.loading {
  pointer-events: none;
  opacity: 0.85;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.header-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-icon-wrapper.eval { background: rgba(22, 119, 255, 0.12); }
.header-icon-wrapper.list { background: rgba(0, 184, 107, 0.12); }

.header-content { flex: 1; }
.card-title { font-size: 18px; font-weight: 600; margin: 0 0 4px 0; }
.card-subtitle { font-size: 13px; color: rgba(0, 0, 0, 0.6); margin: 0; }

.header-actions { flex-shrink: 0; }

.card-body { padding: 24px; }

.eval-form {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.eval-input { flex: 1; min-width: 260px; }
.eval-btn { flex-shrink: 0; }

.result-preview-title { font-size: 15px; font-weight: 600; margin: 0 0 12px 0; }

.company-info-cell { font-size: 13px; }

.pagination-wrapper { margin-top: 16px; display: flex; justify-content: center; }

.modern-table { border-radius: 8px; overflow: hidden; }

/* 确认弹窗 */
.confirm-dialog.dialog-card { padding: 0; overflow: hidden; }
.confirm-dialog .dialog-header { display: flex; align-items: center; gap: 12px; padding: 20px 24px; }
.confirm-dialog .dialog-title { margin: 0; font-size: 18px; font-weight: 600; }
.confirm-dialog .dialog-body { padding: 0 24px 16px; }
.confirm-dialog .dialog-message { margin: 0; color: rgba(0, 0, 0, 0.7); }
.confirm-dialog .dialog-footer { display: flex; justify-content: flex-end; gap: 12px; padding: 16px 24px; border-top: 1px solid rgba(0, 0, 0, 0.08); }
</style>
