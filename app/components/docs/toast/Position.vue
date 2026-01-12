<script setup lang="ts">
import { Button, Toast, useToast } from '@fewangsit/wangsvue';

const toast = useToast();

const showTopLeft = (): void => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at top-left',
    life: 3000,
    group: 'tl',
  });
};

const showTopCenter = (): void => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at top-center',
    life: 3000,
    group: 'tc',
  });
};

const showTopRight = (): void => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at top-right',
    life: 3000,
    group: 'tr',
  });
};

const showBottomLeft = (): void => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at bottom-left',
    life: 3000,
    group: 'bl',
  });
};

const showBottomRight = (): void => {
  toast.add({
    severity: 'info',
    message: 'Toast positioned at bottom-right',
    life: 3000,
    group: 'br',
  });
};
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button @click="showTopLeft" label="Top Left" size="small" />

    <Button @click="showTopCenter" label="Top Center" size="small" />

    <Button @click="showTopRight" label="Top Right" size="small" />

    <Button @click="showBottomLeft" label="Bottom Left" size="small" />

    <Button @click="showBottomRight" label="Bottom Right" size="small" />

    <!-- Toast containers for different positions -->
    <Toast group="tl" position="top-left" />

    <Toast group="tc" position="top-center" />

    <Toast group="tr" position="top-right" />

    <Toast group="bl" position="bottom-left" />

    <Toast group="br" position="bottom-right" />
  </div>
</template>
