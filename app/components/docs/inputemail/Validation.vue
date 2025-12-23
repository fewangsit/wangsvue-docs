<script setup lang="ts">
import { ref } from 'vue'
import { InputEmail } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      label="Work Email"
      placeholder="Enter work email"
      :use-validator="true"
      field-name="workEmail"
      :mandatory="true"
      :validator-message="{
        empty: 'Work email is required',
        invalidFormat: 'Please enter a valid email address'
      }"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
