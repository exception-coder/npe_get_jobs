<template>
  <div class="result-card">
    <div class="result-row head">
      <strong class="recommendation" :data-tone="recommendationTone(result.recommendation_code)">
        {{ result.recommendation_level || result.recommendation_code || '-' }}
      </strong>
      <span class="total-score">总分 {{ result.total_score ?? '-' }}/100</span>
      <span v-if="result.safe_to_apply !== undefined" class="apply-signal" :data-safe="result.safe_to_apply">
        {{ result.safe_to_apply ? '适合投递' : '不建议投递' }}
      </span>
    </div>
    <p v-if="result.company_type" class="meta">公司类型：{{ result.company_type }}</p>
    <p v-if="result.pay_risk" class="meta">欠薪风险：{{ result.pay_risk }}</p>
    <p v-if="result.risk_score !== undefined && result.risk_score !== null" class="meta">风险评分：{{ result.risk_score }}/10</p>
    <p v-if="result.reason" class="summary">{{ result.reason }}</p>
    <p v-else-if="result.summary" class="summary">{{ result.summary }}</p>
    <div v-if="result.main_advantages?.length" class="list-block">
      <strong>主要优势</strong>
      <ul>
        <li v-for="(item, i) in result.main_advantages" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div v-if="result.main_risks?.length" class="list-block">
      <strong>主要风险</strong>
      <ul>
        <li v-for="(item, i) in result.main_risks" :key="i">{{ item }}</li>
      </ul>
    </div>
    <p v-if="result.delivery_advice" class="advice">
      <strong>投递建议：</strong>{{ result.delivery_advice }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CompanyEvaluationResult } from '../api/companyEvaluationApi';

const props = defineProps<{ result: CompanyEvaluationResult }>();

const result = computed(() => props.result);

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
</script>

<style scoped>
.result-card { color: var(--ink-strong); font-size: 11px; }
.result-row.head { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
.recommendation, .apply-signal { border-radius: 12px; background: var(--surface-muted, #f1eee8); padding: 5px 9px; font-size: 9px; font-weight: 750; }
.recommendation[data-tone='positive'], .apply-signal[data-safe='true'] { color: var(--success); }
.recommendation[data-tone='cautious'] { color: var(--warning, #9a6b2f); }
.recommendation[data-tone='negative'], .apply-signal[data-safe='false'] { color: var(--danger); }
.total-score { color: var(--ink-muted); font-size: 10px; font-weight: 650; }
.meta { display: inline-block; margin: 0 18px 9px 0; color: var(--ink-faint); font-size: 9px; }
.summary { margin: 8px 0 14px; color: var(--ink-muted); line-height: 1.65; }
.list-block { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--line); }
.list-block strong { display: block; margin-bottom: 6px; font-size: 10px; }
.list-block ul { margin: 0; padding-left: 18px; color: var(--ink-muted); }
.list-block li { margin-bottom: 4px; line-height: 1.55; }
.advice { margin: 14px 0 0; border-left: 2px solid var(--accent); padding: 4px 0 4px 12px; color: var(--ink-muted); line-height: 1.6; }
</style>
