<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    label="Phone Number"
    placeholder="Enter phone number"
  />
</template>
