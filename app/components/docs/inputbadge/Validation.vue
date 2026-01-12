<script setup lang="ts">
import { InputBadge } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<string[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputBadge
      v-model="value"
      :validator-message="{
        empty: 'At least one skill is required',
      }"
      field-name="skills"
      label="Skills"
      mandatory
      placeholder="Enter your skills"
      use-validator
    />

    <p class="text-sm text-gray-600">
      Skills: {{ value.length > 0 ? value.join(', ') : 'None' }}
    </p>
  </div>
</template>
