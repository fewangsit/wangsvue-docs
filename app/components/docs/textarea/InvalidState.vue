<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const invalidValue = ref('This content has an error');
</script>

<template>
  <Textarea
    v-model="invalidValue"
    :rows="3"
    invalid
    label="Invalid Content"
    placeholder="This shows an error"
    use-validator
    validator-message="This content contains inappropriate language"
  />
</template>
