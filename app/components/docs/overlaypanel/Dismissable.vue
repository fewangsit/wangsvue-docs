<script setup lang="ts">
import { Button, OverlayPanel } from '@fewangsit/wangsvue';

const dismissablePanel = useTemplateRef<OverlayPanel>('dismissablePanel');
const nonDismissablePanel = useTemplateRef<OverlayPanel>('nonDismissablePanel');

const showDismissable = (event: Event): void => {
  dismissablePanel.value?.show(event);
};

const showNonDismissable = (event: Event): void => {
  nonDismissablePanel.value?.show(event);
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showDismissable" label="Dismissable Panel" />

    <Button @click="showNonDismissable" label="Non-Dismissable Panel" />

    <!-- Dismissable Panel -->
    <OverlayPanel ref="dismissablePanel" dismissable>
      <div class="p-4">
        <h4 class="font-semibold mb-2">Dismissable Panel</h4>

        <p>Click outside to close this panel.</p>
      </div>
    </OverlayPanel>

    <!-- Non-Dismissable Panel -->
    <OverlayPanel ref="nonDismissablePanel" :dismissable="false">
      <div class="p-4">
        <h4 class="font-semibold mb-2">Non-Dismissable Panel</h4>

        <p class="mb-3">This panel won't close when clicking outside.</p>

        <Button
          @click="nonDismissablePanel?.hide()"
          label="Close"
          size="small"
        />
      </div>
    </OverlayPanel>
  </div>
</template>
