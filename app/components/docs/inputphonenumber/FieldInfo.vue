<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    label="Business Phone"
    placeholder="Enter business phone"
    field-info="Include country code for international numbers"
  />
</template>
