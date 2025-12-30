<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      severity="success"
      message="Operation completed successfully!"
    />

    <InlineMessage
      severity="danger"
      message="An error occurred while processing your request."
    />

    <InlineMessage
      severity="secondary"
      message="This is an informational message."
    />
  </div>
</template>
