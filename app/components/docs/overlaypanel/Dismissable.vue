<script setup lang="ts">
import { ref } from 'vue'
import { OverlayPanel, Button } from '@fewangsit/wangsvue'

const dismissablePanel = ref()
const nonDismissablePanel = ref()

const showDismissable = (event: Event) => {
  dismissablePanel.value.show(event)
}

const showNonDismissable = (event: Event) => {
  nonDismissablePanel.value.show(event)
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Dismissable Panel"
      @click="showDismissable"
    />
    <Button
      label="Non-Dismissable Panel"
      @click="showNonDismissable"
    />

    <!-- Dismissable Panel -->
    <OverlayPanel
      ref="dismissablePanel"
      :dismissable="true"
    >
      <div class="p-4">
        <h4 class="font-semibold mb-2">
          Dismissable Panel
        </h4>
        <p>Click outside to close this panel.</p>
      </div>
    </OverlayPanel>

    <!-- Non-Dismissable Panel -->
    <OverlayPanel
      ref="nonDismissablePanel"
      :dismissable="false"
    >
      <div class="p-4">
        <h4 class="font-semibold mb-2">
          Non-Dismissable Panel
        </h4>
        <p class="mb-3">
          This panel won't close when clicking outside.
        </p>
        <Button
          label="Close"
          size="small"
          @click="nonDismissablePanel.hide()"
        />
      </div>
    </OverlayPanel>
  </div>
</template>
