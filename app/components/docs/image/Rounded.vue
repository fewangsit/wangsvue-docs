<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue'

const sampleImage = 'https://picsum.photos/400/300'
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <div class="text-center">
      <Image
        :src="sampleImage"
        size="big"
      />
      <p class="text-xs text-gray-600 mt-2">
        Default
      </p>
    </div>

    <div class="text-center">
      <Image
        :src="sampleImage"
        size="big"
        :rounded="true"
      />
      <p class="text-xs text-gray-600 mt-2">
        Rounded
      </p>
    </div>
  </div>
</template>
