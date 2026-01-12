<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
</script>

<template>
  <Textarea
    :rows="3"
    auto-resize
    disabled
    field-info="This textarea is disabled"
    label="Disabled"
    placeholder="Disabled textarea"
  />
</template>
