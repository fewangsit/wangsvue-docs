<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProgressBar :value="35" severity="primary">
      <template #label="{ value }"> {{ value }}% Complete </template>
    </ProgressBar>

    <ProgressBar :value="80" severity="success">
      <template #label="{ value }"> {{ value }}/100 Tasks </template>
    </ProgressBar>

    <ProgressBar :value="15" severity="warning">
      <template #label="{ value }"> Loading... {{ value }}% </template>
    </ProgressBar>
  </div>
</template>
