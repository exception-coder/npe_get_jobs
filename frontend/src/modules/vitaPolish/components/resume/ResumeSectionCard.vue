<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <v-card class="mb-6" elevation="1">
    <v-card-title class="d-flex align-center py-4">
      <v-icon v-if="icon" :icon="icon" class="me-3 text-primary" size="24" />
      <div>
        <div class="text-subtitle-1 font-weight-semibold">{{ title }}</div>
        <div v-if="subtitle" class="text-body-2 text-medium-emphasis mt-1">
          {{ subtitle }}
        </div>
      </div>
    </v-card-title>
    <v-divider />
    <v-card-text class="py-5">
      <slot />
    </v-card-text>
  </v-card>
</template>

