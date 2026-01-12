<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue';

const sampleImage = 'https://picsum.photos/400/300';
</script>

<template>
  <div class="flex flex-wrap items-end gap-4">
    <div class="text-center">
      <Image :src="sampleImage" size="small" />

      <p class="text-xs text-gray-600 mt-2">Small (30px)</p>
    </div>

    <div class="text-center">
      <Image :src="sampleImage" size="medium" />

      <p class="text-xs text-gray-600 mt-2">Medium (80px)</p>
    </div>

    <div class="text-center">
      <Image :src="sampleImage" size="big" />

      <p class="text-xs text-gray-600 mt-2">Big (125px)</p>
    </div>
  </div>
</template>
