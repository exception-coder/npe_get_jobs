<template>
  <section class="repeatable">
    <header><div><span>{{ eyebrow }}</span><h3>{{ title }}</h3></div><button type="button" @click="$emit('add')">＋ 添加</button></header>
    <p v-if="!items.length" class="empty">{{ emptyText }}</p>
    <article v-for="(_, index) in items" :key="index">
      <div class="item-title"><strong>{{ itemLabel }} {{ index + 1 }}</strong><button type="button" @click="$emit('remove', index)">移除</button></div>
      <slot :index="index" />
    </article>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; eyebrow: string; itemLabel: string; emptyText: string; items: unknown[] }>();
defineEmits<{ add: []; remove: [index: number] }>();
</script>

<style scoped lang="scss">
.repeatable { border-top: 1px solid var(--line); padding: 28px 0 4px; }.repeatable > header,.item-title { display: flex; align-items: center; justify-content: space-between; gap: 16px; }.repeatable header span { color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .1em; }.repeatable h3 { margin: 5px 0 0; color: var(--ink-strong); font: 560 20px var(--font-display); }.repeatable button { border: 0; background: transparent; color: var(--accent); font-size: 10px; font-weight: 700; cursor: pointer; }.repeatable article { margin-top: 18px; border: 1px solid var(--line); border-radius: 10px; background: rgb(255 254 250 / 56%); padding: 18px; }.item-title { margin-bottom: 14px; }.item-title strong { color: var(--ink-muted); font-size: 10px; }.item-title button { color: var(--danger); }.empty { margin: 18px 0; color: var(--ink-faint); font-size: 11px; }
</style>
