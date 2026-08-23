<template>
  <section class="workspace-page">
    <header class="workspace-heading">
      <div><p>CAREER OPERATIONS</p><h2>今天，从更好的岗位开始</h2></div>
      <router-link class="start-link" to="/runs">启动筛选 <i class="mdi mdi-arrow-right" /></router-link>
    </header>

    <div class="workspace-grid">
      <section class="focus-panel" aria-labelledby="focus-title">
        <p class="eyebrow">PRIMARY FLOW</p><h3 id="focus-title">发现 → 筛选 → 匹配 → 确认联系</h3>
        <p>四个平台共享同一套任务流，但登录态、站点解析和联系动作分别封装。默认运行不会产生投递或打招呼副作用。</p>
        <ol><li><span>01</span>选择平台并复用登录会话</li><li><span>02</span>读取搜索条件，聚合候选岗位</li><li><span>03</span>完成规则过滤与 AI 匹配</li><li><span>04</span>人工检查清单后确认联系</li></ol>
      </section>

      <section class="platform-panel" aria-labelledby="platform-title">
        <div class="panel-heading"><div><p class="eyebrow">PLATFORMS</p><h3 id="platform-title">平台接入状态</h3></div><span :class="['engine-indicator', health.available ? 'ready' : 'offline']">{{ healthText }}</span></div>
        <ul>
          <li v-for="platform in platforms" :key="platform.id">
            <i :class="platform.icon" aria-hidden="true" /><div><strong>{{ platform.title }}</strong><span>独立 Profile · 可发现 · 联系需确认</span></div>
            <router-link :to="`/platform/${platform.id}/config`" :aria-label="`管理${platform.title}会话`"><i class="mdi mdi-chevron-right" /></router-link>
          </li>
        </ul>
      </section>
    </div>

    <section class="quick-actions" aria-labelledby="quick-title">
      <div class="panel-heading"><div><p class="eyebrow">NEXT ACTIONS</p><h3 id="quick-title">常用入口</h3></div></div>
      <nav><router-link to="/runs"><i class="mdi mdi-radar" /><span><strong>运行一次筛选</strong><small>默认停在候选确认</small></span></router-link><router-link to="/common"><i class="mdi mdi-tune-variant" /><span><strong>调整求职条件</strong><small>关键词、城市与匹配规则</small></span></router-link><router-link to="/resume-optimizer"><i class="mdi mdi-file-document-edit-outline" /><span><strong>优化简历</strong><small>围绕目标岗位调整表达</small></span></router-link></nav>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { builtInPlatforms, loadBrowserHealth, loadRecruitmentPlatforms, type BrowserHealth } from '@/entities/recruitment-platform/model/platforms';

const platforms = ref(builtInPlatforms);
const health = ref<BrowserHealth>({ available: false, engine: 'patchright', version: 'checking' });
const healthText = computed(() => health.value.available ? `Patchright ${health.value.version}` : '浏览器服务未连接');
loadRecruitmentPlatforms().then((value) => { platforms.value = value; }).catch(() => undefined);
loadBrowserHealth().then((value) => { health.value = value; }).catch(() => undefined);
</script>

<style scoped lang="scss">
.workspace-page { max-width: 1180px; margin: 0 auto; padding: var(--space-7); }.workspace-heading, .panel-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; }.workspace-heading { margin-bottom: var(--space-7); }.workspace-heading p, .eyebrow { margin: 0 0 7px; color: var(--accent); font-size: 10px; font-weight: 750; letter-spacing: .17em; }.workspace-heading h2, h3 { margin: 0; color: var(--ink-strong); font-family: var(--font-display); font-weight: 560; letter-spacing: -.025em; }.workspace-heading h2 { font-size: clamp(2rem, 4vw, 3.2rem); }.start-link { display: inline-flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--accent); padding: 8px 0; color: var(--accent); font-size: 12px; font-weight: 750; text-decoration: none; }.workspace-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(340px, .9fr); border-block: 1px solid var(--line); }.focus-panel, .platform-panel { padding: var(--space-7) 0; }.focus-panel { padding-right: var(--space-7); border-right: 1px solid var(--line); }.platform-panel { padding-left: var(--space-7); }.focus-panel h3, .platform-panel h3, .quick-actions h3 { font-size: 22px; }.focus-panel > p:not(.eyebrow) { max-width: 610px; color: var(--ink-muted); line-height: 1.7; }.focus-panel ol { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin: var(--space-6) 0 0; padding: 0; border-top: 1px solid var(--line); list-style: none; }.focus-panel li { display: flex; gap: 10px; padding: 14px 12px 14px 0; border-bottom: 1px solid var(--line); color: var(--ink); font-size: 12px; }.focus-panel li:nth-child(odd) { border-right: 1px solid var(--line); }.focus-panel li:nth-child(even) { padding-left: 14px; }.focus-panel li span { color: var(--accent); font: 600 10px var(--font-mono); }.engine-indicator { font-size: 10px; }.engine-indicator::before { display: inline-block; width: 6px; height: 6px; margin-right: 7px; border-radius: 50%; background: var(--danger); content: ''; }.engine-indicator.ready::before { background: var(--success); }.platform-panel ul { margin: var(--space-5) 0 0; padding: 0; list-style: none; }.platform-panel li { display: grid; grid-template-columns: 30px 1fr 24px; align-items: center; gap: 10px; padding: 13px 0; border-top: 1px solid var(--line); }.platform-panel li > i { color: var(--accent); font-size: 20px; }.platform-panel li div { display: grid; }.platform-panel li strong { font-size: 12px; }.platform-panel li span { margin-top: 2px; color: var(--ink-faint); font-size: 10px; }.platform-panel li a { color: var(--ink-faint); }.quick-actions { padding: var(--space-7) 0; }.quick-actions nav { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: var(--space-5); border-block: 1px solid var(--line); }.quick-actions a { display: grid; grid-template-columns: 30px 1fr; gap: 12px; padding: 18px; border-right: 1px solid var(--line); color: var(--ink); text-decoration: none; }.quick-actions a:last-child { border: 0; }.quick-actions a > i { color: var(--accent); font-size: 21px; }.quick-actions a span { display: grid; }.quick-actions small { margin-top: 3px; color: var(--ink-faint); }
@media (max-width: 800px) { .workspace-page { padding: 22px 16px; }.workspace-heading { align-items: flex-start; flex-direction: column; }.workspace-grid { grid-template-columns: 1fr; }.focus-panel { padding-right: 0; border-right: 0; border-bottom: 1px solid var(--line); }.platform-panel { padding-left: 0; }.focus-panel ol { grid-template-columns: 1fr; }.focus-panel li:nth-child(odd) { border-right: 0; }.focus-panel li:nth-child(even) { padding-left: 0; }.quick-actions nav { grid-template-columns: 1fr; }.quick-actions a { border-right: 0; border-bottom: 1px solid var(--line); } }
</style>
