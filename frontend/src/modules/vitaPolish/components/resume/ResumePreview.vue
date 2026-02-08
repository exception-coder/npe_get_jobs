<script setup>
const props = defineProps({
  resume: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card elevation="2" class="resume-preview">
    <v-card-text class="pa-6">
      <section class="mb-6">
        <header class="d-flex flex-column flex-sm-row align-center justify-space-between">
          <div>
            <h1 class="text-h5 font-weight-bold mb-2">{{ props.resume.personalInfo.name }}</h1>
            <div class="text-subtitle-2 text-medium-emphasis">
              {{ props.resume.personalInfo.title }}
            </div>
          </div>
          <div class="contact-list mt-4 mt-sm-0 text-medium-emphasis">
            <div>{{ props.resume.personalInfo.phone }}</div>
            <div>{{ props.resume.personalInfo.email }}</div>
            <div>{{ props.resume.personalInfo.location }}</div>
            <div v-if="props.resume.personalInfo.experience">
              {{ props.resume.personalInfo.experience }}
            </div>
            <div v-if="props.resume.personalInfo.linkedin">
              {{ props.resume.personalInfo.linkedin }}
            </div>
          </div>
        </header>
        <div
          v-if="props.resume.personalInfo.coreSkills?.length"
          class="mt-4"
        >
          <h2 class="section-title mb-2">核心技能</h2>
          <v-chip-group column>
            <v-chip
              v-for="(skill, index) in props.resume.personalInfo.coreSkills"
              :key="index"
              class="mb-1 me-2"
              color="secondary"
              variant="tonal"
            >
              {{ skill }}
            </v-chip>
          </v-chip-group>
        </div>
      </section>

      <section v-if="props.resume.strengths?.length" class="mb-6">
        <h2 class="section-title">个人优势</h2>
        <v-chip-group column class="mt-2">
          <v-chip
            v-for="(item, index) in props.resume.strengths"
            :key="index"
            class="mb-1 me-2"
            color="primary"
            variant="tonal"
          >
            {{ item }}
          </v-chip>
        </v-chip-group>
      </section>

      <section class="mb-6">
        <h2 class="section-title">期望职位</h2>
        <v-list bg-color="transparent" density="comfortable">
          <v-list-item prepend-icon="mdi-briefcase-outline">
            {{ props.resume.desiredRole.title }}
          </v-list-item>
          <v-list-item prepend-icon="mdi-map-marker-outline">
            {{ props.resume.desiredRole.location }}
          </v-list-item>
          <v-list-item prepend-icon="mdi-currency-usd">
            {{ props.resume.desiredRole.salary }}
          </v-list-item>
          <v-list-item prepend-icon="mdi-domain" v-if="props.resume.desiredRole.industries?.length">
            {{ props.resume.desiredRole.industries.join(' / ') }}
          </v-list-item>
        </v-list>
      </section>

      <section class="mb-6">
        <h2 class="section-title">工作经历</h2>
        <div
          v-for="(exp, index) in props.resume.workExperiences"
          :key="index"
          class="mb-5"
        >
          <div class="d-flex flex-column flex-sm-row justify-space-between">
            <div class="text-subtitle-1 font-weight-medium">
              {{ exp.role }} · {{ exp.company }}
            </div>
            <div class="text-body-2 text-medium-emphasis">
              {{ exp.period }}
            </div>
          </div>
          <div class="text-body-2 text-medium-emphasis mb-2 preserve-whitespace">{{ exp.summary }}</div>
          <ul class="highlight-list">
            <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-6">
        <h2 class="section-title">项目经历</h2>
        <div
          v-for="(project, index) in props.resume.projects"
          :key="index"
          class="mb-5"
        >
          <div class="d-flex flex-column flex-sm-row justify-space-between">
            <div class="text-subtitle-1 font-weight-medium">
              {{ project.name }} · {{ project.role }}
            </div>
            <div class="text-body-2 text-medium-emphasis">
              {{ project.period }}
            </div>
          </div>
          <div class="text-body-2 text-medium-emphasis mb-2 preserve-whitespace">
            {{ project.summary }}
          </div>
          <ul class="highlight-list">
            <li v-for="(highlight, hIndex) in project.highlights" :key="hIndex">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="section-title">教育经历</h2>
        <div
          v-for="(edu, index) in props.resume.education"
          :key="index"
          class="mb-3"
        >
          <div class="d-flex flex-column flex-sm-row justify-space-between">
            <div class="text-subtitle-1 font-weight-medium">
              {{ edu.school }} · {{ edu.major }}
            </div>
            <div class="text-body-2 text-medium-emphasis">
              {{ edu.period }}
            </div>
          </div>
          <div class="text-body-2 text-medium-emphasis">
            {{ edu.degree }}
          </div>
        </div>
      </section>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.resume-preview {
  min-height: 100%;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.highlight-list {
  margin: 0;
  padding-left: 20px;
  list-style: disc;
}

.contact-list div {
  line-height: 1.6;
}

.preserve-whitespace {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
