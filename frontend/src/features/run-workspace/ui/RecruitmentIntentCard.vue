<template>
  <section class="intent-card" aria-labelledby="intent-card-title">
    <header><div><span>求职意向 · #{{ goal.id }}</span><h3 id="intent-card-title">{{ goal.confirmed && !dirty ? '已确认的寻找条件' : '先确认，我们是否理解准确' }}</h3></div><small>不沿用历史筛选条件</small></header>
    <form v-if="draft" @submit.prevent="submit" @input="markDirty" @change="markDirty">
      <fieldset :disabled="saving">
        <label class="summary">意向概述<input v-model="draft.summary" required maxlength="500" /></label>
        <div class="section-heading"><h4>目标职位</h4><button type="button" @click="addPosition">添加职位</button></div>
        <div v-for="(position, index) in draft.targetPositions" :key="position.id" class="position-row">
          <label>职位名称<input v-model="position.name" required maxlength="80" /></label>
          <label>搜索词（顿号分隔）<input :value="position.searchTerms.join('、')" required maxlength="120" @input="position.searchTerms = split(($event.target as HTMLInputElement).value)" /></label>
          <label>考虑程度<select v-model="position.preference"><option value="preferred">优先考虑</option><option value="acceptable">可以考虑</option><option value="conditional">选择性考虑</option><option value="excluded">不考虑</option></select></label>
          <button type="button" :aria-label="`删除职位${position.name}`" @click="draft.targetPositions.splice(index, 1); markDirty()">移除</button>
        </div>
        <h4>筛选要求</h4>
        <div class="requirements">
          <div v-for="(label, key) in labels" :key="key" class="requirement">
            <label :for="`intent-${key}`">{{ label }}</label>
            <div class="requirement-controls">
              <select :id="`intent-${key}`" v-model="draft.requirements[key].state" :aria-label="`${label}状态`" @change="changeState(key)"><option value="unspecified">未说明</option><option value="unrestricted">不限</option><option value="specified">指定条件</option></select>
              <select v-if="draft.requirements[key].state === 'specified'" v-model="draft.requirements[key].strength" :aria-label="`${label}强度`"><option value="must">必须满足</option><option value="prefer">优先考虑</option><option value="exclude">排除</option></select>
            </div>
            <input v-if="draft.requirements[key].state === 'specified'" :aria-label="`${label}内容`" :value="draft.requirements[key].value.join('、')" placeholder="填写自然语言要求，多个值用顿号分隔" required @input="updateValue(key, ($event.target as HTMLInputElement).value)" />
            <small v-if="draft.requirements[key].evidence">依据：{{ draft.requirements[key].evidence }}</small>
          </div>
        </div>
        <details v-if="Object.keys(draft.candidateContext).length"><summary>个人背景 · 用于资格核验，不作为搜索限制</summary><label v-for="(_, key) in draft.candidateContext" :key="key">{{ backgroundLabels[key] || key }}<input v-model="draft.candidateContext[key]" required maxlength="1000" /></label></details>
        <div class="section-heading"><h4>补充条件</h4><button type="button" @click="addCondition">添加条件</button></div>
        <p v-if="!draft.additionalRequirements.length" class="muted">没有补充要求。可添加专业准入、排除外包等条件。</p>
        <div v-for="(condition, index) in draft.additionalRequirements" :key="condition.id" class="condition">
          <label>条件说明<textarea v-model="condition.description" required maxlength="1000" @input="condition.evidence = '用户编辑：' + condition.description" /></label>
          <label>强度<select v-model="condition.strength"><option value="must">必须满足</option><option value="prefer">优先考虑</option><option value="exclude">排除</option></select></label>
          <label>适用职位（不选为全部）<select v-model="condition.appliesTo" multiple><option v-for="position in draft.targetPositions" :key="position.id" :value="position.id">{{ position.name }}</option></select></label>
          <button type="button" @click="draft.additionalRequirements.splice(index, 1); markDirty()">移除条件</button>
        </div>
      </fieldset>
      <p v-if="validationError" role="alert" class="error">{{ validationError }}</p>
      <footer><span>确认后保存新版本，再按职位词寻找；不会自动投递。</span><button type="submit" :disabled="saving">{{ saving ? '正在保存…' : '确认意向并开始寻找' }}</button></footer>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { IntentCard, RecruitmentGoal } from '@/shared/api/recruitment';
