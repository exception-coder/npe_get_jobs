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
  <div class="neo-brutalism-template" :style="styles">
    <!-- 头部信息 -->
    <header class="header">
      <div class="name-block">
        <h1 class="name">{{ resume.personalInfo.name }}</h1>
        <div class="title">{{ resume.personalInfo.title }}</div>
      </div>
      <div class="contact-grid">
        <div class="contact-item">
          <span class="icon">📱</span>
          <span>{{ resume.personalInfo.phone }}</span>
        </div>
        <div class="contact-item">
          <span class="icon">✉️</span>
          <span>{{ resume.personalInfo.email }}</span>
        </div>
        <div class="contact-item">
          <span class="icon">📍</span>
          <span>{{ resume.personalInfo.location }}</span>
        </div>
        <div class="contact-item">
          <span class="icon">⏱️</span>
          <span>{{ resume.personalInfo.experience }}</span>
        </div>
      </div>
    </header>

    <!-- 核心技能 -->
    <section v-if="resume.personalInfo.coreSkills?.length" class="section">
      <h2 class="section-title">核心技能</h2>
      <div class="skills-grid">
        <div
          v-for="(skill, index) in resume.personalInfo.coreSkills"
          :key="index"
          class="skill-tag"
        >
          {{ skill }}
        </div>
      </div>
    </section>

    <!-- 个人优势 -->
    <section v-if="resume.strengths?.length" class="section">
      <h2 class="section-title">个人优势</h2>
      <div class="strengths-list">
        <div
          v-for="(strength, index) in resume.strengths"
          :key="index"
          class="strength-item"
        >
          <span class="bullet">▸</span>
          <span>{{ strength }}</span>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <section v-if="resume.workExperiences?.length" class="section">
      <h2 class="section-title">工作经历</h2>
      <div
        v-for="(exp, index) in resume.workExperiences"
        :key="index"
        class="experience-card"
      >
        <div class="exp-header">
          <div class="exp-title">
            <strong>{{ exp.role }}</strong>
            <span class="separator">@</span>
            <span>{{ exp.company }}</span>
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
      <h2 class="section-title">项目经历</h2>
      <div
        v-for="(project, index) in resume.projects"
        :key="index"
        class="project-card"
      >
        <div class="project-header">
          <div class="project-title">
            <strong>{{ project.name }}</strong>
            <span class="role-badge">{{ project.role }}</span>
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
      <h2 class="section-title">教育经历</h2>
      <div
        v-for="(edu, index) in resume.education"
        :key="index"
        class="education-card"
      >
        <div class="edu-header">
          <div class="edu-title">
            <strong>{{ edu.school }}</strong>
            <span class="separator">·</span>
            <span>{{ edu.major }}</span>
          </div>
          <div class="edu-period">{{ edu.period }}</div>
        </div>
        <div class="edu-degree">{{ edu.degree }}</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.neo-brutalism-template {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  padding: 48px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
}

.header {
  margin-bottom: 40px;
  border: 4px solid var(--color-text);
  padding: 32px;
  background: var(--color-primary);
  box-shadow: 8px 8px 0 var(--color-text);
  position: relative;
}

.name-block {
  margin-bottom: 24px;
}

.name {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: var(--color-text);
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}

.icon {
  font-size: 18px;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  padding: 12px 20px;
  background: var(--color-secondary);
  border: 4px solid var(--color-text);
  box-shadow: 6px 6px 0 var(--color-text);
  display: inline-block;
  letter-spacing: 1px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  padding: 10px 20px;
  background: var(--color-accent);
  border: 3px solid var(--color-text);
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 4px 4px 0 var(--color-text);
  transition: transform 0.2s, box-shadow 0.2s;
}

.skill-tag:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-text);
}

.strengths-list {
  display: grid;
  gap: 12px;
}

.strength-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: white;
  border: 3px solid var(--color-text);
  font-weight: 600;
}

.bullet {
  color: var(--color-primary);
  font-size: 20px;
  font-weight: 900;
}

.experience-card,
.project-card,
.education-card {
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 3px solid var(--color-text);
  box-shadow: 6px 6px 0 var(--color-text);
}

.exp-header,
.project-header,
.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 12px;
}

.exp-title,
.project-title,
.edu-title {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.separator {
  color: var(--color-primary);
  font-weight: 900;
}

.role-badge {
  padding: 4px 12px;
  background: var(--color-accent);
  border: 2px solid var(--color-text);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.exp-period,
.project-period,
.edu-period {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-secondary);
  padding: 6px 12px;
  background: var(--color-bg);
  border: 2px solid var(--color-text);
  white-space: nowrap;
}

.exp-summary,
.project-summary {
  margin: 12px 0;
  color: var(--color-text-secondary);
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.highlights {
  margin: 12px 0 0 0;
  padding-left: 24px;
  list-style: none;
}

.highlights li {
  position: relative;
  margin-bottom: 8px;
  font-weight: 500;
}

.highlights li::before {
  content: '▸';
  position: absolute;
  left: -20px;
  color: var(--color-primary);
  font-weight: 900;
}

.edu-degree {
  font-size: 14px;
  color: var(--color-text-secondary);
  font-weight: 600;
}

@media print {
  .neo-brutalism-template {
    padding: 24px;
  }
  
  .header {
    box-shadow: 4px 4px 0 var(--color-text);
  }
  
  .section-title {
    box-shadow: 3px 3px 0 var(--color-text);
  }
  
  .skill-tag {
    box-shadow: 2px 2px 0 var(--color-text);
  }
  
  .experience-card,
  .project-card,
  .education-card {
    box-shadow: 3px 3px 0 var(--color-text);
  }
}
</style>

