<script setup lang="ts">
import { Icon } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-4 items-center">
    <div class="flex flex-col items-center gap-2">
      <Icon icon="info" severity="primary" />

      <span class="text-xs text-gray-600">Primary</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Icon icon="check" severity="success" />

      <span class="text-xs text-gray-600">Success</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Icon icon="information-line" severity="info" />

      <span class="text-xs text-gray-600">Info</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Icon icon="error" severity="warning" />

      <span class="text-xs text-gray-600">Warning</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Icon icon="close-circle" severity="danger" />

      <span class="text-xs text-gray-600">Danger</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Icon icon="menu" severity="secondary" />

      <span class="text-xs text-gray-600">Secondary</span>
    </div>
  </div>
</template>
