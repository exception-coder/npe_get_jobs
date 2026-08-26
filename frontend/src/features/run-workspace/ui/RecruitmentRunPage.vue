<template>
  <section class="workspace" aria-labelledby="workspace-title">
    <nav :class="['view-switcher', { compact: activeView !== 'operate' }]" aria-label="求职工作台">
      <button v-for="item in workspaceViews" :key="item.id" type="button" :class="{ active: activeView === item.id }" @click="activeView = item.id">
        {{ item.title }}
      </button>
    </nav>

    <template v-if="activeView === 'operate'">
      <div class="hero">
        <p class="eyebrow">{{ greeting }}</p>
        <h2 id="workspace-title">今天想找什么工作？</h2>
        <p class="hero-copy">说出岗位目标，系统会带回值得你判断的机会。</p>

        <form class="intent-composer" @submit.prevent="start">
          <label class="sr-only" for="job-goal">目标岗位</label>
          <textarea id="job-goal" v-model="goal" rows="3" placeholder="例如：广州 Java 高级工程师，偏电商或供应链方向" @keydown.meta.enter="start" @keydown.ctrl.enter="start" />
          <div class="composer-foot">
            <button class="source-trigger" type="button" :aria-expanded="showSources" @click="showSources = !showSources">
              <span :class="['source-dot', authenticated ? 'connected' : '']" />{{ platformName }}{{ authenticated ? ' 已连接' : ' 待登录' }}<i class="mdi mdi-chevron-down" />
            </button>
            <button class="find-button" type="submit" :disabled="busy || interpreting || !goal.trim()">
              <i :class="busy || interpreting ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-arrow-up'" />{{ interpreting ? '正在理解' : busy ? '正在寻找' : '开始寻找' }}
            </button>
          </div>
        </form>

        <section v-if="interpretedGoal" class="goal-config" aria-label="已保存的岗位条件">
          <div class="goal-config-heading">
            <span><i class="mdi mdi-check-circle-outline" /> 已理解并保存</span>
            <small>目标版本 #{{ interpretedGoal.id }}</small>
          </div>
          <p>{{ interpretedGoal.summary || interpretedGoal.rawGoal }}</p>
          <div v-if="semanticChips.length" class="goal-chips">
            <span v-for="chip in semanticChips" :key="chip">{{ chip }}</span>
          </div>
        </section>

        <div class="suggestions" aria-label="常用目标">
          <button v-for="item in suggestions" :key="item" type="button" @click="goal = item">{{ item }}</button>
        </div>
      </div>

      <Transition name="reveal">
        <section v-if="showSources" class="source-drawer" aria-labelledby="source-title">
          <div class="drawer-heading"><div><span>来源与条件</span><h3 id="source-title">从哪里找</h3></div><button type="button" aria-label="关闭" @click="showSources = false"><i class="mdi mdi-close" /></button></div>
          <PlatformRail v-model="selectedPlatform" :platforms="platforms" :status-label="platformStatusLabel" />
          <div class="drawer-foot"><p>当前每次任务优先使用一个平台；城市、薪资和排除条件沿用你的求职设置。</p><button type="button" @click="openAssets('settings')">调整求职设置</button></div>
        </section>
      </Transition>

      <section v-if="!authenticated" class="login-notice" aria-live="polite">
        <span class="login-icon"><i class="mdi mdi-qrcode-scan" /></span>
        <div><strong>{{ platformName }} 需要登录</strong><p>{{ sessionMessage || '扫码一次，登录成功后会自动继续刚才的寻找。' }}</p></div>
        <button type="button" :disabled="openingSession" @click="openSession">{{ openingSession ? '正在打开…' : '打开登录' }}</button>
      </section>

      <section v-if="snapshot || error" class="result-area" aria-live="polite">
        <div v-if="error" class="empty-result error" role="alert"><span>没有开始寻找</span><h3>{{ error }}</h3><button type="button" @click="start">再试一次</button></div>

        <template v-else-if="snapshot">
          <div v-if="busy" class="searching-state">
            <span class="search-orbit"><i class="mdi mdi-sparkles" /></span><div><h3>正在寻找合适的岗位…</h3><p>已查看 {{ snapshot.discovered }} 个机会</p></div>
          </div>

          <template v-else>
            <header class="result-heading">
              <div><span>{{ snapshot.jobs.length ? '为你筛选完成' : '本次寻找完成' }}</span><h3>{{ snapshot.jobs.length ? `找到 ${snapshot.jobs.length} 个值得看的岗位` : '暂时没有合适的岗位' }}</h3></div>
              <button class="process-button" type="button" @click="showProcess = !showProcess">{{ showProcess ? '收起过程' : '查看过程' }}<i class="mdi mdi-chevron-down" /></button>
            </header>

            <div v-if="showProcess" class="process-strip">
              <span><i class="mdi mdi-check" />浏览 {{ snapshot.discovered }}</span><span><i class="mdi mdi-check" />通过过滤 {{ snapshot.filtered }}</span><span><i class="mdi mdi-check" />推荐 {{ snapshot.matched }}</span><span><i class="mdi mdi-check" />已联系 {{ snapshot.contacted }}</span>
            </div>

            <div v-if="snapshot.jobs.length" class="job-cards">
              <article v-for="job in snapshot.jobs" :key="job.platformJobId" class="job-card">
                <div class="job-card-main"><span>{{ platformName }}</span><h4>{{ job.title || '未命名岗位' }}</h4><p>{{ job.company || '未知公司' }} · {{ job.city || '地点待确认' }}</p></div>
                <div class="job-verdict"><strong>{{ job.salary || '薪资待确认' }}</strong><span><i class="mdi mdi-sparkles" /> 值得进一步判断</span></div>
                <JobDecisionFacts
                  :experience="job.facts?.experience" :degree="job.facts?.degree"
                  :company-industry="job.facts?.companyIndustry" :company-stage="job.facts?.companyStage" :company-scale="job.facts?.companyScale"
                  :recruiter-name="job.facts?.recruiterName" :recruiter-title="job.facts?.recruiterTitle"
                  :recruiter-online="job.facts?.recruiterOnline" :recruiter-active-text="job.facts?.recruiterActiveText"
                  :skills="job.facts?.skills" :benefits="job.facts?.benefits"
                />
                <div class="job-reason"><span>推荐结论</span><p>已通过当前岗位目标与基础条件筛选，联系前仍建议查看完整职责。</p></div>
                <div class="job-actions"><a :href="job.href" target="_blank" rel="noreferrer">查看完整岗位 <i class="mdi mdi-arrow-top-right" /></a></div>
              </article>
            </div>

            <div v-else class="empty-result"><span>可以换一种说法</span><h3>试试更宽泛的岗位关键词</h3><p>也可以调整城市、薪资或匹配规则后重新寻找。</p><button type="button" @click="openAssets('settings')">调整条件</button></div>

            <div v-if="snapshot.contactConfirmationRequired" class="decision-bar"><div><strong>这些岗位值得联系吗？</strong><span>发送招呼或投递前，仍需要你的最后确认。</span></div><button type="button" @click="confirmDialog = true">确认联系 {{ snapshot.jobs.length }} 个岗位</button></div>
          </template>
        </template>
      </section>
    </template>

    <JobLedgerPanel v-else-if="activeView === 'history'" :platform="selectedPlatformCode" :platform-title="platformName" :platforms="platforms" @update:platform="selectedPlatform = $event" />
    <CareerCapabilitiesPanel v-else />

    <div v-if="confirmDialog" class="dialog-backdrop" @click.self="confirmDialog = false">
      <section class="confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
        <span>发送前确认</span><h3 id="confirm-title">联系这 {{ snapshot?.jobs.length ?? 0 }} 个岗位？</h3><p>系统将通过 {{ platformName }} 执行投递或打招呼，并分别记录每个结果。</p>
        <div><button type="button" @click="confirmDialog = false">再看一眼</button><button class="confirm" type="button" @click="confirmContact">确认联系</button></div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { builtInPlatforms, loadRecruitmentPlatforms } from '@/entities/recruitment-platform/model/platforms';
