<template>
  <div class="resume-editor">
    <section class="resume-control">
      <div><p>简历版本</p><select :value="resumeListState.selectedResumeId ?? ''" @change="chooseResume"><option value="">当前草稿</option><option v-for="item in resumeListState.resumes" :key="item.id" :value="item.id">{{ resumeName(item) }}</option></select></div>
      <button type="button" @click="createNewResume">新建简历</button>
    </section>

    <section class="resume-section">
      <header><p>基本信息</p><h4>招聘方首先看到的内容</h4></header>
      <div class="field-grid">
        <label><span>姓名</span><input v-model.trim="resume.personalInfo.name" /></label><label><span>职位标题</span><input v-model.trim="resume.personalInfo.title" placeholder="Java 高级工程师" /></label>
        <label><span>经验</span><input v-model.trim="resume.personalInfo.experience" placeholder="5 年" /></label><label><span>所在城市</span><input v-model.trim="resume.personalInfo.location" placeholder="广州" /></label>
        <label><span>邮箱</span><input v-model.trim="resume.personalInfo.email" type="email" /></label><label><span>电话</span><input v-model.trim="resume.personalInfo.phone" /></label>
        <label class="wide"><span>核心技能</span><input :value="listText(resume.personalInfo.coreSkills)" placeholder="Java、Spring Boot、MySQL" @input="setList(resume.personalInfo.coreSkills, $event)" /></label>
        <label class="wide"><span>个人优势</span><textarea :value="listLines(resume.strengths)" rows="4" placeholder="每行一项，写清场景、动作和结果" @input="setLines(resume.strengths, $event)" /></label>
      </div>
    </section>

    <section class="resume-section">
      <header><p>目标表达</p><h4>让简历和岗位目标保持一致</h4></header>
      <div class="field-grid">
        <label><span>目标岗位</span><input v-model.trim="resume.desiredRole.title" /></label><label><span>期望薪资</span><input v-model.trim="resume.desiredRole.salary" placeholder="25-40K" /></label>
        <label><span>目标城市</span><input v-model.trim="resume.desiredRole.location" /></label><label><span>目标行业</span><input :value="listText(resume.desiredRole.industries)" @input="setList(resume.desiredRole.industries, $event)" /></label>
      </div>
    </section>

    <section class="resume-section repeat-section">
      <header><div><p>工作经历</p><h4>以结果为中心描述职责</h4></div><button type="button" @click="addWorkExperience(resume)">添加经历</button></header>
      <article v-for="(experience, index) in resume.workExperiences" :key="`work-${index}`">
        <div class="field-grid"><label><span>公司</span><input v-model.trim="experience.company" /></label><label><span>职位</span><input v-model.trim="experience.role" /></label><label class="wide"><span>时间</span><input v-model.trim="experience.period" placeholder="2021/06 - 至今" /></label><label class="wide"><span>职责摘要</span><textarea v-model.trim="experience.summary" rows="3" /></label><label class="wide"><span>成果亮点</span><textarea :value="listLines(experience.highlights)" rows="4" placeholder="每行一项，尽量包含量化结果" @input="setLines(experience.highlights, $event)" /></label></div>
        <button class="remove" type="button" @click="removeWorkExperience(resume, index)">删除这段经历</button>
      </article><p v-if="!resume.workExperiences.length" class="empty">还没有工作经历</p>
    </section>

    <section class="resume-section repeat-section">
      <header><div><p>项目经历</p><h4>证明能力的具体案例</h4></div><button type="button" @click="addProject(resume)">添加项目</button></header>
      <article v-for="(project, index) in resume.projects" :key="`project-${index}`">
        <div class="field-grid"><label><span>项目</span><input v-model.trim="project.name" /></label><label><span>角色</span><input v-model.trim="project.role" /></label><label class="wide"><span>时间</span><input v-model.trim="project.period" /></label><label class="wide"><span>项目摘要</span><textarea v-model.trim="project.summary" rows="3" /></label><label class="wide"><span>项目成果</span><textarea :value="listLines(project.highlights)" rows="4" @input="setLines(project.highlights, $event)" /></label></div>
        <button class="remove" type="button" @click="removeProject(resume, index)">删除这个项目</button>
      </article><p v-if="!resume.projects.length" class="empty">还没有项目经历</p>
    </section>

    <section class="resume-section repeat-section">
      <header><div><p>教育经历</p><h4>保留必要的教育背景</h4></div><button type="button" @click="addEducation(resume)">添加教育经历</button></header>
      <article v-for="(education, index) in resume.education" :key="`education-${index}`"><div class="field-grid"><label><span>学校</span><input v-model.trim="education.school" /></label><label><span>专业</span><input v-model.trim="education.major" /></label><label><span>学历</span><input v-model.trim="education.degree" /></label><label><span>时间</span><input v-model.trim="education.period" /></label></div><button class="remove" type="button" @click="removeEducation(resume, index)">删除这段教育经历</button></article><p v-if="!resume.education.length" class="empty">还没有教育经历</p>
    </section>

    <footer class="resume-actions"><span>{{ saveState.lastSavedAt ? `上次保存 ${saveState.lastSavedAt}` : '当前内容会同步保存在本机' }}</span><button type="button" :disabled="saveState.loading" @click="handleSaveResume">{{ saveState.loading ? '正在保存…' : '保存简历' }}</button></footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useResumeData } from '@/modules/vitaPolish/composables/useResumeData';
