<template>
  <div class="app-frame">
    <button v-if="mobileNavOpen" class="nav-scrim" aria-label="关闭导航" @click="mobileNavOpen = false" />
    <aside class="app-nav" :class="{ open: mobileNavOpen, collapsed }">
      <div class="brand-row">
        <router-link to="/workspace" class="brand-link" aria-label="Career Flow 首页"><span>CF</span><div v-if="!collapsed"><strong>Career Flow</strong><small>招聘操作台</small></div></router-link>
        <button ref="navCloseButton" class="nav-close" type="button" aria-label="关闭导航" @click="mobileNavOpen = false"><i class="mdi mdi-close" /></button>
      </div>

      <nav aria-label="主导航">
        <section v-for="group in groups" :key="group.id">
          <p v-if="!collapsed">{{ group.title }}</p>
          <router-link v-for="item in group.items" :key="`${group.id}-${item.title}-${item.to}`" :to="item.to || '/workspace'" :title="collapsed ? item.title : undefined">
            <i :class="item.icon" aria-hidden="true" /><span v-if="!collapsed">{{ item.title }}</span>
          </router-link>
        </section>
      </nav>

      <div class="nav-foot">
        <div v-if="!collapsed" class="engine-row"><span :class="browserState" /> <div><strong>{{ browserStateText }}</strong><small>本机 Patchright sidecar</small></div></div>
        <button class="collapse-button" type="button" :aria-label="collapsed ? '展开导航' : '收起导航'" @click="collapsed = !collapsed"><i :class="collapsed ? 'mdi mdi-chevron-right' : 'mdi mdi-chevron-left'" /><span v-if="!collapsed">收起</span></button>
      </div>
    </aside>

    <div class="app-main" :class="{ 'nav-collapsed': collapsed }">
      <header class="app-topbar">
        <button class="mobile-menu" type="button" aria-label="打开导航" @click="mobileNavOpen = true"><i class="mdi mdi-menu" /></button>
        <div><p>{{ routeLabel }}</p><h1>{{ title }}</h1></div>
        <router-link class="topbar-action" to="/runs"><i class="mdi mdi-play" /> 新建运行</router-link>
      </header>
      <main id="main-content" class="app-content">
        <router-view v-slot="{ Component }"><transition name="page" mode="out-in"><component :is="Component" /></transition></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { featureNavigation } from './featureRegistry';
import type { FeatureNavigationItem } from './feature';
import { builtInPlatforms, loadBrowserHealth, loadRecruitmentPlatforms } from '@/entities/recruitment-platform/model/platforms';

const route = useRoute();
const collapsed = ref(false);
const mobileNavOpen = ref(false);
const navCloseButton = ref<HTMLButtonElement | null>(null);
const mobile = ref(false);
const platforms = ref(builtInPlatforms);
const browserState = ref<'checking' | 'ready' | 'offline'>('checking');
const title = computed(() => String(route.meta.title ?? '求职工作台'));
const routeLabel = computed(() => String(route.meta.subtitle ?? '多平台岗位筛选、匹配与联系'));
const browserStateText = computed(() => ({ checking: '连接检查中', ready: '浏览器已就绪', offline: '浏览器未连接' })[browserState.value]);

const groups = computed(() => {
  const expanded = featureNavigation.flatMap(expandPlatformItem);
  const definitions = [
    { id: 'workspace', title: '工作流' },
    { id: 'platforms', title: '平台' },
    { id: 'tools', title: '能力' },
  ] as const;
  return definitions.map((group) => ({ ...group, items: expanded.filter((item) => (item.group ?? 'tools') === group.id) })).filter(({ items }) => items.length);
});

function expandPlatformItem(item: FeatureNavigationItem): FeatureNavigationItem[] {
  if (!item.platformLinks) return [item];
  return platforms.value.map((platform) => ({
    title: `${platform.title} · ${item.title}`,
    icon: platform.icon,
    to: `/platform/${platform.id}/${item.platformLinks}`,
    group: 'platforms',
  }));
}

const media = window.matchMedia('(max-width: 760px)');
function syncViewport() { mobile.value = media.matches; if (!mobile.value) mobileNavOpen.value = false; }
watch(() => route.fullPath, () => { mobileNavOpen.value = false; });
watch(mobileNavOpen, async (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) {
    await nextTick();
    navCloseButton.value?.focus();
  }
});

function closeNavigationOnEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && mobileNavOpen.value) mobileNavOpen.value = false;
}

