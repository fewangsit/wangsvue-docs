<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue';

const items = [
  {
    label: 'File',
    items: [
      {
        label: 'New',
        command: (): void => {
          console.log('New clicked');
        },
      },
      {
        label: 'Open',
        command: (): void => {
          console.log('Open clicked');
        },
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Edit',
    items: [
      {
        label: 'Cut',
        command: (): void => {
          console.log('Cut clicked');
        },
      },
      {
        label: 'Copy',
        command: (): void => {
          console.log('Copy clicked');
        },
      },
      {
        label: 'Paste',
        command: (): void => {
          console.log('Paste clicked');
        },
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Quit',
    command: (): void => {
      console.log('Quit clicked');
    },
  },
];
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Menu :model="items" :popup="false" />
  </div>
</template>
