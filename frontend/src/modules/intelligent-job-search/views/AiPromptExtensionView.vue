<template>
  <div class="rules-editor">
    <section class="rule-section">
      <header><div><p>岗位判断</p><h4>补充你的接受边界</h4><span>只写默认规则无法表达的例外，例如“技术负责人岗位也可接受”。</span></div><button type="button" @click="matchRules.push('')">添加一条</button></header>
      <div v-if="matchRules.length" class="rule-list">
        <label v-for="(_, index) in matchRules" :key="`match-${index}`"><span>{{ index + 1 }}</span><input v-model.trim="matchRules[index]" placeholder="描述需要特殊判断的岗位场景" /><button type="button" aria-label="删除规则" @click="matchRules.splice(index, 1)">删除</button></label>
      </div>
      <p v-else class="empty-copy">没有补充规则时，系统只使用通用岗位条件和候选人画像。</p>
      <footer><button type="button" :disabled="savingMatch" @click="saveMatch">{{ savingMatch ? '正在保存…' : '保存岗位规则' }}</button></footer>
    </section>

    <section class="rule-section">
      <header><div><p>企业判断</p><h4>定义额外的风险与加分信号</h4><span>每条规则应包含明确事实和分值，避免写主观印象。</span></div></header>
      <div class="split-rules">
        <div><div class="subheading"><strong>风险信号</strong><button type="button" @click="deductions.push('')">添加</button></div><div class="rule-list"><label v-for="(_, index) in deductions" :key="`deduction-${index}`"><span>−</span><input v-model.trim="deductions[index]" placeholder="例如：半年内多次欠薪投诉：-2" /><button type="button" aria-label="删除风险规则" @click="deductions.splice(index, 1)">删除</button></label></div><p v-if="!deductions.length" class="empty-copy">暂无额外风险信号</p></div>
        <div><div class="subheading"><strong>加分信号</strong><button type="button" @click="bonuses.push('')">添加</button></div><div class="rule-list"><label v-for="(_, index) in bonuses" :key="`bonus-${index}`"><span>＋</span><input v-model.trim="bonuses[index]" placeholder="例如：本地头部雇主且团队稳定：+1" /><button type="button" aria-label="删除加分规则" @click="bonuses.splice(index, 1)">删除</button></label></div><p v-if="!bonuses.length" class="empty-copy">暂无额外加分信号</p></div>
      </div>
      <footer><button type="button" :disabled="savingCompany" @click="saveCompany">{{ savingCompany ? '正在保存…' : '保存企业规则' }}</button></footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import { fetchExtraRules, saveExtraRules } from '../api/jobMatchRulesApi';
import { fetchCompanyExtraRules, saveCompanyExtraRules } from '../api/companyRulesApi';

const snackbar = useSnackbarStore();
const savingMatch = ref(false);
const savingCompany = ref(false);
const matchRules = ref<string[]>([]);
const deductions = ref<string[]>([]);
const bonuses = ref<string[]>([]);

onMounted(async () => {
  try { matchRules.value = await fetchExtraRules(); } catch { matchRules.value = []; }
  try {
    const rules = await fetchCompanyExtraRules();
    deductions.value = rules.deductions;
    bonuses.value = rules.bonuses;
  } catch {
    deductions.value = [];
    bonuses.value = [];
  }
});

async function saveMatch() {
  savingMatch.value = true;
  try {
    matchRules.value = matchRules.value.filter((rule) => rule.trim());
    await saveExtraRules(matchRules.value);
    snackbar.show({ message: '岗位判断规则已保存', color: 'success' });
  } catch { snackbar.show({ message: '保存失败，请重试', color: 'error' }); }
  finally { savingMatch.value = false; }
}

async function saveCompany() {
  savingCompany.value = true;
  try {
    deductions.value = deductions.value.filter((rule) => rule.trim());
    bonuses.value = bonuses.value.filter((rule) => rule.trim());
    await saveCompanyExtraRules({ deductions: deductions.value, bonuses: bonuses.value });
    snackbar.show({ message: '企业判断规则已保存', color: 'success' });
  } catch { snackbar.show({ message: '保存失败，请重试', color: 'error' }); }
  finally { savingCompany.value = false; }
}
</script>

<style scoped>
.rules-editor { color: var(--ink-strong); }.rule-section { padding: 34px 0; border-top: 1px solid var(--line); }.rule-section > header { display: flex; align-items: flex-start; justify-content: space-between; gap: 28px; margin-bottom: 24px; }.rule-section header p { margin: 0 0 6px; color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .08em; }.rule-section h4 { margin: 0; font: 560 20px var(--font-display); }.rule-section header span { display: block; margin-top: 7px; color: var(--ink-faint); font-size: 10px; }.rule-section button { border: 0; background: transparent; color: var(--accent); font-size: 10px; font-weight: 700; cursor: pointer; }.rule-section header > button, .subheading button { min-height: 32px; border: 1px solid var(--line); border-radius: 16px; padding: 0 11px; color: var(--ink-muted); }.rule-list { display: grid; }.rule-list label { display: grid; grid-template-columns: 24px minmax(0, 1fr) auto; align-items: center; gap: 12px; min-height: 54px; border-bottom: 1px solid var(--line); }.rule-list label:first-child { border-top: 1px solid var(--line); }.rule-list label > span { color: var(--ink-faint); font: 560 11px var(--font-display); text-align: center; }.rule-list input { width: 100%; border: 0; outline: 0; background: transparent; color: var(--ink-strong); font-size: 11px; }.rule-list input::placeholder { color: var(--ink-faint); }.rule-list label > button { color: var(--ink-faint); font-weight: 500; }.rule-list label > button:hover { color: var(--danger); }.empty-copy { margin: 0; padding: 22px 0; border-block: 1px solid var(--line); color: var(--ink-faint); font-size: 10px; }.rule-section > footer { display: flex; justify-content: flex-end; margin-top: 18px; }.rule-section > footer button { min-height: 36px; border-radius: 18px; background: var(--ink-strong); padding: 0 14px; color: white; }.rule-section > footer button:disabled { opacity: .45; }.split-rules { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; }.subheading { display: flex; min-height: 42px; align-items: center; justify-content: space-between; }.subheading strong { font-size: 10px; }@media (max-width: 760px) { .split-rules { grid-template-columns: 1fr; gap: 30px; }.rule-section > header { flex-direction: column; }.rule-section header > button { align-self: flex-start; } }
</style>