const props = defineProps<{ goal: RecruitmentGoal; saving: boolean }>();
const emit = defineEmits<{ confirm: [card: IntentCard]; dirty: [] }>();
const draft = ref<IntentCard | null>(null);
const dirty = ref(false);
const validationError = ref('');
const labels: Record<string, string> = { regions: '区域', positionTypes: '职位类型', employmentTypes: '求职类型', salary: '薪资待遇', experienceRequirements: '工作经验要求', educationRequirements: '学历要求', companyIndustries: '公司行业', companySizes: '公司规模', financingStages: '融资阶段' };
const backgroundLabels: Record<string, string> = { educationLevel: '学历层次', educationStatus: '在读状态', major: '专业', researchAreas: '研究方向', workExperience: '工作经验' };
watch(() => props.goal, value => { draft.value = value.card ? JSON.parse(JSON.stringify(value.card)) : null; dirty.value = false; validationError.value = ''; }, { immediate: true });
function split(value: string) { return value.split(/[、，,\n]/).map(item => item.trim()).filter(Boolean); }
function markDirty() { dirty.value = true; emit('dirty'); }
function changeState(key: string) {
  const item = draft.value!.requirements[key];
  item.value = []; item.range = null;
  item.strength = item.state === 'specified' ? 'prefer' : null;
  item.evidence = item.state === 'unrestricted' ? '用户选择不限' : null;
}
function updateValue(key: string, value: string) {
  const item = draft.value!.requirements[key];
  item.value = split(value); item.range = null; item.evidence = '用户编辑：' + value;
}
function addPosition() { draft.value!.targetPositions.push({ id: crypto.randomUUID(), name: '', searchTerms: [], preference: 'acceptable' }); markDirty(); }
function addCondition() { draft.value!.additionalRequirements.push({ id: crypto.randomUUID(), appliesTo: [], description: '', strength: 'prefer', evidence: '' }); markDirty(); }
function submit() {
  if (!draft.value?.targetPositions.length) { validationError.value = '请至少保留一个目标职位'; return; }
  const ids = new Set(draft.value.targetPositions.map(position => position.id));
  if (draft.value.additionalRequirements.some(condition => condition.appliesTo.some(id => !ids.has(id)))) {
    validationError.value = '补充条件引用了已移除的职位，请重新选择适用职位'; return;
  }
  validationError.value = ''; emit('confirm', JSON.parse(JSON.stringify(draft.value)));
}
</script>

<style scoped lang="scss">
.intent-card { margin-top: var(--space-6); padding: var(--space-6); border: 1px solid var(--line); border-radius: var(--radius-panel); background: var(--surface); text-align: left; }
header, footer, .section-heading { display: flex; justify-content: space-between; align-items: center; gap: var(--space-4); flex-wrap: wrap; }
h3 { margin: 6px 0 var(--space-4); color: var(--ink-strong); font-size: 18px; } h4 { margin: var(--space-6) 0 var(--space-4); font-size: 14px; }
small, header span, footer span, .muted { font-size: 12px; color: var(--ink-muted); line-height: 1.6; }
fieldset { border: 0; padding: 0; margin: 0; min-width: 0; } label { display: grid; gap: 8px; font-size: 12px; min-width: 0; }
input, select, textarea { width: 100%; min-width: 0; padding: 10px; border: 1px solid var(--line-strong); border-radius: var(--radius-control); color: var(--ink); background: var(--surface); font-size: 13px; }
textarea { resize: vertical; min-height: 70px; } button { cursor: pointer; border: 1px solid var(--line); border-radius: var(--radius-control); padding: 10px 14px; color: var(--accent); background: var(--surface); font-size: 12px; }
button:disabled { opacity: .5; cursor: wait; } button:hover:not(:disabled) { background: var(--surface-subtle); }
.position-row { display: grid; grid-template-columns: 1fr 1.3fr 1fr auto; align-items: end; gap: 12px; margin-bottom: 12px; }
.requirements { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-5); }
.requirement { display: grid; align-content: start; gap: 8px; } .requirement-controls { display: flex; gap: 8px; }
.condition { display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 12px; align-items: end; margin-bottom: var(--space-4); }
details { margin-top: var(--space-6); } details label { margin-top: 12px; } summary { cursor: pointer; font-size: 13px; }
footer { border-top: 1px solid var(--line); padding-top: var(--space-5); margin-top: var(--space-6); } footer button { background: var(--ink-strong); color: var(--surface); } footer button:hover:not(:disabled) { background: var(--accent); }
.error { color: var(--danger); }
@media (max-width: 760px) { .intent-card { padding: var(--space-4); } .requirements, .position-row, .condition { grid-template-columns: 1fr; } .position-row, .condition { padding-bottom: var(--space-4); border-bottom: 1px solid var(--line); } footer button { width: 100%; } }
</style>
