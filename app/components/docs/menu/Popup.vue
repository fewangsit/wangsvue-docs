<script setup lang="ts">
import { Button, Menu } from '@fewangsit/wangsvue';

const menu = useTemplateRef<Menu>('menu');

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

const toggle = (event: Event): void => {
  menu.value?.toggle(event);
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="toggle" label="Show Menu" />

    <Menu ref="menu" :model="items" popup />
  </div>
</template>
