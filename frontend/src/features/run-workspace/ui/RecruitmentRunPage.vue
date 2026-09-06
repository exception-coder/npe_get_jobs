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

        <DeepseekSettings @ready="modelReady = $event" />

        <form class="intent-composer" @submit.prevent="start">
          <label class="sr-only" for="job-goal">目标岗位</label>
          <textarea id="job-goal" v-model="goal" rows="3" placeholder="例如：广州 Java 高级工程师，偏电商或供应链方向" @keydown.meta.enter="start" @keydown.ctrl.enter="start" />
          <div class="composer-foot">
            <button class="source-trigger" type="button" :aria-expanded="showSources" @click="showSources = !showSources">
              <span :class="['source-dot', authenticated ? 'connected' : '']" />{{ platformName }}{{ authenticated ? ' 已登录' : ' 未登录' }}<i class="mdi mdi-chevron-down" />
            </button>
            <button class="find-button" type="submit" :disabled="busy || interpreting || !goal.trim() || !modelReady" :title="modelReady ? '' : '请先在上方配置模型服务'">
              <i :class="busy || interpreting ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-arrow-up'" />{{ interpreting ? '正在理解' : busy ? '正在寻找' : interpretedGoal?.confirmed && !intentDirty && interpretedGoal.rawGoal === goal.trim() ? '开始寻找' : '解析求职意向' }}
            </button>
          </div>
        </form>

        <RecruitmentIntentCard v-if="interpretedGoal?.card && interpretedGoal.rawGoal === goal.trim()"
          :goal="interpretedGoal" :saving="interpreting || busy" @dirty="intentDirty = true" @confirm="confirmIntent" />
        <TodayAutoDelivery :platform="selectedPlatform" />

        <div class="suggestions" aria-label="常用目标">
          <button v-for="item in suggestions" :key="item" type="button" @click="goal = item">{{ item }}</button>
        </div>
      </div>

      <Transition name="reveal">
        <section v-if="showSources" class="source-drawer" aria-labelledby="source-title">
          <div class="drawer-heading"><div><span>来源与条件</span><h3 id="source-title">从哪里找</h3></div><button type="button" aria-label="关闭" @click="showSources = false"><i class="mdi mdi-close" /></button></div>
          <PlatformRail v-model="selectedPlatform" :platforms="platforms" :status-label="platformStatusLabel" />
          <div class="drawer-foot"><p>仅按意向卡中的目标职位搜索；区域、薪资等要求会与采集的岗位逐项匹配，不沿用历史条件。</p><button type="button" @click="openAssets('settings')">模型与投递设置</button></div>
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
              <div><span>本次岗位匹配结果</span><h3>{{ snapshot.jobs.length ? `已判断 ${snapshot.jobs.length} 个岗位，请查看建议与依据` : '暂时没有找到岗位' }}</h3></div>
              <button class="process-button" type="button" @click="showProcess = !showProcess">{{ showProcess ? '收起过程' : '查看过程' }}<i class="mdi mdi-chevron-down" /></button>
            </header>

            <div v-if="showProcess" class="process-strip">
              <span><i class="mdi mdi-check" />浏览 {{ snapshot.discovered }}</span><span><i class="mdi mdi-check" />通过过滤 {{ snapshot.filtered }}</span><span><i class="mdi mdi-check" />推荐 {{ snapshot.matched }}</span><span><i class="mdi mdi-check" />已联系 {{ snapshot.contacted }}</span>
            </div>

            <div v-if="snapshot.error || snapshot.contactResults.length" class="decision-bar" role="status">
              <div>
                <strong>{{ snapshot.error ? '投递未完成，请核对平台记录' : '沟通处理结果（文字与图片分别记录）' }}</strong>
                <span v-if="snapshot.error">{{ snapshot.error }}</span>
                <span v-if="snapshot.contactResults.some(result => result.reason === 'DRAFT_FILLED_NOT_SENT')">消息已填入 Boss 输入框，尚未发送，请在 Boss 中手动发送。</span>
                <span v-for="result in snapshot.contactResults.filter(result => result.reason !== 'DRAFT_FILLED_NOT_SENT')" :key="result.platformJobId">
                  {{ result.reason === 'IMAGE_DELIVERED_TEXT_DRAFT_ONLY' ? '简历图片已送达，文字仅填入草稿' : result.reason === 'CONVERSATION_ESTABLISHED_TEXT_DRAFT_ONLY' ? '已建立沟通，文字仅填入草稿，未发送图片' : result.status === 'SUCCEEDED' ? '处理成功' : result.status === 'SKIPPED' ? '已跳过' : result.status === 'BLOCKED' ? '被平台阻止' : '未完成，请核对平台记录' }}{{ result.status !== 'SUCCEEDED' && result.reason ? `：${result.reason}` : '' }}
                </span>
              </div>
            </div>

            <div v-if="snapshot.jobs.length" class="job-cards">
              <SelectableJobCard
                v-for="job in snapshot.jobs" :key="job.platformJobId"
                :job="job" :platform-name="platformName" :selected="selectedJobId === job.platformJobId"
                @select="selectJob(job.platformJobId)"
              />
            </div>

            <div v-else class="empty-result"><span>可以换一种说法</span><h3>试试更宽泛的岗位关键词</h3><p>也可以调整城市、薪资或匹配规则后重新寻找。</p><button type="button" @click="openAssets('settings')">调整条件</button></div>

            <div v-if="snapshot.contactConfirmationRequired" class="decision-bar">
              <div>
                <strong>{{ selectedJob ? `已选择：${selectedJob.title}` : '选择一个想联系的岗位' }}</strong>
                <span>{{ contactError || (selectedJob ? `${selectedJob.company || '公司待确认'} · 先检查沟通入口，不会发送消息` : '每次只联系一个岗位，发送前仍需要你的最后确认。') }}</span>
              </div>
              <button type="button" :disabled="!selectedJob || preparingContact" @click="prepareSelectedContact">
                <i :class="preparingContact ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-message-processing-outline'" />
                {{ preparingContact ? '正在检查' : '检查沟通入口' }}
              </button>
            </div>
          </template>
        </template>
      </section>
    </template>

    <JobLedgerPanel v-else-if="activeView === 'history'" :platform="selectedPlatformCode" :platform-title="platformName" :platforms="platforms" :contact-busy="preparingContact || confirmingContact || busy" @contact="contactStoredJob" @update:platform="selectedPlatform = $event" />
    <CareerCapabilitiesPanel v-else />

    <ContactConfirmationDialog
      :open="confirmDialog" :job="selectedJob" :platform-name="platformName" :draft-only="selectedPlatform === 'boss'"
      :greeting="contactGreeting" :preparation="contactPreparation" :submitting="confirmingContact"
      @close="confirmDialog = false" @update:greeting="contactGreeting = $event" @confirm="confirmContact"
    />
    <CandidateIntroductionDialog
      :open="candidateIntroduction.dialogOpen.value" :initial-value="candidateIntroduction.introduction.value"
      :saving="candidateIntroduction.saving.value" :error="candidateIntroduction.error.value"
      @close="candidateIntroduction.dismiss" @save="candidateIntroduction.save" @clear-error="candidateIntroduction.clearError"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { builtInPlatforms, loadRecruitmentPlatforms, type PlatformCode } from '@/entities/recruitment-platform/model/platforms';
