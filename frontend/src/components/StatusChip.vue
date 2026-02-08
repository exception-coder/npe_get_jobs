<template>
  <v-chip
    :color="state.color"
    variant="tonal"
    class="w-100 justify-start"
  >
    {{ state.message }}
  </v-chip>
</template>

<script setup lang="ts">
import type { TaskState } from '@/composables/useTaskExecutor';

defineProps<{ state: TaskState }>();
</script>
