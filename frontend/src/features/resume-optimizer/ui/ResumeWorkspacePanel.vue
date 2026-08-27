<template>
  <section class="resume-workspace" aria-labelledby="resume-workspace-title">
    <div class="workspace-toolbar">
      <div><span>RESUME STUDIO</span><h2 id="resume-workspace-title">简历表达工作台</h2><p>参照招聘平台常用信息结构，用可验证的项目成果组织你的职业叙事。</p></div>
      <div class="toolbar-actions"><button class="secondary" type="button" :disabled="exporting" @click="copyImage">{{ copied ? '已复制' : '复制图片' }}</button><button class="secondary" type="button" :disabled="exporting" @click="downloadImage">{{ exporting ? '生成中…' : '下载图片' }}</button><button class="primary" type="button" :disabled="saving" @click="persist">{{ saving ? '保存中…' : '保存简历' }}</button></div>
    </div>
    <div v-if="error || exportError || savedAt" class="status" :class="{ danger: error || exportError }"><span>{{ error || exportError || `已保存 · ${savedAt}` }}</span><button v-if="error" type="button" @click="load">重试</button></div>
    <div class="template-row"><span>版式</span><button v-for="item in templates" :key="item.id" type="button" :class="{ active: item.id === selectedTemplate }" @click="selectedTemplate = item.id"><strong>{{ item.name }}</strong><small>{{ item.description }}</small></button></div>
    <div class="mobile-tabs"><button type="button" :class="{ active: mobileView === 'edit' }" @click="mobileView = 'edit'">编辑</button><button type="button" :class="{ active: mobileView === 'preview' }" @click="mobileView = 'preview'">预览</button></div>
    <div class="workspace-grid"><ResumeEditorPane :class="{ 'mobile-active': mobileView === 'edit' }" :draft="draft" /><ResumePreviewPane :class="{ 'mobile-active': mobileView === 'preview' }" ref="preview" :draft="draft" :template="selectedTemplate" /></div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { copyResumeImage, downloadResumeImage } from '../application/resumeImageExporter';
import { RESUME_TEMPLATES } from '../model/resumeTemplates';
import type { ResumeTemplateId } from '../model/resumeTypes';
import { useResumeWorkspace } from '../model/useResumeWorkspace';
import ResumeEditorPane from './ResumeEditorPane.vue';
import ResumePreviewPane from './ResumePreviewPane.vue';
const { draft, saving, error, savedAt, load, persist } = useResumeWorkspace();
const templates = RESUME_TEMPLATES; const selectedTemplate = ref<ResumeTemplateId>('editorial');
const mobileView = ref<'edit' | 'preview'>('edit'); const preview = ref<InstanceType<typeof ResumePreviewPane>>();
const exporting = ref(false); const copied = ref(false); const exportError = ref('');
async function withDocument(action: (element: HTMLElement) => Promise<void>): Promise<void> { const element = preview.value?.getDocumentElement(); if (!element || exporting.value) return; exporting.value = true; exportError.value = ''; try { await action(element); } catch (cause) { exportError.value = cause instanceof Error ? cause.message : '图片生成失败'; } finally { exporting.value = false; } }
async function downloadImage() { await withDocument((element) => downloadResumeImage(element, draft.personalInfo.name)); }
async function copyImage() { await withDocument(async (element) => { await copyResumeImage(element); copied.value = true; window.setTimeout(() => { copied.value = false; }, 1800); }); }
onMounted(load);
</script>
<style scoped lang="scss">
.resume-workspace { padding: 24px 0 64px; }.workspace-toolbar { display: flex; align-items: end; justify-content: space-between; gap: 28px; padding: 18px 0 25px; }.workspace-toolbar > div:first-child > span { color: var(--accent); font-size: 9px; font-weight: 800; letter-spacing: .14em; }.workspace-toolbar h2 { margin: 6px 0 0; color: var(--ink-strong); font: 560 25px var(--font-display); letter-spacing: -.02em; }.workspace-toolbar p { margin: 7px 0 0; color: var(--ink-muted); font-size: 10px; }.toolbar-actions { display: flex; gap: 8px; }.toolbar-actions button { min-height: 36px; border-radius: 8px; padding: 0 14px; font-size: 10px; font-weight: 700; cursor: pointer; }.toolbar-actions button:disabled { cursor: wait; opacity: .58; }.secondary { border: 1px solid var(--line-strong); background: var(--surface); color: var(--ink); }.primary { border: 1px solid var(--ink-strong); background: var(--ink-strong); color: white; }.status { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; border-left: 2px solid var(--success); background: rgb(85 118 83 / 7%); padding: 9px 12px; color: var(--success); font-size: 10px; }.status.danger { border-color: var(--danger); background: rgb(154 79 71 / 7%); color: var(--danger); }.status button { border: 0; background: transparent; color: inherit; font-size: 10px; font-weight: 700; cursor: pointer; }.template-row { display: flex; align-items: stretch; gap: 8px; margin-bottom: 18px; }.template-row > span { display: grid; place-items: center; padding-right: 4px; color: var(--ink-faint); font-size: 9px; }.template-row button { display: grid; gap: 2px; min-width: 136px; border: 1px solid var(--line); border-radius: 8px; background: transparent; padding: 9px 11px; color: var(--ink); text-align: left; cursor: pointer; }.template-row button.active { border-color: var(--accent); background: rgb(138 93 54 / 5%); }.template-row strong { font-size: 10px; }.template-row small { color: var(--ink-faint); font-size: 8px; }.workspace-grid { display: grid; grid-template-columns: minmax(420px, .86fr) minmax(560px, 1.14fr); gap: 28px; align-items: start; }.mobile-tabs { display: none; }
.workspace-grid > * { display: block !important; }
@media (max-width: 1050px) { .workspace-grid { grid-template-columns: 1fr; } }
@media (max-width: 720px) { .resume-workspace { padding-top: 12px; }.workspace-toolbar { align-items: stretch; flex-direction: column; }.toolbar-actions { display: grid; grid-template-columns: 1fr 1fr; }.toolbar-actions .primary { grid-column: 1 / -1; }.template-row { overflow-x: auto; }.template-row button { min-width: 125px; }.mobile-tabs { display: grid; grid-template-columns: 1fr 1fr; margin-bottom: 16px; border-bottom: 1px solid var(--line); }.mobile-tabs button { border: 0; border-bottom: 1px solid transparent; background: transparent; padding: 11px; color: var(--ink-faint); font-size: 10px; font-weight: 700; }.mobile-tabs button.active { border-color: var(--ink-strong); color: var(--ink-strong); }.workspace-grid { display: block; }.workspace-grid > * { display: none !important; }.workspace-grid > .mobile-active { display: block !important; } }
</style>
