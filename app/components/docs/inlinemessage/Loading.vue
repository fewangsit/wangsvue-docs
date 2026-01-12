<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      loading
      message="Please wait while we process your request..."
      severity="secondary"
      title="Processing"
    />

    <InlineMessage
      :loading="false"
      message="Loading complete!"
      severity="success"
    />
  </div>
</template>
