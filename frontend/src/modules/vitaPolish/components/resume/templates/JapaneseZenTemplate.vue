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
  <div class="zen-template" :style="styles">
    <!-- 顶部装饰 -->
    <div class="top-decoration">
      <div class="circle"></div>
    </div>

    <div class="content">
      <!-- 头部 -->
      <header class="header">
        <h1 class="name">{{ resume.personalInfo.name }}</h1>
        <div class="title">{{ resume.personalInfo.title }}</div>
        <div class="divider"></div>
        <div class="contact-list">
          <span>{{ resume.personalInfo.phone }}</span>
          <span class="dot">·</span>
          <span>{{ resume.personalInfo.email }}</span>
          <span class="dot">·</span>
          <span>{{ resume.personalInfo.location }}</span>
          <span class="dot">·</span>
          <span>{{ resume.personalInfo.experience }}</span>
        </div>
      </header>

      <!-- 核心技能 -->
      <section v-if="resume.personalInfo.coreSkills?.length" class="section">
        <h2 class="section-title">核心技能</h2>
        <div class="skills-flow">
          <span
            v-for="(skill, index) in resume.personalInfo.coreSkills"
            :key="index"
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- 个人优势 -->
      <section v-if="resume.strengths?.length" class="section">
        <h2 class="section-title">个人优势</h2>
        <div class="strengths-container">
          <div
            v-for="(strength, index) in resume.strengths"
            :key="index"
            class="strength-item"
          >
            <div class="strength-marker"></div>
            <div class="strength-text">{{ strength }}</div>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section v-if="resume.workExperiences?.length" class="section">
        <h2 class="section-title">工作经历</h2>
        <div
          v-for="(exp, index) in resume.workExperiences"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="item-header">
              <div class="item-title">{{ exp.role }}</div>
              <div class="item-period">{{ exp.period }}</div>
            </div>
            <div class="item-subtitle">{{ exp.company }}</div>
            <p v-if="exp.summary" class="item-summary">{{ exp.summary }}</p>
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
        <h2 class="section-title">项目经历</h2>
        <div
          v-for="(project, index) in resume.projects"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="item-header">
              <div class="item-title">{{ project.name }}</div>
              <div class="item-period">{{ project.period }}</div>
            </div>
            <div class="item-subtitle">{{ project.role }}</div>
            <p v-if="project.summary" class="item-summary">{{ project.summary }}</p>
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
        <h2 class="section-title">教育经历</h2>
        <div
          v-for="(edu, index) in resume.education"
          :key="index"
          class="edu-item"
        >
          <div class="edu-header">
            <div class="edu-school">{{ edu.school }}</div>
            <div class="edu-period">{{ edu.period }}</div>
          </div>
          <div class="edu-details">
            <span>{{ edu.major }}</span>
            <span class="dot">·</span>
            <span>{{ edu.degree }}</span>
          </div>
        </div>
      </section>
    </div>

    <!-- 底部装饰 -->
    <div class="bottom-decoration">
      <div class="wave"></div>
    </div>
  </div>
</template>

<style scoped>
.zen-template {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  min-height: 100vh;
  padding: 80px 60px;
  position: relative;
}

.top-decoration {
  position: absolute;
  top: 40px;
  right: 60px;
  opacity: 0.15;
}

.circle {
  width: 120px;
  height: 120px;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
}

.bottom-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  opacity: 0.1;
  overflow: hidden;
}

.wave {
  width: 200%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 40px,
    var(--color-secondary) 40px,
    var(--color-secondary) 80px
  );
  animation: wave 20s linear infinite;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.name {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 16px 0;
  letter-spacing: 2px;
  color: var(--color-primary);
}

.title {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.divider {
  width: 60px;
  height: 2px;
  background: var(--color-secondary);
  margin: 24px auto;
}

.contact-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.dot {
  opacity: 0.5;
}

.section {
  margin-bottom: 56px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 32px 0;
  color: var(--color-primary);
  text-align: center;
  position: relative;
  letter-spacing: 2px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: var(--color-secondary);
}

.skills-flow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.skill-tag {
  padding: 10px 24px;
  background: transparent;
  border: 1px solid var(--color-secondary);
  border-radius: 24px;
  font-size: 14px;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: var(--color-secondary);
  color: white;
  transform: translateY(-2px);
}

.strengths-container {
  display: grid;
  gap: 20px;
}

.strength-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0;
}

.strength-marker {
  width: 8px;
  height: 8px;
  background: var(--color-secondary);
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.strength-text {
  flex: 1;
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-text);
}

.timeline-item {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 24px;
  bottom: -40px;
  width: 1px;
  background: linear-gradient(180deg, var(--color-secondary), transparent);
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-marker {
  width: 8px;
  height: 8px;
  background: var(--color-secondary);
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline-content {
  flex: 1;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  gap: 16px;
  flex-wrap: wrap;
}

.item-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
}

.item-period {
  font-size: 13px;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.item-subtitle {
  font-size: 15px;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
}

.item-summary {
  margin: 12px 0;
  color: var(--color-text-secondary);
  line-height: 1.8;
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
  line-height: 1.7;
  color: var(--color-text);
}

.highlights li::before {
  content: '—';
  position: absolute;
  left: -20px;
  color: var(--color-secondary);
}

.edu-item {
  margin-bottom: 28px;
  padding: 20px 0;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  gap: 16px;
  flex-wrap: wrap;
}

.edu-school {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
}

.edu-period {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.edu-details {
  font-size: 14px;
  color: var(--color-text-secondary);
}

@media print {
  .zen-template {
    padding: 40px;
  }
  
  .top-decoration,
  .bottom-decoration {
    display: none;
  }
}

@media (max-width: 768px) {
  .zen-template {
    padding: 40px 24px;
  }
  
  .name {
    font-size: 36px;
  }
  
  .top-decoration {
    right: 24px;
  }
  
  .circle {
    width: 80px;
    height: 80px;
  }
}
</style>

