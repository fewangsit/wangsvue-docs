<script setup lang="ts">
import { ref } from 'vue'
import { InputBadge } from '@fewangsit/wangsvue'

const value = ref<string[]>(['JavaScript', 'Vue.js', 'TypeScript'])
const editableValues = ref<string[]>(['Vue.js', 'TypeScript'])
const removableValues = ref<string[]>(['Vue.js', 'TypeScript'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputBadge
      v-model="value"
      label="Technologies"
      placeholder="Add more technologies"
      :editable-values="editableValues"
      :removable-values="removableValues"
      :restore-value-on-empty="true"
    />
    <div class="text-sm text-gray-600">
      <p>Technologies: {{ value.length > 0 ? value.join(', ') : 'None' }}</p>
      <p class="text-xs">
        Note: JavaScript is not editable/removable, Vue.js and TypeScript are editable/removable
      </p>
    </div>
  </div>
</template>
