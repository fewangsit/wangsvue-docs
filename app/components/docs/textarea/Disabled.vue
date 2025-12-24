<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue'
</script>

<template>
  <Textarea
    label="Disabled"
    :disabled="true"
    :auto-resize="true"
    :rows="3"
    placeholder="Disabled textarea"
    field-info="This textarea is disabled"
  />
</template>
