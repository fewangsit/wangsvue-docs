<script setup lang="ts">
import { ref } from 'vue'
import { InputBadge } from '@fewangsit/wangsvue'

const value = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputBadge
      v-model="value"
      label="Skills"
      placeholder="Enter your skills"
      :use-validator="true"
      field-name="skills"
      :mandatory="true"
      :validator-message="{
        empty: 'At least one skill is required'
      }"
    />
    <p class="text-sm text-gray-600">
      Skills: {{ value.length > 0 ? value.join(', ') : 'None' }}
    </p>
  </div>
</template>
