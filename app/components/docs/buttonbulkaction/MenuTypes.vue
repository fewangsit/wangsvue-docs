<script setup lang="ts">
import { ButtonBulkAction } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

interface DataItem {
  id: number;
  name: string;
  status: string;
}

const selectedDataOverlay = ref<DataItem[]>([
  { id: 1, name: 'Item 1', status: 'active' },
  { id: 2, name: 'Item 2', status: 'inactive' },
]);

const selectedDataDropdown = ref<DataItem[]>([
  { id: 3, name: 'Item 3', status: 'active' },
  { id: 4, name: 'Item 4', status: 'inactive' },
]);

const options: MenuItem[] = [
  {
    label: 'Delete',
    icon: 'delete-bin',
    command: (): void => {
      console.log('Delete action executed');
    },
  },
  {
    label: 'Export',
    icon: 'download',
    command: (): void => {
      console.log('Export action executed');
    },
  },
  {
    label: 'Archive',
    icon: 'archive-line',
    command: (): void => {
      console.log('Archive action executed');
    },
  },
];

const handleApply = (): void => {
  console.log('Apply clicked');
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="text-lg font-semibold mb-2">Overlay Panel Menu</h3>

      <ButtonBulkAction
        v-model:selected-data="selectedDataOverlay"
        :options="options"
        @apply="handleApply"
        select-menu-type="overlay-panel"
        table-name="overlay-table"
      />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Dropdown Menu</h3>

      <ButtonBulkAction
        v-model:selected-data="selectedDataDropdown"
        :options="options"
        @apply="handleApply"
        select-menu-type="dropdown"
        table-name="dropdown-table"
      />
    </div>
  </div>
</template>
