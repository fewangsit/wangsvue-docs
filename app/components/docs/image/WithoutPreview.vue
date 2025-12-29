<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue'

const sampleImage = 'https://picsum.photos/400/300'
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div class="text-center">
      <Image
        :src="sampleImage"
        :preview="false"
      />
      <p class="text-xs text-gray-600 mt-2">
        Preview disabled
      </p>
    </div>
  </div>
</template>
