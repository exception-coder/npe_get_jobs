<template>
  <section class="capabilities" aria-labelledby="capability-title">
    <header><p>长期有效</p><h3 id="capability-title">求职资产</h3><span>维护个人画像、筛选边界、匹配判断和简历表达。</span></header>
    <nav aria-label="求职资产分类"><button v-for="item in items" :key="item.id" type="button" :class="{ active: item.id === active }" @click="select(item.id)">{{ item.title }}</button></nav>
    <div class="capability-content"><component :is="currentComponent" /></div>
  </section>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const items = [
  { id: 'settings', title: '我的画像', component: defineAsyncComponent(() => import('@/modules/intelligent-job-search/views/CommonConfigView.vue')) },
  { id: 'rules', title: '判断规则', component: defineAsyncComponent(() => import('@/modules/intelligent-job-search/views/AiPromptExtensionView.vue')) },
  { id: 'company', title: '企业判断', component: defineAsyncComponent(() => import('@/modules/intelligent-job-search/views/CompanyEvaluationView.vue')) },
  { id: 'resume', title: '简历表达', component: defineAsyncComponent(() => import('./ResumeExpressionPanel.vue')) },
] as const;
type CapabilityId = (typeof items)[number]['id'];
const route = useRoute();
const router = useRouter();
const requested = typeof route.query.capability === 'string' ? route.query.capability : '';
const active = ref<CapabilityId>(items.some(({ id }) => id === requested) ? requested as CapabilityId : 'settings');
const currentComponent = computed(() => items.find(({ id }) => id === active.value)?.component);
function select(value: CapabilityId) {
  active.value = value;
  void router.replace({ query: { ...route.query, view: 'assets', capability: value } });
}
</script>

<style scoped lang="scss">
.capabilities { max-width: 1040px; margin: 0 auto; }.capabilities header { padding: 24px 0 28px; }.capabilities header p { margin: 0 0 8px; color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .08em; }.capabilities h3 { margin: 0; color: var(--ink-strong); font: 560 34px var(--font-display); letter-spacing: -.03em; }.capabilities header span { display: block; margin-top: 8px; color: var(--ink-muted); font-size: 11px; }.capabilities nav { display: flex; gap: 22px; overflow-x: auto; border-bottom: 1px solid var(--line); }.capabilities nav button { position: relative; display: inline-flex; min-height: 42px; align-items: center; border: 0; background: transparent; padding: 0; color: var(--ink-faint); font-size: 10px; font-weight: 700; white-space: nowrap; cursor: pointer; }.capabilities nav button.active { color: var(--ink-strong); }.capabilities nav button.active::after { position: absolute; right: 0; bottom: -1px; left: 0; height: 1px; background: var(--ink-strong); content: ''; }.capability-content { min-width: 0; padding-top: 8px; }
.capability-content :deep(.config-container), .capability-content :deep(.company-evaluation-container) { max-width: none; padding: 0; }.capability-content :deep(.modern-card) { border: 0; border-top: 1px solid var(--line); border-radius: 0; background: transparent; box-shadow: none; }.capability-content :deep(.modern-card:hover) { transform: none; border-color: var(--line); box-shadow: none; }.capability-content :deep(.card-header) { gap: 0; border-bottom: 0; background: transparent; padding: 28px 0 18px; }.capability-content :deep(.header-icon-wrapper) { display: none; }.capability-content :deep(.card-body) { padding: 0 0 30px; }.capability-content :deep(.card-title) { color: var(--ink-strong); font-family: var(--font-display); font-size: 18px; font-weight: 560; }.capability-content :deep(.card-subtitle), .capability-content :deep(.switch-desc) { color: var(--ink-faint); }.capability-content :deep(.info-tip), .capability-content :deep(.warning-tip) { border: 0; border-left: 2px solid var(--line-strong, #cfc8be); border-radius: 0; background: transparent; color: var(--ink-muted); }.capability-content :deep(.info-tip .tip-icon), .capability-content :deep(.warning-tip .tip-icon) { display: none; }.capability-content :deep(.action-btn.primary), .capability-content :deep(.v-btn--variant-elevated) { background: var(--ink-strong) !important; color: white !important; box-shadow: none !important; }.capability-content :deep(.v-field) { border-radius: 8px; box-shadow: none !important; }
@media (max-width: 720px) { .capabilities h3 { font-size: 28px; }.capabilities nav { padding-bottom: 4px; }.capability-content :deep(.card-header), .capability-content :deep(.card-body), .capability-content :deep(.card-footer) { padding-inline: 16px; } }
</style>