import DeepseekSettings from './DeepseekSettings.vue';
import TodayAutoDelivery from './TodayAutoDelivery.vue';
import { useCandidateIntroduction } from '@/features/candidate-introduction/model/useCandidateIntroduction';
import CandidateIntroductionDialog from '@/features/candidate-introduction/ui/CandidateIntroductionDialog.vue';
import {
  confirmWorkflowContact,
  confirmRecruitmentGoal,
  interpretRecruitmentGoal,
  loadActiveRecruitmentGoal,
  loadPlatformSessionStatus,
  loadWorkflow,
  openPlatformSession,
  prepareWorkflowContact,
  startWorkflow,
  startJobWorkflow,
  type ContactPreparation,
  type RecruitmentJob,
  type RecruitmentGoal,
  type WorkflowSnapshot,
} from '@/shared/api/recruitment';
import CareerCapabilitiesPanel from './CareerCapabilitiesPanel.vue';
import ContactConfirmationDialog from './ContactConfirmationDialog.vue';
import JobLedgerPanel from './JobLedgerPanel.vue';
import PlatformRail from './PlatformRail.vue';
import SelectableJobCard from './SelectableJobCard.vue';
import RecruitmentIntentCard from './RecruitmentIntentCard.vue';

type WorkspaceView = 'operate' | 'history' | 'assets';
const route = useRoute();
const router = useRouter();
const candidateIntroduction = useCandidateIntroduction();
const platforms = ref(builtInPlatforms);
const modelReady = ref(false);
const selectedPlatform = ref(typeof route.query.platform === 'string' ? route.query.platform : 'boss');
const activeView = ref<WorkspaceView>(route.query.view === 'history' || route.query.view === 'assets' ? route.query.view : 'operate');
const showSources = ref(route.query.sources === 'open');
const showProcess = ref(false);
const goal = ref(localStorage.getItem('career-flow:last-goal') ?? '');
const interpretedGoal = ref<RecruitmentGoal | null>(null);
const interpreting = ref(false);
const intentDirty = ref(false);
const snapshot = ref<WorkflowSnapshot | null>(null);
const error = ref('');
const openingSession = ref(false);
const sessionMessage = ref('');
const sessionId = ref('');
const authenticated = ref(false);
const pendingStart = ref(false);
const confirmDialog = ref(false);
const selectedJobId = ref('');
const contactGreeting = ref('');
const contactPreparation = ref<ContactPreparation | null>(null);
const preparingContact = ref(false);
const confirmingContact = ref(false);
const contactError = ref('');
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
const platformStatusLabel = computed(() => authenticated.value ? '已登录' : openingSession.value ? '正在检查' : '未登录');
const greeting = computed(() => new Date().getHours() < 12 ? '早上好，张凯' : new Date().getHours() < 18 ? '下午好，张凯' : '晚上好，张凯');
const selectedJob = computed(() => snapshot.value?.jobs.find((job) => job.platformJobId === selectedJobId.value) ?? null);

