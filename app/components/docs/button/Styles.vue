<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap gap-3">
      <Button label="Default" />

      <Button label="Raised" raised />

      <Button label="Rounded" rounded />

      <Button label="Text" text />

      <Button label="Outlined" outlined />

      <Button label="Plain" plain />

      <Button label="Link" link />
    </div>

    <div class="flex flex-wrap gap-3">
      <Button label="Raised + Rounded" raised rounded severity="success" />

      <Button label="Outlined + Large" outlined severity="info" size="large" />

      <Button label="Text + Small" severity="danger" size="small" text />
    </div>
  </div>
</template>
