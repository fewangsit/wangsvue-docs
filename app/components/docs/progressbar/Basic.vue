<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar :value="25" severity="primary" />

    <ProgressBar :value="50" severity="primary" />

    <ProgressBar :value="75" severity="primary" />

    <ProgressBar :value="100" severity="primary" />
  </div>
</template>