loadRecruitmentPlatforms().then((value) => { platforms.value = value; }).catch(() => undefined);

async function start() {
  if (!modelReady.value) return;
  if (!goal.value.trim() || busy.value || interpreting.value) return;
  error.value = '';
  localStorage.setItem('career-flow:last-goal', goal.value.trim());
  if (!interpretedGoal.value?.card || interpretedGoal.value.rawGoal !== goal.value.trim()) {
    const submitted = goal.value.trim();
    interpreting.value = true;
    try {
      const parsed = await interpretRecruitmentGoal(submitted);
      if (submitted === goal.value.trim()) { interpretedGoal.value = parsed; intentDirty.value = false; }
    } catch (reason) {
      error.value = reason instanceof Error ? reason.message : '解析失败，请检查模型设置后重试';
    } finally { interpreting.value = false; }
    return;
  }
  if (!interpretedGoal.value.confirmed || intentDirty.value) {
    error.value = '请先在意向卡中确认条件'; return;
  }
  if (!authenticated.value) {
    pendingStart.value = true;
    sessionMessage.value = '请先登录，登录后将使用已确认的意向寻找。';
    await openSession(); return;
  }
  pendingStart.value = false;
  stopPolling(); resetContactSelection();
  try {
    snapshot.value = await startWorkflow(selectedPlatform.value, interpretedGoal.value.id);
    schedulePoll();
  } catch (reason) {
    handleAuthenticationFailure(reason);
    error.value = reason instanceof Error ? reason.message : '暂时无法开始寻找';
  }
}

async function confirmIntent(card: import('@/shared/api/recruitment').IntentCard) {
  if (!interpretedGoal.value || interpreting.value || busy.value) return;
  const source = interpretedGoal.value;
  interpreting.value = true; error.value = '';
  try {
    const saved = await confirmRecruitmentGoal(source.id, card);
    if (source.rawGoal !== goal.value.trim()) return;
    interpretedGoal.value = saved; intentDirty.value = false;
  } catch (reason) {
    error.value = reason instanceof Error ? reason.message : '意向保存失败，请重试';
    return;
  } finally { interpreting.value = false; }
  await start();
}

async function openSession() {
  if (openingSession.value) return;
  openingSession.value = true;
  try {
    const session = await openPlatformSession(selectedPlatform.value);
    sessionId.value = session.sessionId;
    authenticated.value = false;
    sessionMessage.value = '正在检查平台登录状态…';
    scheduleSessionPoll();
  } catch (reason) {
    sessionMessage.value = reason instanceof Error ? reason.message : '无法打开登录窗口';
  } finally {
    openingSession.value = false;
  }
}

