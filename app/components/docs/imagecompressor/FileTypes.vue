<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue';
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor';

const onApply = (payload: ImageCompressorPayload): void => {
  console.log('Image compressed as:', payload.compressed.type, payload);
};
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <div>
      <ImageCompressor @apply="onApply" file-type="webp" />

      <p class="text-xs text-center text-gray-600 mt-2">WebP Format</p>
    </div>

    <div>
      <ImageCompressor @apply="onApply" file-type="jpeg" />

      <p class="text-xs text-center text-gray-600 mt-2">JPEG Format</p>
    </div>

    <div>
      <ImageCompressor @apply="onApply" file-type="jpg" />

      <p class="text-xs text-center text-gray-600 mt-2">JPG Format</p>
    </div>
  </div>
</template>
