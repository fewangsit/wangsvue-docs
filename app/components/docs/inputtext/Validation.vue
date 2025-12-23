<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText
      v-model="value"
      label="Username"
      placeholder="Enter username"
      :use-validator="true"
      field-name="username"
      :mandatory="true"
      :max-length="20"
      :validator-message="{
        empty: 'Username is required',
        exceed: 'Username must not exceed 20 characters'
      }"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
