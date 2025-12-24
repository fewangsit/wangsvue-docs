<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@fewangsit/wangsvue'

const invalidValue = ref('This content has an error')
</script>

<template>
  <Textarea
    v-model="invalidValue"
    :invalid="true"
    :rows="3"
    :use-validator="true"
    label="Invalid Content"
    placeholder="This shows an error"
    validator-message="This content contains inappropriate language"
  />
</template>
