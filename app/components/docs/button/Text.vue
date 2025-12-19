<script setup lang="ts">
import { Button } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button label="Default" />
    <Button
      label="Text"
      text
    />
    <Button
      label="Text Primary"
      text
      severity="primary"
    />
    <Button
      label="Text Success"
      text
      severity="success"
    />
    <Button
      label="Text Danger"
      text
      severity="danger"
    />
  </div>
</template>
