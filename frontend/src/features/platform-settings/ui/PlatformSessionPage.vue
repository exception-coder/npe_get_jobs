<template>
  <section class="session-page">
    <header><p>PLATFORM CONNECTION</p><h2>{{ current.title }}</h2><span>账号会话与平台能力独立管理，搜索与匹配规则保持跨平台一致。</span></header>
    <div class="session-grid">
      <section class="session-primary"><p class="eyebrow">SESSION</p><h3>独立浏览器 Profile</h3><p>系统使用专用 Patchright Profile 保存登录态，不读取你的日常 Chrome 用户目录。同一平台 Profile 会复用长驻上下文。</p><div :class="['status-line', state]"><span /><div><strong>{{ stateText }}</strong><small>{{ message }}</small></div></div><button :disabled="opening" @click="open"><i :class="opening ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-open-in-new'" />{{ opening ? '正在打开…' : '打开登录会话' }}</button></section>
      <section class="capability-list"><p class="eyebrow">CAPABILITIES</p><h3>已接入能力</h3><ul><li><span>岗位发现</span><strong>Patchright</strong></li><li><span>规则过滤</span><strong>共享策略</strong></li><li><span>AI 匹配</span><strong>按候选人配置</strong></li><li><span>{{ platform === 'boss' || platform === 'liepin' ? '打招呼' : '岗位投递' }}</span><strong>人工确认后执行</strong></li></ul></section>
    </div>
    <section class="settings-links"><router-link to="/common"><i class="mdi mdi-tune-variant" /><span><strong>求职与匹配条件</strong><small>关键词、城市、薪资、黑名单和 AI 规则</small></span><i class="mdi mdi-chevron-right" /></router-link><router-link :to="`/platform/${platform}/records`"><i class="mdi mdi-format-list-checks" /><span><strong>岗位记录</strong><small>查看发现、过滤与联系历史</small></span><i class="mdi mdi-chevron-right" /></router-link><router-link :to="`/platform/${platform}/config/legacy`"><i class="mdi mdi-cog-outline" /><span><strong>高级平台参数</strong><small>迁移期保留的完整旧配置入口</small></span><i class="mdi mdi-chevron-right" /></router-link></section>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { builtInPlatforms } from '@/entities/recruitment-platform/model/platforms';
import { loadPlatformSessionStatus, openPlatformSession } from '@/shared/api/recruitment';

const props = defineProps<{ platform: string }>();
const opening = ref(false);
const state = ref<'idle' | 'checking' | 'authenticated' | 'unauthenticated' | 'error'>('idle');
const message = ref('尚未检查当前登录态');
const sessionId = ref('');
let pollTimer: number | undefined;

const current = computed(() => builtInPlatforms.find(({ id }) => id === props.platform)
  ?? { id: props.platform, title: props.platform, icon: 'mdi mdi-web' });
const stateText = computed(() => ({
  idle: '等待检查登录',
  checking: '正在检查登录',
  authenticated: '平台已登录',
  unauthenticated: '平台未登录',
  error: '登录状态检查失败',
})[state.value]);

async function open() {
  opening.value = true;
  stopPolling();
  try {
    const session = await openPlatformSession(props.platform);
    sessionId.value = session.sessionId;
    state.value = 'checking';
    message.value = '正在读取平台账号状态…';
    await checkStatus();
  } catch (reason) {
    state.value = 'error';
    message.value = reason instanceof Error ? reason.message : '无法打开浏览器';
  } finally {
    opening.value = false;
  }
}

async function checkStatus() {
  if (!sessionId.value) return;
  try {
    const status = await loadPlatformSessionStatus(props.platform, sessionId.value);
    state.value = status.authenticated ? 'authenticated' : 'unauthenticated';
    message.value = status.authenticated
      ? '已检测到平台账号登录凭证，可以执行岗位操作。'
      : '请在平台窗口完成登录，系统会自动检测。';
  } catch (reason) {
    state.value = 'error';
    message.value = reason instanceof Error ? reason.message : '无法检查登录状态';
  }
  schedulePolling();
}

function schedulePolling() {
  stopPolling();
  pollTimer = window.setTimeout(checkStatus, state.value === 'authenticated' ? 5000 : 1500);
}

function stopPolling() {
  if (pollTimer) window.clearTimeout(pollTimer);
  pollTimer = undefined;
}

watch(() => props.platform, () => {
  stopPolling();
  sessionId.value = '';
  state.value = 'idle';
  message.value = '尚未检查当前登录态';
});
onBeforeUnmount(stopPolling);
</script>

<style scoped lang="scss">
.session-page { max-width: 980px; margin: 0 auto; padding: var(--space-7); }.session-page > header { margin-bottom: var(--space-7); }.session-page > header p, .eyebrow { margin: 0 0 7px; color: var(--accent); font-size: 10px; font-weight: 750; letter-spacing: .17em; }.session-page h2, .session-page h3 { margin: 0; color: var(--ink-strong); font-family: var(--font-display); font-weight: 560; letter-spacing: -.025em; }.session-page h2 { font-size: clamp(2rem, 4vw, 3rem); }.session-page > header span { display: block; margin-top: 8px; color: var(--ink-muted); font-size: 12px; }.session-grid { display: grid; grid-template-columns: 1fr 1fr; border-block: 1px solid var(--line); }.session-primary, .capability-list { padding: var(--space-7) 0; }.session-primary { padding-right: var(--space-7); border-right: 1px solid var(--line); }.capability-list { padding-left: var(--space-7); }.session-grid h3 { font-size: 22px; }.session-primary > p:not(.eyebrow) { color: var(--ink-muted); font-size: 12px; line-height: 1.7; }.status-line { display: flex; gap: 10px; margin: 22px 0; padding: 14px 0; border-block: 1px solid var(--line); }.status-line > span { width: 7px; height: 7px; margin-top: 5px; border-radius: 50%; background: var(--warning); }.status-line.authenticated > span { background: var(--success); }.status-line.error > span { background: var(--danger); }.status-line div { display: grid; gap: 3px; }.status-line strong { font-size: 11px; }.status-line small { overflow-wrap: anywhere; color: var(--ink-faint); }.session-primary button { display: inline-flex; min-height: 40px; align-items: center; gap: 8px; border: 1px solid var(--accent); border-radius: var(--radius-control); background: var(--accent); padding: 0 14px; color: white; font-size: 11px; font-weight: 700; cursor: pointer; }.capability-list ul { margin: 20px 0 0; padding: 0; list-style: none; }.capability-list li { display: flex; justify-content: space-between; gap: 16px; padding: 13px 0; border-top: 1px solid var(--line); font-size: 11px; }.capability-list li strong { color: var(--success); }.settings-links { padding: var(--space-7) 0; }.settings-links a { display: grid; grid-template-columns: 28px 1fr 20px; align-items: center; gap: 12px; padding: 16px 0; border-top: 1px solid var(--line); color: var(--ink); text-decoration: none; }.settings-links a:last-child { border-bottom: 1px solid var(--line); }.settings-links a > i:first-child { color: var(--accent); font-size: 19px; }.settings-links a > i:last-child { color: var(--ink-faint); }.settings-links a span { display: grid; }.settings-links small { margin-top: 3px; color: var(--ink-faint); }
@media (max-width: 720px) { .session-page { padding: 22px 16px; }.session-grid { grid-template-columns: 1fr; }.session-primary { padding-right: 0; border-right: 0; border-bottom: 1px solid var(--line); }.capability-list { padding-left: 0; } }
</style>
