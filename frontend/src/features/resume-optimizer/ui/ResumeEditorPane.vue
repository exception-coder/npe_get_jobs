<template>
  <div class="editor-pane">
    <section class="editor-section identity">
      <div class="section-heading"><span>01 / 基本信息</span><h3>先让招聘方认识你</h3></div>
      <div class="form-grid">
        <label><span>姓名</span><input v-model="draft.personalInfo.name" placeholder="姓名" /></label>
        <label><span>求职标题</span><input v-model="draft.personalInfo.title" placeholder="高级 Java 开发工程师" /></label>
        <label><span>所在城市</span><input v-model="draft.personalInfo.location" placeholder="广州" /></label>
        <label><span>工作经验</span><input v-model="draft.personalInfo.experience" placeholder="9 年" /></label>
        <label><span>邮箱</span><input v-model="draft.personalInfo.email" type="email" placeholder="name@example.com" /></label>
        <label><span>电话</span><input v-model="draft.personalInfo.phone" placeholder="可留空" /></label>
        <label class="full"><span>个人主页</span><input v-model="draft.personalInfo.linkedin" placeholder="GitHub / 个人网站" /></label>
      </div>
    </section>

    <section class="editor-section">
      <div class="section-heading"><span>02 / 求职期望</span><h3>把方向说得更明确</h3></div>
      <div class="form-grid">
        <label><span>期望职位</span><input v-model="draft.desiredRole.title" /></label>
        <label><span>期望薪资</span><input v-model="draft.desiredRole.salary" /></label>
        <label><span>期望城市</span><input v-model="draft.desiredRole.location" /></label>
        <label><span>期望行业</span><input :value="join(draft.desiredRole.industries)" @input="draft.desiredRole.industries = split($event)" placeholder="用顿号或逗号分隔" /></label>
      </div>
    </section>

    <section class="editor-section">
      <div class="section-heading"><span>03 / 个人优势</span><h3>用证据表达能力</h3></div>
      <label><span>每行一条</span><textarea :value="lines(draft.strengths)" @input="draft.strengths = lineList($event)" rows="7" /></label>
      <label><span>核心技能</span><textarea :value="lines(draft.personalInfo.coreSkills)" @input="draft.personalInfo.coreSkills = lineList($event)" rows="4" /></label>
    </section>

    <ResumeRepeatableSection eyebrow="04 / 工作经历" title="把职责变成结果" item-label="经历" empty-text="添加最近一段工作经历。" :items="draft.workExperiences" @add="addWork" @remove="draft.workExperiences.splice($event, 1)">
      <template #default="{ index }"><div class="form-grid"><label><span>公司</span><input v-model="draft.workExperiences[index].company" /></label><label><span>职位</span><input v-model="draft.workExperiences[index].role" /></label><label class="full"><span>时间</span><input v-model="draft.workExperiences[index].period" /></label><label class="full"><span>工作概述</span><textarea v-model="draft.workExperiences[index].summary" rows="3" /></label><label class="full"><span>成果亮点（每行一条）</span><textarea :value="lines(draft.workExperiences[index].highlights)" @input="draft.workExperiences[index].highlights = lineList($event)" rows="5" /></label></div></template>
    </ResumeRepeatableSection>

    <ResumeRepeatableSection eyebrow="05 / 项目经历" title="展示最能代表你的项目" item-label="项目" empty-text="添加 3–5 个与目标岗位最相关的项目。" :items="draft.projects" @add="addProject" @remove="draft.projects.splice($event, 1)">
      <template #default="{ index }"><div class="form-grid"><label><span>项目名称</span><input v-model="draft.projects[index].name" /></label><label><span>项目角色</span><input v-model="draft.projects[index].role" /></label><label class="full"><span>时间</span><input v-model="draft.projects[index].period" /></label><label class="full"><span>项目概述</span><textarea v-model="draft.projects[index].summary" rows="3" /></label><label class="full"><span>成果亮点（每行一条）</span><textarea :value="lines(draft.projects[index].highlights)" @input="draft.projects[index].highlights = lineList($event)" rows="5" /></label></div></template>
    </ResumeRepeatableSection>

    <ResumeRepeatableSection eyebrow="06 / 教育经历" title="保持简明准确" item-label="教育" empty-text="添加学历信息。" :items="draft.education" @add="addEducation" @remove="draft.education.splice($event, 1)">
      <template #default="{ index }"><div class="form-grid"><label><span>学校</span><input v-model="draft.education[index].school" /></label><label><span>专业</span><input v-model="draft.education[index].major" /></label><label><span>学历</span><input v-model="draft.education[index].degree" /></label><label><span>时间</span><input v-model="draft.education[index].period" /></label></div></template>
    </ResumeRepeatableSection>
  </div>
</template>

<script setup lang="ts">
import type { ResumeDraft } from '../model/resumeTypes';
import ResumeRepeatableSection from './ResumeRepeatableSection.vue';
const props = defineProps<{ draft: ResumeDraft }>();
const lines = (value: string[]) => value.join('\n');
const join = (value: string[]) => value.join('、');
const getValue = (event: Event) => (event.target as HTMLInputElement | HTMLTextAreaElement).value;
const lineList = (event: Event) => getValue(event).split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
const split = (event: Event) => getValue(event).split(/[、，,]/).map((item) => item.trim()).filter(Boolean);
function addWork() { props.draft.workExperiences.push({ company: '', role: '', period: '', summary: '', highlights: [] }); }
function addProject() { props.draft.projects.push({ name: '', role: '', period: '', summary: '', highlights: [] }); }
function addEducation() { props.draft.education.push({ school: '', major: '', degree: '', period: '' }); }
</script>

<style scoped lang="scss">
.editor-pane { min-width: 0; }.editor-section { border-top: 1px solid var(--line); padding: 28px 0; }.identity { border-top: 0; }.section-heading { margin-bottom: 18px; }.section-heading span { color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .1em; }.section-heading h3 { margin: 5px 0 0; color: var(--ink-strong); font: 560 20px var(--font-display); }.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }.form-grid .full { grid-column: 1 / -1; }label { display: grid; gap: 7px; }label > span { color: var(--ink-muted); font-size: 10px; font-weight: 650; }input,textarea { width: 100%; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); padding: 10px 12px; color: var(--ink-strong); font-size: 12px; line-height: 1.55; transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }textarea { resize: vertical; }input:focus,textarea:focus { border-color: var(--accent); outline: 0; box-shadow: 0 0 0 3px rgb(138 93 54 / 9%); }
@media (max-width: 720px) { .form-grid { grid-template-columns: 1fr; }.form-grid .full { grid-column: auto; } }
</style>
