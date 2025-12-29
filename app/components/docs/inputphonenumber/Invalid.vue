<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    label="Emergency Contact"
    placeholder="Enter emergency contact"
    :invalid="true"
    :validator-message="{ empty: 'Emergency contact is required for safety' }"
  />
</template>
