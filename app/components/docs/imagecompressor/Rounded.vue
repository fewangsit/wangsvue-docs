<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue'
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor'

const onApply = (payload: ImageCompressorPayload) => {
  console.log('Image compressed:', payload)
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <div>
      <ImageCompressor
        image-preview-size="big"
        @apply="onApply"
      />
      <p class="text-xs text-center text-gray-600 mt-2">
        Default
      </p>
    </div>

    <div>
      <ImageCompressor
        image-preview-size="big"
        :rounded="true"
        @apply="onApply"
      />
      <p class="text-xs text-center text-gray-600 mt-2">
        Rounded
      </p>
    </div>
  </div>
</template>
