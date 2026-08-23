<template>
  <section class="run-page" aria-labelledby="run-title">
    <header class="page-intro">
      <div>
        <p class="section-kicker">AUTOMATION RUN</p>
        <h2 id="run-title">先预览，再联系</h2>
        <p>每次运行默认只发现、筛选和匹配岗位。只有你确认候选清单后，系统才会执行投递或打招呼。</p>
      </div>
      <button class="quiet-button" type="button" :disabled="openingSession || !selectedPlatform" @click="openSession">
        <i class="mdi mdi-open-in-new" aria-hidden="true" />
        {{ openingSession ? '正在打开…' : '打开登录会话' }}
      </button>
    </header>

    <div class="run-layout">
      <aside class="run-control" aria-label="运行设置">
        <label for="run-platform">招聘平台</label>
        <select id="run-platform" v-model="selectedPlatform" :disabled="busy">
          <option v-for="platform in platforms" :key="platform.id" :value="platform.id">{{ platform.title }}</option>
        </select>

        <div class="safety-note">
          <i class="mdi mdi-shield-check-outline" aria-hidden="true" />
          <div><strong>联系门禁已开启</strong><span>启动运行不会发送消息或投递简历。</span></div>
        </div>

        <button class="primary-button" type="button" :disabled="busy || !selectedPlatform" @click="start">
          <i :class="busy ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-radar'" aria-hidden="true" />
          {{ busy ? '运行中…' : '开始筛选与匹配' }}
        </button>

        <p v-if="sessionMessage" class="inline-message" role="status">{{ sessionMessage }}</p>
      </aside>

      <div class="run-content">
        <ol class="pipeline" aria-label="工作流阶段">
          <li v-for="item in stages" :key="item.id" :class="stageClass(item.id)">
            <span>{{ item.index }}</span><div><strong>{{ item.title }}</strong><small>{{ item.note }}</small></div>
          </li>
        </ol>

        <div v-if="!snapshot && !error" class="context-state">
          <p class="state-label">准备就绪</p>
          <h3>选择平台并启动一次无副作用预览</h3>
          <p>系统会复用独立 Patchright Profile，读取已保存的搜索条件并返回候选岗位。</p>
        </div>

        <div v-else-if="error" class="context-state context-state--error" role="alert">
          <p class="state-label">运行未开始</p><h3>{{ error }}</h3>
          <p>保留当前平台选择。检查浏览器服务或登录状态后可以直接重试。</p>
          <button class="quiet-button" type="button" @click="start">重试运行</button>
        </div>

        <template v-else-if="snapshot">
          <div v-if="snapshot.status === 'BLOCKED'" class="context-state context-state--warning" role="status">
            <p class="state-label">需要人工处理</p><h3>请先完成 {{ platformName }} 登录</h3>
            <p>{{ snapshot.error }}。登录完成后返回这里重新运行，筛选条件不会丢失。</p>
            <button class="primary-button" type="button" @click="openSession">打开登录会话</button>
          </div>

          <div v-else class="run-summary" aria-live="polite">
            <div><span>发现</span><strong>{{ snapshot.discovered }}</strong></div>
            <div><span>通过过滤</span><strong>{{ snapshot.filtered }}</strong></div>
            <div><span>匹配候选</span><strong>{{ snapshot.matched }}</strong></div>
            <div><span>已联系</span><strong>{{ snapshot.contacted }}</strong></div>
          </div>

          <div v-if="snapshot.jobs.length" class="candidate-section">
            <div class="section-heading">
              <div><p class="section-kicker">CANDIDATE JOBS</p><h3>待确认候选岗位</h3></div>
              <button v-if="snapshot.contactConfirmationRequired" class="danger-button" type="button" @click="confirmDialog = true">
                确认联系 {{ snapshot.jobs.length }} 个岗位
              </button>
            </div>
            <div class="job-table-wrap">
              <table class="job-table">
                <thead><tr><th>岗位</th><th>公司</th><th>地点</th><th>薪资</th><th><span class="sr-only">操作</span></th></tr></thead>
                <tbody>
                  <tr v-for="job in snapshot.jobs" :key="job.platformJobId">
                    <td><strong>{{ job.title || '未命名岗位' }}</strong><small>{{ job.platformJobId }}</small></td>
                    <td>{{ job.company || '—' }}</td><td>{{ job.city || '—' }}</td><td>{{ job.salary || '—' }}</td>
                    <td><a :href="job.href" target="_blank" rel="noreferrer" aria-label="打开岗位详情"><i class="mdi mdi-arrow-top-right" /></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="snapshot.status === 'COMPLETED'" class="context-state">
            <p class="state-label">本次运行已完成</p><h3>没有岗位通过本轮筛选</h3>
            <p>可以调整关键词、城市或匹配规则后再次运行。</p>
          </div>
        </template>
      </div>
    </div>

    <div v-if="confirmDialog" class="dialog-backdrop" @click.self="confirmDialog = false">
      <section class="confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
        <p class="section-kicker">IRREVERSIBLE ACTION</p><h3 id="confirm-title">确认执行联系动作？</h3>
        <p>系统将通过 {{ platformName }} 对当前 {{ snapshot?.jobs.length ?? 0 }} 个候选岗位执行投递或打招呼。每个结果都会单独记录。</p>
        <div class="dialog-actions"><button class="quiet-button" @click="confirmDialog = false">返回检查</button><button class="danger-button" @click="confirmContact">确认并执行</button></div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import { builtInPlatforms, loadRecruitmentPlatforms } from '@/entities/recruitment-platform/model/platforms';
