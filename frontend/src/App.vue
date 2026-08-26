<template>
  <v-app>
    <GlobalSnackbar />
    <AppShell />
  </v-app>
</template>

<script setup lang="ts">
import AppShell from '@/app/AppShell.vue';
import GlobalSnackbar from '@/components/GlobalSnackbar.vue';
</script>
