<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <!-- Image with invalid src and Picsum placeholder -->
    <div class="flex flex-col items-center gap-2">
      <Image
        src="https://invalid-url-that-will-fail.jpg"
        placeholder="https://picsum.photos/125/125?random=1"
        size="big"
      />
      <span class="text-sm text-gray-600">Src failed to load, placeholder custom</span>
    </div>

    <!-- Image with no src and Picsum placeholder -->
    <div class="flex flex-col items-center gap-2">
      <Image
        placeholder="https://picsum.photos/125/125?random=2"
        size="big"
      />
      <span class="text-sm text-gray-600">No src, placeholder custom</span>
    </div>

    <!-- Image with invalid src and NO placeholder (shows default) -->
    <div class="flex flex-col items-center gap-2">
      <Image
        src="https://another-invalid-url.jpg"
        size="big"
      />
      <span class="text-sm text-gray-600">Src failed to load, placeholder default</span>
    </div>

    <!-- Image with no src and NO placeholder (shows default) -->
    <div class="flex flex-col items-center gap-2">
      <Image
        size="big"
      />
      <span class="text-sm text-gray-600">No src, placeholder default</span>
    </div>

    <!-- Medium size with Picsum placeholder -->
    <div class="flex flex-col items-center gap-2">
      <Image
        src="https://broken-url.jpg"
        placeholder="https://picsum.photos/80/80?random=3"
        size="medium"
      />
      <span class="text-sm text-gray-600">Medium, Picsum</span>
    </div>

    <!-- Small size with default placeholder -->
    <div class="flex flex-col items-center gap-2">
      <Image
        src="https://invalid.jpg"
        size="small"
      />
      <span class="text-sm text-gray-600">Small, default</span>
    </div>
  </div>
</template>
