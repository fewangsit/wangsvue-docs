<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const phone1 = ref('')
const phone2 = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputPhoneNumber
      v-model="phone1"
      label="Short Phone (10 digits)"
      placeholder="Enter phone number"
      :max-digit="10"
    />

    <InputPhoneNumber
      v-model="phone2"
      label="Long Phone (15 digits)"
      placeholder="Enter phone number"
      :max-digit="15"
    />

    <div class="text-sm text-gray-600">
      <p>Short: {{ phone1 || 'Empty' }} ({{ phone1.length }}/10)</p>
      <p>Long: {{ phone2 || 'Empty' }} ({{ phone2.length }}/15)</p>
    </div>
  </div>
</template>
