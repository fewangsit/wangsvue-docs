<script setup lang="ts">
import { ref } from 'vue'
import { InputEmail } from '@fewangsit/wangsvue'

const value = ref('')
const existingEmails = ref([
  'admin@example.com',
  'user@example.com',
  'test@example.com'
])
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      label="Registration Email"
      placeholder="Enter email for registration"
      :use-validator="true"
      field-name="registrationEmail"
      :mandatory="true"
      :existing-values="existingEmails"
      :validator-message="{
        empty: 'Email is required',
        invalidFormat: 'Please enter a valid email address',
        exist: 'This email is already registered'
      }"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
    <p class="text-xs text-gray-500">
      Try: admin@example.com, user@example.com, test@example.com
    </p>
  </div>
</template>
