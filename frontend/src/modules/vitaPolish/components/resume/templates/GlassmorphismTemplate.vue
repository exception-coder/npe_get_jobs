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
  '--color-text': props.colors.text,
  '--color-text-secondary': props.colors.textSecondary,
  '--font-heading': props.fonts.heading,
  '--font-body': props.fonts.body,
}))
</script>

<template>
  <div class="glassmorphism-template" :style="styles">
    <div class="glass-container">
      <!-- 头部信息 -->
      <header class="header glass-card">
        <h1 class="name">{{ resume.personalInfo.name }}</h1>
        <div class="title">{{ resume.personalInfo.title }}</div>
        <div class="contact-list">
          <span class="contact-item">{{ resume.personalInfo.phone }}</span>
          <span class="divider">•</span>
          <span class="contact-item">{{ resume.personalInfo.email }}</span>
          <span class="divider">•</span>
          <span class="contact-item">{{ resume.personalInfo.location }}</span>
          <span class="divider">•</span>
          <span class="contact-item">{{ resume.personalInfo.experience }}</span>
        </div>
      </header>

      <!-- 核心技能 -->
      <section v-if="resume.personalInfo.coreSkills?.length" class="section glass-card">
        <h2 class="section-title">核心技能</h2>
        <div class="skills-container">
          <span
            v-for="(skill, index) in resume.personalInfo.coreSkills"
            :key="index"
            class="skill-pill"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- 个人优势 -->
      <section v-if="resume.strengths?.length" class="section glass-card">
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
      <section v-if="resume.workExperiences?.length" class="section glass-card">
        <h2 class="section-title">工作经历</h2>
        <div
          v-for="(exp, index) in resume.workExperiences"
          :key="index"
          class="experience-item"
        >
          <div class="exp-header">
            <div>
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
      <section v-if="resume.projects?.length" class="section glass-card">
        <h2 class="section-title">项目经历</h2>
        <div
          v-for="(project, index) in resume.projects"
          :key="index"
          class="project-item"
        >
          <div class="project-header">
            <div>
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
      <section v-if="resume.education?.length" class="section glass-card">
        <h2 class="section-title">教育经历</h2>
        <div
          v-for="(edu, index) in resume.education"
          :key="index"
          class="education-item"
        >
          <div class="edu-header">
            <div>
              <div class="edu-school">{{ edu.school }}</div>
              <div class="edu-major">{{ edu.major }} · {{ edu.degree }}</div>
            </div>
            <div class="edu-period">{{ edu.period }}</div>
          </div>
        </div>
      </section>
    </div>

    <!-- 背景装饰 -->
    <div class="bg-gradient"></div>
    <div class="bg-blur blur-1"></div>
    <div class="bg-blur blur-2"></div>
    <div class="bg-blur blur-3"></div>
  </div>
</template>

<style scoped>
.glassmorphism-template {
  font-family: var(--font-body);
  color: var(--color-text);
  min-height: 100vh;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  z-index: 0;
}

.bg-blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  z-index: 0;
  animation: float 20s ease-in-out infinite;
}

.blur-1 {
  width: 400px;
  height: 400px;
  background: var(--color-primary);
  top: -100px;
  left: -100px;
}

.blur-2 {
  width: 500px;
  height: 500px;
  background: var(--color-accent);
  bottom: -150px;
  right: -150px;
  animation-delay: -5s;
}

.blur-3 {
  width: 350px;
  height: 350px;
  background: var(--color-secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.glass-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 为 html2canvas 添加备用背景 */
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

.header {
  text-align: center;
}

.name {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #FFFFFF;
  letter-spacing: -1px;
  /* 移除渐变文字，使用纯色以提高兼容性 */
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.95);
}

.contact-list {
  display: flex !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
  gap: 8px 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  align-items: center !important;
  flex-direction: row !important;
  width: 100%;
  text-align: center;
}

.contact-item {
  display: inline !important;
  white-space: nowrap;
  font-size: 14px;
  color: inherit;
}

.divider {
  color: rgba(255, 255, 255, 0.5);
  display: inline !important;
  margin: 0 8px;
  font-size: 14px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 24px 0;
  position: relative;
  padding-bottom: 12px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent), transparent);
  border-radius: 2px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-pill {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  color: inherit;
}

.skill-pill:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.strengths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.strength-card {
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 15px;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.strength-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(4px);
}

.experience-item,
.project-item,
.education-item {
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.experience-item:last-child,
.project-item:last-child,
.education-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.exp-header,
.project-header,
.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.exp-role,
.project-name,
.edu-school {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.exp-company,
.project-role,
.edu-major {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
}

.exp-period,
.project-period,
.edu-period {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
}

.exp-summary,
.project-summary {
  margin: 12px 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
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
  padding-left: 12px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.highlights li::before {
  content: '→';
  position: absolute;
  left: -8px;
  color: rgba(255, 255, 255, 0.7);
}

@media print {
  .glassmorphism-template {
    padding: 24px;
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: none;
  }
  
  .bg-gradient,
  .bg-blur {
    display: none;
  }
}

@media (max-width: 768px) {
  .glassmorphism-template {
    padding: 32px 20px;
  }
  
  .name {
    font-size: 40px;
  }
  
  .title {
    font-size: 20px;
  }
  
  .glass-card {
    padding: 24px;
  }
  
  .contact-list {
    flex-direction: column !important;
    align-items: center;
  }
  
  .exp-header,
  .project-header,
  .edu-header {
    flex-direction: column;
  }
}

/* 确保打印和导出时保持横向布局 */
@media print, screen and (min-width: 769px) {
  .contact-list {
    flex-direction: row !important;
  }
}
</style>

