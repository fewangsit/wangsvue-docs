<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue'
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor'

const onApply = (payload: ImageCompressorPayload) => {
  console.log('Image compressed as:', payload.compressed.type, payload)
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <div class="text-center">
      <ImageCompressor
        file-type="webp"
        @apply="onApply"
      />
      <p class="text-xs text-gray-600 mt-2">
        WebP Format
      </p>
    </div>

    <div class="text-center">
      <ImageCompressor
        file-type="jpeg"
        @apply="onApply"
      />
      <p class="text-xs text-gray-600 mt-2">
        JPEG Format
      </p>
    </div>

    <div class="text-center">
      <ImageCompressor
        file-type="jpg"
        @apply="onApply"
      />
      <p class="text-xs text-gray-600 mt-2">
        JPG Format
      </p>
    </div>
  </div>
</template>