import { useResumeManagement } from '@/modules/vitaPolish/composables/useResumeManagement';

const { resume, resumeListState, saveState, loadResumeList, selectResume, createNewResume, handleSaveResume, loadResumeFromStorage } = useResumeData();
const { addWorkExperience, removeWorkExperience, addProject, removeProject, addEducation, removeEducation } = useResumeManagement();

onMounted(async () => {
  await loadResumeList();
  if (resumeListState.resumes.length) await selectResume(resumeListState.resumes[0].id);
  else loadResumeFromStorage();
});

function resumeName(item) { return item?.personalInfo?.name || item?.name || `简历 #${item.id}`; }
function chooseResume(event) { const value = event.target.value; if (value) void selectResume(Number(value)); else createNewResume(); }
function listText(values) { return Array.isArray(values) ? values.join('、') : ''; }
function listLines(values) { return Array.isArray(values) ? values.join('\n') : ''; }
function eventValue(event) { return event.target.value; }
function replace(values, next) { values.splice(0, values.length, ...next); }
function setList(values, event) { replace(values, eventValue(event).split(/[、,，\n]/).map((item) => item.trim()).filter(Boolean)); }
function setLines(values, event) { replace(values, eventValue(event).split('\n').map((item) => item.trim()).filter(Boolean)); }
</script>

<style scoped>
.resume-editor { color: var(--ink-strong); }.resume-control { display: flex; min-height: 76px; align-items: center; justify-content: space-between; gap: 20px; border-top: 1px solid var(--line); }.resume-control > div { display: flex; align-items: center; gap: 14px; }.resume-control p { margin: 0; color: var(--ink-faint); font-size: 9px; }.resume-control select { height: 34px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); padding: 0 9px; color: var(--ink); font-size: 10px; }.resume-control button, .repeat-section header button { min-height: 32px; border: 1px solid var(--line); border-radius: 16px; background: transparent; padding: 0 11px; color: var(--ink-muted); font-size: 10px; font-weight: 700; cursor: pointer; }.resume-section { display: grid; grid-template-columns: minmax(190px, 240px) minmax(0, 1fr); gap: 46px; padding: 34px 0; border-top: 1px solid var(--line); }.resume-section header p { margin: 0 0 6px; color: var(--accent); font-size: 9px; font-weight: 750; letter-spacing: .08em; }.resume-section h4 { margin: 0; font: 560 19px var(--font-display); }.field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 15px; }.field-grid label { display: grid; gap: 7px; }.field-grid label > span { color: var(--ink-muted); font-size: 10px; font-weight: 700; }.field-grid .wide { grid-column: 1 / -1; }.field-grid input, .field-grid textarea { width: 100%; border: 1px solid var(--line-strong, #d4cec5); border-radius: 9px; outline: 0; background: color-mix(in srgb, var(--surface) 74%, transparent); padding: 10px 12px; color: var(--ink-strong); font-size: 11px; line-height: 1.5; }.field-grid input { height: 42px; }.field-grid textarea { resize: vertical; }.field-grid input:focus, .field-grid textarea:focus { border-color: var(--accent); }.repeat-section { display: block; }.repeat-section > header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 22px; }.repeat-section article { padding: 24px 0; border-top: 1px solid var(--line); }.repeat-section article .field-grid { max-width: 760px; margin-left: auto; }.remove { display: block; margin: 13px 0 0 auto; border: 0; background: transparent; color: var(--ink-faint); font-size: 9px; cursor: pointer; }.remove:hover { color: var(--danger); }.empty { margin: 0; padding: 20px 0; border-top: 1px solid var(--line); color: var(--ink-faint); font-size: 10px; }.resume-actions { position: sticky; z-index: 8; bottom: 12px; display: flex; min-height: 60px; align-items: center; justify-content: space-between; gap: 20px; margin-top: 16px; padding: 10px 12px 10px 18px; border: 1px solid var(--line); border-radius: 12px; background: color-mix(in srgb, var(--surface) 91%, transparent); box-shadow: 0 12px 32px rgb(57 48 39 / 9%); backdrop-filter: blur(18px); }.resume-actions span { color: var(--ink-faint); font-size: 9px; }.resume-actions button { min-height: 36px; border: 0; border-radius: 18px; background: var(--ink-strong); padding: 0 14px; color: white; font-size: 10px; font-weight: 700; cursor: pointer; }@media (max-width: 760px) { .resume-section { grid-template-columns: 1fr; gap: 22px; }.field-grid { grid-template-columns: 1fr; }.field-grid .wide { grid-column: auto; }.repeat-section article .field-grid { margin-left: 0; }.resume-actions span { display: none; }.resume-actions { justify-content: flex-end; } }
.field-grid input { height: 38px; border-radius: 8px; }
</style>
