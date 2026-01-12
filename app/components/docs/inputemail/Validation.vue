<script setup lang="ts">
import { InputEmail } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      :validator-message="{
        empty: 'Work email is required',
        invalidFormat: 'Please enter a valid email address',
      }"
      field-name="workEmail"
      label="Work Email"
      mandatory
      placeholder="Enter work email"
      use-validator
    />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>
  </div>
</template>
