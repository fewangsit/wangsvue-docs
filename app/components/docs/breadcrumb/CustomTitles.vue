<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue'

const customTitleMenus = [
  { name: 'home', title: 'Home Page', route: '/' },
  { name: 'products', title: 'Product Catalog', route: '/products' },
  { name: 'electronics', title: 'Electronics & Gadgets', route: '/products/electronics' },
  { name: 'smartphone-detail', title: 'iPhone 15 Pro Max' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Breadcrumb :menus="customTitleMenus" />
  </div>
</template>
