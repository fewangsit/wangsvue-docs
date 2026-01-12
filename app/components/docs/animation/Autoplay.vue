<script setup lang="ts">
import { Animation, Button } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const isPlaying = ref(false);
const animationKey = ref(0);

const togglePlayPause = (): void => {
  isPlaying.value = !isPlaying.value;
  animationKey.value++;
};
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <Animation
      :key="animationKey"
      :autoplay="isPlaying"
      animation="loading-plane"
    />

    <div class="flex flex-col items-center gap-2">
      <p class="text-sm text-gray-600">
        Animation with manual play/pause control
      </p>

      <Button
        :label="isPlaying ? 'Pause' : 'Play'"
        :severity="isPlaying ? 'danger' : 'success'"
        @click="togglePlayPause"
      />
    </div>
  </div>
</template>
