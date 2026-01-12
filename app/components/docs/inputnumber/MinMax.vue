<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<number>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="value"
      :max="120"
      :min="0"
      label="Age"
      placeholder="Enter age (0-120)"
    />

    <div class="text-sm text-gray-600">Value: {{ value ?? 'Empty' }}</div>
  </div>
</template>
