<template>
  <form ref="formElement" class="asset-editor" :aria-busy="state.loading" @submit.prevent="save">
    <div v-if="state.loading" class="loading-line" />

    <section class="asset-section" aria-labelledby="profile-title">
      <header class="section-heading">
        <div><p>候选人画像</p><h4 id="profile-title">你是谁，以及你擅长什么</h4></div>
        <span>用于岗位匹配，不会发送给招聘方</span>
      </header>
      <div class="field-grid">
        <label class="field field-wide"><span>自我介绍</span><textarea v-model="state.form.selfIntroduction" maxlength="500" rows="5" placeholder="写下工作年限、核心能力、代表项目和希望发展的方向" /><small>由你本人维护，用于匹配判断与沟通草稿 · {{ state.form.selfIntroduction.trim().length }}/500</small></label>
        <label class="field"><span>当前职位</span><input v-model.trim="state.form.jobTitle" required placeholder="例如：Java 高级工程师" /></label>
        <label class="field"><span>工作经验</span><input v-model.trim="state.form.yearsOfExperience" required placeholder="例如：5 年" /></label>
        <label class="field field-wide"><span>核心技能</span><input v-model="skillsText" placeholder="Java、Spring Boot、MySQL、Redis" /><small>使用逗号分隔</small></label>
        <label class="field field-wide"><span>职业方向</span><textarea v-model.trim="state.form.careerIntent" required minlength="10" maxlength="120" rows="3" placeholder="简要说明你希望承担的职责和发展方向" /><small>{{ state.form.careerIntent.length }}/120</small></label>
        <label class="field"><span>领域经验</span><input v-model="domainsText" placeholder="电商、供应链、SaaS" /></label>
        <label class="field"><span>个人亮点</span><input v-model="highlightsText" placeholder="高并发、技术带队、复杂系统重构" /><small>最多 5 项</small></label>
      </div>
    </section>

    <section class="asset-section" aria-labelledby="preference-title">
      <header class="section-heading">
        <div><p>筛选边界</p><h4 id="preference-title">哪些机会不需要带回来</h4></div>
        <span>平台搜索之后再次执行无副作用过滤</span>
      </header>
      <div class="field-grid">
        <label class="field"><span>排除岗位关键词</span><input v-model="jobsText" placeholder="销售、实施、驻场" /><small>使用逗号分隔</small></label>
        <label class="field"><span>排除公司关键词</span><input v-model="companiesText" placeholder="外包、人力资源" /><small>使用逗号分隔</small></label>
        <label class="field"><span>期望月薪下限</span><div class="input-suffix"><input v-model="state.form.minSalary" min="0" type="number" placeholder="25" /><span>K</span></div></label>
        <label class="field"><span>期望月薪上限</span><div class="input-suffix"><input v-model="state.form.maxSalary" min="0" type="number" placeholder="40" /><span>K</span></div></label>
      </div>
    </section>

    <section class="asset-section" aria-labelledby="contact-title">
      <header class="section-heading">
        <div><p>联系与投递</p><h4 id="contact-title">确认后如何介绍你</h4></div>
        <span>任何实际联系仍需要逐次确认</span>
      </header>
      <div class="field-grid">
        <label class="field field-wide"><span>默认招呼语</span><textarea v-model.trim="state.form.sayHiContent" rows="3" placeholder="简洁说明经验、匹配点和沟通意愿" /></label>
        <label class="field field-wide"><span>图片简历路径</span><input v-model.trim="state.form.resumeImagePath" placeholder="选择或粘贴本机图片简历路径" /></label>
      </div>
      <div class="setting-list">
        <label><span><strong>岗位语义匹配</strong><small>根据候选人画像和岗位描述补充判断</small></span><input v-model="state.form.enableAIJobMatch" type="checkbox" /></label>
        <label><span><strong>生成个性化招呼</strong><small>确认联系后再生成，不自动发送</small></span><input v-model="state.form.enableAIGreeting" type="checkbox" /></label>
        <label><span><strong>投递时附带图片简历</strong><small>仅在平台支持且路径有效时使用</small></span><input v-model="state.form.sendImgResume" type="checkbox" /></label>
      </div>
      <div v-if="state.aiGreetingMessage" class="generated-copy">
        <div><span>上次生成的招呼语</span><button type="button" @click="service.copyAIGreeting">复制</button></div>
        <p>{{ state.aiGreetingMessage }}</p>
      </div>
    </section>

    <p>DeepSeek 的 Key 和模型已移至「今天」首页配置。</p>

    <footer class="editor-actions">
      <span>修改只影响后续任务</span>
      <div><button type="button" class="quiet" :disabled="state.loading || state.saving" @click="service.resetForm">恢复</button><button type="submit" class="save" :disabled="state.loading || state.saving">{{ state.saving ? '正在保存…' : '保存资产' }}</button></div>
    </footer>
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import { useCommonConfigState } from '../state/commonConfigState';
import { useCommonConfigService } from '../service/commonConfigService';

