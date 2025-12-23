<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Badge label="Default" />
    <Badge
      label="Primary"
      severity="primary"
    />
    <Badge
      label="Success"
      severity="success"
    />
    <Badge
      label="Info"
      severity="info"
    />
  </div>
</template>
