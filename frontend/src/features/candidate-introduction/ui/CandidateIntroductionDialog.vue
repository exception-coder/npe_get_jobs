<template>
  <div v-if="open" class="dialog-backdrop" @click.self="$emit('close')">
    <form class="introduction-dialog" role="dialog" aria-modal="true" aria-labelledby="introduction-title" @submit.prevent="submit" @keydown.esc="$emit('close')">
      <button class="close-button" type="button" aria-label="稍后填写自我介绍" @click="$emit('close')"><i class="mdi mdi-close" /></button>
      <span>完善候选人画像</span>
      <h3 id="introduction-title">先介绍一下你自己</h3>
      <p class="dialog-copy">写下你做过什么、擅长什么，以及希望承担怎样的工作。它会用于匹配判断和沟通草稿，真正发送前仍可修改。</p>

      <label for="candidate-introduction">自我介绍</label>
      <textarea
        id="candidate-introduction" ref="editor" v-model="draft" rows="7" maxlength="500"
        placeholder="可以写工作年限、核心能力、代表项目和希望发展的方向"
        :aria-invalid="Boolean(error)" :aria-describedby="error ? 'introduction-error' : 'introduction-help'"
        @input="clearError"
      />
      <div class="field-meta">
        <small id="introduction-help">不预填模板，保留你自己的表达</small>
        <small>{{ draft.trim().length }} / 500</small>
      </div>
      <p v-if="error" id="introduction-error" class="error" role="alert">{{ error }}</p>

      <div class="dialog-actions">
        <button type="button" @click="$emit('close')">稍后填写</button>
        <button class="save" type="submit" :disabled="draft.trim().length < 20 || saving">
          <i :class="saving ? 'mdi mdi-loading mdi-spin' : 'mdi mdi-check'" />
          {{ saving ? '正在保存…' : '保存自我介绍' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps<{
  open: boolean;
  initialValue: string;
  saving: boolean;
  error: string;
}>();

const emit = defineEmits<{
  close: [];
  save: [value: string];
  clearError: [];
}>();

const editor = ref<HTMLTextAreaElement | null>(null);
const draft = ref('');
let previousBodyOverflow = '';

function submit() {
  if (draft.value.trim().length >= 20) emit('save', draft.value);
}

function clearError() {
  if (props.error) emit('clearError');
}

watch(() => props.open, async (open) => {
  if (!open) {
    document.body.style.overflow = previousBodyOverflow;
    return;
  }
  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  draft.value = props.initialValue;
  await nextTick();
  editor.value?.focus();
});

onBeforeUnmount(() => {
  document.body.style.overflow = previousBodyOverflow;
});
</script>

<style scoped lang="scss">
.dialog-backdrop { position: fixed; z-index: 1450; inset: 0; display: grid; place-items: center; overflow-y: auto; padding: 20px; background: rgb(30 27 24 / 48%); backdrop-filter: blur(4px); }
.introduction-dialog { position: relative; width: min(560px, 100%); padding: 32px; border-radius: 18px; background: var(--surface); box-shadow: var(--shadow-elevated); }
.close-button { position: absolute; top: 18px; right: 18px; display: grid; width: 32px; height: 32px; place-items: center; border: 0; border-radius: 50%; background: transparent; color: var(--ink-faint); cursor: pointer; }
.introduction-dialog > span { color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .1em; }.introduction-dialog h3 { margin: 8px 0 10px; color: var(--ink-strong); font: 560 27px var(--font-display); }.dialog-copy { margin: 0 0 22px; color: var(--ink-muted); font-size: 11px; line-height: 1.7; }
.introduction-dialog label { display: block; margin-bottom: 7px; color: var(--ink-strong); font-size: 11px; font-weight: 700; }.introduction-dialog textarea { width: 100%; min-height: 148px; resize: vertical; border: 1px solid var(--line-strong, #d4cec5); border-radius: 12px; outline: 0; background: white; padding: 13px 14px; color: var(--ink-strong); font: inherit; font-size: 13px; line-height: 1.65; }.introduction-dialog textarea:focus { border-color: color-mix(in srgb, var(--accent) 55%, var(--line)); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 9%, transparent); }.introduction-dialog textarea[aria-invalid='true'] { border-color: var(--danger); }.introduction-dialog textarea::placeholder { color: var(--ink-faint); }
.field-meta { display: flex; justify-content: space-between; gap: 16px; margin-top: 6px; color: var(--ink-faint); }.field-meta small { font-size: 9px; }.error { margin: 10px 0 0; color: var(--danger); font-size: 10px; }
.dialog-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 24px; }.dialog-actions button { display: inline-flex; min-height: 40px; align-items: center; justify-content: center; gap: 6px; border: 0; border-radius: 20px; background: var(--surface-subtle); padding: 0 16px; color: var(--ink); font-size: 11px; font-weight: 700; cursor: pointer; }.dialog-actions button.save { background: var(--ink-strong); color: white; }.dialog-actions button:disabled { cursor: not-allowed; opacity: .38; }
@media (max-width: 600px) { .dialog-backdrop { align-items: end; padding: 0; }.introduction-dialog { width: 100%; max-height: 92vh; overflow-y: auto; border-radius: 20px 20px 0 0; padding: 26px 20px calc(22px + env(safe-area-inset-bottom)); }.introduction-dialog textarea { min-height: 180px; }.dialog-actions { flex-direction: column-reverse; }.dialog-actions button { width: 100%; } }
</style>
