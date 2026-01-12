<script setup lang="ts">
import { InputEmail } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');

const checkEmailAvailability = async (email: string): Promise<boolean> => {
  // Simulate API call to check email availability
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const unavailableEmails = [
    'admin@company.com',
    'support@company.com',
    'info@company.com',
  ];

  return !unavailableEmails.includes(email.toLowerCase());
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      :check-availability="checkEmailAvailability"
      :validator-message="{
        empty: 'Email is required',
        invalidFormat: 'Please enter a valid email address',
        exist: 'This email is already taken',
      }"
      field-name="accountEmail"
      label="Account Email"
      mandatory
      placeholder="Check email availability"
      use-validator
    />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>

    <p class="text-xs text-gray-500">
      Try: admin@company.com, support@company.com, info@company.com
    </p>
  </div>
</template>
