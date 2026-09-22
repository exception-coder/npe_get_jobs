<template>
  <section class="auto-delivery" aria-labelledby="auto-delivery-title">
    <h3 id="auto-delivery-title">自动投递未处理岗位</h3>
    <p>{{ activeGoal ? `使用已确认意向 #${activeGoal.id}：${activeGoal.summary}` : '请先确认求职意向，再启动自动投递。' }}</p>
    <p>处理岗位库中尚未投递的岗位，不限制采集日期；按当前已确认意向匹配，明确不符合的岗位会跳过。</p>
    <form @submit.prevent="start">
      <fieldset :disabled="running || pending">
        <label>自动打招呼文字<textarea v-model="greeting" required maxlength="500" rows="3" placeholder="请编辑本次统一发送的介绍与沟通意愿，最多500字" /></label>
        <label>补充判定规则（可选）
          <textarea v-model="decisionGuidance" maxlength="2000" rows="3" placeholder="例如：JD 未提供工作年限时，不要求明确年限；职位方向符合目标岗位即可继续投递。明确写出的冲突条件仍不会被忽略。" />
          <small>用于补充“信息缺失时如何判断”，不会覆盖 JD 中明确不符合的条件。修改后会按新规则重新判断。</small>
        </label>
        <label class="check"><input v-model="sendImage" type="checkbox" />同时发送简历图片</label>
        <label v-if="sendImage">图片简历路径<input v-model.trim="imagePath" required placeholder="本机 PNG / JPG 图片的绝对路径" /></label>
        <label class="check"><input v-model="consent" type="checkbox" required />我已核对文字及当前意向，确认向匹配岗位真实发送</label>
        <button type="submit" :disabled="!activeGoal || !consent || !greeting.trim() || platform !== 'boss'">开始自动投递</button>
      </fieldset>
    </form>
    <p v-if="platform !== 'boss'">目前仅支持 BOSS 直聘。</p>
    <p v-if="progress?.id" role="status">{{ progress.message }} · 已检查 {{ progress.checked }}/{{ progress.total }} · 已发送 {{ progress.sent }}</p>
    <details v-if="progress?.outcomes?.length" class="delivery-results" open>
      <summary>查看检查明细（已发送 {{ progress.sent }}，跳过 {{ skippedCount }}，失败 {{ failedCount }}）</summary>
      <div class="result-groups">
        <AutoDeliveryOutcomeGroup title="明确不符合" description="存在可核验的必要条件冲突；相同 JD 和规则下将直接复用"
          empty-text="当前没有明确不符合的岗位" tone="negative" :outcomes="rejectedOutcomes" :open="true" />
        <AutoDeliveryOutcomeGroup title="无法判定" description="JD 信息不足；可补充上方规则后在下一批重新判断"
          empty-text="当前没有需要补充判断的岗位" tone="warning" :outcomes="uncertainOutcomes" :open="true" />
        <AutoDeliveryOutcomeGroup title="其他处理结果" description="已发送、历史已投递或发送失败"
          empty-text="暂无其他处理结果" tone="neutral" :outcomes="otherOutcomes" />
      </div>
    </details>
    <button v-if="running" type="button" :disabled="pending || stopping" @click="stop">{{ stopping ? '等待当前岗位结束…' : '停止后续投递' }}</button>
    <p v-if="running">停止不会撤回正在发送的消息。请勿同时手动操作平台浏览器。</p>
    <p v-if="error" role="alert">{{ error }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { loadActiveRecruitmentGoal, loadAutoDelivery, startAutoDelivery, stopAutoDelivery, type AutoDeliveryProgress, type RecruitmentGoal } from '@/shared/api/recruitment';
import AutoDeliveryOutcomeGroup from './AutoDeliveryOutcomeGroup.vue';
const GREETING_STORAGE_KEY = 'career-flow:auto-delivery-greeting';
const DECISION_GUIDANCE_STORAGE_KEY = 'career-flow:auto-delivery-decision-guidance';
const props = defineProps<{ platform: string }>();
const greeting = ref(loadSavedGreeting());
const decisionGuidance = ref(loadSavedDecisionGuidance());
const sendImage = ref(false);
const imagePath = ref('');
const consent = ref(false);
const pending = ref(false);
const stopping = ref(false);
const error = ref('');
const progress = ref<AutoDeliveryProgress | null>(null);
const activeGoal = ref<RecruitmentGoal | null>(null);
const running = computed(() => progress.value?.status === 'RUNNING');
const skippedCount = computed(() => progress.value?.outcomes?.filter(item => item.status === 'SKIPPED').length ?? 0);
const failedCount = computed(() => progress.value?.outcomes?.filter(item => item.status === 'FAILED').length ?? 0);
const rejectedOutcomes = computed(() => progress.value?.outcomes?.filter(item => item.decision === 'REJECTED') ?? []);
const uncertainOutcomes = computed(() => progress.value?.outcomes?.filter(item => item.decision === 'UNCERTAIN') ?? []);
const otherOutcomes = computed(() => progress.value?.outcomes?.filter(item => !['REJECTED', 'UNCERTAIN'].includes(item.decision)) ?? []);
let timer: ReturnType<typeof setTimeout> | undefined;
let disposed = false;
function loadSavedGreeting() {
  try { return localStorage.getItem(GREETING_STORAGE_KEY) ?? ''; }
  catch { return ''; }
}
function loadSavedDecisionGuidance() {
  try { return localStorage.getItem(DECISION_GUIDANCE_STORAGE_KEY) ?? ''; }
  catch { return ''; }
}
watch(greeting, value => {
  try { localStorage.setItem(GREETING_STORAGE_KEY, value); }
  catch { /* Keep the form usable when browser storage is unavailable. */ }
});
watch(decisionGuidance, value => {
  try { localStorage.setItem(DECISION_GUIDANCE_STORAGE_KEY, value); }
  catch { /* Keep the form usable when browser storage is unavailable. */ }
});
async function refresh() {
  try {
    progress.value = await loadAutoDelivery();
    const goal = await loadActiveRecruitmentGoal();
    if (goal?.id !== activeGoal.value?.id) consent.value = false;
    activeGoal.value = goal;
  }
  catch { error.value = '无法读取投递进度，请勿重复启动；恢复连接后再核对。'; }
  if (!disposed) timer = setTimeout(refresh, 3000);
}
async function start() {
  if (pending.value || running.value || !consent.value || !activeGoal.value) return;
  pending.value = true; error.value = ''; stopping.value = false;
  try { progress.value = await startAutoDelivery(props.platform, activeGoal.value.id, greeting.value.trim(), { sendResumeImage: sendImage.value, resumeImagePath: imagePath.value }, decisionGuidance.value.trim()); consent.value = false; }
  catch (reason) { error.value = reason instanceof Error ? reason.message : '启动失败，请检查服务'; }
  finally { pending.value = false; }
}
async function stop() {
  pending.value = true;
  try { progress.value = await stopAutoDelivery(); stopping.value = true; }
  catch { error.value = '停止请求未确认，请重试'; }
  finally { pending.value = false; }
}
onMounted(refresh);
onBeforeUnmount(() => { disposed = true; clearTimeout(timer); });
</script>

<style scoped>
.auto-delivery { text-align: left; margin-top: var(--space-6); padding-block: var(--space-5); border-block: 1px solid var(--line); }
h3 { font-size: 18px; color: var(--ink-strong); }
p { font-size: 12px; line-height: 1.6; color: var(--ink-muted); }
fieldset { display: grid; gap: 14px; padding: 0; border: 0; min-width: 0; }
label { display: grid; gap: 8px; font-size: 13px; }
textarea, input:not([type=checkbox]) { width: 100%; min-width: 0; padding: 10px; background: var(--surface); color: var(--ink); border: 1px solid var(--line-strong); border-radius: var(--radius-control); }
label small { color: var(--ink-muted); font-size: 11px; line-height: 1.5; }
.check { display: flex; align-items: center; }
button { justify-self: start; border: 1px solid var(--line); padding: 10px 14px; border-radius: var(--radius-control); background: var(--ink-strong); color: var(--surface); cursor: pointer; }
button:disabled { opacity: .5; cursor: not-allowed; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
[role=alert] { color: var(--danger); }
.delivery-results { margin-top: 12px; border: 1px solid var(--line); border-radius: var(--radius-control); padding: 10px 12px; }
.delivery-results summary { cursor: pointer; color: var(--ink-strong); font-size: 12px; font-weight: 700; }
.result-groups { max-height: min(58vh, 620px); overflow: auto; margin-top: 8px; padding-inline: 2px; }
</style>
