<script setup lang="ts">
import { Button, OverlayPanel } from '@fewangsit/wangsvue';

const op = useTemplateRef<OverlayPanel>('op');

const breakpoints = {
  '960px': '75vw',
  '640px': '90vw',
};

const toggle = (event: Event): void => {
  op.value?.toggle(event);
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="toggle" label="Show Responsive Panel" />

    <OverlayPanel ref="op" :breakpoints="breakpoints" show-close-icon>
      <div class="p-4 w-100">
        <h3 class="font-semibold mb-2">Responsive Overlay Panel</h3>

        <p class="mb-3">This panel adapts its width based on screen size:</p>

        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Desktop (>960px): 400px width</li>

          <li>Tablet (≤960px): 75% of viewport width</li>

          <li>Mobile (≤640px): 90% of viewport width</li>
        </ul>

        <p class="mt-3 text-sm text-gray-600">
          Resize your browser window to see the responsive behavior.
        </p>
      </div>
    </OverlayPanel>
  </div>
</template>
