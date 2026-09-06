<template>
  <section class="auto-delivery" aria-labelledby="auto-delivery-title">
    <h3 id="auto-delivery-title">自动投递今日岗位</h3>
    <p>{{ activeGoal ? `使用已确认意向 #${activeGoal.id}：${activeGoal.summary}` : '请先确认求职意向，再启动自动投递。' }}</p>
    <p>仅处理今天新入库的岗位，按当前已确认意向匹配；已投递、不符合或待核实的岗位跳过。日期按服务所在时区计算。</p>
    <form @submit.prevent="start">
      <fieldset :disabled="running || pending">
        <label>自动打招呼文字<textarea v-model="greeting" required maxlength="500" rows="3" placeholder="请编辑本次统一发送的介绍与沟通意愿，最多500字" /></label>
        <label class="check"><input v-model="sendImage" type="checkbox" />同时发送简历图片</label>
        <label v-if="sendImage">图片简历路径<input v-model.trim="imagePath" required placeholder="本机 PNG / JPG 图片的绝对路径" /></label>
        <label class="check"><input v-model="consent" type="checkbox" required />我已核对文字及当前意向，确认向匹配岗位真实发送</label>
        <button type="submit" :disabled="!activeGoal || !consent || !greeting.trim() || platform !== 'boss'">开始自动投递</button>
      </fieldset>
    </form>
    <p v-if="platform !== 'boss'">目前仅支持 BOSS 直聘。</p>
    <p v-if="progress?.id" role="status">{{ progress.message }} · 已检查 {{ progress.checked }}/{{ progress.total }} · 已发送 {{ progress.sent }}</p>
    <button v-if="running" type="button" :disabled="pending || stopping" @click="stop">{{ stopping ? '等待当前岗位结束…' : '停止后续投递' }}</button>
    <p v-if="running">停止不会撤回正在发送的消息。请勿同时手动操作平台浏览器。</p>
    <p v-if="error" role="alert">{{ error }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { loadActiveRecruitmentGoal, loadAutoDelivery, startAutoDelivery, stopAutoDelivery, type AutoDeliveryProgress, type RecruitmentGoal } from '@/shared/api/recruitment';
const props = defineProps<{ platform: string }>();
const greeting = ref('');
const sendImage = ref(false);
const imagePath = ref('');
const consent = ref(false);
const pending = ref(false);
const stopping = ref(false);
const error = ref('');
const progress = ref<AutoDeliveryProgress | null>(null);
const activeGoal = ref<RecruitmentGoal | null>(null);
const running = computed(() => progress.value?.status === 'RUNNING');
let timer: ReturnType<typeof setTimeout> | undefined;
let disposed = false;
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
  try { progress.value = await startAutoDelivery(props.platform, activeGoal.value.id, greeting.value.trim(), { sendResumeImage: sendImage.value, resumeImagePath: imagePath.value }); consent.value = false; }
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
.check { display: flex; align-items: center; }
button { justify-self: start; border: 1px solid var(--line); padding: 10px 14px; border-radius: var(--radius-control); background: var(--ink-strong); color: var(--surface); cursor: pointer; }
button:disabled { opacity: .5; cursor: not-allowed; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
[role=alert] { color: var(--danger); }
</style>
