<script setup lang="ts">
import { DataTable, Toast, useToast } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

const TOAST_GROUP = 'column-preset-toggle-toast';
const toast = useToast();

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
  active: boolean;
  featured: boolean;
}

const products = ref<Product[]>([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    active: true,
    featured: false,
  },
  {
    id: '1001',
    code: 'nvklal4g',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    active: false,
    featured: true,
  },
  {
    id: '1002',
    code: 'zz21cz3c',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
    active: true,
    featured: true,
  },
  {
    id: '1003',
    code: 'zz21cz3d',
    name: 'Desk Chair',
    category: 'Furniture',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 3,
    active: true,
    featured: true,
  },
]);

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
  {
    field: 'active',
    header: 'Active',
    preset: {
      type: 'toggle',
      onToggle: (state: boolean, data: Product, revert: () => void): void => {
        console.log(`Toggle ${data.name} active: ${state}`);

        // Check if confirmation dialog will be shown
        if (shouldShowConfirm(data)) {
          // Confirmation will be shown - don't call API here
          console.log('Confirmation dialog will be shown, API call deferred');
        } else {
          // No confirmation needed - call API immediately
          mockApiCall(state, data, revert);
        }
      },
      confirmDialogProps: {
        header: 'Toggle Active Status',
        message: 'Are you sure you want to change the active status?',
        severity: 'primary',
        listLabel: 'name',
        showWhen: shouldShowConfirm, // Show confirmation for low stock items
      },
      onConfirm: (state, data, revert): void => {
        console.log(`Confirmed toggle ${data.name} active: ${state}`);
        // Simulate API call that might fail
        mockApiCall(state, data, revert);
      },
    },
  },
  {
    field: 'featured',
    header: 'Featured',
    preset: {
      type: 'toggle',
      onToggle: (state, data): void => {
        console.log(`Toggle ${data.name} featured: ${state}`);
      },
      disabled: (data) => data.inventoryStatus === 'OUTOFSTOCK', // Disable for out of stock items
    },
  },
];

function shouldShowConfirm(data: Product): boolean {
  return data.quantity < 10;
}

function mockApiCall(state: boolean, data: Product, revert: () => void): void {
  const shouldFail = Math.random() > 0.5; // 50% chance of failure
  if (shouldFail) {
    console.log('API call failed, reverting state');
    revert(); // Revert to previous state
    toast.add({
      severity: 'error',
      message: `Failed to toggle ${data.name} active status`,
      life: 3000,
      group: TOAST_GROUP,
    });
  } else {
    console.log('API call successful, state persisted');
    toast.add({
      severity: 'success',
      message: `${data.name} active status changed to ${state}`,
      life: 3000,
      group: TOAST_GROUP,
    });
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :data="products"
    data-key="id"
    table-name="column-preset-toggle-demo"
  />

  <Toast :group="TOAST_GROUP" />
</template>
