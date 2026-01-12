<script setup lang="ts">
import { BadgeGroup } from '@fewangsit/wangsvue';

const labels = ['JavaScript', 'Vue.js', 'TypeScript', 'Nuxt.js', 'TailwindCSS'];
</script>

<template>
  <div class="flex flex-col gap-4">
    <BadgeGroup :labels="labels" severity="primary" />

    <p class="text-sm text-gray-600">Basic badge group with string array</p>
  </div>
</template>
