<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';

const items: MenuItem[] = [
  {
    label: 'New',
    icon: 'file-add',
    command: (): void => {
      console.log('New clicked');
    },
  },
  {
    label: 'Open',
    icon: 'folder',
    command: (): void => {
      console.log('Open clicked');
    },
  },
  {
    separator: true,
  },
  {
    label: 'Save',
    icon: 'save',
    command: (): void => {
      console.log('Save clicked');
    },
  },
  {
    label: 'Print',
    icon: 'printer',
    command: (): void => {
      console.log('Print clicked');
    },
  },
  {
    separator: true,
  },
  {
    label: 'Settings',
    icon: 'settings',
    command: (): void => {
      console.log('Settings clicked');
    },
  },
];
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Menu :model="items" :popup="false" />
  </div>
</template>