const snackbar = useSnackbarStore();
const state = useCommonConfigState();
const service = useCommonConfigService(state, snackbar);
const formElement = ref<HTMLFormElement | null>(null);

function listModel(read: () => string[], write: (value: string[]) => void) {
  return computed({
    get: () => read().join('、'),
    set: (value: string) => write(value.split(/[、,，\n]/).map((item) => item.trim()).filter(Boolean)),
  });
}

const skillsText = listModel(() => state.form.skills, (value) => { state.form.skills = value; });
const domainsText = listModel(() => state.form.domainExperience, (value) => { state.form.domainExperience = value; });
const highlightsText = listModel(() => state.form.highlights, (value) => { state.form.highlights = value.slice(0, 5); });
const jobsText = listModel(() => state.form.jobBlacklist, (value) => { state.form.jobBlacklist = value; });
const companiesText = listModel(() => state.form.companyBlacklist, (value) => { state.form.companyBlacklist = value; });

async function save() {
  if (!formElement.value?.reportValidity()) return;
  await service.handleSave();
}

watch(() => state.form.aiPlatform, (platform) => {
  state.form.aiPlatformKey = state.aiConfigsCache[platform] ?? '';
});

void service.loadConfig();
</script>

<style scoped>
.asset-editor { position: relative; color: var(--ink-strong); }.loading-line { position: absolute; top: 0; right: 0; left: 0; height: 1px; overflow: hidden; background: var(--line); }.loading-line::after { position: absolute; width: 28%; height: 100%; background: var(--accent); content: ''; animation: loading 1.2s ease-in-out infinite; }.asset-section { display: grid; grid-template-columns: minmax(190px, 240px) minmax(0, 1fr); gap: 46px; padding: 34px 0; border-top: 1px solid var(--line); }.section-heading p { margin: 0 0 6px; color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .09em; }.section-heading h4 { margin: 0; font: 560 19px/1.25 var(--font-display); letter-spacing: -.015em; }.section-heading > span { display: block; margin-top: 8px; color: var(--ink-faint); font-size: 10px; line-height: 1.5; }.field-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 16px; }.field { display: grid; align-content: start; gap: 7px; min-width: 0; }.field-wide { grid-column: 1 / -1; }.field > span { color: var(--ink-muted); font-size: 10px; font-weight: 700; }.field small { color: var(--ink-faint); font-size: 9px; }.field input, .field textarea, .field select { width: 100%; border: 1px solid var(--line-strong, #d4cec5); border-radius: 9px; outline: none; background: color-mix(in srgb, var(--surface) 74%, transparent); padding: 10px 12px; color: var(--ink-strong); font: inherit; font-size: 12px; line-height: 1.5; transition: border-color var(--motion-fast), background var(--motion-fast); }.field input, .field select { height: 42px; }.field textarea { min-height: 86px; resize: vertical; }.field input:focus, .field textarea:focus, .field select:focus { border-color: var(--accent); background: var(--surface); }.field input::placeholder, .field textarea::placeholder { color: var(--ink-faint); }.input-suffix, .secret-input { position: relative; }.input-suffix input { padding-right: 36px; }.input-suffix span { position: absolute; top: 50%; right: 13px; color: var(--ink-faint); font-size: 10px; transform: translateY(-50%); }.setting-list { grid-column: 2; display: grid; margin-top: -8px; border-top: 1px solid var(--line); }.setting-list > label { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 62px; border-bottom: 1px solid var(--line); cursor: pointer; }.setting-list label > span { display: grid; gap: 3px; }.setting-list strong { font-size: 11px; }.setting-list small { color: var(--ink-faint); font-size: 9px; }.setting-list input { width: 32px; height: 18px; accent-color: var(--ink-strong); }.generated-copy { grid-column: 2; margin-top: 18px; padding: 15px 16px; border-left: 2px solid var(--accent); background: color-mix(in srgb, var(--selection) 54%, transparent); }.generated-copy > div { display: flex; align-items: center; justify-content: space-between; color: var(--ink-faint); font-size: 9px; }.generated-copy button { border: 0; background: transparent; color: var(--accent); font-size: 9px; cursor: pointer; }.generated-copy p { margin: 8px 0 0; color: var(--ink-muted); font-size: 10px; line-height: 1.6; }.service-settings { border-top: 1px solid var(--line); }.service-settings summary { display: flex; min-height: 72px; align-items: center; justify-content: space-between; gap: 24px; list-style: none; cursor: pointer; }.service-settings summary::-webkit-details-marker { display: none; }.service-settings summary > span { display: grid; gap: 4px; }.service-settings summary strong { font-size: 11px; }.service-settings summary small { color: var(--ink-faint); font-size: 9px; }.service-settings[open] summary i { transform: rotate(180deg); }.service-fields { display: grid; grid-template-columns: 1fr 2fr; gap: 16px; padding: 0 0 28px 286px; }.secret-input input { padding-right: 58px; }.secret-input button { position: absolute; top: 50%; right: 9px; border: 0; background: transparent; color: var(--accent); font-size: 9px; transform: translateY(-50%); cursor: pointer; }.editor-actions { position: sticky; z-index: 8; bottom: 12px; display: flex; min-height: 60px; align-items: center; justify-content: space-between; gap: 20px; margin-top: 16px; padding: 10px 12px 10px 18px; border: 1px solid color-mix(in srgb, var(--line) 80%, transparent); border-radius: 12px; background: color-mix(in srgb, var(--surface) 91%, transparent); box-shadow: 0 12px 32px rgb(57 48 39 / 9%); backdrop-filter: blur(18px); }.editor-actions > span { color: var(--ink-faint); font-size: 9px; }.editor-actions > div { display: flex; gap: 7px; }.editor-actions button { min-height: 36px; border: 0; border-radius: 18px; padding: 0 14px; font-size: 10px; font-weight: 700; cursor: pointer; }.editor-actions button:disabled { cursor: not-allowed; opacity: .45; }.editor-actions .quiet { background: transparent; color: var(--ink-muted); }.editor-actions .save { background: var(--ink-strong); color: white; }@keyframes loading { from { transform: translateX(-100%); } to { transform: translateX(460%); } }
@media (max-width: 760px) { .asset-section { grid-template-columns: 1fr; gap: 22px; padding: 28px 0; }.field-grid { grid-template-columns: 1fr; }.field-wide { grid-column: auto; }.setting-list, .generated-copy { grid-column: 1; }.service-fields { grid-template-columns: 1fr; padding: 0 0 24px; }.editor-actions > span { display: none; }.editor-actions { justify-content: flex-end; } }
.field input, .field select { height: 38px; border-radius: 8px; }
</style>
