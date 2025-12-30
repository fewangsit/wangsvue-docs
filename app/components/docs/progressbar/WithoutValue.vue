<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar
      :value="70"
      severity="primary"
      :show-value="false"
    />

    <ProgressBar
      :value="40"
      severity="success"
      :show-value="false"
    />
  </div>
</template>
