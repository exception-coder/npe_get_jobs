<template>
  <section class="ledger" aria-labelledby="ledger-title">
    <header>
      <div><p>你遇到过的机会</p><h3 id="ledger-title">岗位库</h3><span>{{ total }} 个岗位，集中回看筛选、匹配与联系结果。</span></div>
      <label>来源<select :value="platform" @change="changePlatform"><option v-for="item in platforms" :key="item.id" :value="item.id">{{ item.title }}</option></select></label>
    </header>

    <form class="filters" @submit.prevent="load(0)"><label><i class="mdi mdi-magnify" /><input v-model="keyword" placeholder="搜索岗位或公司" /></label><select v-model="status"><option value="">全部状态</option><option value="0">待处理</option><option value="1">待联系</option><option value="2">已过滤</option><option value="3">联系成功</option><option value="4">联系失败</option></select><button type="submit">筛选</button></form>

    <div v-if="error" class="state error" role="alert"><strong>岗位库暂时不可用</strong><span>{{ error }}</span><button type="button" @click="load(page)">再试一次</button></div>
    <div v-else-if="loading" class="state" role="status">正在整理岗位…</div>
    <div v-else-if="!jobs.length" class="state"><strong>{{ platformTitle }} 还没有岗位</strong><span>完成一次寻找后，结果会自动出现在这里。</span></div>
    <template v-else>
      <div class="job-list">
        <article v-for="job in jobs" :key="job.id">
          <div class="job-core"><span>{{ platformTitle }} · {{ statusLabel(job.status) }}</span><h4>{{ job.jobTitle }}</h4><p>{{ job.companyName || '未知公司' }} · {{ job.workCity || '地点待确认' }}</p></div>
          <div class="job-meta"><strong>{{ job.salaryDesc || job.salaryRange || '薪资面议' }}</strong><span :class="matchTone(job)">{{ matchLabel(job) }}</span></div>
          <JobDecisionFacts
            :experience="job.jobExperience" :degree="job.jobDegree"
            :company-industry="job.companyIndustry" :company-stage="job.companyStage" :company-scale="job.companyScale"
            :recruiter-name="job.hrName" :recruiter-title="job.hrTitle"
            :recruiter-online="job.hrOnline" :recruiter-active-text="job.hrActiveTime"
            :skills="job.skills" :benefits="job.welfareList"
          />
          <div v-if="job.aiMatchReason || job.filterReason" class="decision-note"><small>{{ job.filterReason ? '过滤原因' : '匹配结论' }}</small><p>{{ job.filterReason || job.aiMatchReason }}</p></div>
          <a v-if="job.jobUrl" :href="job.jobUrl" target="_blank" rel="noreferrer" aria-label="查看岗位详情"><i class="mdi mdi-arrow-top-right" /></a>
        </article>
      </div>
      <footer><span>第 {{ page + 1 }} 页</span><div><button type="button" :disabled="page === 0" @click="load(page - 1)">上一页</button><button type="button" :disabled="(page + 1) * size >= total" @click="load(page + 1)">下一页</button></div></footer>
    </template>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { RecruitmentPlatform } from '@/entities/recruitment-platform/model/platforms';
import { fetchJobRecords, type JobRecord } from '@/modules/intelligent-job-search/api/jobRecordsApi';
import type { PlatformCode } from '@/modules/intelligent-job-search/api/platformConfigApi';
import JobDecisionFacts from './JobDecisionFacts.vue';

const props = defineProps<{ platform: PlatformCode; platformTitle: string; platforms: RecruitmentPlatform[] }>();
const emit = defineEmits<{ 'update:platform': [value: PlatformCode] }>();
const jobs = ref<JobRecord[]>([]);
const total = ref(0);
const page = ref(0);
const size = 20;
const keyword = ref('');
const status = ref('');
const loading = ref(false);
const error = ref('');

