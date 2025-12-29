<script setup lang="ts">
import { Image } from '@fewangsit/wangsvue'

const sampleImage = 'https://picsum.photos/400/300'
</script>

<template>
  <div class="flex flex-wrap items-end gap-4">
    <div class="text-center">
      <Image
        :src="sampleImage"
        :width="50"
      />
      <p class="text-xs text-gray-600 mt-2">
        50px
      </p>
    </div>

    <div class="text-center">
      <Image
        :src="sampleImage"
        :width="100"
      />
      <p class="text-xs text-gray-600 mt-2">
        100px
      </p>
    </div>

    <div class="text-center">
      <Image
        :src="sampleImage"
        :width="150"
      />
      <p class="text-xs text-gray-600 mt-2">
        150px
      </p>
    </div>

    <div class="text-center">
      <Image
        :src="sampleImage"
        :width="200"
      />
      <p class="text-xs text-gray-600 mt-2">
        200px
      </p>
    </div>
  </div>
</template>
