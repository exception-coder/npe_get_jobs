<template>
  <div class="company-evaluation-container">
    <section class="evaluation-entry" :class="{ loading: evaluating }">
      <header><p>企业判断</p><h4>这家公司值得进一步了解吗？</h4><span>输入企业名称或一段公司描述，系统会整理风险信号和判断依据。</span></header>
      <form @submit.prevent="runEvaluate"><input v-model.trim="companyNameInput" :disabled="evaluating" placeholder="企业名称或公司描述" /><button type="submit" :disabled="evaluating || !companyNameInput">{{ evaluating ? '正在判断…' : '开始判断' }}</button></form>
      <p v-if="evaluateError" class="evaluation-error">{{ evaluateError }}</p>
      <div v-if="lastResult" class="result-preview"><h3 class="result-preview-title">本次判断</h3><ResultCard :result="lastResult" /></div>
    </section>

    <section class="history-section" :class="{ loading: loadingList }">
      <header>
        <div><p>判断记录</p><h4>最近了解过的企业</h4><span>共 {{ totalElements }} 条，按时间倒序</span></div>
        <div class="history-actions">
          <button type="button" :disabled="loadingList" @click="loadPage(0)">刷新</button>
          <button type="button" :disabled="!selected.length || deleting" @click="openConfirm('删除所选记录', `确定删除所选 ${selected.length} 条评估记录？`, handleDeleteSelected)">删除所选</button>
          <button type="button" class="danger" :disabled="deleting || totalElements === 0" @click="openConfirm('全部删除', '确定删除全部评估记录？', handleDeleteAll)">清空记录</button>
        </div>
      </header>

      <div v-if="listItems.length" class="history-list">
        <article v-for="item in listItems" :key="item.id">
          <label class="history-check"><input v-model="selected" type="checkbox" :value="item" /><span class="sr-only">选择此记录</span></label>
          <button type="button" class="history-main" :disabled="!item.result" @click="openDetail(item)">
            <strong>{{ truncate(item.company_info, 60) }}</strong>
            <span>{{ formatDate(item.created_at) }}</span>
          </button>
          <div class="history-result">
            <strong v-if="item.result" :data-tone="recommendationTone(item.result.recommendation_code)">{{ item.result.recommendation_level || item.result.recommendation_code }}</strong>
            <span>{{ item.result?.total_score ?? '-' }} 分</span>
          </div>
        </article>
      </div>
      <p v-else class="empty-history">{{ loadingList ? '正在读取记录…' : '还没有企业判断记录' }}</p>

      <footer v-if="totalPages > 1">
        <button type="button" :disabled="page === 0" @click="onPageChange(page)">上一页</button>
        <span>{{ page + 1 }} / {{ totalPages }}</span>
        <button type="button" :disabled="page + 1 >= totalPages" @click="onPageChange(page + 2)">下一页</button>
      </footer>
    </section>

    <div v-if="confirmDialog.visible" class="dialog-backdrop" role="presentation" @click.self="confirmDialog.visible = false">
      <section class="plain-dialog" role="dialog" aria-modal="true" :aria-label="confirmDialog.title">
        <h3>{{ confirmDialog.title }}</h3><p>{{ confirmDialog.message }}</p>
        <footer><button type="button" @click="confirmDialog.visible = false">取消</button><button type="button" class="primary" @click="confirmDialog.confirm">确定</button></footer>
      </section>
    </div>

    <div v-if="detailDialog && detailItem?.result" class="dialog-backdrop" role="presentation" @click.self="detailDialog = false">
      <section class="plain-dialog detail-dialog" role="dialog" aria-modal="true" aria-label="企业评估详情">
        <header><h3>{{ detailItem.result.company_name || '企业评估详情' }}</h3><button type="button" @click="detailDialog = false">关闭</button></header>
        <ResultCard :result="detailItem.result" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
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

const selectedPlatform = ref('DEEPSEEK');

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

