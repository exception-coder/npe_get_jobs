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
  <div class="nordic-template" :style="styles">
    <div class="container">
      <!-- 头部 -->
      <header class="header">
        <div class="header-content">
          <h1 class="name">{{ resume.personalInfo.name }}</h1>
          <div class="title">{{ resume.personalInfo.title }}</div>
        </div>
        <div class="contact-grid">
          <div class="contact-item">
            <div class="contact-label">电话</div>
            <div class="contact-value">{{ resume.personalInfo.phone }}</div>
          </div>
          <div class="contact-item">
            <div class="contact-label">邮箱</div>
            <div class="contact-value">{{ resume.personalInfo.email }}</div>
          </div>
          <div class="contact-item">
            <div class="contact-label">地点</div>
            <div class="contact-value">{{ resume.personalInfo.location }}</div>
          </div>
          <div class="contact-item">
            <div class="contact-label">经验</div>
            <div class="contact-value">{{ resume.personalInfo.experience }}</div>
          </div>
        </div>
      </header>

      <!-- 核心技能 -->
      <section v-if="resume.personalInfo.coreSkills?.length" class="section">
        <h2 class="section-title">核心技能</h2>
        <div class="skills-list">
          <div
            v-for="(skill, index) in resume.personalInfo.coreSkills"
            :key="index"
            class="skill-badge"
          >
            {{ skill }}
          </div>
        </div>
      </section>

      <!-- 个人优势 -->
      <section v-if="resume.strengths?.length" class="section">
        <h2 class="section-title">个人优势</h2>
        <div class="strengths-grid">
          <div
            v-for="(strength, index) in resume.strengths"
            :key="index"
            class="strength-card"
          >
            {{ strength }}
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section v-if="resume.workExperiences?.length" class="section">
        <h2 class="section-title">工作经历</h2>
        <div
          v-for="(exp, index) in resume.workExperiences"
          :key="index"
          class="card"
        >
          <div class="card-header">
            <div>
              <div class="card-title">{{ exp.role }}</div>
              <div class="card-subtitle">{{ exp.company }}</div>
            </div>
            <div class="card-period">{{ exp.period }}</div>
          </div>
          <p v-if="exp.summary" class="card-summary">{{ exp.summary }}</p>
          <ul v-if="exp.highlights?.length" class="highlights">
            <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 项目经历 -->
      <section v-if="resume.projects?.length" class="section">
        <h2 class="section-title">项目经历</h2>
        <div
          v-for="(project, index) in resume.projects"
          :key="index"
          class="card"
        >
          <div class="card-header">
            <div>
              <div class="card-title">{{ project.name }}</div>
              <div class="card-subtitle">{{ project.role }}</div>
            </div>
            <div class="card-period">{{ project.period }}</div>
          </div>
          <p v-if="project.summary" class="card-summary">{{ project.summary }}</p>
          <ul v-if="project.highlights?.length" class="highlights">
            <li v-for="(highlight, hIndex) in project.highlights" :key="hIndex">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 教育经历 -->
      <section v-if="resume.education?.length" class="section">
        <h2 class="section-title">教育经历</h2>
        <div
          v-for="(edu, index) in resume.education"
          :key="index"
          class="edu-card"
        >
          <div class="card-header">
            <div>
              <div class="card-title">{{ edu.school }}</div>
              <div class="card-subtitle">{{ edu.major }} · {{ edu.degree }}</div>
            </div>
            <div class="card-period">{{ edu.period }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.nordic-template {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  min-height: 100vh;
  padding: 60px 40px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--color-secondary);
}

.header-content {
  margin-bottom: 24px;
}

.name {
  font-family: var(--font-heading);
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--color-primary);
  letter-spacing: -0.5px;
}

.title {
  font-size: 20px;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-secondary);
}

.contact-value {
  font-size: 14px;
  color: var(--color-text);
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: var(--color-primary);
  letter-spacing: -0.3px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-badge {
  padding: 8px 16px;
  background: var(--color-secondary);
  color: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.skill-badge:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

.strengths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.strength-card {
  padding: 16px 20px;
  background: white;
  border-left: 4px solid var(--color-accent);
  border-radius: 4px;
  font-size: 15px;
  line-height: 1.6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.strength-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(4px);
}

.card {
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.edu-card {
  margin-bottom: 16px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 4px;
}

.card-subtitle {
  font-size: 15px;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.card-period {
  font-size: 13px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  padding: 4px 12px;
  background: var(--color-bg);
  border-radius: 4px;
  font-weight: 600;
}

.card-summary {
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
  content: '•';
  position: absolute;
  left: -20px;
  color: var(--color-accent);
  font-weight: 700;
  font-size: 18px;
}

@media print {
  .nordic-template {
    padding: 32px;
  }
  
  .card,
  .edu-card,
  .strength-card {
    box-shadow: none;
    border: 1px solid #e0e0e0;
  }
}

@media (max-width: 768px) {
  .nordic-template {
    padding: 32px 20px;
  }
  
  .name {
    font-size: 32px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    flex-direction: column;
  }
}
</style>

