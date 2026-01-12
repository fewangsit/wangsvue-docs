<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <Textarea
      v-model="value"
      :rows="4"
      label="Description"
      placeholder="Enter description"
    />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>
  </div>
</template>