function scheduleSessionPoll() {
  stopSessionPolling();
  if (!sessionId.value) return;
  const delay = authenticated.value ? 5000 : 1500;
  sessionPollTimer = window.setTimeout(async () => {
    try {
      const status = await loadPlatformSessionStatus(selectedPlatform.value, sessionId.value);
      authenticated.value = status.authenticated;
      sessionMessage.value = status.authenticated ? '平台登录已确认。' : '尚未登录，请在打开的平台窗口中完成登录。';
      if (status.authenticated && pendingStart.value) await start();
    } catch (reason) {
      sessionMessage.value = reason instanceof Error ? reason.message : '无法检查登录状态';
    }
    scheduleSessionPoll();
  }, delay);
}

async function contactStoredJob(jobId: string) {
  if (preparingContact.value || confirmingContact.value || busy.value) return;
  error.value = '';
  preparingContact.value = true;
  resetContactSelection();
  activeView.value = 'operate';
  void router.replace({ query: { ...route.query, view: 'operate' } });
  try {
    stopPolling();
    snapshot.value = await startJobWorkflow(jobId);
    selectedJobId.value = snapshot.value.jobs[0]?.platformJobId ?? '';
  } catch (reason) {
    handleAuthenticationFailure(reason);
    error.value = reason instanceof Error ? reason.message : '无法准备岗位投递';
    return;
  } finally {
    preparingContact.value = false;
  }
  await prepareSelectedContact();
}

function selectJob(platformJobId: string) {
  selectedJobId.value = selectedJobId.value === platformJobId ? '' : platformJobId;
  contactPreparation.value = null;
  contactError.value = '';
}

async function prepareSelectedContact() {
  if (!snapshot.value || !selectedJob.value || preparingContact.value) return;
  preparingContact.value = true;
  contactError.value = '';
  try {
    const result = await prepareWorkflowContact(snapshot.value.taskId, selectedJob.value.platformJobId);
    contactPreparation.value = result.results[0] ?? null;
    contactGreeting.value = contactGreeting.value || snapshot.value.contactGreeting || defaultGreeting(selectedJob.value);
    confirmDialog.value = true;
  } catch (reason) {
    handleAuthenticationFailure(reason);
    contactError.value = reason instanceof Error ? reason.message : '暂时无法检查沟通入口';
  } finally {
    preparingContact.value = false;
  }
}

