<script setup lang="ts">
import { ButtonBulkAction } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

interface DataItem {
  id: number;
  name: string;
  status: string;
}

const selectedData = ref<DataItem[]>([
  { id: 1, name: 'Item 1', status: 'active' },
  { id: 2, name: 'Item 2', status: 'inactive' },
  { id: 3, name: 'Item 3', status: 'active' },
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
  <ButtonBulkAction
    v-model:selected-data="selectedData"
    :options="options"
    :total-records="100"
    @apply="handleApply"
    table-name="sample-table"
  />
</template>
