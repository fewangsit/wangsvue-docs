<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue';

const mainImage = 'https://picsum.photos/400/300';

const galleryImages = [
  { src: 'https://picsum.photos/400/300?random=1' },
  { src: 'https://picsum.photos/400/300?random=2' },
  { src: 'https://picsum.photos/400/300?random=3' },
  { src: 'https://picsum.photos/400/300?random=4' },
];
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Image :galleries="galleryImages" :src="mainImage" size="big" />
  </div>
</template>
