<template>
  <fieldset class="period-field">
    <legend>{{ label }}</legend>
    <label>
      <span>开始年月</span>
      <input v-model="start" type="month" @change="commit" />
    </label>
    <label>
      <span>结束年月</span>
      <input v-model="end" type="month" :disabled="current" @change="commit" />
    </label>
    <label class="current-toggle">
      <input v-model="current" type="checkbox" @change="commit" />
      <span>至今</span>
    </label>
    <small v-if="validationMessage" role="alert">{{ validationMessage }}</small>
    <small v-else-if="unparsedValue" class="legacy-value">当前值：{{ modelValue }}。选择年月后将自动规范格式。</small>
  </fieldset>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface ParsedPeriod {
  start: string;
  end: string;
  current: boolean;
  parsed: boolean;
}

const props = withDefaults(defineProps<{ modelValue: string; label?: string }>(), {
  label: '时间',
});
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();
const periodPattern = /^(\d{4})[.\/-](\d{1,2})\s*(?:-|—|–|~|至)\s*(至今|现在|present|(\d{4})[.\/-](\d{1,2}))$/i;

const initial = parsePeriod(props.modelValue);
const start = ref(initial.start);
const end = ref(initial.end);
const current = ref(initial.current);
const unparsedValue = computed(() => Boolean(props.modelValue.trim()) && !parsePeriod(props.modelValue).parsed);
const validationMessage = computed(() => {
  if (!start.value || current.value || !end.value) return '';
  return end.value < start.value ? '结束年月不能早于开始年月' : '';
});

watch(() => props.modelValue, (value) => {
  const next = parsePeriod(value);
  if (!next.parsed) return;
  start.value = next.start;
  end.value = next.end;
  current.value = next.current;
});

function parsePeriod(value: string): ParsedPeriod {
  const match = value.trim().match(periodPattern);
  if (!match) return { start: '', end: '', current: false, parsed: false };
  return {
    start: toMonthValue(match[1], match[2]),
    end: match[4] ? toMonthValue(match[4], match[5]) : '',
    current: !match[4],
    parsed: true,
  };
}

function toMonthValue(year: string, month: string): string {
  return `${year}-${month.padStart(2, '0')}`;
}

function commit(): void {
  if (!start.value) return;
  if (current.value) {
    emit('update:modelValue', `${start.value.replace('-', '.')}-至今`);
    return;
  }
  if (!end.value || end.value < start.value) return;
  emit('update:modelValue', `${start.value.replace('-', '.')}-${end.value.replace('-', '.')}`);
}
</script>

<style scoped lang="scss">
.period-field { display: grid; grid-column: 1 / -1; grid-template-columns: repeat(2, minmax(0, 1fr)) auto; gap: 10px; align-items: end; min-width: 0; margin: 0; border: 0; padding: 0; }
legend { grid-column: 1 / -1; margin-bottom: 7px; padding: 0; color: var(--ink-muted); font-size: 10px; font-weight: 650; }
label { display: grid; gap: 7px; }
label > span { color: var(--ink-faint); font-size: 9px; font-weight: 650; }
input[type='month'] { width: 100%; min-height: 40px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); padding: 8px 10px; color: var(--ink-strong); color-scheme: light; font-size: 12px; }
input[type='month']:focus-visible, input[type='checkbox']:focus-visible { border-color: var(--accent); outline: 0; box-shadow: 0 0 0 3px rgb(138 93 54 / 9%); }
input:disabled { cursor: not-allowed; opacity: .5; }
.current-toggle { display: flex; min-height: 40px; align-items: center; gap: 7px; padding: 0 4px; white-space: nowrap; cursor: pointer; }
.current-toggle input { width: 15px; height: 15px; accent-color: var(--accent); }
.current-toggle span { color: var(--ink-muted); font-size: 10px; }
small { grid-column: 1 / -1; color: var(--danger); font-size: 9px; }
.legacy-value { color: var(--ink-faint); }
@media (max-width: 720px) { .period-field { grid-template-columns: 1fr; } legend, small { grid-column: auto; } }
</style>
