<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue';
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor';

const onApply = (payload: ImageCompressorPayload): void => {
  console.log('Image compressed:', payload);
};
</script>

<template>
  <div class="flex flex-wrap items-end gap-6">
    <div>
      <ImageCompressor @apply="onApply" image-preview-size="small" />

      <p class="text-xs text-center text-gray-600 mt-2">Small (30px)</p>
    </div>

    <div>
      <ImageCompressor @apply="onApply" image-preview-size="medium" />

      <p class="text-xs text-center text-gray-600 mt-2">Medium (80px)</p>
    </div>

    <div>
      <ImageCompressor @apply="onApply" image-preview-size="big" />

      <p class="text-xs text-center text-gray-600 mt-2">Big (125px)</p>
    </div>
  </div>
</template>