async function load(target = 0) {
  loading.value = true;
  error.value = '';
  try {
    const result = await fetchJobRecords({ platform: props.platform, page: target, size, ...(keyword.value.trim() ? { keyword: keyword.value.trim() } : {}), ...(status.value ? { status: Number(status.value) } : {}) });
    jobs.value = result.content ?? [];
    total.value = result.totalElements ?? 0;
    page.value = result.number ?? target;
  } catch (reason) { error.value = reason instanceof Error ? reason.message : '加载失败'; }
  finally { loading.value = false; }
}
function changePlatform(event: Event) { emit('update:platform', (event.target as HTMLSelectElement).value as PlatformCode); }
function statusLabel(value?: number) { return ({ 0: '待处理', 1: '待联系', 2: '已过滤', 3: '联系成功', 4: '联系失败' } as Record<number, string>)[value ?? 0] ?? '未知'; }
function matchLabel(job: JobRecord) { return job.aiMatched === true ? '符合当前偏好' : job.aiMatched === false ? '未通过匹配' : job.isContacted ? '已联系' : '等待判断'; }
function matchTone(job: JobRecord) { return job.aiMatched === false || job.filterReason ? 'negative' : job.aiMatched === true ? 'positive' : 'neutral'; }
watch(() => props.platform, () => load(0), { immediate: true });
</script>

<style scoped lang="scss">
.ledger { max-width: 920px; margin: 0 auto; padding-top: 24px; }.ledger header { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 28px; }.ledger header p { margin: 0 0 8px; color: var(--accent); font-size: 10px; font-weight: 700; }.ledger h3 { margin: 0; color: var(--ink-strong); font: 560 34px var(--font-display); letter-spacing: -.03em; }.ledger header span { display: block; margin-top: 8px; color: var(--ink-muted); font-size: 11px; }.ledger header label { display: grid; gap: 5px; color: var(--ink-faint); font-size: 9px; }.ledger select, .ledger input { height: 38px; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: 11px; }.ledger header select { min-width: 130px; border-radius: 19px; background: var(--surface); padding: 0 13px; }.filters { display: grid; grid-template-columns: 1fr 130px auto; gap: 8px; margin-bottom: 18px; }.filters label { display: flex; min-height: 42px; align-items: center; gap: 8px; border-radius: 21px; background: var(--surface); padding: 0 14px; }.filters input { width: 100%; }.filters > select, .filters > button, .state button, footer button { min-height: 42px; border: 0; border-radius: 21px; background: var(--surface); padding: 0 14px; color: var(--ink); font-size: 10px; font-weight: 700; cursor: pointer; }.filters > button { background: var(--ink-strong); color: white; }.state { display: flex; min-height: 260px; align-items: center; justify-content: center; flex-direction: column; gap: 8px; color: var(--ink-muted); text-align: center; }.state strong { color: var(--ink-strong); font: 560 21px var(--font-display); }.state span { font-size: 11px; }.state.error strong { color: var(--danger); }.job-list { display: grid; gap: 10px; }.job-list article { display: grid; grid-template-columns: minmax(0, 1fr) auto 34px; align-items: start; gap: 16px 24px; padding: 20px 22px; border-radius: 13px; background: var(--surface); box-shadow: 0 3px 16px rgb(58 48 40 / 4%); }.job-core > span { color: var(--ink-faint); font-size: 9px; }.job-core h4 { margin: 6px 0 4px; color: var(--ink-strong); font-size: 14px; }.job-core p { margin: 0; color: var(--ink-muted); font-size: 10px; }.job-meta { display: grid; justify-items: end; gap: 5px; }.job-meta strong { color: var(--ink-strong); font-size: 11px; }.job-meta span { font-size: 9px; }.job-meta .positive { color: var(--success); }.job-meta .negative { color: var(--danger); }.job-meta .neutral { color: var(--ink-faint); }.job-list :deep(.decision-facts) { grid-column: 1 / 3; }.decision-note { grid-column: 1 / 3; border-left: 2px solid var(--accent); padding-left: 10px; }.decision-note small { color: var(--ink-faint); font-size: 8px; }.decision-note p { margin: 3px 0 0; color: var(--ink-muted); font-size: 9px; line-height: 1.5; }.job-list a { display: grid; grid-column: 3; grid-row: 1; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: var(--surface-subtle); color: var(--accent); text-decoration: none; }.ledger footer { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; color: var(--ink-faint); font-size: 10px; }.ledger footer div { display: flex; gap: 7px; }.ledger footer button { min-height: 32px; }.ledger button:disabled { cursor: not-allowed; opacity: .4; }
@media (max-width: 720px) { .ledger header { align-items: flex-start; flex-direction: column; }.ledger header label, .ledger header select { width: 100%; }.filters { grid-template-columns: 1fr; }.job-list article { grid-template-columns: 1fr auto; gap: 14px; }.job-meta { grid-column: 1; justify-items: start; }.job-list :deep(.decision-facts), .decision-note { grid-column: 1 / -1; }.job-list a { grid-column: 2; grid-row: 1; }.ledger footer { align-items: flex-start; flex-direction: column; gap: 10px; } }
</style>
