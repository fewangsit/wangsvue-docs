<script setup lang="ts">
import { OverlayPanel, Button } from '@fewangsit/wangsvue'

const op = useTemplateRef<OverlayPanel>('op')

const toggle = (event: Event) => {
  op.value?.toggle(event)
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Panel with Close Icon"
      @click="toggle"
    />

    <OverlayPanel
      ref="op"
      :show-close-icon="true"
    >
      <div class="p-4">
        <h3 class="font-semibold mb-2">
          Panel with Close Icon
        </h3>
        <p class="mb-3">
          This panel has a close icon in the top-right corner.
        </p>
        <div class="space-y-2">
          <p class="text-sm">
            You can close this panel by:
          </p>
          <ul class="text-sm list-disc list-inside space-y-1">
            <li>Clicking the close icon</li>
            <li>Clicking outside the panel</li>
            <li>Pressing the Escape key</li>
          </ul>
        </div>
      </div>
    </OverlayPanel>
  </div>
</template>
