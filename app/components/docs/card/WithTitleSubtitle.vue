<script setup lang="ts">
import { Card } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Card class="w-80">
      <template #title>
        <h3 class="text-xl font-semibold text-gray-900">Card Title</h3>
      </template>

      <template #subtitle>
        <p class="text-sm text-gray-600 mt-1">This is a subtitle</p>
      </template>

      <template #content>
        <p class="mt-4">
          The title and subtitle slots provide a structured way to display card
          headers with consistent styling and hierarchy.
        </p>
      </template>
    </Card>
  </div>
</template>
