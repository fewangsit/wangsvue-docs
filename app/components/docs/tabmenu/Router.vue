<script setup lang="ts">
import { TabMenu } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';

const items: MenuItem[] = [
  {
    label: 'Home',
    icon: 'dashboard',
    route: '/',
  },
  {
    label: 'Button Components',
    icon: 'apps-2-line',
    route: 'button', // Relative to current route
  },
  {
    label: 'AI MCP',
    icon: 'star-fill',
    route: '/ai/mcp',
  },
];
</script>

<template>
  <TabMenu :menu="items" />
</template>
