<script setup lang="ts">
import { Tree } from '@fewangsit/wangsvue';
import { ref } from 'vue';

import { fetchTree } from './mockData';

const selectedKeys = ref({});
const selectedKeysSingle = ref({});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Checkbox Selection</h3>

      <Tree
        v-model:selected-keys="selectedKeys"
        :fetch-tree="fetchTree"
        filter=""
        selection-mode="checkbox"
        type="category"
      />

      <div class="mt-2 text-sm">Selected: {{ Object.keys(selectedKeys) }}</div>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Single Selection</h3>

      <Tree
        v-model:selected-keys="selectedKeysSingle"
        :fetch-tree="fetchTree"
        filter=""
        selection-mode="single"
        type="category"
      />

      <div class="mt-2 text-sm">
        Selected: {{ Object.keys(selectedKeysSingle) }}
      </div>
    </div>
  </div>
</template>