onMounted(async () => {
  syncViewport(); media.addEventListener('change', syncViewport);
  window.addEventListener('keydown', closeNavigationOnEscape);
  try { platforms.value = await loadRecruitmentPlatforms(); } catch { /* Built-in navigation remains available. */ }
  try { browserState.value = (await loadBrowserHealth()).available ? 'ready' : 'offline'; } catch { browserState.value = 'offline'; }
});
onBeforeUnmount(() => {
  media.removeEventListener('change', syncViewport);
  window.removeEventListener('keydown', closeNavigationOnEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped lang="scss">
.app-frame { min-height: 100dvh; background: var(--canvas); color: var(--ink); }.app-nav { position: fixed; z-index: 1100; inset: 0 auto 0 0; display: flex; width: 248px; flex-direction: column; border-right: 1px solid var(--line); background: var(--nav-surface); transition: width var(--motion-normal), transform var(--motion-normal); }.app-nav.collapsed { width: 68px; }.brand-row { display: flex; min-height: 82px; align-items: center; justify-content: space-between; padding: 0 16px; border-bottom: 1px solid var(--line); }.brand-link { display: flex; min-width: 0; align-items: center; gap: 11px; color: var(--ink-strong); text-decoration: none; }.brand-link > span { display: grid; width: 34px; height: 34px; place-items: center; border: 1px solid var(--line-strong); border-radius: 8px; color: var(--accent); font: 650 11px var(--font-mono); }.brand-link div { display: grid; }.brand-link strong { font: 560 16px var(--font-display); letter-spacing: -.01em; }.brand-link small { margin-top: 2px; color: var(--ink-faint); font-size: 9px; letter-spacing: .08em; }.nav-close { display: none; }.app-nav nav { min-height: 0; flex: 1; overflow: auto; padding: 15px 10px; }.app-nav nav section + section { margin-top: 17px; }.app-nav nav p { margin: 0 10px 7px; color: var(--ink-faint); font-size: 9px; font-weight: 750; letter-spacing: .14em; text-transform: uppercase; }.app-nav nav a { display: flex; min-height: 38px; align-items: center; gap: 11px; border-left: 2px solid transparent; border-radius: 0 7px 7px 0; padding: 0 10px; color: var(--ink-muted); font-size: 11px; text-decoration: none; }.app-nav nav a i { width: 20px; text-align: center; font-size: 17px; }.app-nav nav a:hover { background: var(--surface-subtle); color: var(--ink-strong); }.app-nav nav a.router-link-active { border-left-color: var(--accent); background: var(--selection); color: var(--ink-strong); font-weight: 700; }.app-nav.collapsed nav a { justify-content: center; padding-inline: 0; }.nav-foot { padding: 12px; border-top: 1px solid var(--line); }.engine-row { display: flex; align-items: center; gap: 9px; padding: 7px 6px 13px; }.engine-row > span { width: 7px; height: 7px; border-radius: 50%; background: var(--warning); }.engine-row > span.ready { background: var(--success); }.engine-row > span.offline { background: var(--danger); }.engine-row div { display: grid; }.engine-row strong { font-size: 10px; }.engine-row small { margin-top: 2px; color: var(--ink-faint); font-size: 9px; }.collapse-button { display: flex; width: 100%; min-height: 34px; align-items: center; justify-content: center; gap: 7px; border: 0; border-radius: 7px; background: transparent; color: var(--ink-faint); cursor: pointer; }.collapse-button:hover { background: var(--surface-subtle); color: var(--ink); }.app-main { min-height: 100dvh; margin-left: 248px; transition: margin-left var(--motion-normal); }.app-main.nav-collapsed { margin-left: 68px; }.app-topbar { display: flex; min-height: 82px; align-items: center; justify-content: space-between; gap: 20px; padding: 14px 30px; border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--canvas) 94%, transparent); }.app-topbar > div { min-width: 0; }.app-topbar p { overflow: hidden; margin: 0 0 3px; color: var(--ink-faint); font-size: 9px; letter-spacing: .08em; text-overflow: ellipsis; text-transform: uppercase; white-space: nowrap; }.app-topbar h1 { margin: 0; color: var(--ink-strong); font: 560 18px var(--font-display); letter-spacing: -.015em; }.topbar-action { display: inline-flex; min-height: 36px; align-items: center; gap: 7px; border: 1px solid var(--line-strong); border-radius: var(--radius-control); padding: 0 12px; color: var(--ink); font-size: 11px; font-weight: 700; text-decoration: none; }.topbar-action:hover { border-color: var(--accent); color: var(--accent); }.mobile-menu { display: none; }.app-content { min-height: calc(100dvh - 82px); }.nav-scrim { position: fixed; z-index: 1090; inset: 0; border: 0; background: rgb(31 28 24 / 38%); }.page-enter-active, .page-leave-active { transition: opacity var(--motion-fast); }.page-enter-from, .page-leave-to { opacity: 0; }
@media (max-width: 760px) { .app-nav, .app-nav.collapsed { width: min(290px, 86vw); transform: translateX(-100%); }.app-nav.open { transform: translateX(0); }.app-main, .app-main.nav-collapsed { margin-left: 0; }.app-topbar { min-height: 72px; justify-content: flex-start; padding: 12px 16px; }.mobile-menu { display: grid; flex: 0 0 38px; width: 38px; height: 38px; place-items: center; border: 1px solid var(--line); border-radius: var(--radius-control); background: var(--surface); color: var(--ink); }.topbar-action { margin-left: auto; padding-inline: 10px; }.topbar-action i { display: none; }.nav-close { display: grid; width: 34px; height: 34px; place-items: center; border: 0; background: transparent; color: var(--ink-muted); }.collapse-button { display: none; }.app-content { min-height: calc(100dvh - 72px); } }
</style>
