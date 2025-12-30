<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue'

const sampleImage = 'https://picsum.photos/400/300'
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Image :src="sampleImage" />
  </div>
</template>
