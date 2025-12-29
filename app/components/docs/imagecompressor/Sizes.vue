<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue'
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor'

const onApply = (payload: ImageCompressorPayload) => {
  console.log('Image compressed:', payload)
}
</script>

<template>
  <div class="flex flex-wrap items-end gap-6">
    <div class="text-center">
      <ImageCompressor
        image-preview-size="small"
        @apply="onApply"
      />
      <p class="text-xs text-gray-600 mt-2">
        Small (30px)
      </p>
    </div>

    <div class="text-center">
      <ImageCompressor
        image-preview-size="medium"
        @apply="onApply"
      />
      <p class="text-xs text-gray-600 mt-2">
        Medium (80px)
      </p>
    </div>

    <div class="text-center">
      <ImageCompressor
        image-preview-size="big"
        @apply="onApply"
      />
      <p class="text-xs text-gray-600 mt-2">
        Big (125px)
      </p>
    </div>
  </div>
</template>
