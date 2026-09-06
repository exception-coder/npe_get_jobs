<template>
  <article :class="['job-card', { selected }]">
    <div class="job-card-main">
      <span>{{ platformName }}</span>
      <h4>{{ job.title || '未命名岗位' }}</h4>
      <p>{{ job.company || '未知公司' }} · {{ job.city || '地点待确认' }}</p>
    </div>
    <div class="job-verdict">
      <strong>{{ job.salary || '薪资待确认' }}</strong>
      <span><i class="mdi mdi-sparkles" /> 值得进一步判断</span>
    </div>

    <JobDecisionFacts
      :experience="job.facts?.experience" :degree="job.facts?.degree"
      :company-industry="job.facts?.companyIndustry" :company-stage="job.facts?.companyStage" :company-scale="job.facts?.companyScale"
      :recruiter-name="job.facts?.recruiterName" :recruiter-title="job.facts?.recruiterTitle"
      :recruiter-online="job.facts?.recruiterOnline" :recruiter-active-text="job.facts?.recruiterActiveText"
      :skills="job.facts?.skills" :benefits="job.facts?.benefits"
    />

    <div class="job-reason">
      <span>推荐结论</span>
      <p>已通过当前岗位目标与基础条件筛选，联系前仍建议查看完整职责。</p>
    </div>
    <div class="job-actions">
      <a :href="job.href" target="_blank" rel="noreferrer">查看完整岗位 <i class="mdi mdi-arrow-top-right" /></a>
      <button type="button" :aria-pressed="selected" @click="$emit('select')">
        <i :class="selected ? 'mdi mdi-check-circle' : 'mdi mdi-circle-outline'" />
        {{ selected ? '已选择' : '选择这个岗位' }}
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { RecruitmentJob } from '@/shared/api/recruitment';
import JobDecisionFacts from './JobDecisionFacts.vue';

defineProps<{
  job: RecruitmentJob;
  platformName: string;
  selected: boolean;
}>();

defineEmits<{ select: [] }>();
</script>

<style scoped lang="scss">
.job-card { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px 26px; padding: 24px; border: 1px solid transparent; border-radius: 14px; background: var(--surface); box-shadow: 0 4px 20px rgb(58 48 40 / 5%); transition: border-color var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast); }
.job-card.selected { border-color: color-mix(in srgb, var(--accent) 48%, transparent); box-shadow: 0 10px 30px rgb(92 68 45 / 11%); transform: translateY(-1px); }
.job-card-main > span, .job-reason > span { color: var(--ink-faint); font-size: 9px; font-weight: 700; letter-spacing: .08em; }
.job-card h4 { margin: 6px 0 5px; color: var(--ink-strong); font-size: 16px; }
.job-card-main p, .job-reason p { margin: 0; color: var(--ink-muted); font-size: 10px; line-height: 1.55; }
.job-verdict { display: grid; justify-items: end; align-content: start; gap: 7px; }
.job-verdict strong { color: var(--ink-strong); font-size: 13px; }
.job-verdict span { color: var(--success); font-size: 9px; }
.job-card :deep(.decision-facts) { grid-column: 1 / -1; }
.job-reason { align-self: center; }
.job-actions { display: flex; align-self: end; align-items: center; justify-content: flex-end; gap: 8px; }
.job-actions a, .job-actions button { display: inline-flex; min-height: 36px; align-items: center; gap: 5px; border: 0; border-radius: 18px; padding: 0 11px; color: var(--accent); font-size: 10px; font-weight: 700; text-decoration: none; }
.job-actions a { background: transparent; }
.job-actions button { background: var(--surface-subtle); cursor: pointer; }
.job-actions button[aria-pressed='true'] { background: var(--selection); color: var(--ink-strong); }
@media (max-width: 760px) { .job-card { grid-template-columns: 1fr; gap: 18px; padding: 20px; }.job-verdict { justify-items: start; }.job-actions { justify-content: flex-start; flex-wrap: wrap; }.job-actions button { flex: 1; justify-content: center; } }
</style>
