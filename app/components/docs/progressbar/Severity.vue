<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar
      :value="60"
      severity="primary"
    />

    <ProgressBar
      :value="60"
      severity="success"
    />

    <ProgressBar
      :value="60"
      severity="danger"
    />

    <ProgressBar
      :value="60"
      severity="warning"
    />

    <ProgressBar
      :value="60"
      severity="dark"
    />
  </div>
</template>
