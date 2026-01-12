<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref(10);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber v-model="value" label="Quantity" show-buttons />

    <div class="text-sm text-gray-600">Value: {{ value }}</div>
  </div>
</template>
