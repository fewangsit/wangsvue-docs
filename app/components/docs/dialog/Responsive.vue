<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const visible = ref(false)

const breakpoints = {
  '960px': '75vw',
  '640px': '90vw'
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Responsive Dialog"
      @click="visible = true"
    />

    <Dialog
      v-model:visible="visible"
      header="Responsive Dialog"
      :breakpoints="breakpoints"
      :style="{ width: '50vw' }"
    >
      <p class="mb-4">
        This dialog adapts its width based on screen size:
      </p>
      <ul class="list-disc list-inside space-y-2">
        <li>Desktop (>960px): 50% of viewport width</li>
        <li>Tablet (≤960px): 75% of viewport width</li>
        <li>Mobile (≤640px): 90% of viewport width</li>
      </ul>
      <p class="mt-4">
        Resize your browser window to see the responsive behavior in action.
      </p>
    </Dialog>
  </div>
</template>
