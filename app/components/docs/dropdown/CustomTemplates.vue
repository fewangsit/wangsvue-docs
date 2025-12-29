<script setup lang="ts">
import { Dropdown } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const selectedValue = ref()
const options = [
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
  { name: 'China', code: 'CN', flag: '🇨🇳' },
  { name: 'Egypt', code: 'EG', flag: '🇪🇬' },
  { name: 'France', code: 'FR', flag: '🇫🇷' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Dropdown
      v-model="selectedValue"
      label="Select Country"
      :options="options"
      option-label="name"
      option-value="code"
      placeholder="Choose a country"
    >
      <template #value="{ originalValue }">
        <span v-if="originalValue">
          {{ originalValue.flag }} {{ originalValue.name }}
        </span>
      </template>

      <template #option="{ option }">
        <div class="flex items-center gap-2">
          <span>{{ option.flag }}</span>
          <span>{{ option.name }}</span>
          <span class="text-gray-500">({{ option.code }})</span>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
