<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      severity="success"
      title="Success"
      message="Your changes have been saved successfully."
    />

    <InlineMessage
      severity="danger"
      title="Validation Error"
      message="Please check the following fields and try again."
    />
  </div>
</template>
