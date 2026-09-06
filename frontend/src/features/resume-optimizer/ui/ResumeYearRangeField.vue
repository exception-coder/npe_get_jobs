<template>
  <fieldset class="year-range-field">
    <legend>{{ label }}</legend>
    <label>
      <span>开始年份</span>
      <select v-model="start" @change="commit">
        <option value="">请选择</option>
        <option v-for="year in yearOptions" :key="year" :value="year">{{ year }} 年</option>
      </select>
    </label>
    <label>
      <span>结束年份</span>
      <select v-model="end" :disabled="current" @change="commit">
        <option value="">请选择</option>
        <option v-for="year in yearOptions" :key="year" :value="year">{{ year }} 年</option>
      </select>
    </label>
    <label class="current-toggle">
      <input v-model="current" type="checkbox" @change="commit" />
      <span>至今</span>
    </label>
    <small v-if="validationMessage" role="alert">{{ validationMessage }}</small>
    <small v-else-if="unparsedValue" class="legacy-value">当前值：{{ modelValue }}。选择年份后将自动规范格式。</small>
  </fieldset>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface ParsedYearRange {
  start: string;
  end: string;
  current: boolean;
  parsed: boolean;
}

const props = withDefaults(defineProps<{ modelValue: string; label?: string }>(), {
  label: '时间',
});
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();
const yearRangePattern = /^(\d{4})\s*(?:-|—|–|~|至)\s*(至今|现在|present|(\d{4}))$/i;
const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: currentYear - 1969 }, (_, index) => String(currentYear - index));
const initial = parseYearRange(props.modelValue);
const start = ref(initial.start);
const end = ref(initial.end);
const current = ref(initial.current);
const unparsedValue = computed(() => Boolean(props.modelValue.trim()) && !parseYearRange(props.modelValue).parsed);
const validationMessage = computed(() => {
  if (!start.value || current.value || !end.value) return '';
  return end.value < start.value ? '结束年份不能早于开始年份' : '';
});

watch(() => props.modelValue, (value) => {
  const next = parseYearRange(value);
  if (!next.parsed) return;
  start.value = next.start;
  end.value = next.end;
  current.value = next.current;
});

function parseYearRange(value: string): ParsedYearRange {
  const match = value.trim().match(yearRangePattern);
  if (!match) return { start: '', end: '', current: false, parsed: false };
  return {
    start: match[1],
    end: match[3] || '',
    current: !match[3],
    parsed: true,
  };
}

function commit(): void {
  if (!start.value) return;
  if (current.value) {
    emit('update:modelValue', `${start.value}-至今`);
    return;
  }
  if (!end.value || end.value < start.value) return;
  emit('update:modelValue', `${start.value}-${end.value}`);
}
</script>

<style scoped lang="scss">
.year-range-field { display: grid; grid-column: 1 / -1; grid-template-columns: repeat(2, minmax(0, 1fr)) auto; gap: 10px; align-items: end; min-width: 0; margin: 0; border: 0; padding: 0; }
legend { grid-column: 1 / -1; margin-bottom: 7px; padding: 0; color: var(--ink-muted); font-size: 10px; font-weight: 650; }
label { display: grid; gap: 7px; }
label > span { color: var(--ink-faint); font-size: 9px; font-weight: 650; }
select { width: 100%; min-height: 40px; border: 1px solid var(--line); border-radius: 8px; outline: 0; background: var(--surface); padding: 8px 10px; color: var(--ink-strong); font-size: 12px; cursor: pointer; }
select:focus-visible, input[type='checkbox']:focus-visible { border-color: var(--accent); outline: 0; box-shadow: 0 0 0 3px rgb(138 93 54 / 9%); }
select:disabled { cursor: not-allowed; opacity: .5; }
.current-toggle { display: flex; min-height: 40px; align-items: center; gap: 7px; padding: 0 4px; white-space: nowrap; cursor: pointer; }
.current-toggle input { width: 15px; height: 15px; accent-color: var(--accent); }
.current-toggle span { color: var(--ink-muted); font-size: 10px; }
small { grid-column: 1 / -1; color: var(--danger); font-size: 9px; }
.legacy-value { color: var(--ink-faint); }
@media (max-width: 720px) { .year-range-field { grid-template-columns: 1fr; } legend, small { grid-column: auto; } }
</style>
