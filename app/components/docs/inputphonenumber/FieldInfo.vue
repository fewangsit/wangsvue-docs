<script setup lang="ts">
import { InputPhoneNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    field-info="Include country code for international numbers"
    label="Business Phone"
    placeholder="Enter business phone"
  />
</template>
