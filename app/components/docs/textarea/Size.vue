<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const customValue = ref('');
</script>

<template>
  <Textarea
    v-model="customValue"
    :cols="50"
    :rows="3"
    label="Custom Textarea"
    placeholder="6 rows with 50 cols"
  />
</template>
