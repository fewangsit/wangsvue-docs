<script setup lang="ts">
import { InputPhoneNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    label="Phone Number"
    placeholder="Enter phone number"
  />
</template>
