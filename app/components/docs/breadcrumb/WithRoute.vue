<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue';
import type { BreadcrumbMenu } from '@fewangsit/wangsvue/breadcrumb';

const menus: BreadcrumbMenu[] = [
  { name: 'Home', route: '/', title: 'Home' },
  { name: 'Products', route: '/products', title: 'Products' },
  {
    name: 'Electronics',
    route: '/products/electronics',
    title: 'Electronics',
  },
  { name: 'Smartphones' },
];
</script>

<template>
  <Breadcrumb :menus="menus" />
</template>
