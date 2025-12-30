<script setup lang="ts">
import { ref } from 'vue'
import { Dropdown } from '@fewangsit/wangsvue'

interface Country {
  name: string
  code: string
  flag: string
}

const selectedValue = ref<Country>()
const options: Country[] = [
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
  { name: 'China', code: 'CN', flag: '🇨🇳' },
  { name: 'Egypt', code: 'EG', flag: '🇪🇬' },
  { name: 'France', code: 'FR', flag: '🇫🇷' }
]
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    label="Select Country"
    :options="options"
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
</template>
