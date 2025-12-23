<script setup lang="ts">
import { ref } from 'vue'
import { InputURL } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputURL
      v-model="value"
      label="Company Website"
      placeholder="https://company.com"
      :use-validator="true"
      field-name="companyWebsite"
      :mandatory="true"
      :use-protocol="true"
      :validator-message="{
        empty: 'Company website is required',
        invalidFormat: 'Please enter a valid URL with protocol (https://)'
      }"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
