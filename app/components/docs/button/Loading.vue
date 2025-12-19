<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@fewangsit/wangsvue'

const isLoading = ref(false)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
  if (isLoading.value) {
    setTimeout(() => {
      isLoading.value = false
    }, 3000)
  }
}
</script>

<template>
  <Button
    :label="isLoading ? 'Loading...' : 'Start Process'"
    :loading="isLoading"
    @click="toggleLoading"
  />
</template>
