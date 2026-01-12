<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedItems = ref(['Option 2']);

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
</script>

<template>
  <MultiSelect
    v-model="selectedItems"
    :options="options"
    label="Custom Trigger MultiSelect"
  >
    <template #trigger="{ disabled, visible, show, hide }">
      <button
        :class="{ 'border-blue-500 bg-blue-50': visible }"
        :disabled="disabled"
        @click="visible ? hide() : show()"
        class="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span class="text-2xl">🎯</span>

        <span>{{ selectedItems.length }} items selected</span>

        <span class="ml-auto text-gray-400">
          {{ visible ? '▲' : '▼' }}
        </span>
      </button>
    </template>
  </MultiSelect>
</template>
