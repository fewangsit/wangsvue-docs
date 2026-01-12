<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue';
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor';

const onApply = (payload: ImageCompressorPayload): void => {
  console.log('Image compressed:', payload);
};
</script>

<template>
  <ImageCompressor @apply="onApply" />
</template>
