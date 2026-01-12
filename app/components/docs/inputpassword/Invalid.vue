<script setup lang="ts">
import { InputPassword } from '@fewangsit/wangsvue';

const password = ref('');
</script>

<template>
  <InputPassword
    v-model="password"
    invalid
    label="Password"
    placeholder="Enter password"
    validator-message="Password is required"
  />
</template>
