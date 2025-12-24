<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@fewangsit/wangsvue'

const customValue = ref('')
</script>

<template>
  <Textarea
    v-model="customValue"
    label="Custom Textarea"
    placeholder="6 rows with 50 cols"
    :rows="3"
    :cols="50"
  />
</template>
