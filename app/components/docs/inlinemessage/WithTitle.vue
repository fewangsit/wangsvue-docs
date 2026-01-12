<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      message="Your changes have been saved successfully."
      severity="success"
      title="Success"
    />

    <InlineMessage
      message="Please check the following fields and try again."
      severity="danger"
      title="Validation Error"
    />
  </div>
</template>
