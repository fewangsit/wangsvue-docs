<script setup lang="ts">
import { ImageCompressor } from '@fewangsit/wangsvue'
import type { ImageCompressorPayload } from '@fewangsit/wangsvue/imagecompressor'

const onApply = (payload: ImageCompressorPayload) => {
  console.log('Multiple images compressed:', payload)
}
</script>

<template>
  <ImageCompressor
    :multiple="true"
    @apply="onApply"
  />
</template>
