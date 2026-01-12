<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <Textarea
      v-model="value"
      :rows="2"
      auto-resize
      label="Auto Resize Text"
      placeholder="Start typing and watch it grow..."
    />

    <p class="text-sm text-gray-600">Lines: {{ value.split('\n').length }}</p>
  </div>
</template>
