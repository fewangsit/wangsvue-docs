<script setup lang="ts">
import { ToggleSwitch } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const checked = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch v-model="checked" label="Enable notifications" />

    <p class="text-sm text-gray-600">Value: {{ checked }}</p>
  </div>
</template>
