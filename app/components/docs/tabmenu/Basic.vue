<script setup lang="ts">
import { TabMenu } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

const activeIndex = ref(0);

const items: MenuItem[] = [
  {
    label: 'Dashboard',
    command: (): void => {
      console.log('Dashboard clicked');
    },
  },
  {
    label: 'Analytics',
    command: (): void => {
      console.log('Analytics clicked');
    },
  },
  {
    label: 'Reports',
    command: (): void => {
      console.log('Reports clicked');
    },
  },
  {
    label: 'Settings',
    command: (): void => {
      console.log('Settings clicked');
    },
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <TabMenu v-model:active-index="activeIndex" :menu="items" />

    <div class="p-4 border rounded-lg">
      <p class="text-sm text-gray-600">
        Active tab: {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
