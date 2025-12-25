<script setup lang="ts">
import { InputPassword } from '@fewangsit/wangsvue'

const password = ref('')
</script>

<template>
  <InputPassword
    v-model="password"
    placeholder="Enter password"
  />
</template>
