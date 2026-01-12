<script setup lang="ts">
import { MultiSelect } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const chipItems = ref(['Option 1', 'Option 2']);
const commaItems = ref(['Option 1', 'Option 2', 'Option 3']);

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4 class="text-lg font-medium mb-2">Chip Display (Default)</h4>

      <MultiSelect
        v-model="chipItems"
        :options="options"
        display="chip"
        label="Chip Display"
      />
    </div>

    <div>
      <h4 class="text-lg font-medium mb-2">Comma Display</h4>

      <MultiSelect
        v-model="commaItems"
        :options="options"
        display="comma"
        label="Comma Display"
      />
    </div>
  </div>
</template>