import type { PlatformCode } from '@/modules/intelligent-job-search/api/platformConfigApi';
import {
  confirmWorkflowContact,
  interpretRecruitmentGoal,
  loadActiveRecruitmentGoal,
  loadPlatformSessionStatus,
  loadWorkflow,
  openPlatformSession,
  startWorkflow,
  type RecruitmentGoal,
  type WorkflowSnapshot,
} from '@/shared/api/recruitment';
import CareerCapabilitiesPanel from './CareerCapabilitiesPanel.vue';
import JobLedgerPanel from './JobLedgerPanel.vue';
import JobDecisionFacts from './JobDecisionFacts.vue';
import PlatformRail from './PlatformRail.vue';

type WorkspaceView = 'operate' | 'history' | 'assets';
const route = useRoute();
const router = useRouter();
const platforms = ref(builtInPlatforms);
const selectedPlatform = ref(typeof route.query.platform === 'string' ? route.query.platform : 'boss');
const activeView = ref<WorkspaceView>(route.query.view === 'history' || route.query.view === 'assets' ? route.query.view : 'operate');
const showSources = ref(route.query.sources === 'open');
const showProcess = ref(false);
const goal = ref(localStorage.getItem('career-flow:last-goal') ?? '');
const interpretedGoal = ref<RecruitmentGoal | null>(null);
const interpreting = ref(false);
const snapshot = ref<WorkflowSnapshot | null>(null);
const error = ref('');
const openingSession = ref(false);
const sessionMessage = ref('');
const sessionId = ref('');
const authenticated = ref(false);
const pendingStart = ref(false);
const confirmDialog = ref(false);
let pollTimer: number | undefined;
let sessionPollTimer: number | undefined;