async function confirmContact(options: import('@/shared/api/recruitment').ContactDeliveryOptions) {
  if (!snapshot.value || !selectedJob.value || contactPreparation.value?.status !== 'READY' || confirmingContact.value) return;
  const greetingText = contactGreeting.value.trim();
  if (!greetingText) return;
  confirmingContact.value = true;
  contactError.value = '';
  try {
    snapshot.value = await confirmWorkflowContact(snapshot.value.taskId, selectedJob.value.platformJobId, greetingText, options);
    confirmDialog.value = false;
    schedulePoll();
  } catch (reason) {
    handleAuthenticationFailure(reason);
    contactError.value = reason instanceof Error ? reason.message : '暂时无法联系岗位';
  } finally {
    confirmingContact.value = false;
  }
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
function resetContactSelection() {
  selectedJobId.value = '';
  contactGreeting.value = '';
  contactPreparation.value = null;
  contactError.value = '';
  confirmDialog.value = false;
}

function defaultGreeting(job: RecruitmentJob): string {
  const company = job.company ? `贵公司（${job.company}）` : '贵公司';
  return `您好，我关注到${company}的${job.title || '这个'}岗位，我的经验与岗位方向较匹配，希望进一步了解岗位职责与团队情况，谢谢。`;
}

function handleAuthenticationFailure(reason: unknown) {
  const message = reason instanceof Error ? reason.message : '';
  if (!message.includes('not authenticated') && !message.includes('AUTHENTICATION_REQUIRED')) return;
  authenticated.value = false;
  sessionMessage.value = '平台登录已失效，请重新登录后继续。';
  scheduleSessionPoll();
}

watch(selectedPlatform, () => {
  stopSessionPolling(); sessionId.value = ''; authenticated.value = false; snapshot.value = null; error.value = ''; resetContactSelection();
});
watch([selectedPlatform, activeView], ([platform, view]) => {
  void router.replace({ query: { ...route.query, platform, view, ...(showSources.value ? { sources: 'open' } : {}) } });
});
watch(goal, (value) => {
  if (interpretedGoal.value && interpretedGoal.value.rawGoal !== value.trim()) interpretedGoal.value = null;
});

onMounted(async () => {
  void candidateIntroduction.load();
  const initialInput = goal.value;
  try {
    const activeGoal = await loadActiveRecruitmentGoal();
    if (activeGoal && goal.value === initialInput && (!initialInput || initialInput === activeGoal.rawGoal)) {
      goal.value = activeGoal.rawGoal;
      interpretedGoal.value = activeGoal;
    }
  } catch {
    // The editor remains usable when no backend goal exists yet.
  }
});
onBeforeUnmount(() => { stopPolling(); stopSessionPolling(); });
</script>

<style scoped lang="scss">
.workspace { width: min(1040px, calc(100% - 48px)); margin: 0 auto; padding: 12px 0 80px; }.view-switcher { display: flex; gap: 4px; margin-bottom: 58px; }.view-switcher button { display: inline-flex; min-height: 36px; align-items: center; gap: 7px; border: 0; border-radius: 18px; background: transparent; padding: 0 13px; color: var(--ink-faint); font-size: 11px; font-weight: 650; cursor: pointer; }.view-switcher button.active { background: var(--surface); color: var(--ink-strong); box-shadow: 0 1px 8px rgb(58 48 40 / 6%); }.hero { max-width: 760px; margin: 0 auto; }.eyebrow { margin: 0 0 10px; color: var(--accent); font-size: 11px; font-weight: 700; }.hero h2 { margin: 0; color: var(--ink-strong); font: 560 clamp(2.25rem, 5vw, 4rem)/1.08 var(--font-display); letter-spacing: -.045em; }.hero-copy { margin: 13px 0 30px; color: var(--ink-muted); font-size: 14px; }.intent-composer { padding: 18px; border-radius: 18px; background: var(--surface); box-shadow: 0 12px 42px rgb(68 55 45 / 9%), 0 1px 0 rgb(255 255 255 / 80%) inset; }.intent-composer textarea { display: block; width: 100%; min-height: 92px; resize: vertical; border: 0; outline: 0; background: transparent; color: var(--ink-strong); font-size: 18px; line-height: 1.55; }.intent-composer textarea::placeholder { color: var(--ink-faint); }.composer-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; }.source-trigger { display: inline-flex; min-height: 34px; align-items: center; gap: 7px; border: 0; border-radius: 17px; background: var(--surface-subtle); padding: 0 11px; color: var(--ink-muted); font-size: 10px; cursor: pointer; }.source-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--warning); }.source-dot.connected { background: var(--success); }.find-button { display: inline-flex; min-height: 40px; align-items: center; gap: 8px; border: 0; border-radius: 20px; background: var(--ink-strong); padding: 0 17px; color: white; font-size: 11px; font-weight: 700; cursor: pointer; }.find-button i { display: grid; width: 22px; height: 22px; place-items: center; border-radius: 50%; background: rgb(255 255 255 / 13%); }.find-button:disabled { cursor: not-allowed; opacity: .38; }.suggestions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 13px; }.suggestions button { min-height: 30px; border: 0; border-radius: 15px; background: transparent; padding: 0 11px; color: var(--ink-faint); font-size: 10px; cursor: pointer; }.suggestions button:hover { background: var(--selection); color: var(--ink); }
.goal-config { margin-top: 12px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--success) 20%, transparent); border-radius: 13px; background: color-mix(in srgb, var(--surface) 78%, transparent); }.goal-config-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }.goal-config-heading span { color: var(--success); font-size: 10px; font-weight: 700; }.goal-config-heading small { color: var(--ink-faint); font-size: 9px; }.goal-config > p { margin: 8px 0 10px; color: var(--ink-muted); font-size: 11px; line-height: 1.5; }.goal-chips { display: flex; flex-wrap: wrap; gap: 6px; }.goal-chips span { border-radius: 11px; background: var(--surface-subtle); padding: 5px 9px; color: var(--ink-muted); font-size: 9px; }
.source-drawer { max-width: 760px; margin: 18px auto 0; padding: 22px; border-radius: 14px; background: color-mix(in srgb, var(--surface) 72%, transparent); }.drawer-heading { display: flex; align-items: flex-start; justify-content: space-between; }.drawer-heading span { color: var(--ink-faint); font-size: 9px; font-weight: 700; letter-spacing: .1em; }.drawer-heading h3 { margin: 4px 0 18px; color: var(--ink-strong); font: 560 20px var(--font-display); }.drawer-heading > button { border: 0; background: transparent; color: var(--ink-faint); cursor: pointer; }.source-drawer :deep(.platform-rail) { margin-bottom: 16px; }.drawer-foot { display: flex; align-items: center; justify-content: space-between; gap: 18px; }.drawer-foot p { max-width: 520px; margin: 0; color: var(--ink-faint); font-size: 10px; line-height: 1.55; }.drawer-foot button { border: 0; background: transparent; color: var(--accent); font-size: 10px; font-weight: 700; cursor: pointer; }
.login-notice { display: grid; grid-template-columns: auto 1fr auto; max-width: 760px; align-items: center; gap: 14px; margin: 28px auto 0; padding: 14px 16px; border-radius: 12px; background: #f0e8da; }.login-icon { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 50%; background: var(--surface); color: var(--warning); }.login-notice strong { color: var(--ink-strong); font-size: 11px; }.login-notice p { margin: 3px 0 0; color: var(--ink-muted); font-size: 10px; }.login-notice button, .empty-result button { min-height: 34px; border: 0; border-radius: 17px; background: var(--surface); padding: 0 13px; color: var(--ink); font-size: 10px; font-weight: 700; cursor: pointer; }
.result-area { max-width: 900px; margin: 72px auto 0; }.searching-state { display: flex; align-items: center; justify-content: center; gap: 18px; min-height: 180px; }.search-orbit { display: grid; width: 54px; height: 54px; place-items: center; border-radius: 50%; background: var(--selection); color: var(--accent); animation: breathe 1.8s ease-in-out infinite; }.searching-state h3 { margin: 0; color: var(--ink-strong); font: 560 20px var(--font-display); }.searching-state p { margin: 5px 0 0; color: var(--ink-faint); font-size: 11px; }.result-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 24px; }.result-heading span, .empty-result > span { color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .1em; }.result-heading h3, .empty-result h3 { margin: 6px 0 0; color: var(--ink-strong); font: 560 27px var(--font-display); letter-spacing: -.02em; }.process-button { border: 0; background: transparent; color: var(--ink-faint); font-size: 10px; cursor: pointer; }.process-strip { display: flex; flex-wrap: wrap; gap: 17px; margin: -7px 0 22px; color: var(--ink-faint); font-size: 10px; }.process-strip i { color: var(--success); }.job-cards { display: grid; gap: 12px; }.empty-result { padding: 44px 0; text-align: center; }.empty-result p { color: var(--ink-muted); font-size: 11px; }.empty-result button { margin-top: 10px; }.empty-result.error { color: var(--danger); }.decision-bar { position: sticky; z-index: 20; bottom: 18px; display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 18px; padding: 15px 18px; border-radius: 14px; background: var(--ink-strong); color: white; box-shadow: var(--shadow-elevated); }.decision-bar div { display: grid; gap: 3px; }.decision-bar strong { font-size: 11px; }.decision-bar span { color: rgb(255 255 255 / 62%); font-size: 9px; }.decision-bar button { display: inline-flex; min-height: 36px; align-items: center; gap: 6px; border: 0; border-radius: 18px; background: white; padding: 0 14px; color: var(--ink-strong); font-size: 10px; font-weight: 750; cursor: pointer; }.decision-bar button:disabled { cursor: not-allowed; opacity: .4; }
.reveal-enter-active, .reveal-leave-active { transition: opacity var(--motion-normal), transform var(--motion-normal); }.reveal-enter-from, .reveal-leave-to { opacity: 0; transform: translateY(-8px); }@keyframes breathe { 50% { transform: scale(1.08); } }
@media (max-width: 760px) { .workspace { width: min(100% - 28px, 1040px); padding-top: 6px; }.view-switcher { margin-bottom: 36px; overflow-x: auto; }.hero h2 { font-size: 2.35rem; }.hero-copy { margin-bottom: 22px; }.intent-composer { padding: 15px; border-radius: 15px; }.intent-composer textarea { min-height: 110px; font-size: 16px; }.composer-foot { align-items: stretch; flex-direction: column; }.find-button { justify-content: center; }.login-notice { grid-template-columns: auto 1fr; }.login-notice button { grid-column: 1 / -1; width: 100%; }.source-drawer { padding: 17px; }.drawer-foot, .result-heading, .decision-bar { align-items: flex-start; flex-direction: column; }.decision-bar button { width: 100%; justify-content: center; }.result-area { margin-top: 52px; } }
.view-switcher.compact { margin-bottom: 14px; }
</style>
