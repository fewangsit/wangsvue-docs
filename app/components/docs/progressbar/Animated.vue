<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue';
import { onMounted, onUnmounted, ref } from 'vue';

const progress = ref(0);
const isIncreasing = ref(true);
let intervalId: NodeJS.Timeout | null = null;

const updateProgress = (): void => {
  if (isIncreasing.value) {
    progress.value = Math.min(
      progress.value + Math.round(Math.random() * 30),
      100,
    );
    if (progress.value >= 100) {
      isIncreasing.value = false;
    }
  } else {
    progress.value = Math.max(
      progress.value - Math.round(Math.random() * 30),
      0,
    );
    if (progress.value <= 0) {
      isIncreasing.value = true;
    }
  }
};

onMounted((): void => {
  intervalId = setInterval(updateProgress, 1000);
});

onUnmounted((): void => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar :value="progress" severity="primary" />

    <ProgressBar :value="progress" severity="success" value-position="inside">
      <template #label="{ value }">
        {{ isIncreasing ? 'Loading' : 'Unloading' }}... {{ value }}%
      </template>
    </ProgressBar>
  </div>
</template>
