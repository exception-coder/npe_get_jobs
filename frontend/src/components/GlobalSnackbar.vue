<template>
  <v-snackbar
    v-model="isVisible"
    :timeout="timeout"
    :color="color"
    location="bottom right"
  >
    {{ message }}
    <template #actions>
      <v-btn icon="mdi-close" variant="text" @click="isVisible = false" />
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSnackbarStore } from '@/stores/snackbar';

const snackbar = useSnackbarStore();
const { isVisible, message, color, timeout } = storeToRefs(snackbar);
</script>
