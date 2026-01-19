<script setup lang="ts">
import { Tree } from '@fewangsit/wangsvue';
import { ref } from 'vue';

import { fetchTree } from './mockData';

const filter = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <input
      v-model="filter"
      class="p-2 border rounded-md w-full max-w-sm"
      placeholder="Search..."
    />

    <Tree :fetch-tree="fetchTree" :filter="filter" type="category" />
  </div>
</template>
