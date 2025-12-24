<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <Textarea
      v-model="value"
      label="Comments"
      placeholder="Enter your comments"
      :use-validator="true"
      field-name="comments"
      :mandatory="true"
      :maxlength="500"
      :prevent-input-on-max-length="false"
      :validator-message="{
        empty: 'Comments are required',
        exceed: 'Comments must not exceed 500 characters'
      }"
    />
    <p class="text-sm text-gray-600">
      Characters: {{ value.length }}/500
    </p>
  </div>
</template>
