<script setup lang="ts">
import { Card } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Card class="w-80">
      <template #header>
        <img
          alt="Header"
          class="w-full h-40 object-cover"
          src="https://via.placeholder.com/320x160/4F46E5/FFFFFF?text=Header+Image"
        />
      </template>

      <template #content>
        <p>
          This card includes a header section with an image. The header slot
          allows you to add any content above the main card body.
        </p>
      </template>
    </Card>
  </div>
</template>
