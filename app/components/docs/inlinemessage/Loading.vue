<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      severity="secondary"
      title="Processing"
      message="Please wait while we process your request..."
      :loading="true"
    />

    <InlineMessage
      severity="success"
      message="Loading complete!"
      :loading="false"
    />
  </div>
</template>
