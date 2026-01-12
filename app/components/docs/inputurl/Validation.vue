<script setup lang="ts">
import { InputURL } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputURL
      v-model="value"
      :validator-message="{
        empty: 'Company website is required',
        invalidFormat: 'Please enter a valid URL with protocol (https://)',
      }"
      field-name="companyWebsite"
      label="Company Website"
      mandatory
      placeholder="https://company.com"
      use-protocol
      use-validator
    />

    <p class="text-sm text-gray-600">Value: {{ value || 'Empty' }}</p>
  </div>
</template>
