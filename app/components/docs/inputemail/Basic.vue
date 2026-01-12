<script setup lang="ts">
import { InputEmail } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      label="Email Address"
      placeholder="Enter your email"
    />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>
  </div>
</template>
