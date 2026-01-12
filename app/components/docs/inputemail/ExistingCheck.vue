<script setup lang="ts">
import { InputEmail } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
const existingEmails = ref([
  'admin@example.com',
  'user@example.com',
  'test@example.com',
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      :existing-values="existingEmails"
      :validator-message="{
        empty: 'Email is required',
        invalidFormat: 'Please enter a valid email address',
        exist: 'This email is already registered',
      }"
      field-name="registrationEmail"
      label="Registration Email"
      mandatory
      placeholder="Enter email for registration"
      use-validator
    />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>

    <p class="text-xs text-gray-500">
      Try: admin@example.com, user@example.com, test@example.com
    </p>
  </div>
</template>
