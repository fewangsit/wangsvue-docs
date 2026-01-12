<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar mode="indeterminate" severity="primary" />

    <ProgressBar mode="indeterminate" severity="success" />
  </div>
</template>
