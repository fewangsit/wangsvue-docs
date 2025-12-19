<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button label="Default" />
    <Button
      label="Raised"
      raised
    />
    <Button
      label="Raised Primary"
      raised
      severity="primary"
    />
    <Button
      label="Raised Success"
      raised
      severity="success"
    />
    <Button
      label="Raised Danger"
      raised
      severity="danger"
    />
  </div>
</template>
