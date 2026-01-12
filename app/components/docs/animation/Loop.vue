<script setup lang="ts">
import { Animation, Button } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const animationKey = ref(0);

const resetAnimation = (): void => {
  animationKey.value++;
};
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <Animation :key="animationKey" :loop="false" animation="scan-qr" />

    <div class="flex flex-col items-center gap-2">
      <p class="text-sm text-gray-600">Animation with loop disabled</p>

      <Button
        @click="resetAnimation"
        label="Reset Animation"
        severity="secondary"
      />
    </div>
  </div>
</template>
