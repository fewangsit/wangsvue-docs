<script setup lang="ts">
import { Button, Toast, useToast } from '@fewangsit/wangsvue';

const toast = useToast();

const showSuccess = (): void => {
  toast.add({
    severity: 'success',
    message: 'Operation completed successfully!',
    life: 3000,
  });
};

const showInfo = (): void => {
  toast.add({
    severity: 'info',
    message: 'Here is some useful information.',
    life: 3000,
  });
};

const showError = (): void => {
  toast.add({
    severity: 'error',
    message: 'Something went wrong!',
    life: 3000,
  });
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showSuccess" label="Success" severity="success" />

    <Button @click="showInfo" label="Info" severity="info" />

    <Button @click="showError" label="Error" severity="danger" />

    <Toast />
  </div>
</template>
