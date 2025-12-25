<script setup lang="ts">
import { InputPassword } from '@fewangsit/wangsvue'

const password = ref('')
</script>

<template>
  <InputPassword
    v-model="password"
    label="Password"
    placeholder="Enter password"
    :feedback="true"
  />
</template>