const workspaceViews = [
  { id: 'operate', title: '今天' },
  { id: 'history', title: '岗位库' },
  { id: 'assets', title: '策略与资产' },
] as const;
const suggestions = ['Java 高级工程师', '产品经理', '前端工程师'];
const busy = computed(() => snapshot.value?.status === 'QUEUED' || snapshot.value?.status === 'RUNNING');
const platformName = computed(() => platforms.value.find(({ id }) => id === selectedPlatform.value)?.title ?? selectedPlatform.value);
const selectedPlatformCode = computed(() => selectedPlatform.value as PlatformCode);
const platformStatusLabel = computed(() => authenticated.value ? '已连接' : openingSession.value ? '正在打开' : '需要登录');
const greeting = computed(() => new Date().getHours() < 12 ? '早上好，张凯' : new Date().getHours() < 18 ? '下午好，张凯' : '晚上好，张凯');
const semanticChips = computed(() => {
  const current = interpretedGoal.value;
  if (!current) return [];
  const chips = [
    ...current.keywords.map((value) => `岗位 · ${value}`),
    ...current.cities.map((value) => `城市 · ${value}`),
    salaryChip(current),
    experienceChip(current),
    ...current.industries.map((value) => `行业 · ${value}`),
    ...current.skills.map((value) => `技能 · ${value}`),
    ...current.excludedKeywords.map((value) => `排除 · ${value}`),
    ...current.preferredCompanyTypes.map((value) => `公司 · ${value}`),
    current.jobType ? `类型 · ${current.jobType}` : '',
  ];
  return chips.filter(Boolean);
});

loadRecruitmentPlatforms().then((value) => { platforms.value = value; }).catch(() => undefined);

