<template>
  <v-app>
    <GlobalSnackbar />
    <AppShell v-if="route.meta.shell !== false" />
    <v-main v-else><router-view /></v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import AppShell from '@/app/AppShell.vue';
import GlobalSnackbar from '@/components/GlobalSnackbar.vue';

const route = useRoute();
</script>
