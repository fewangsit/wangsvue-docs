<script setup lang="ts">
import { Button, TabMenu } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

const activeIndex = ref(0);

const items: MenuItem[] = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' },
  { label: 'Tab 4' },
];

const setActiveTab = (index: number): void => {
  activeIndex.value = index;
};

const nextTab = (): void => {
  activeIndex.value = (activeIndex.value + 1) % items.length;
};

const prevTab = (): void => {
  activeIndex.value =
    activeIndex.value === 0 ? items.length - 1 : activeIndex.value - 1;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <TabMenu v-model:active-index="activeIndex" :menu="items" />

    <div class="flex flex-wrap gap-2">
      <Button @click="prevTab" label="Previous Tab" size="small" />

      <Button @click="nextTab" label="Next Tab" size="small" />

      <Button @click="setActiveTab(2)" label="Go to Tab 3" size="small" />
    </div>

    <div class="p-4 border rounded-lg">
      <p class="text-sm text-gray-600">
        Active Index: {{ activeIndex }} - {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
