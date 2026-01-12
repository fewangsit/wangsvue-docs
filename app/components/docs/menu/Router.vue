<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';

const items: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    target: '/dashboard',
  },
  {
    label: 'Components',
    icon: 'apps-2-line',
    target: '/components',
  },
  {
    separator: true,
  },
  {
    label: 'Profile',
    icon: 'profile',
    target: '/profile',
  },
  {
    label: 'Settings',
    icon: 'settings',
    target: '/settings',
  },
  {
    separator: true,
  },
  {
    label: 'External Link',
    icon: 'external-link',
    url: 'https://example.com',
  },
];
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Menu :model="items" :popup="false" />

    <p class="text-sm text-gray-600">
      Menu items can navigate using Vue Router or external URLs
    </p>
  </div>
</template>
