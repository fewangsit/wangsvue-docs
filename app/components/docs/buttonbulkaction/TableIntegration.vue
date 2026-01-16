<script setup lang="ts">
import { ButtonBulkAction, DataTable } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import { ref } from 'vue';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 999,
    status: 'active',
  },
  {
    id: 2,
    name: 'Mouse',
    category: 'Electronics',
    price: 25,
    status: 'active',
  },
  {
    id: 3,
    name: 'Keyboard',
    category: 'Electronics',
    price: 75,
    status: 'inactive',
  },
  {
    id: 4,
    name: 'Monitor',
    category: 'Electronics',
    price: 300,
    status: 'active',
  },
  {
    id: 5,
    name: 'Desk Chair',
    category: 'Furniture',
    price: 150,
    status: 'active',
  },
]);

const selectedProducts = ref<Product[]>([]);

const bulkOptions: MenuItem[] = [
  {
    label: 'Delete Selected',
    icon: 'delete-bin',
    command: (): void => {
      console.log('Delete selected products');
    },
  },
  {
    label: 'Export to Excel',
    icon: 'xls',
    command: (): void => {
      console.log('Export selected products to Excel');
    },
  },
  {
    label: 'Change Status',
    icon: 'edit',
    command: (): void => {
      console.log('Change status of selected products');
    },
  },
];

const columns: TableColumn<Product>[] = [
  { field: 'name', header: 'Product Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price' },
  { field: 'status', header: 'Status' },
];

const handleBulkApply = (): void => {
  console.log('Bulk action applied to:', selectedProducts.value);
};
</script>

<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold">Product Management</h3>

      <ButtonBulkAction
        v-model:selected-data="selectedProducts"
        :options="bulkOptions"
        :total-records="products.length"
        @apply="handleBulkApply"
        naming="Product(s)"
        table-name="products-table"
      />
    </div>

    <DataTable
      v-model:selection="selectedProducts"
      :columns="columns"
      :data="products"
      :rows="5"
      data-key="id"
      paginator
      selection-mode="multiple"
      table-style="min-width: 50rem"
    />

    <div v-if="selectedProducts.length > 0" class="p-3 bg-blue-50 rounded">
      <p class="text-sm text-blue-800">
        {{ selectedProducts.length }} product(s) selected for bulk actions
      </p>
    </div>
  </div>
</template>
