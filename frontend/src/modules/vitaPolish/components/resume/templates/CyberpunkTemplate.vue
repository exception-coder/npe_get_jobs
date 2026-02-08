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
  <div class="cyberpunk-template" :style="styles">
    <!-- 扫描线效果 -->
    <div class="scanlines"></div>
    
    <!-- 网格背景 -->
    <div class="grid-bg"></div>

    <div class="content-wrapper">
      <!-- 头部 -->
      <header class="header">
        <div class="glitch-container">
          <h1 class="name glitch" :data-text="resume.personalInfo.name">
            {{ resume.personalInfo.name }}
          </h1>
        </div>
        <div class="title-bar">
          <span class="bracket">[</span>
          <span class="title">{{ resume.personalInfo.title }}</span>
          <span class="bracket">]</span>
        </div>
        <div class="contact-grid">
          <div class="contact-item">
            <span class="label">PHONE:</span>
            <span class="value">{{ resume.personalInfo.phone }}</span>
          </div>
          <div class="contact-item">
            <span class="label">EMAIL:</span>
            <span class="value">{{ resume.personalInfo.email }}</span>
          </div>
          <div class="contact-item">
            <span class="label">LOCATION:</span>
            <span class="value">{{ resume.personalInfo.location }}</span>
          </div>
          <div class="contact-item">
            <span class="label">EXP:</span>
            <span class="value">{{ resume.personalInfo.experience }}</span>
          </div>
        </div>
      </header>

      <!-- 技能矩阵 -->
      <section v-if="resume.personalInfo.coreSkills?.length" class="section">
        <h2 class="section-title">
          <span class="title-prefix">&gt;&gt;</span>
          CORE_SKILLS
          <span class="title-suffix">_</span>
        </h2>
        <div class="skills-matrix">
          <div
            v-for="(skill, index) in resume.personalInfo.coreSkills"
            :key="index"
            class="skill-chip"
          >
            <span class="chip-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="chip-text">{{ skill }}</span>
          </div>
        </div>
      </section>

      <!-- 个人优势 -->
      <section v-if="resume.strengths?.length" class="section">
        <h2 class="section-title">
          <span class="title-prefix">&gt;&gt;</span>
          ADVANTAGES
          <span class="title-suffix">_</span>
        </h2>
        <div class="advantages-list">
          <div
            v-for="(strength, index) in resume.strengths"
            :key="index"
            class="advantage-item"
          >
            <span class="hex-code">0x{{ (index + 1).toString(16).toUpperCase().padStart(2, '0') }}</span>
            <span class="advantage-text">{{ strength }}</span>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section v-if="resume.workExperiences?.length" class="section">
        <h2 class="section-title">
          <span class="title-prefix">&gt;&gt;</span>
          WORK_EXPERIENCE
          <span class="title-suffix">_</span>
        </h2>
        <div
          v-for="(exp, index) in resume.workExperiences"
          :key="index"
          class="exp-block"
        >
          <div class="block-header">
            <div class="block-title">
              <span class="role">{{ exp.role }}</span>
              <span class="separator">@</span>
              <span class="company">{{ exp.company }}</span>
            </div>
            <div class="period-tag">{{ exp.period }}</div>
          </div>
          <p v-if="exp.summary" class="block-summary">{{ exp.summary }}</p>
          <ul v-if="exp.highlights?.length" class="highlights">
            <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">
              <span class="bullet">▸</span>
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 项目经历 -->
      <section v-if="resume.projects?.length" class="section">
        <h2 class="section-title">
          <span class="title-prefix">&gt;&gt;</span>
          PROJECTS
          <span class="title-suffix">_</span>
        </h2>
        <div
          v-for="(project, index) in resume.projects"
          :key="index"
          class="project-block"
        >
          <div class="block-header">
            <div class="block-title">
              <span class="project-name">{{ project.name }}</span>
              <span class="role-badge">{{ project.role }}</span>
            </div>
            <div class="period-tag">{{ project.period }}</div>
          </div>
          <p v-if="project.summary" class="block-summary">{{ project.summary }}</p>
          <ul v-if="project.highlights?.length" class="highlights">
            <li v-for="(highlight, hIndex) in project.highlights" :key="hIndex">
              <span class="bullet">▸</span>
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>

      <!-- 教育经历 -->
      <section v-if="resume.education?.length" class="section">
        <h2 class="section-title">
          <span class="title-prefix">&gt;&gt;</span>
          EDUCATION
          <span class="title-suffix">_</span>
        </h2>
        <div
          v-for="(edu, index) in resume.education"
          :key="index"
          class="edu-block"
        >
          <div class="block-header">
            <div class="block-title">
              <span class="school">{{ edu.school }}</span>
              <span class="separator">|</span>
              <span class="major">{{ edu.major }}</span>
            </div>
            <div class="period-tag">{{ edu.period }}</div>
          </div>
          <div class="degree">{{ edu.degree }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.cyberpunk-template {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  min-height: 100vh;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
}

/* 扫描线效果 */
.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 255, 240, 0.03) 0px,
    rgba(0, 255, 240, 0.03) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 10;
  animation: scan 8s linear infinite;
}

