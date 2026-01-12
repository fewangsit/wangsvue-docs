<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <Textarea
      v-model="value"
      :maxlength="500"
      :prevent-input-on-max-length="false"
      :validator-message="{
        empty: 'Comments are required',
        exceed: 'Comments must not exceed 500 characters',
      }"
      field-name="comments"
      label="Comments"
      mandatory
      placeholder="Enter your comments"
      use-validator
    />

    <p class="text-sm text-gray-600">Characters: {{ value.length }}/500</p>
  </div>
</template>