async function start() {
  if (!goal.value.trim() || busy.value || interpreting.value) return;
  localStorage.setItem('career-flow:last-goal', goal.value.trim());
  error.value = '';
  let savedGoal: RecruitmentGoal;
  try {
    savedGoal = await ensureGoal();
  } catch (reason) {
    error.value = reason instanceof Error ? reason.message : '暂时无法理解并保存岗位目标';
    return;
  }
  if (!authenticated.value) {
    pendingStart.value = true;
    sessionMessage.value = '登录后会自动继续这次寻找。';
    await openSession();
    return;
  }
  pendingStart.value = false;
  stopPolling();
  try {
    snapshot.value = await startWorkflow(selectedPlatform.value, savedGoal.id);
    schedulePoll();
  } catch (reason) {
    error.value = reason instanceof Error ? reason.message : '暂时无法开始寻找';
  }
}

async function ensureGoal(): Promise<RecruitmentGoal> {
  const rawGoal = goal.value.trim();
  if (interpretedGoal.value?.rawGoal === rawGoal) return interpretedGoal.value;
  interpreting.value = true;
  try {
    interpretedGoal.value = await interpretRecruitmentGoal(rawGoal);
    return interpretedGoal.value;
  } finally {
    interpreting.value = false;
  }
}

function salaryChip(current: RecruitmentGoal): string {
  if (current.minSalaryK != null && current.maxSalaryK != null) return `薪资 · ${current.minSalaryK}-${current.maxSalaryK}K`;
  if (current.minSalaryK != null) return `薪资 · ${current.minSalaryK}K 以上`;
  if (current.maxSalaryK != null) return `薪资 · ${current.maxSalaryK}K 以下`;
  return '';
}

function experienceChip(current: RecruitmentGoal): string {
  if (current.minExperienceYears != null && current.maxExperienceYears != null) return `经验 · ${current.minExperienceYears}-${current.maxExperienceYears} 年`;
  if (current.minExperienceYears != null) return `经验 · ${current.minExperienceYears} 年以上`;
  if (current.maxExperienceYears != null) return `经验 · ${current.maxExperienceYears} 年以内`;
  return '';
}

async function openSession() {
  if (openingSession.value) return;
  openingSession.value = true;
  try {
    const session = await openPlatformSession(selectedPlatform.value);
    sessionId.value = session.sessionId;
    sessionMessage.value = '等待扫码登录…';
    scheduleSessionPoll();
  } catch (reason) {
    sessionMessage.value = reason instanceof Error ? reason.message : '无法打开登录窗口';
  } finally {
    openingSession.value = false;
  }
}

function scheduleSessionPoll() {
  stopSessionPolling();
  if (!sessionId.value || authenticated.value) return;
  sessionPollTimer = window.setTimeout(async () => {
    try {
      const status = await loadPlatformSessionStatus(selectedPlatform.value, sessionId.value);
      authenticated.value = status.authenticated;
      sessionMessage.value = status.authenticated ? '已连接，正在继续…' : '等待扫码登录…';
      if (status.authenticated && pendingStart.value) await start();
    } catch (reason) {
      sessionMessage.value = reason instanceof Error ? reason.message : '无法检查登录状态';
    }
    scheduleSessionPoll();
  }, 1500);
}

async function confirmContact() {
  if (!snapshot.value) return;
  confirmDialog.value = false;
  try { snapshot.value = await confirmWorkflowContact(snapshot.value.taskId); schedulePoll(); }
  catch (reason) { error.value = reason instanceof Error ? reason.message : '暂时无法联系岗位'; }
}

function schedulePoll() {
  stopPolling();
  if (!snapshot.value || !['QUEUED', 'RUNNING'].includes(snapshot.value.status)) return;
  pollTimer = window.setTimeout(async () => {
    try { if (snapshot.value) snapshot.value = await loadWorkflow(snapshot.value.taskId); schedulePoll(); }
    catch (reason) { error.value = reason instanceof Error ? reason.message : '无法读取寻找进度'; }
  }, 1200);
}

