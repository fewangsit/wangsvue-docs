<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue'

const basicMenus = [
  { name: 'Home' },
  { name: 'Products' },
  { name: 'Electronics' },
  { name: 'Smartphones' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Breadcrumb :menus="basicMenus" />
  </div>
</template>
