<script setup lang="ts">
import { InputPhoneNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    :validator-message="{ empty: 'Emergency contact is required for safety' }"
    invalid
    label="Emergency Contact"
    placeholder="Enter emergency contact"
  />
</template>
