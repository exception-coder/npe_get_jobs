<template>
  <div v-if="open" class="dialog-backdrop" @click.self="$emit('close')">
    <section ref="dialog" class="confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-confirm-title" @keydown.esc="$emit('close')">
      <button class="close-button" type="button" aria-label="关闭确认窗口" @click="$emit('close')"><i class="mdi mdi-close" /></button>
      <span>发送前确认</span>
      <h3 id="contact-confirm-title">{{ draftOnly ? '确认建立沟通与附件选项' : '确认联系这个岗位？' }}</h3>

      <div class="selected-job">
        <small>{{ platformName }}</small>
        <strong>{{ job?.title || '未选择岗位' }}</strong>
        <p>{{ job?.company || '公司待确认' }} · {{ job?.salary || '薪资待确认' }}</p>
      </div>

      <div :class="['readiness', readinessTone]" role="status">
        <i :class="preparation?.status === 'READY' ? 'mdi mdi-check-circle-outline' : 'mdi mdi-alert-circle-outline'" />
        <div><strong>{{ readinessTitle }}</strong><p>{{ readinessMessage }}</p></div>
      </div>

      <label for="contact-greeting">发送内容</label>
      <textarea
        id="contact-greeting" ref="greetingEditor" :value="greeting" maxlength="500" rows="5"
        placeholder="请先填写要发送给招聘者的招呼语"
        @input="$emit('update:greeting', ($event.target as HTMLTextAreaElement).value)"
      />
      <div class="character-count">{{ greeting.length }} / 500</div>
      <fieldset v-if="draftOnly" class="image-options" :disabled="submitting || defaultsLoading">
        <legend>本次投递附件</legend>
        <label><input v-model="sendResumeImage" type="checkbox" /> 同时发送图片简历</label>
        <template v-if="sendResumeImage">
          <label for="resume-image-path">图片简历绝对路径</label>
          <input id="resume-image-path" v-model.trim="resumeImagePath" type="text"
            placeholder="请填写本机 PNG / JPEG 图片绝对路径" aria-describedby="image-send-note" />
          <p id="image-send-note" class="side-effect-note">最大 5 MiB。确认后图片将立即发送给上方岗位对应的招聘者；文字仍只填入草稿。</p>
          <p v-if="!resumeImagePath" role="status">请填写图片路径，或取消附图。</p>
        </template>
        <p v-if="defaultsError" role="status">{{ defaultsError }}</p>
      </fieldset>
      <p v-if="draftOnly" class="side-effect-note">文字只填入草稿，请在 Boss 窗口检查后手动发送。勾选附图会立即发送图片；打开沟通入口也可能触发平台自身的招呼行为。</p>
      <p v-else class="side-effect-note">点击确认后，才会通过 {{ platformName }} 真实发起沟通或投递。</p>

      <div class="dialog-actions">
        <button type="button" @click="$emit('close')">再看一眼</button>
        <button class="confirm" type="button" :disabled="!canConfirm || submitting" @click="$emit('confirm', { sendResumeImage: Boolean(draftOnly && sendResumeImage), resumeImagePath })">
          <i :class="submitting ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-send-outline'" />
          {{ submitting ? '正在处理…' : draftOnly ? sendResumeImage ? '建立沟通、填草稿并发送图片' : '建立沟通并填入草稿' : '确认联系这个岗位' }}
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import type { ContactPreparation, RecruitmentJob } from '@/shared/api/recruitment';
import { loadContactDefaults, type ContactDeliveryOptions } from '@/shared/api/recruitment';

const props = defineProps<{
  open: boolean;
  job: RecruitmentJob | null;
  platformName: string;
  greeting: string;
  preparation: ContactPreparation | null;
  submitting: boolean;
  draftOnly?: boolean;
}>();

defineEmits<{
  close: [];
  confirm: [options: ContactDeliveryOptions];
  'update:greeting': [value: string];
}>();

const dialog = ref<HTMLElement | null>(null);
const greetingEditor = ref<HTMLTextAreaElement | null>(null);
const sendResumeImage = ref(false);
const resumeImagePath = ref('');
const defaultsError = ref('');
const defaultsLoading = ref(false);
let defaultsRequest = 0;
const canConfirm = computed(() => props.preparation?.status === 'READY' && Boolean(props.greeting.trim())
  && Boolean(props.job) && !defaultsLoading.value
  && (!props.draftOnly || !sendResumeImage.value || Boolean(resumeImagePath.value)));
const readinessTone = computed(() => props.preparation?.status === 'READY' ? 'ready' : 'blocked');
const readinessTitle = computed(() => props.preparation?.status === 'READY' ? '沟通入口已就绪' : '暂时不能联系');
const readinessMessage = computed(() => props.preparation?.status === 'READY'
  ? '已定位这个岗位的沟通入口，但尚未点击或发送任何内容。'
  : props.preparation?.reason || '没有找到可用的投递或打招呼入口，请稍后再试。');

