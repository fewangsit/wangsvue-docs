<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue'
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const isIncreasing = ref(true)
let intervalId: NodeJS.Timeout | null = null

const updateProgress = () => {
  if (isIncreasing.value) {
    progress.value += 1
    if (progress.value >= 100) {
      isIncreasing.value = false
    }
  } else {
    progress.value -= 1
    if (progress.value <= 0) {
      isIncreasing.value = true
    }
  }
}

onMounted(() => {
  intervalId = setInterval(updateProgress, 500)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar
      :value="progress"
      severity="primary"
    />

    <ProgressBar
      :value="progress"
      severity="success"
      value-position="inside"
    >
      <template #label="{ value }">
        {{ isIncreasing ? 'Loading' : 'Unloading' }}... {{ value }}%
      </template>
    </ProgressBar>
  </div>
</template>
