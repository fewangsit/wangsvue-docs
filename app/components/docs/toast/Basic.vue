<script setup lang="ts">
import { Button, Toast, useToast } from '@fewangsit/wangsvue';

const toast = useToast();

const showBasic = (): void => {
  toast.add({
    severity: 'info',
    message: 'This is a basic toast message.',
    life: 3000,
  });
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showBasic" label="Show Toast" />

    <Toast />
  </div>
</template>
