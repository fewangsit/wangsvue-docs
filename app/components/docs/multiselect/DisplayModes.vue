<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedChip = ref(['Option 1', 'Option 2']);
const selectedComma = ref(['Option 3', 'Option 4']);
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
</script>

<template>
  <div class="flex flex-col gap-4">
    <MultiSelect
      v-model="selectedChip"
      :options="options"
      display="chip"
      label="Chip Display"
      placeholder="Choose options (chip)"
    />

    <MultiSelect
      v-model="selectedComma"
      :options="options"
      display="comma"
      label="Comma Display"
      placeholder="Choose options (comma)"
    />
  </div>
</template>
