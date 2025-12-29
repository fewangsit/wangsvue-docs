<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const value = ref('+1 234567890')
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    label="Phone Number (Disabled)"
    placeholder="Enter phone number"
    :disabled="true"
  />
</template>