watch(() => props.open, async (open) => {
  const requestId = ++defaultsRequest;
  if (!open) return;
  defaultsLoading.value = false;
  sendResumeImage.value = false;
  defaultsError.value = '';
  if (props.draftOnly) {
    defaultsLoading.value = true;
    try {
      const defaults = await loadContactDefaults();
      if (!props.open || requestId !== defaultsRequest) return;
      resumeImagePath.value = defaults.data?.resumeImagePath || '';
      sendResumeImage.value = defaults.data?.sendImgResume === true;
    } catch {
      if (requestId === defaultsRequest) defaultsError.value = '默认路径加载失败，可手动填写；默认不附图。';
    } finally {
      if (requestId === defaultsRequest) defaultsLoading.value = false;
    }
  }
  await nextTick();
  greetingEditor.value?.focus();
});
</script>

<style scoped lang="scss">
.image-options { margin: 16px 0; padding: 12px; border: 1px solid var(--line); border-radius: 12px; }
.image-options legend { color: var(--ink-muted); font-size: 12px; }
.image-options input[type="text"] { width: 100%; padding: 10px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink-strong); }
.image-options input:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.dialog-backdrop { position: fixed; z-index: 1400; inset: 0; display: grid; place-items: center; overflow-y: auto; padding: 20px; background: rgb(30 27 24 / 48%); backdrop-filter: blur(4px); }
.confirm-dialog { position: relative; width: min(520px, 100%); padding: 30px; border-radius: 18px; background: var(--surface); box-shadow: var(--shadow-elevated); }
.close-button { position: absolute; top: 18px; right: 18px; display: grid; width: 32px; height: 32px; place-items: center; border: 0; border-radius: 50%; background: transparent; color: var(--ink-faint); cursor: pointer; }
.confirm-dialog > span { color: var(--danger); font-size: 9px; font-weight: 750; letter-spacing: .1em; }
.confirm-dialog h3 { margin: 8px 0 20px; color: var(--ink-strong); font: 560 25px var(--font-display); }
.selected-job { display: grid; gap: 4px; padding: 15px 16px; border-radius: 12px; background: var(--surface-subtle); }
.selected-job small { color: var(--ink-faint); font-size: 10px; font-weight: 700; }.selected-job strong { color: var(--ink-strong); font-size: 14px; }.selected-job p { margin: 0; color: var(--ink-muted); font-size: 11px; }
.readiness { display: flex; gap: 10px; margin: 12px 0 18px; padding: 12px 14px; border-radius: 11px; }.readiness > i { margin-top: 1px; font-size: 17px; }.readiness strong { font-size: 11px; }.readiness p { margin: 3px 0 0; font-size: 10px; line-height: 1.5; }.readiness.ready { background: color-mix(in srgb, var(--success) 10%, transparent); color: var(--success); }.readiness.blocked { background: color-mix(in srgb, var(--danger) 8%, transparent); color: var(--danger); }
.confirm-dialog label { display: block; margin-bottom: 7px; color: var(--ink-strong); font-size: 11px; font-weight: 700; }.confirm-dialog textarea { width: 100%; min-height: 112px; resize: vertical; border: 1px solid var(--line); border-radius: 12px; outline: 0; background: white; padding: 12px 13px; color: var(--ink-strong); font: inherit; font-size: 12px; line-height: 1.6; }.confirm-dialog textarea:focus { border-color: color-mix(in srgb, var(--accent) 55%, var(--line)); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 9%, transparent); }.character-count { margin-top: 5px; color: var(--ink-faint); font-size: 9px; text-align: right; }.side-effect-note { display: flex; gap: 6px; margin: 14px 0 0; color: var(--ink-muted); font-size: 10px; line-height: 1.5; }
.dialog-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 22px; }.dialog-actions button { display: inline-flex; min-height: 40px; align-items: center; justify-content: center; gap: 6px; border: 0; border-radius: 20px; background: var(--surface-subtle); padding: 0 15px; color: var(--ink); font-size: 11px; font-weight: 700; cursor: pointer; }.dialog-actions button.confirm { background: var(--danger); color: white; }.dialog-actions button:disabled { cursor: not-allowed; opacity: .38; }
@media (max-width: 600px) { .dialog-backdrop { align-items: end; padding: 0; }.confirm-dialog { width: 100%; max-height: 92vh; overflow-y: auto; border-radius: 20px 20px 0 0; padding: 24px 20px calc(22px + env(safe-area-inset-bottom)); }.dialog-actions { flex-direction: column-reverse; }.dialog-actions button { width: 100%; } }
</style>
