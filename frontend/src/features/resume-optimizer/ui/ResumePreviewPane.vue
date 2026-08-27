<template>
  <aside class="preview-pane"><header><div><span>实时预览</span><p>内容修改会即时呈现在画布中</p></div><div class="zoom"><button type="button" aria-label="缩小" @click="zoom = Math.max(.55, zoom - .05)">−</button><b>{{ Math.round(zoom * 100) }}%</b><button type="button" aria-label="放大" @click="zoom = Math.min(1, zoom + .05)">＋</button></div></header><div class="preview-viewport"><div class="preview-scale" :style="scaleStyle"><ResumeDocument ref="documentComponent" :draft="draft" :template="template" /></div></div></aside>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ResumeDraft, ResumeTemplateId } from '../model/resumeTypes';
import ResumeDocument from './ResumeDocument.vue';
defineProps<{ draft: ResumeDraft; template: ResumeTemplateId }>();
const zoom = ref(.72); const documentComponent = ref<InstanceType<typeof ResumeDocument>>();
const scaleStyle = computed(() => ({ transform: `scale(${zoom.value})`, width: `${794 * zoom.value}px`, height: `${1123 * zoom.value}px` }));
function getDocumentElement(): HTMLElement | null { return documentComponent.value?.$el as HTMLElement | null; }
defineExpose({ getDocumentElement });
</script>
<style scoped lang="scss">
.preview-pane { position: sticky; top: 16px; min-width: 0; align-self: start; border: 1px solid var(--line); border-radius: 12px; background: #ebe6de; overflow: hidden; }.preview-pane > header { display: flex; min-height: 58px; align-items: center; justify-content: space-between; gap: 14px; border-bottom: 1px solid var(--line-strong); background: #f2eee7; padding: 10px 14px; }.preview-pane header span { color: var(--ink-strong); font: 560 13px var(--font-display); }.preview-pane header p { margin: 3px 0 0; color: var(--ink-faint); font-size: 9px; }.zoom { display: flex; align-items: center; gap: 5px; }.zoom button { width: 25px; height: 25px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); color: var(--ink); cursor: pointer; }.zoom b { min-width: 38px; color: var(--ink-muted); font-size: 9px; text-align: center; }.preview-viewport { max-height: calc(100vh - 165px); overflow: auto; padding: 28px; }.preview-scale { transform-origin: top left; }
@media (max-width: 1050px) { .preview-pane { position: static; }.preview-viewport { max-height: none; } }
</style>
