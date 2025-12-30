<script setup lang="ts">
import { Animation, Button } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const animationKey = ref(0)

const resetAnimation = () => {
  animationKey.value++
}
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <Animation
      :key="animationKey"
      animation="scan-qr"
      :loop="false"
    />
    <div class="flex flex-col items-center gap-2">
      <p class="text-sm text-gray-600">
        Animation with loop disabled
      </p>
      <Button
        label="Reset Animation"
        severity="secondary"
        @click="resetAnimation"
      />
    </div>
  </div>
</template>
