<script setup lang="ts">
import { InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText v-model="value" label="Label" placeholder="Custom Placeholder" />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>
  </div>
</template>
