<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar :show-value="false" :value="70" severity="primary" />

    <ProgressBar :show-value="false" :value="40" severity="success" />
  </div>
</template>