function openAssets(capability: string) {
  activeView.value = 'assets';
  void router.replace({ query: { ...route.query, platform: selectedPlatform.value, view: 'assets', capability } });
}
function stopPolling() { if (pollTimer) window.clearTimeout(pollTimer); pollTimer = undefined; }
function stopSessionPolling() { if (sessionPollTimer) window.clearTimeout(sessionPollTimer); sessionPollTimer = undefined; }

watch(selectedPlatform, () => {
  stopSessionPolling(); sessionId.value = ''; authenticated.value = false; snapshot.value = null; error.value = '';
  if (activeView.value === 'operate') void openSession();
});
watch([selectedPlatform, activeView], ([platform, view]) => {
  void router.replace({ query: { ...route.query, platform, view, ...(showSources.value ? { sources: 'open' } : {}) } });
});
watch(activeView, (view) => { if (view === 'operate' && !sessionId.value) void openSession(); });
watch(goal, (value) => {
  if (interpretedGoal.value && interpretedGoal.value.rawGoal !== value.trim()) interpretedGoal.value = null;
});

onMounted(async () => {
  try {
    const activeGoal = await loadActiveRecruitmentGoal();
    if (activeGoal) {
      goal.value = activeGoal.rawGoal;
      interpretedGoal.value = activeGoal;
    }
  } catch {
    // The editor remains usable when no backend goal exists yet.
  }
  if (activeView.value === 'operate') void openSession();
});
onBeforeUnmount(() => { stopPolling(); stopSessionPolling(); });
</script>

