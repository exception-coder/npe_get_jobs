<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable" elevation="1">
      <v-app-bar-title class="text-h6 font-weight-bold text-white">
        AI 简历优化工作台
      </v-app-bar-title>
      <v-spacer />
      <v-btn
        class="text-none"
        color="white"
        variant="text"
        href="https://vuetifyjs.com"
        target="_blank"
      >
        设计指南
      </v-btn>
    </v-app-bar>

    <v-main class="bg-light">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.bg-light {
  background-color: #f5f7fa;
}
</style>
