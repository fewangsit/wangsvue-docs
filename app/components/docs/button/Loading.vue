<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const isLoading = ref(false);

const toggleLoading = (): void => {
  isLoading.value = !isLoading.value;
  if (isLoading.value) {
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);
  }
};
</script>

<template>
  <Button
    :label="isLoading ? 'Loading...' : 'Start Process'"
    :loading="isLoading"
    @click="toggleLoading"
  />
</template>
