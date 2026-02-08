<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  resume: any
  colors: any
  fonts: any
}>()

const styles = computed(() => ({
  '--color-primary': props.colors.primary,
  '--color-secondary': props.colors.secondary,
  '--color-accent': props.colors.accent,
  '--color-bg': props.colors.background,
  '--color-text': props.colors.text,
  '--color-text-secondary': props.colors.textSecondary,
  '--font-heading': props.fonts.heading,
  '--font-body': props.fonts.body,
}))
</script>

<template>
  <div class="swiss-template" :style="styles">
    <div class="grid-container">
      <!-- 左侧栏 -->
      <aside class="sidebar">
        <div class="name-block">
          <h1 class="name">{{ resume.personalInfo.name }}</h1>
          <div class="title">{{ resume.personalInfo.title }}</div>
        </div>

        <section class="sidebar-section">
          <h2 class="sidebar-title">联系方式</h2>
          <div class="contact-item">{{ resume.personalInfo.phone }}</div>
          <div class="contact-item">{{ resume.personalInfo.email }}</div>
          <div class="contact-item">{{ resume.personalInfo.location }}</div>
          <div class="contact-item">{{ resume.personalInfo.experience }}</div>
        </section>

        <section v-if="resume.personalInfo.coreSkills?.length" class="sidebar-section">
          <h2 class="sidebar-title">核心技能</h2>
          <div class="skills-list">
            <div
              v-for="(skill, index) in resume.personalInfo.coreSkills"
              :key="index"
              class="skill-item"
            >
              {{ skill }}
            </div>
          </div>
        </section>

        <section v-if="resume.education?.length" class="sidebar-section">
          <h2 class="sidebar-title">教育背景</h2>
          <div
            v-for="(edu, index) in resume.education"
            :key="index"
            class="edu-item"
          >
            <div class="edu-school">{{ edu.school }}</div>
            <div class="edu-detail">{{ edu.major }}</div>
            <div class="edu-detail">{{ edu.degree }}</div>
            <div class="edu-period">{{ edu.period }}</div>
          </div>
        </section>
      </aside>

      <!-- 主内容区 -->
      <main class="main-content">
        <section v-if="resume.strengths?.length" class="content-section">
          <h2 class="section-title">个人优势</h2>
          <div class="strengths-list">
            <div
              v-for="(strength, index) in resume.strengths"
              :key="index"
              class="strength-item"
            >
              <span class="number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="text">{{ strength }}</span>
            </div>
          </div>
        </section>

        <section v-if="resume.workExperiences?.length" class="content-section">
          <h2 class="section-title">工作经历</h2>
          <div
            v-for="(exp, index) in resume.workExperiences"
            :key="index"
            class="experience-block"
          >
            <div class="exp-header">
              <div class="exp-left">
                <div class="exp-role">{{ exp.role }}</div>
                <div class="exp-company">{{ exp.company }}</div>
              </div>
              <div class="exp-period">{{ exp.period }}</div>
            </div>
            <p v-if="exp.summary" class="exp-summary">{{ exp.summary }}</p>
            <ul v-if="exp.highlights?.length" class="highlights">
              <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </section>

        <section v-if="resume.projects?.length" class="content-section">
          <h2 class="section-title">项目经历</h2>
          <div
            v-for="(project, index) in resume.projects"
            :key="index"
            class="project-block"
          >
            <div class="project-header">
              <div class="project-left">
                <div class="project-name">{{ project.name }}</div>
                <div class="project-role">{{ project.role }}</div>
              </div>
              <div class="project-period">{{ project.period }}</div>
            </div>
            <p v-if="project.summary" class="project-summary">{{ project.summary }}</p>
            <ul v-if="project.highlights?.length" class="highlights">
              <li v-for="(highlight, hIndex) in project.highlights" :key="hIndex">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.swiss-template {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.5;
  min-height: 100vh;
}

.grid-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.sidebar {
  background: var(--color-primary);
  color: white;
  padding: 48px 32px;
  width: 280px;
  flex-shrink: 0;
}

.name-block {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.name {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.title {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.9;
}

.sidebar-section {
  margin-bottom: 40px;
}

.sidebar-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 16px 0;
  opacity: 0.8;
}

.contact-item {
  font-size: 13px;
  margin-bottom: 8px;
  line-height: 1.6;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-item {
  font-size: 13px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-left: 3px solid var(--color-secondary);
  font-weight: 500;
}

.edu-item {
  margin-bottom: 20px;
}

.edu-item:last-child {
  margin-bottom: 0;
}

.edu-school {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
}

.edu-detail {
  font-size: 12px;
  margin-bottom: 2px;
  opacity: 0.9;
}

.edu-period {
  font-size: 11px;
  margin-top: 4px;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.main-content {
  padding: 48px 48px 48px 64px;
  flex: 1;
  min-width: 0;
}

.content-section {
  margin-bottom: 48px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 24px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 12px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 4px;
  background: var(--color-secondary);
}

.strengths-list {
  display: grid;
  gap: 16px;
}

.strength-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.number {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-secondary);
  min-width: 32px;
}

.text {
  flex: 1;
  font-size: 15px;
  line-height: 1.6;
}

.experience-block,
.project-block {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #E0E0E0;
}

.experience-block:last-child,
.project-block:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.exp-header,
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 24px;
}

.exp-role,
.project-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--color-text);
}

.exp-company,
.project-role {
  font-size: 15px;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.exp-period,
.project-period {
  font-size: 13px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.exp-summary,
.project-summary {
  margin: 12px 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-size: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.highlights {
  margin: 12px 0 0 0;
  padding-left: 20px;
  list-style: none;
}

.highlights li {
  position: relative;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text);
}

.highlights li::before {
  content: '—';
  position: absolute;
  left: -20px;
  color: var(--color-accent);
  font-weight: 700;
}

@media print {
  .swiss-template {
    font-size: 11pt;
  }
  
  .main-content {
    padding: 32px 32px 32px 48px;
  }
  
  .sidebar {
    padding: 32px 24px;
  }
}

@media (max-width: 968px) {
  .grid-container {
    flex-direction: column;
  }
  
  .sidebar {
    padding: 32px 24px;
    width: 100%;
  }
  
  .main-content {
    padding: 32px 24px;
  }
}
</style>

