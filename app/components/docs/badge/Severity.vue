<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-3">
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
    <Badge
      label="Warning"
      severity="warning"
    />
    <Badge
      label="Danger"
      severity="danger"
    />
    <Badge
      label="Dark"
      severity="dark"
    />
  </div>
</template>