import { confirmWorkflowContact, loadWorkflow, openPlatformSession, startWorkflow, type WorkflowSnapshot, type WorkflowStage } from '@/shared/api/recruitment';

const platforms = ref(builtInPlatforms);
const selectedPlatform = ref('boss');
const snapshot = ref<WorkflowSnapshot | null>(null);
const error = ref('');
const openingSession = ref(false);
const sessionMessage = ref('');
const confirmDialog = ref(false);
let pollTimer: number | undefined;

const busy = computed(() => snapshot.value?.status === 'QUEUED' || snapshot.value?.status === 'RUNNING');
const platformName = computed(() => platforms.value.find(({ id }) => id === selectedPlatform.value)?.title ?? selectedPlatform.value);
const stages: Array<{ id: WorkflowStage; index: string; title: string; note: string }> = [
  { id: 'DISCOVER', index: '01', title: '发现', note: '读取平台岗位' },
  { id: 'FILTER', index: '02', title: '过滤', note: '排除黑名单与硬条件' },
  { id: 'MATCH', index: '03', title: '匹配', note: '形成候选清单' },
  { id: 'CONTACT', index: '04', title: '联系', note: '等待你的确认' },
];

loadRecruitmentPlatforms().then((value) => { platforms.value = value; }).catch(() => undefined);

function stageClass(stage: WorkflowStage) {
  const current = stages.findIndex(({ id }) => id === snapshot.value?.stage);
  const index = stages.findIndex(({ id }) => id === stage);
  return { active: index === current, complete: index < current || snapshot.value?.status === 'COMPLETED' };
}

async function start() {
  stopPolling(); error.value = ''; sessionMessage.value = '';
  try {
    snapshot.value = await startWorkflow(selectedPlatform.value);
    schedulePoll();
  } catch (reason) {
    error.value = reason instanceof Error ? reason.message : '无法启动运行';
  }
}

async function openSession() {
  openingSession.value = true; sessionMessage.value = '';
  try {
    const session = await openPlatformSession(selectedPlatform.value);
    sessionMessage.value = `已打开登录会话：${session.currentUrl}`;
  } catch (reason) {
    sessionMessage.value = reason instanceof Error ? reason.message : '无法打开登录会话';
  } finally {
    openingSession.value = false;
  }
}

async function confirmContact() {
  if (!snapshot.value) return;
  confirmDialog.value = false;
  try {
    snapshot.value = await confirmWorkflowContact(snapshot.value.taskId);
    schedulePoll();
  } catch (reason) {
    error.value = reason instanceof Error ? reason.message : '无法执行联系动作';
  }
}

function schedulePoll() {
  stopPolling();
  if (!snapshot.value || !['QUEUED', 'RUNNING'].includes(snapshot.value.status)) return;
  pollTimer = window.setTimeout(async () => {
    try {
      if (snapshot.value) snapshot.value = await loadWorkflow(snapshot.value.taskId);
      schedulePoll();
    } catch (reason) {
      error.value = reason instanceof Error ? reason.message : '无法读取运行状态';
    }
  }, 1200);
}

function stopPolling() { if (pollTimer) window.clearTimeout(pollTimer); pollTimer = undefined; }
onBeforeUnmount(stopPolling);
</script>

