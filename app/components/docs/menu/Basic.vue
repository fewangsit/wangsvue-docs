<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue';

const items = [
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
  {
    separator: true,
  },
  {
    label: 'Save',
    command: (): void => {
      console.log('Save clicked');
    },
  },
  {
    label: 'Save As',
    command: (): void => {
      console.log('Save As clicked');
    },
  },
];
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Menu :model="items" :popup="false" />
  </div>
</template>
