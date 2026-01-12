<script setup lang="ts">
import { Button, OverlayPanel } from '@fewangsit/wangsvue';

const op = useTemplateRef<OverlayPanel>('op');

const toggle = (event: Event): void => {
  op.value?.toggle(event);
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="toggle" label="Show Panel" />

    <OverlayPanel ref="op">
      <div class="p-4">
        <h3 class="font-semibold mb-2">Overlay Panel Content</h3>

        <p class="mb-3">This is a basic overlay panel with custom content.</p>

        <Button label="Action" size="small" />
      </div>
    </OverlayPanel>
  </div>
</template>
