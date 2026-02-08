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
  <div class="art-deco-template" :style="styles">
    <!-- 装饰边框 -->
    <div class="border-frame">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
    </div>

    <div class="content">
      <!-- 头部 -->
      <header class="header">
        <div class="ornament ornament-top"></div>
        <h1 class="name">{{ resume.personalInfo.name }}</h1>
        <div class="title-divider">
          <span class="diamond">◆</span>
          <span class="title">{{ resume.personalInfo.title }}</span>
          <span class="diamond">◆</span>
        </div>
        <div class="contact-bar">
          <span>{{ resume.personalInfo.phone }}</span>
          <span class="separator">|</span>
          <span>{{ resume.personalInfo.email }}</span>
          <span class="separator">|</span>
          <span>{{ resume.personalInfo.location }}</span>
          <span class="separator">|</span>
          <span>{{ resume.personalInfo.experience }}</span>
        </div>
        <div class="ornament ornament-bottom"></div>
      </header>

      <!-- 核心技能 -->
      <section v-if="resume.personalInfo.coreSkills?.length" class="section">
        <h2 class="section-title">
          <span class="title-text">核心技能</span>
        </h2>
        <div class="skills-grid">
          <div
            v-for="(skill, index) in resume.personalInfo.coreSkills"
            :key="index"
            class="skill-box"
          >
            {{ skill }}
          </div>
        </div>
      </section>

      <!-- 个人优势 -->
      <section v-if="resume.strengths?.length" class="section">
        <h2 class="section-title">
          <span class="title-text">个人优势</span>
        </h2>
        <div class="strengths-list">
          <div
            v-for="(strength, index) in resume.strengths"
            :key="index"
            class="strength-box"
          >
            <div class="strength-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="strength-content">{{ strength }}</div>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section v-if="resume.workExperiences?.length" class="section">
        <h2 class="section-title">
          <span class="title-text">工作经历</span>
        </h2>
        <div
          v-for="(exp, index) in resume.workExperiences"
          :key="index"
          class="experience-box"
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

      <!-- 项目经历 -->
      <section v-if="resume.projects?.length" class="section">
        <h2 class="section-title">
          <span class="title-text">项目经历</span>
        </h2>
        <div
          v-for="(project, index) in resume.projects"
          :key="index"
          class="project-box"
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

      <!-- 教育经历 -->
      <section v-if="resume.education?.length" class="section">
        <h2 class="section-title">
          <span class="title-text">教育经历</span>
        </h2>
        <div
          v-for="(edu, index) in resume.education"
          :key="index"
          class="edu-box"
        >
          <div class="edu-header">
            <div>
              <div class="edu-school">{{ edu.school }}</div>
              <div class="edu-details">{{ edu.major }} · {{ edu.degree }}</div>
            </div>
            <div class="edu-period">{{ edu.period }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.art-deco-template {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  min-height: 100vh;
  padding: 60px;
  position: relative;
}

.border-frame {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid var(--color-primary);
  pointer-events: none;
  z-index: 0;
}

.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid var(--color-primary);
}

.corner-tl {
  top: -2px;
  left: -2px;
  border-right: none;
  border-bottom: none;
}

.corner-tr {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
}

.corner-bl {
  bottom: -2px;
  left: -2px;
  border-right: none;
  border-top: none;
}

.corner-br {
  bottom: -2px;
  right: -2px;
  border-left: none;
  border-top: none;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.ornament {
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-primary) 0px,
    var(--color-primary) 10px,
    transparent 10px,
    transparent 20px
  );
  margin: 0 auto;
  width: 200px;
}

.ornament-top {
  margin-bottom: 32px;
}

.ornament-bottom {
  margin-top: 32px;
}

.name {
  font-family: var(--font-heading);
  font-size: 52px;
  font-weight: 400;
  margin: 0 0 20px 0;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-primary);
}

.title-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}

.diamond {
  color: var(--color-primary);
  font-size: 12px;
}

.title {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.contact-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  letter-spacing: 1px;
}

.separator {
  color: var(--color-primary);
}

.section {
  margin-bottom: 48px;
}

.section-title {
  text-align: center;
  margin-bottom: 32px;
  position: relative;
}

.title-text {
  font-family: var(--font-heading);
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-primary);
  background: var(--color-bg);
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.section-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-primary);
  z-index: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.skill-box {
  padding: 16px;
  text-align: center;
  background: linear-gradient(135deg, transparent 10px, var(--color-primary) 10px);
  color: var(--color-text);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;
}

.skill-box::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent var(--color-bg) transparent;
}

.skill-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.strengths-list {
  display: grid;
  gap: 20px;
}

.strength-box {
  display: flex;
  gap: 24px;
  padding: 20px;
  border: 1px solid var(--color-primary);
  position: relative;
}

.strength-box::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-top: 2px solid var(--color-primary);
  border-left: 2px solid var(--color-primary);
}

.strength-box::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid var(--color-primary);
  border-right: 2px solid var(--color-primary);
}

.strength-number {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 400;
  color: var(--color-primary);
  min-width: 60px;
}

.strength-content {
  flex: 1;
  font-size: 15px;
  line-height: 1.8;
  padding-top: 8px;
}

.experience-box,
.project-box,
.edu-box {
  margin-bottom: 32px;
  padding: 28px;
  border: 1px solid var(--color-accent);
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(201, 173, 167, 0.05) 100%
  );
}

.exp-header,
.project-header,
.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 24px;
}

.exp-role,
.project-name,
.edu-school {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.exp-company,
.project-role,
.edu-details {
  font-size: 15px;
  color: var(--color-text-secondary);
  letter-spacing: 1px;
}

.exp-period,
.project-period,
.edu-period {
  font-size: 13px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  letter-spacing: 1px;
  padding: 8px 16px;
  border: 1px solid var(--color-accent);
}

.exp-summary,
.project-summary {
  margin: 16px 0;
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.highlights {
  margin: 16px 0 0 0;
  padding-left: 24px;
  list-style: none;
}

.highlights li {
  position: relative;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.7;
}

.highlights li::before {
  content: '▸';
  position: absolute;
  left: -24px;
  color: var(--color-primary);
  font-size: 16px;
}

@media print {
  .art-deco-template {
    padding: 32px;
  }
  
  .border-frame {
    display: none;
  }
}

@media (max-width: 768px) {
  .art-deco-template {
    padding: 40px 24px;
  }
  
  .name {
    font-size: 36px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .exp-header,
  .project-header,
  .edu-header {
    flex-direction: column;
  }
}
</style>

