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
  <div class="gradient-flow-template" :style="styles">
    <!-- 流动背景 -->
    <div class="gradient-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="content">
      <!-- 头部 -->
      <header class="header">
        <div class="header-card">
          <h1 class="name">{{ resume.personalInfo.name }}</h1>
          <div class="title">{{ resume.personalInfo.title }}</div>
          <div class="contact-flow">
            <div class="contact-item">
              <span class="icon">📱</span>
              {{ resume.personalInfo.phone }}
            </div>
            <div class="contact-item">
              <span class="icon">✉️</span>
              {{ resume.personalInfo.email }}
            </div>
            <div class="contact-item">
              <span class="icon">📍</span>
              {{ resume.personalInfo.location }}
            </div>
            <div class="contact-item">
              <span class="icon">⏱️</span>
              {{ resume.personalInfo.experience }}
            </div>
          </div>
        </div>
      </header>

      <!-- 核心技能 -->
      <section v-if="resume.personalInfo.coreSkills?.length" class="section">
        <div class="section-card">
          <h2 class="section-title">核心技能</h2>
          <div class="skills-flow">
            <div
              v-for="(skill, index) in resume.personalInfo.coreSkills"
              :key="index"
              class="skill-bubble"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </section>

      <!-- 个人优势 -->
      <section v-if="resume.strengths?.length" class="section">
        <div class="section-card">
          <h2 class="section-title">个人优势</h2>
          <div class="strengths-flow">
            <div
              v-for="(strength, index) in resume.strengths"
              :key="index"
              class="strength-wave"
            >
              <div class="wave-icon">✨</div>
              <div class="wave-text">{{ strength }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section v-if="resume.workExperiences?.length" class="section">
        <div class="section-card">
          <h2 class="section-title">工作经历</h2>
          <div
            v-for="(exp, index) in resume.workExperiences"
            :key="index"
            class="flow-card"
          >
            <div class="card-header">
              <div>
                <div class="card-title">{{ exp.role }}</div>
                <div class="card-subtitle">{{ exp.company }}</div>
              </div>
              <div class="card-badge">{{ exp.period }}</div>
            </div>
            <p v-if="exp.summary" class="card-summary">{{ exp.summary }}</p>
            <ul v-if="exp.highlights?.length" class="highlights">
              <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 项目经历 -->
      <section v-if="resume.projects?.length" class="section">
        <div class="section-card">
          <h2 class="section-title">项目经历</h2>
          <div
            v-for="(project, index) in resume.projects"
            :key="index"
            class="flow-card"
          >
            <div class="card-header">
              <div>
                <div class="card-title">{{ project.name }}</div>
                <div class="card-subtitle">{{ project.role }}</div>
              </div>
              <div class="card-badge">{{ project.period }}</div>
            </div>
            <p v-if="project.summary" class="card-summary">{{ project.summary }}</p>
            <ul v-if="project.highlights?.length" class="highlights">
              <li v-for="(highlight, hIndex) in project.highlights" :key="hIndex">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 教育经历 -->
      <section v-if="resume.education?.length" class="section">
        <div class="section-card">
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
              <div class="card-badge">{{ edu.period }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.gradient-flow-template {
  font-family: var(--font-body);
  color: var(--color-text);
  min-height: 100vh;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%);
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: float 15s ease-in-out infinite;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: var(--color-primary);
  top: -100px;
  left: -100px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--color-secondary);
  bottom: -100px;
  right: -100px;
  animation-delay: -5s;
}

.blob-3 {
  width: 350px;
  height: 350px;
  background: var(--color-accent);
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
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

.content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header {
  margin-bottom: 40px;
}

.header-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 48px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.name {
  font-family: var(--font-heading);
  font-size: 52px;
  font-weight: 700;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #667EEA, #764BA2, #F093FB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.title {
  font-size: 22px;
  font-weight: 600;
  color: #666;
  margin-bottom: 32px;
}

.contact-flow {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.icon {
  font-size: 18px;
}

.section {
  margin-bottom: 32px;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 36px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.section-title {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 28px 0;
  background: linear-gradient(135deg, #667EEA, #764BA2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-flow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-bubble {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667EEA, #764BA2);
  color: white;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  animation: bubbleIn 0.5s ease-out backwards;
}

@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.skill-bubble:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

.strengths-flow {
  display: grid;
  gap: 16px;
}

.strength-wave {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
  border-radius: 16px;
  border-left: 4px solid #667EEA;
  transition: all 0.3s ease;
}

.strength-wave:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
}

.wave-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.wave-text {
  flex: 1;
  font-size: 15px;
  line-height: 1.7;
  color: #333;
}

.flow-card,
.edu-card {
  margin-bottom: 24px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.flow-card:hover,
.edu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.flow-card:last-child,
.edu-card:last-child {
  margin-bottom: 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
}

.card-subtitle {
  font-size: 16px;
  color: #666;
  font-weight: 500;
}

.card-badge {
  padding: 8px 16px;
  background: linear-gradient(135deg, #667EEA, #764BA2);
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.card-summary {
  margin: 12px 0;
  color: #555;
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
  color: #444;
}

.highlights li::before {
  content: '→';
  position: absolute;
  left: -20px;
  background: linear-gradient(135deg, #667EEA, #764BA2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

@media print {
  .gradient-flow-template {
    padding: 32px;
  }
  
  .gradient-bg,
  .blob {
    display: none;
  }
  
  .header-card,
  .section-card {
    background: white;
    box-shadow: none;
  }
}

@media (max-width: 768px) {
  .gradient-flow-template {
    padding: 32px 20px;
  }
  
  .header-card {
    padding: 32px 24px;
  }
  
  .name {
    font-size: 36px;
  }
  
  .title {
    font-size: 18px;
  }
  
  .section-card {
    padding: 24px;
  }
  
  .contact-flow {
    flex-direction: column;
    align-items: center;
  }
  
  .card-header {
    flex-direction: column;
  }
}
</style>