<style scoped lang="scss">
.workspace { width: min(1040px, calc(100% - 48px)); margin: 0 auto; padding: 12px 0 80px; }.view-switcher { display: flex; gap: 4px; margin-bottom: 58px; }.view-switcher button { display: inline-flex; min-height: 36px; align-items: center; gap: 7px; border: 0; border-radius: 18px; background: transparent; padding: 0 13px; color: var(--ink-faint); font-size: 11px; font-weight: 650; cursor: pointer; }.view-switcher button.active { background: var(--surface); color: var(--ink-strong); box-shadow: 0 1px 8px rgb(58 48 40 / 6%); }.hero { max-width: 760px; margin: 0 auto; }.eyebrow { margin: 0 0 10px; color: var(--accent); font-size: 11px; font-weight: 700; }.hero h2 { margin: 0; color: var(--ink-strong); font: 560 clamp(2.25rem, 5vw, 4rem)/1.08 var(--font-display); letter-spacing: -.045em; }.hero-copy { margin: 13px 0 30px; color: var(--ink-muted); font-size: 14px; }.intent-composer { padding: 18px; border-radius: 18px; background: var(--surface); box-shadow: 0 12px 42px rgb(68 55 45 / 9%), 0 1px 0 rgb(255 255 255 / 80%) inset; }.intent-composer textarea { display: block; width: 100%; min-height: 92px; resize: vertical; border: 0; outline: 0; background: transparent; color: var(--ink-strong); font-size: 18px; line-height: 1.55; }.intent-composer textarea::placeholder { color: var(--ink-faint); }.composer-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; }.source-trigger { display: inline-flex; min-height: 34px; align-items: center; gap: 7px; border: 0; border-radius: 17px; background: var(--surface-subtle); padding: 0 11px; color: var(--ink-muted); font-size: 10px; cursor: pointer; }.source-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--warning); }.source-dot.connected { background: var(--success); }.find-button { display: inline-flex; min-height: 40px; align-items: center; gap: 8px; border: 0; border-radius: 20px; background: var(--ink-strong); padding: 0 17px; color: white; font-size: 11px; font-weight: 700; cursor: pointer; }.find-button i { display: grid; width: 22px; height: 22px; place-items: center; border-radius: 50%; background: rgb(255 255 255 / 13%); }.find-button:disabled { cursor: not-allowed; opacity: .38; }.suggestions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 13px; }.suggestions button { min-height: 30px; border: 0; border-radius: 15px; background: transparent; padding: 0 11px; color: var(--ink-faint); font-size: 10px; cursor: pointer; }.suggestions button:hover { background: var(--selection); color: var(--ink); }
.goal-config { margin-top: 12px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--success) 20%, transparent); border-radius: 13px; background: color-mix(in srgb, var(--surface) 78%, transparent); }.goal-config-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }.goal-config-heading span { color: var(--success); font-size: 10px; font-weight: 700; }.goal-config-heading small { color: var(--ink-faint); font-size: 9px; }.goal-config > p { margin: 8px 0 10px; color: var(--ink-muted); font-size: 11px; line-height: 1.5; }.goal-chips { display: flex; flex-wrap: wrap; gap: 6px; }.goal-chips span { border-radius: 11px; background: var(--surface-subtle); padding: 5px 9px; color: var(--ink-muted); font-size: 9px; }
.source-drawer { max-width: 760px; margin: 18px auto 0; padding: 22px; border-radius: 14px; background: color-mix(in srgb, var(--surface) 72%, transparent); }.drawer-heading { display: flex; align-items: flex-start; justify-content: space-between; }.drawer-heading span { color: var(--ink-faint); font-size: 9px; font-weight: 700; letter-spacing: .1em; }.drawer-heading h3 { margin: 4px 0 18px; color: var(--ink-strong); font: 560 20px var(--font-display); }.drawer-heading > button { border: 0; background: transparent; color: var(--ink-faint); cursor: pointer; }.source-drawer :deep(.platform-rail) { margin-bottom: 16px; }.drawer-foot { display: flex; align-items: center; justify-content: space-between; gap: 18px; }.drawer-foot p { max-width: 520px; margin: 0; color: var(--ink-faint); font-size: 10px; line-height: 1.55; }.drawer-foot button { border: 0; background: transparent; color: var(--accent); font-size: 10px; font-weight: 700; cursor: pointer; }
.login-notice { display: grid; grid-template-columns: auto 1fr auto; max-width: 760px; align-items: center; gap: 14px; margin: 28px auto 0; padding: 14px 16px; border-radius: 12px; background: #f0e8da; }.login-icon { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 50%; background: var(--surface); color: var(--warning); }.login-notice strong { color: var(--ink-strong); font-size: 11px; }.login-notice p { margin: 3px 0 0; color: var(--ink-muted); font-size: 10px; }.login-notice button, .empty-result button { min-height: 34px; border: 0; border-radius: 17px; background: var(--surface); padding: 0 13px; color: var(--ink); font-size: 10px; font-weight: 700; cursor: pointer; }
.result-area { max-width: 900px; margin: 72px auto 0; }.searching-state { display: flex; align-items: center; justify-content: center; gap: 18px; min-height: 180px; }.search-orbit { display: grid; width: 54px; height: 54px; place-items: center; border-radius: 50%; background: var(--selection); color: var(--accent); animation: breathe 1.8s ease-in-out infinite; }.searching-state h3 { margin: 0; color: var(--ink-strong); font: 560 20px var(--font-display); }.searching-state p { margin: 5px 0 0; color: var(--ink-faint); font-size: 11px; }.result-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 24px; }.result-heading span, .empty-result > span { color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .1em; }.result-heading h3, .empty-result h3 { margin: 6px 0 0; color: var(--ink-strong); font: 560 27px var(--font-display); letter-spacing: -.02em; }.process-button { border: 0; background: transparent; color: var(--ink-faint); font-size: 10px; cursor: pointer; }.process-strip { display: flex; flex-wrap: wrap; gap: 17px; margin: -7px 0 22px; color: var(--ink-faint); font-size: 10px; }.process-strip i { color: var(--success); }.job-cards { display: grid; gap: 12px; }.job-card { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px 26px; padding: 24px; border-radius: 14px; background: var(--surface); box-shadow: 0 4px 20px rgb(58 48 40 / 5%); }.job-card-main > span, .job-reason > span { color: var(--ink-faint); font-size: 9px; font-weight: 700; letter-spacing: .08em; }.job-card h4 { margin: 6px 0 5px; color: var(--ink-strong); font-size: 16px; }.job-card-main p, .job-reason p { margin: 0; color: var(--ink-muted); font-size: 10px; line-height: 1.55; }.job-verdict { display: grid; justify-items: end; align-content: start; gap: 7px; }.job-verdict strong { color: var(--ink-strong); font-size: 13px; }.job-verdict span { color: var(--success); font-size: 9px; }.job-card :deep(.decision-facts) { grid-column: 1 / -1; }.job-reason { align-self: center; }.job-actions { align-self: end; }.job-actions a { display: inline-flex; min-height: 36px; align-items: center; gap: 5px; color: var(--accent); font-size: 10px; font-weight: 700; text-decoration: none; }.empty-result { padding: 44px 0; text-align: center; }.empty-result p { color: var(--ink-muted); font-size: 11px; }.empty-result button { margin-top: 10px; }.empty-result.error { color: var(--danger); }.decision-bar { position: sticky; z-index: 20; bottom: 18px; display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 18px; padding: 15px 18px; border-radius: 14px; background: var(--ink-strong); color: white; box-shadow: var(--shadow-elevated); }.decision-bar div { display: grid; gap: 3px; }.decision-bar strong { font-size: 11px; }.decision-bar span { color: rgb(255 255 255 / 62%); font-size: 9px; }.decision-bar button { min-height: 36px; border: 0; border-radius: 18px; background: white; padding: 0 14px; color: var(--ink-strong); font-size: 10px; font-weight: 750; cursor: pointer; }
.dialog-backdrop { position: fixed; z-index: 1400; inset: 0; display: grid; place-items: center; padding: 20px; background: rgb(30 27 24 / 42%); }.confirm-dialog { width: min(440px, 100%); padding: 30px; border-radius: 16px; background: var(--surface); box-shadow: var(--shadow-elevated); }.confirm-dialog > span { color: var(--danger); font-size: 9px; font-weight: 750; letter-spacing: .1em; }.confirm-dialog h3 { margin: 8px 0; color: var(--ink-strong); font: 560 25px var(--font-display); }.confirm-dialog p { color: var(--ink-muted); font-size: 11px; line-height: 1.6; }.confirm-dialog > div { display: flex; justify-content: flex-end; gap: 8px; margin-top: 24px; }.confirm-dialog button { min-height: 38px; border: 0; border-radius: 19px; background: var(--surface-subtle); padding: 0 14px; color: var(--ink); font-size: 10px; font-weight: 700; cursor: pointer; }.confirm-dialog button.confirm { background: var(--danger); color: white; }.reveal-enter-active, .reveal-leave-active { transition: opacity var(--motion-normal), transform var(--motion-normal); }.reveal-enter-from, .reveal-leave-to { opacity: 0; transform: translateY(-8px); }@keyframes breathe { 50% { transform: scale(1.08); } }
@media (max-width: 760px) { .workspace { width: min(100% - 28px, 1040px); padding-top: 6px; }.view-switcher { margin-bottom: 36px; overflow-x: auto; }.hero h2 { font-size: 2.35rem; }.hero-copy { margin-bottom: 22px; }.intent-composer { padding: 15px; border-radius: 15px; }.intent-composer textarea { min-height: 110px; font-size: 16px; }.composer-foot { align-items: stretch; flex-direction: column; }.find-button { justify-content: center; }.login-notice { grid-template-columns: auto 1fr; }.login-notice button { grid-column: 1 / -1; width: 100%; }.source-drawer { padding: 17px; }.drawer-foot, .result-heading, .decision-bar { align-items: flex-start; flex-direction: column; }.job-card { grid-template-columns: 1fr; gap: 18px; }.job-actions { justify-self: start; }.decision-bar button { width: 100%; }.result-area { margin-top: 52px; } }
.view-switcher.compact { margin-bottom: 14px; }
</style>
