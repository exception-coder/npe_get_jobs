<template>
  <div class="decision-facts">
    <div class="fact-line" aria-label="岗位要求与公司信息">
      <span v-for="item in primaryFacts" :key="item"><i class="mdi mdi-check-circle-outline" />{{ item }}</span>
      <span v-if="!primaryFacts.length" class="muted"><i class="mdi mdi-information-outline" />平台暂未提供完整要求</span>
    </div>

    <div class="recruiter-line">
      <span :class="['presence-dot', presenceTone]" aria-hidden="true" />
      <div><strong>{{ recruiterName || '招聘者待确认' }}</strong><small v-if="recruiterTitle">{{ recruiterTitle }}</small></div>
      <span :class="['presence-label', presenceTone]">{{ presenceLabel }}</span>
    </div>

    <div v-if="visibleSkills.length || visibleBenefits.length" class="signal-groups">
      <div v-if="visibleSkills.length"><small>技能</small><span v-for="item in visibleSkills" :key="`skill-${item}`">{{ item }}</span></div>
      <div v-if="visibleBenefits.length"><small>福利</small><span v-for="item in visibleBenefits" :key="`benefit-${item}`">{{ item }}</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  experience?: string | null;
  degree?: string | null;
  companyIndustry?: string | null;
  companyStage?: string | null;
  companyScale?: string | null;
  recruiterName?: string | null;
  recruiterTitle?: string | null;
  recruiterOnline?: boolean | null;
  recruiterActiveText?: string | null;
  skills?: string | string[] | null;
  benefits?: string | string[] | null;
}>(), {
  experience: null,
  degree: null,
  companyIndustry: null,
  companyStage: null,
  companyScale: null,
  recruiterName: null,
  recruiterTitle: null,
  recruiterOnline: null,
  recruiterActiveText: null,
  skills: null,
  benefits: null,
});

const asList = (value: string | string[] | null) => (Array.isArray(value) ? value : value?.split(',') ?? [])
  .map((item) => item.trim()).filter(Boolean);
const primaryFacts = computed(() => [props.experience, props.degree, props.companyIndustry, props.companyStage, props.companyScale].filter(Boolean) as string[]);
const visibleSkills = computed(() => asList(props.skills).slice(0, 5));
const visibleBenefits = computed(() => asList(props.benefits).slice(0, 4));
const presenceTone = computed(() => props.recruiterOnline === true
  ? 'online'
  : props.recruiterActiveText ? 'active' : props.recruiterOnline === false ? 'offline' : 'unknown');
const presenceLabel = computed(() => props.recruiterOnline === true
  ? '当前在线'
  : props.recruiterActiveText || (props.recruiterOnline === false ? '当前离线' : '活跃状态未知'));
</script>

<style scoped lang="scss">
.decision-facts { display: grid; gap: 13px; }.fact-line { display: flex; flex-wrap: wrap; gap: 7px 15px; }.fact-line span { display: inline-flex; align-items: center; gap: 4px; color: var(--ink-muted); font-size: 10px; }.fact-line i { color: var(--accent); font-size: 13px; }.fact-line .muted { color: var(--ink-faint); }.recruiter-line { display: flex; min-height: 34px; align-items: center; gap: 8px; border-top: 1px solid var(--line); padding-top: 12px; }.presence-dot { width: 7px; height: 7px; flex: 0 0 auto; border-radius: 50%; background: var(--ink-faint); }.presence-dot.online { background: var(--success); box-shadow: 0 0 0 4px color-mix(in srgb, var(--success) 13%, transparent); }.presence-dot.active { background: var(--warning); }.recruiter-line div { display: flex; min-width: 0; align-items: baseline; gap: 6px; }.recruiter-line strong { color: var(--ink-strong); font-size: 10px; }.recruiter-line small { color: var(--ink-faint); font-size: 9px; }.presence-label { margin-left: auto; color: var(--ink-faint); font-size: 9px; }.presence-label.online { color: var(--success); font-weight: 700; }.presence-label.active { color: var(--warning); }.signal-groups { display: grid; gap: 7px; }.signal-groups > div { display: flex; flex-wrap: wrap; align-items: center; gap: 5px; }.signal-groups small { width: 28px; color: var(--ink-faint); font-size: 8px; }.signal-groups span { border-radius: 10px; background: var(--surface-subtle); padding: 4px 7px; color: var(--ink-muted); font-size: 8px; }
@media (max-width: 600px) { .recruiter-line div { align-items: flex-start; flex-direction: column; gap: 2px; }.signal-groups small { width: 100%; } }
</style>