@keyframes scan {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}

/* 网格背景 */
.grid-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0, 255, 240, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 240, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  z-index: 0;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header {
  margin-bottom: 48px;
  padding: 32px;
  background: rgba(0, 255, 240, 0.05);
  border: 2px solid var(--color-primary);
  box-shadow: 
    0 0 20px rgba(0, 255, 240, 0.3),
    inset 0 0 20px rgba(0, 255, 240, 0.1);
  position: relative;
}

.header::before,
.header::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-accent);
}

.header::before {
  top: -2px;
  left: -2px;
  border-right: none;
  border-bottom: none;
}

.header::after {
  bottom: -2px;
  right: -2px;
  border-left: none;
  border-top: none;
}

.glitch-container {
  margin-bottom: 16px;
}

.name {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  display: inline-block;
}

.glitch {
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0%, 90%, 100% {
    text-shadow: 
      2px 2px 0 var(--color-primary),
      -2px -2px 0 var(--color-secondary);
  }
  92% {
    text-shadow: 
      -2px 2px 0 var(--color-primary),
      2px -2px 0 var(--color-secondary);
  }
  94% {
    text-shadow: 
      2px -2px 0 var(--color-primary),
      -2px 2px 0 var(--color-secondary);
  }
}

.title-bar {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.bracket {
  color: var(--color-accent);
  font-weight: 900;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.contact-item {
  display: flex;
  gap: 8px;
  font-size: 13px;
  font-family: monospace;
}

.label {
  color: var(--color-secondary);
  font-weight: 700;
}

.value {
  color: var(--color-text-secondary);
}

.section {
  margin-bottom: 48px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 900;
  margin: 0 0 24px 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-primary);
  text-shadow: 0 0 10px var(--color-primary);
}

.title-prefix {
  color: var(--color-accent);
  margin-right: 8px;
}

.title-suffix {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

.skills-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}

.skill-chip {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(0, 255, 240, 0.1);
  border: 1px solid var(--color-primary);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-chip::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 240, 0.3), transparent);
  transition: left 0.5s;
}

.skill-chip:hover::before {
  left: 100%;
}

.skill-chip:hover {
  background: rgba(0, 255, 240, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 240, 0.5);
  transform: translateY(-2px);
}

.chip-index {
  color: var(--color-accent);
  font-family: monospace;
}

.advantages-list {
  display: grid;
  gap: 12px;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 0, 255, 0.05);
  border-left: 3px solid var(--color-secondary);
  font-size: 15px;
  line-height: 1.6;
}

.hex-code {
  color: var(--color-accent);
  font-family: monospace;
  font-weight: 700;
  min-width: 40px;
}

.exp-block,
.project-block,
.edu-block {
  margin-bottom: 32px;
  padding: 24px;
  background: rgba(0, 255, 240, 0.03);
  border: 1px solid rgba(0, 255, 240, 0.3);
  position: relative;
}

.exp-block::before,
.project-block::before,
.edu-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
}

.block-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
  flex-wrap: wrap;
}

.block-title {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.role,
.project-name,
.school {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.separator {
  color: var(--color-accent);
  font-weight: 900;
}

.company,
.major {
  font-size: 16px;
  color: var(--color-text-secondary);
  font-weight: 600;
}

.role-badge {
  padding: 4px 12px;
  background: rgba(255, 255, 0, 0.2);
  border: 1px solid var(--color-accent);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-accent);
}

.period-tag {
  padding: 6px 12px;
  background: rgba(0, 255, 240, 0.1);
  border: 1px solid var(--color-primary);
  font-size: 12px;
  font-weight: 700;
  font-family: monospace;
  white-space: nowrap;
}

.block-summary {
  margin: 12px 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.highlights {
  margin: 12px 0 0 0;
  padding-left: 0;
  list-style: none;
}

.highlights li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.bullet {
  color: var(--color-primary);
  font-weight: 900;
  margin-top: 2px;
}

.degree {
  font-size: 14px;
  color: var(--color-text-secondary);
  font-weight: 600;
  margin-top: 8px;
}

@media print {
  .scanlines,
  .grid-bg {
    display: none;
  }
  
  .cyberpunk-template {
    padding: 24px;
  }
  
  .glitch {
    animation: none;
  }
  
  .title-suffix {
    animation: none;
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .cyberpunk-template {
    padding: 32px 20px;
  }
  
  .name {
    font-size: 36px;
  }
  
  .header {
    padding: 24px;
  }
  
  .skills-matrix {
    grid-template-columns: 1fr;
  }
}
</style>

