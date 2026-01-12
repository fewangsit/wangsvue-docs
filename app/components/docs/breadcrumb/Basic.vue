<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue';
import type { BreadcrumbMenu } from '@fewangsit/wangsvue/breadcrumb';

const menus: BreadcrumbMenu[] = [
  { name: 'Home' },
  { name: 'Products' },
  { name: 'Electronics' },
  { name: 'Smartphones' },
];
</script>

<template>
  <Breadcrumb :menus="menus" />
</template>
