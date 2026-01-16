<script setup lang="ts">
import { ButtonBulkAction } from '@fewangsit/wangsvue';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

interface DataItem {
  id: number;
  name: string;
  category: string;
}

const selectedUsers = ref<DataItem[]>([
  { id: 1, name: 'John Doe', category: 'admin' },
  { id: 2, name: 'Jane Smith', category: 'user' },
]);

const selectedProducts = ref<DataItem[]>([
  { id: 3, name: 'Laptop', category: 'electronics' },
  { id: 4, name: 'Mouse', category: 'electronics' },
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

const updateSelectedProducts = (datas: DataItem[]): void => {
  selectedProducts.value = datas;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="text-lg font-semibold mb-2">Custom Naming - Users</h3>

      <ButtonBulkAction
        v-model:selected-data="selectedUsers"
        :options="options"
        @apply="handleApply"
        naming="User(s)"
        table-name="users-table"
      />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Custom Naming - Products</h3>

      <ButtonBulkAction
        v-model:selected-data="selectedProducts"
        :options="options"
        @apply="handleApply"
        @update:selected-data="updateSelectedProducts"
        naming="Product(s)"
        table-name="products-table"
      />
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Default Naming</h3>

      <ButtonBulkAction
        v-model:selected-data="selectedProducts"
        :options="options"
        @apply="handleApply"
        @update:selected-data="updateSelectedProducts"
        table-name="default-table"
      />
    </div>
  </div>
</template>
