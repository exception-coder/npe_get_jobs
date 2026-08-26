<template>
  <div class="platform-rail" aria-label="招聘平台">
    <button
      v-for="item in platforms"
      :key="item.id"
      type="button"
      :class="{ active: item.id === modelValue }"
      :aria-pressed="item.id === modelValue"
      @click="$emit('update:modelValue', item.id)"
    >
      <i :class="item.icon" aria-hidden="true" />
      <span><strong>{{ item.title }}</strong><small>{{ item.id === modelValue ? statusLabel : '切换平台' }}</small></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { RecruitmentPlatform } from '@/entities/recruitment-platform/model/platforms';

defineProps<{ platforms: RecruitmentPlatform[]; modelValue: string; statusLabel: string }>();
defineEmits<{ 'update:modelValue': [value: string] }>();
</script>

<style scoped lang="scss">
.platform-rail { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; max-width: 1180px; margin: 0 auto var(--space-6); }
.platform-rail button { display: flex; min-width: 0; min-height: 62px; align-items: center; gap: 11px; border: 0; border-radius: 10px; background: var(--surface); padding: 11px 14px; color: var(--ink-muted); text-align: left; cursor: pointer; }
.platform-rail button:hover { background: var(--surface-subtle); color: var(--ink-strong); }.platform-rail button.active { background: var(--ink-strong); color: white; box-shadow: 0 5px 15px rgb(55 45 36 / 10%); }
.platform-rail i { flex: 0 0 22px; color: var(--accent); font-size: 20px; }.platform-rail button.active i { color: white; }.platform-rail span { display: grid; min-width: 0; gap: 3px; }.platform-rail strong { overflow: hidden; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }.platform-rail small { color: inherit; font-size: 9px; opacity: .58; }
@media (max-width: 720px) { .platform-rail { grid-template-columns: repeat(2, 1fr); } }
</style>
