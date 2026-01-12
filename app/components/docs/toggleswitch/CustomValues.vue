<script setup lang="ts">
import { ToggleSwitch } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const customValue = ref('off');
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <ToggleSwitch
      v-model="customValue"
      false-value="off"
      label="Custom values toggle"
      true-value="on"
    />

    <p class="text-sm text-gray-600">Value: {{ customValue }}</p>
  </div>
</template>
