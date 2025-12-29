<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue'

const mixedMenus = [
  { name: 'Home', route: '/' },
  { name: 'Categories' },
  { name: 'Technology', route: '/categories/technology' },
  { name: 'Articles' },
  { name: 'Current Article' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Breadcrumb :menus="mixedMenus" />
  </div>
</template>
