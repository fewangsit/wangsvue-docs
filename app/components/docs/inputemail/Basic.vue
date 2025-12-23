<script setup lang="ts">
import { ref } from 'vue'
import { InputEmail } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputEmail
      v-model="value"
      label="Email Address"
      placeholder="Enter your email"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
