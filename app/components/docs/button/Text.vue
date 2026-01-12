<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button label="Default" />

    <Button label="Text" text />

    <Button label="Text Primary" severity="primary" text />

    <Button label="Text Success" severity="success" text />

    <Button label="Text Danger" severity="danger" text />
  </div>
</template>