<style scoped lang="scss">
.run-page { padding: var(--space-7); }
.page-intro, .section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: var(--space-5); }
.page-intro { max-width: 1180px; margin: 0 auto var(--space-7); }
.page-intro h2, .section-heading h3, .context-state h3, .confirm-dialog h3 { margin: 0; color: var(--ink-strong); font-family: var(--font-display); font-weight: 560; letter-spacing: -.025em; }
.page-intro h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); }.page-intro p:not(.section-kicker) { max-width: 680px; margin: 8px 0 0; color: var(--ink-muted); }
.section-kicker, .state-label { margin: 0 0 7px; color: var(--accent); font-size: 10px; font-weight: 750; letter-spacing: .17em; }
.run-layout { display: grid; grid-template-columns: 248px minmax(0, 1fr); max-width: 1180px; margin: 0 auto; border-top: 1px solid var(--line); }
.run-control { padding: var(--space-6) var(--space-6) var(--space-6) 0; border-right: 1px solid var(--line); }.run-control label { display: block; margin-bottom: 8px; font-size: 12px; font-weight: 700; }.run-control select { width: 100%; height: 42px; padding: 0 12px; border: 1px solid var(--line-strong); border-radius: var(--radius-control); background: var(--surface); color: var(--ink-strong); }
.safety-note { display: flex; gap: 10px; margin: var(--space-6) 0; padding: 14px 0; border-block: 1px solid var(--line); }.safety-note i { color: var(--success); font-size: 20px; }.safety-note div { display: grid; gap: 3px; }.safety-note strong { font-size: 12px; }.safety-note span, .inline-message { color: var(--ink-muted); font-size: 11px; line-height: 1.5; }
.run-content { min-width: 0; padding: var(--space-6) 0 var(--space-8) var(--space-7); }.pipeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin: 0 0 var(--space-7); padding: 0; list-style: none; }.pipeline li { display: flex; gap: 10px; padding: 0 14px 14px; border-bottom: 2px solid var(--line); color: var(--ink-faint); }.pipeline li:first-child { padding-left: 0; }.pipeline li span { font: 600 11px var(--font-mono); }.pipeline li div { display: grid; }.pipeline strong { color: inherit; font-size: 12px; }.pipeline small { margin-top: 2px; font-size: 10px; }.pipeline .active { border-color: var(--accent); color: var(--accent); }.pipeline .complete { border-color: var(--success); color: var(--ink-muted); }
.context-state { padding: var(--space-8) 0; border-block: 1px solid var(--line); }.context-state h3 { font-size: 22px; }.context-state p:not(.state-label) { max-width: 620px; color: var(--ink-muted); }.context-state--warning { border-color: var(--warning-line); }.context-state--error { border-color: var(--danger-line); }
.run-summary { display: grid; grid-template-columns: repeat(4, 1fr); margin-bottom: var(--space-7); border-block: 1px solid var(--line); }.run-summary div { display: grid; gap: 4px; padding: 18px; border-right: 1px solid var(--line); }.run-summary div:first-child { padding-left: 0; }.run-summary div:last-child { border: 0; }.run-summary span { color: var(--ink-muted); font-size: 11px; }.run-summary strong { color: var(--ink-strong); font: 500 25px var(--font-display); }
.candidate-section { min-width: 0; }.section-heading { margin-bottom: var(--space-4); }.section-heading h3 { font-size: 20px; }.job-table-wrap { overflow-x: auto; border-block: 1px solid var(--line); }.job-table { width: 100%; min-width: 720px; border-collapse: collapse; text-align: left; }.job-table th { padding: 10px 12px; color: var(--ink-faint); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }.job-table td { padding: 13px 12px; border-top: 1px solid var(--line); color: var(--ink); font-size: 12px; }.job-table td:first-child { min-width: 220px; }.job-table td strong, .job-table td small { display: block; }.job-table td small { margin-top: 3px; color: var(--ink-faint); font: 10px var(--font-mono); }.job-table a { color: var(--accent); }
.primary-button, .quiet-button, .danger-button { display: inline-flex; min-height: 40px; align-items: center; justify-content: center; gap: 8px; border-radius: var(--radius-control); padding: 0 14px; font-size: 12px; font-weight: 700; cursor: pointer; }.primary-button { width: 100%; border: 1px solid var(--accent); background: var(--accent); color: white; }.quiet-button { border: 1px solid var(--line-strong); background: var(--surface); color: var(--ink); }.danger-button { border: 1px solid var(--danger); background: var(--danger); color: white; }.primary-button:disabled, .quiet-button:disabled { cursor: not-allowed; opacity: .5; }
.dialog-backdrop { position: fixed; z-index: 1400; inset: 0; display: grid; place-items: center; padding: 20px; background: rgb(30 27 24 / 42%); }.confirm-dialog { width: min(480px, 100%); padding: var(--space-7); border: 1px solid var(--line); border-radius: var(--radius-panel); background: var(--surface); box-shadow: var(--shadow-elevated); }.confirm-dialog h3 { font-size: 24px; }.confirm-dialog p:not(.section-kicker) { color: var(--ink-muted); line-height: 1.65; }.dialog-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: var(--space-6); }
@media (max-width: 820px) { .run-page { padding: 20px 16px; }.page-intro { align-items: flex-start; flex-direction: column; }.run-layout { grid-template-columns: 1fr; }.run-control { padding: 20px 0; border-right: 0; border-bottom: 1px solid var(--line); }.run-content { padding: 24px 0; }.pipeline { grid-template-columns: repeat(2, 1fr); row-gap: 14px; }.run-summary { grid-template-columns: repeat(2, 1fr); }.run-summary div:nth-child(2) { border-right: 0; }.section-heading { align-items: flex-start; flex-direction: column; } }
</style>
