<script setup lang="ts">
import { InputPhoneNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('+1 234567890');
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    disabled
    label="Phone Number (Disabled)"
    placeholder="Enter phone number"
  />
</template>
