<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      message="Operation completed successfully!"
      severity="success"
    />

    <InlineMessage
      message="An error occurred while processing your request."
      severity="danger"
    />

    <InlineMessage
      message="This is an informational message."
      severity="secondary"
    />
  </div>
</template>