async function runEvaluate() {
  const name = companyNameInput.value?.trim();
  if (!name) return;
  evaluating.value = true;
  evaluateError.value = '';
  lastResult.value = null;
  try {
    const res = await evaluateCompany(name, selectedPlatform.value);
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

function recommendationTone(code?: string): string {
  if (!code) return 'neutral';
  switch (code.toUpperCase()) {
    case 'STRONGLY_RECOMMENDED':
    case 'RECOMMENDED': return 'positive';
    case 'CAUTIOUS': return 'cautious';
    case 'NOT_RECOMMENDED': return 'negative';
    default: return 'neutral';
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

.evaluation-entry { padding: 34px 0 38px; border-top: 1px solid var(--line); }.evaluation-entry.loading { pointer-events: none; opacity: .6; }.evaluation-entry header p { margin: 0 0 6px; color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .08em; }.evaluation-entry h4 { margin: 0; color: var(--ink-strong); font: 560 20px var(--font-display); }.evaluation-entry header span { display: block; margin-top: 7px; color: var(--ink-faint); font-size: 10px; }.evaluation-entry form { display: flex; gap: 8px; margin-top: 22px; }.evaluation-entry form input { min-width: 0; flex: 1; height: 44px; border: 1px solid var(--line-strong, #d4cec5); border-radius: 9px; outline: 0; background: color-mix(in srgb, var(--surface) 72%, transparent); padding: 0 12px; color: var(--ink-strong); font-size: 11px; }.evaluation-entry form input:focus { border-color: var(--accent); }.evaluation-entry form button { min-width: 92px; border: 0; border-radius: 22px; background: var(--ink-strong); color: white; font-size: 10px; font-weight: 700; cursor: pointer; }.evaluation-entry form button:disabled { opacity: .4; }.evaluation-error { margin: 12px 0 0; color: var(--danger); font-size: 10px; }.evaluation-entry .result-preview { margin-top: 26px; padding-top: 22px; border-top: 1px solid var(--line); }

.result-preview-title { font-size: 15px; font-weight: 600; margin: 0 0 12px 0; }
.evaluation-entry form input { height: 38px; border-radius: 8px; }

.history-section { padding: 34px 0; border-top: 1px solid var(--line); color: var(--ink-strong); }
.history-section.loading { opacity: .65; }
.history-section > header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; margin-bottom: 20px; }
.history-section header p { margin: 0 0 6px; color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .08em; }
.history-section h4 { margin: 0; font: 560 20px var(--font-display); }
.history-section header span { display: block; margin-top: 7px; color: var(--ink-faint); font-size: 10px; }
.history-actions { display: flex; gap: 6px; }
.history-actions button, .history-section > footer button { min-height: 32px; border: 1px solid var(--line); border-radius: 16px; background: transparent; padding: 0 11px; color: var(--ink-muted); font-size: 10px; font-weight: 650; cursor: pointer; }
.history-actions button.danger { color: var(--danger); }
.history-actions button:disabled, .history-section > footer button:disabled { opacity: .35; cursor: default; }
.history-list { border-top: 1px solid var(--line); }
.history-list article { display: grid; grid-template-columns: 28px minmax(0, 1fr) minmax(130px, auto); align-items: center; gap: 12px; min-height: 66px; border-bottom: 1px solid var(--line); }
.history-check { display: grid; place-items: center; }
.history-check input { width: 14px; height: 14px; accent-color: var(--ink-strong); }
.history-main { display: grid; gap: 5px; border: 0; background: transparent; padding: 12px 0; color: var(--ink-strong); text-align: left; cursor: pointer; }
.history-main strong { overflow: hidden; font-size: 11px; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
.history-main span, .history-result span { color: var(--ink-faint); font-size: 9px; }
.history-result { display: flex; align-items: baseline; justify-content: flex-end; gap: 8px; }
.history-result strong { font-size: 10px; font-weight: 700; }
.history-result strong[data-tone='positive'] { color: var(--success); }
.history-result strong[data-tone='cautious'] { color: var(--warning, #9a6b2f); }
.history-result strong[data-tone='negative'] { color: var(--danger); }
.empty-history { margin: 0; padding: 34px 0; border-block: 1px solid var(--line); color: var(--ink-faint); font-size: 10px; text-align: center; }
.history-section > footer { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 18px; }
.history-section > footer span { color: var(--ink-faint); font-size: 9px; }

.dialog-backdrop { position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; background: rgb(22 20 17 / 32%); padding: 20px; }
.plain-dialog { width: min(420px, 100%); border: 1px solid var(--line); border-radius: 12px; background: var(--surface, #fff); box-shadow: 0 18px 60px rgb(22 20 17 / 14%); padding: 22px; color: var(--ink-strong); }
.plain-dialog h3 { margin: 0; font: 560 18px var(--font-display); }
.plain-dialog > p { margin: 10px 0 0; color: var(--ink-muted); font-size: 11px; line-height: 1.6; }
.plain-dialog > footer { display: flex; justify-content: flex-end; gap: 8px; margin-top: 24px; }
.plain-dialog button { min-height: 34px; border: 1px solid var(--line); border-radius: 17px; background: transparent; padding: 0 14px; color: var(--ink-muted); font-size: 10px; font-weight: 650; cursor: pointer; }
.plain-dialog button.primary { border-color: var(--ink-strong); background: var(--ink-strong); color: white; }
.plain-dialog.detail-dialog { width: min(680px, 100%); max-height: calc(100vh - 40px); overflow: auto; }
.detail-dialog > header { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--line); }
.detail-dialog > header button { border: 0; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }

@media (max-width: 720px) {
  .company-evaluation-container { padding: 12px; }
  .history-section > header { flex-direction: column; }
  .history-actions { flex-wrap: wrap; }
  .history-list article { grid-template-columns: 24px minmax(0, 1fr); }
  .history-result { grid-column: 2; justify-content: flex-start; padding-bottom: 12px; }
}
</style>
