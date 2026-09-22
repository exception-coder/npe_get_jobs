<template>
  <details class="outcome-group" :class="tone" :open="open">
    <summary>
      <span><strong>{{ title }}</strong><small>{{ description }}</small></span>
      <b>{{ outcomes.length }}</b>
    </summary>
    <div v-if="outcomes.length" class="outcome-list">
      <article v-for="item in visibleOutcomes" :key="`${item.platformJobId}-${item.status}`">
        <div class="identity">
          <strong>{{ item.title }}</strong>
          <span>{{ item.company }}</span>
        </div>
        <span v-if="item.confidence" class="confidence">置信度：{{ confidenceLabel(item.confidence) }}</span>
        <p>{{ item.reason }}</p>
        <a v-if="item.href" :href="item.href" target="_blank" rel="noreferrer">
          查看原岗位 JD <i class="mdi mdi-arrow-top-right" />
        </a>
      </article>
      <button v-if="visibleCount < outcomes.length" type="button" @click="showMore">
        再显示 {{ Math.min(PAGE_SIZE, outcomes.length - visibleCount) }} 条
      </button>
    </div>
    <p v-else class="empty">{{ emptyText }}</p>
  </details>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { AutoDeliveryOutcome } from '@/shared/api/recruitment';

const PAGE_SIZE = 20;
const props = withDefaults(defineProps<{
  title: string;
  description: string;
  emptyText: string;
  tone: 'negative' | 'warning' | 'neutral';
  outcomes: AutoDeliveryOutcome[];
  open?: boolean;
}>(), { open: false });
const visibleCount = ref(PAGE_SIZE);
const visibleOutcomes = computed(() => props.outcomes.slice(0, visibleCount.value));

function showMore() {
  visibleCount.value += PAGE_SIZE;
}

function confidenceLabel(confidence: string) {
  return confidence === 'high' ? '高' : confidence === 'medium' ? '中' : '低';
}
</script>

<style scoped>
.outcome-group { border-top: 1px solid var(--line); }
.outcome-group summary { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 12px; align-items: center; padding: 12px 2px; cursor: pointer; }
.outcome-group summary span { display: grid; gap: 2px; }
.outcome-group summary strong { color: var(--ink-strong); font-size: 13px; }
.outcome-group summary small { color: var(--ink-muted); font-size: 11px; font-weight: 400; }
.outcome-group summary b { min-width: 28px; text-align: center; color: var(--ink-muted); font-size: 12px; }
.outcome-group.negative summary b { color: var(--danger); }
.outcome-group.warning summary b { color: var(--warning, #8a6418); }
.outcome-list { display: grid; gap: 6px; padding-bottom: 12px; }
.outcome-list article { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 12px; padding: 10px 12px; background: var(--surface-subtle); border-left: 3px solid var(--line-strong); }
.negative .outcome-list article { border-left-color: var(--danger); }
.warning .outcome-list article { border-left-color: var(--warning, #a87920); }
.identity { display: flex; gap: 8px; min-width: 0; }
.identity strong, .identity span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.identity strong { color: var(--ink-strong); }
.identity span, .confidence, p, a, .empty { color: var(--ink-muted); font-size: 11px; }
.confidence { white-space: nowrap; }
p { grid-column: 1 / -1; margin: 2px 0 0; line-height: 1.55; }
a { grid-column: 1 / -1; justify-self: start; color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
button { justify-self: start; border: 1px solid var(--line); padding: 7px 10px; border-radius: var(--radius-control); background: var(--surface); color: var(--ink-strong); cursor: pointer; }
.empty { margin: 0 2px 12px; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
@media (max-width: 640px) {
  .outcome-list article { grid-template-columns: 1fr; }
  .confidence { grid-column: 1; }
}
</style>
