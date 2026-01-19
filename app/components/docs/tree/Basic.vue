<script setup lang="ts">
import { Tree } from '@fewangsit/wangsvue';

import { fetchTree } from './mockData';
</script>

<template>
  <Tree :fetch-tree="fetchTree" filter="" type="category" />
</template>
