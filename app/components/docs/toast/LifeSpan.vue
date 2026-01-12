<script setup lang="ts">
import { Button, Toast, useToast } from '@fewangsit/wangsvue';

const toast = useToast();

const showShort = (): void => {
  toast.add({
    severity: 'info',
    message: 'This toast will disappear in 1 second',
    life: 1000,
  });
};

const showLong = (): void => {
  toast.add({
    severity: 'info',
    message: 'This toast will stay for 10 seconds',
    life: 10000,
  });
};

const showInfinitely = (): void => {
  toast.add({
    severity: 'info',
    message: 'This toast will stay for infinitely',
    life: 0,
  });
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showShort" label="Short (1s)" />

    <Button @click="showLong" label="Long (10s)" />

    <Button @click="showInfinitely" label="Infinitely" />

    <Toast />
  </div>
</template>
