<template>
  <div class="result-card">
    <div class="result-row head">
      <v-chip :color="recommendationColor(result.recommendation_code)" size="small" variant="flat">
        {{ result.recommendation_level || result.recommendation_code || '-' }}
      </v-chip>
      <span class="total-score">总分 {{ result.total_score ?? '-' }}/100</span>
      <v-chip v-if="result.safe_to_apply !== undefined" :color="result.safe_to_apply ? 'success' : 'error'" size="small" variant="flat">
        {{ result.safe_to_apply ? '适合投递' : '不建议投递' }}
      </v-chip>
    </div>
    <p v-if="result.company_type" class="meta">公司类型：{{ result.company_type }}</p>
    <p v-if="result.summary" class="summary">{{ result.summary }}</p>
    <div v-if="Object.keys(dimensionLabels).length" class="dimensions">
      <div v-for="(label, key) in dimensionLabels" :key="key" class="dim-row">
        <span class="dim-label">{{ label }}</span>
        <v-progress-linear
          :model-value="getDimensionScore(key)"
          color="primary"
          height="6"
          rounded
          class="dim-bar"
        />
        <span class="dim-value">{{ getDimensionScore(key) }}</span>
      </div>
    </div>
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
import type { CompanyEvaluationResult, DimensionScores } from '../api/companyEvaluationApi';

const props = defineProps<{ result: CompanyEvaluationResult }>();

const result = computed(() => props.result);

const dimensionLabels: Record<string, string> = {
  company_stability: '公司稳定性',
  shareholder_background: '股东背景',
  industry_outlook: '行业前景',
  business_stability: '业务稳定性',
  company_reputation: '公司口碑',
  work_system: '工作制度',
  salary_benefits: '薪资福利',
  career_stability: '职业稳定性',
};

function getDimensionScore(key: string): number {
  const scores = result.value?.dimension_scores as DimensionScores | undefined;
  if (!scores) return 0;
  const v = (scores as Record<string, number>)[key];
  return typeof v === 'number' ? Math.min(10, Math.max(0, v)) * 10 : 0;
}

function recommendationColor(code?: string): string {
  if (!code) return 'grey';
  switch (code.toUpperCase()) {
    case 'STRONGLY_RECOMMENDED': return 'success';
    case 'RECOMMENDED': return 'primary';
    case 'CAUTIOUS': return 'warning';
    case 'NOT_RECOMMENDED': return 'error';
    default: return 'grey';
  }
}
</script>

<style scoped>
.result-card { font-size: 14px; }
.result-row.head { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
.total-score { font-weight: 600; color: rgba(0, 0, 0, 0.85); }
.meta { margin: 0 0 8px 0; font-size: 12px; color: rgba(0, 0, 0, 0.6); }
.summary { margin: 0 0 12px 0; color: rgba(0, 0, 0, 0.75); line-height: 1.5; }
.dimensions { margin: 12px 0; }
.dim-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.dim-label { width: 100px; flex-shrink: 0; font-size: 12px; color: rgba(0, 0, 0, 0.65); }
.dim-bar { flex: 1; max-width: 120px; }
.dim-value { width: 24px; text-align: right; font-size: 12px; }
.list-block { margin-top: 12px; }
.list-block strong { display: block; margin-bottom: 4px; font-size: 13px; }
.list-block ul { margin: 0; padding-left: 20px; }
.list-block li { margin-bottom: 2px; }
.advice { margin: 12px 0 0 0; padding: 8px; background: rgba(0, 0, 0, 0.04); border-radius: 8px; font-size: 13px; }
</style>
