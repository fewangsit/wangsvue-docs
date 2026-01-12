<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button label="Default" />

    <Button label="Outlined" outlined />

    <Button label="Outlined Primary" outlined severity="primary" />

    <Button label="Outlined Success" outlined severity="success" />

    <Button label="Outlined Danger" outlined severity="danger" />
  </div>
</template>
