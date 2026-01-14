<script setup lang="ts">
import { DataTable, Toast, useToast } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

const TOAST_GROUP = 'column-preset-checkbox-toast';
const toast = useToast();

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
  verified: boolean;
  approved: boolean;
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
    verified: true,
    approved: false,
  },
  {
    id: '1001',
    code: 'nvklal4g',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    verified: false,
    approved: true,
  },
  {
    id: '1002',
    code: 'zz21cz3c',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
    verified: true,
    approved: true,
  },
]);

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
  {
    field: 'verified',
    header: 'Verified',
    preset: {
      type: 'checkbox',
      onCheck: (state, data, revert): void => {
        console.log(`Check ${data.name} verified: ${state}`);

        // Check if confirmation dialog will be shown
        const willShowConfirm = !state; // Show confirmation when unchecking

        if (willShowConfirm) {
          // Confirmation will be shown - don't call API here
          console.log(
            'Confirmation dialog will be shown, waiting for onConfirm',
          );
        } else {
          // No confirmation needed - call API immediately
          mockApiCall(state, data, revert);
        }
      },
      confirmDialogProps: {
        header: 'Verify Product',
        message: 'Are you sure you want to change verification status?',
        severity: 'success',
        listLabel: 'name',
        showWhen: 'inactive', // Show confirmation when unchecking
      },
      onConfirm: (state, data, revert): void => {
        console.log(`Confirmed check ${data.name} verified: ${state}`);
        // Simulate API call that might fail
        mockApiCall(state, data, revert);
      },
    },
  },
  {
    field: 'approved',
    header: 'Approved',
    preset: {
      type: 'checkbox',
      onCheck: (state, data): void => {
        console.log(`Check ${data.name} approved: ${state}`);
      },
      disabled: (data) => !data.verified, // Disable approval if not verified
    },
  },
];

function mockApiCall(state: boolean, data: Product, revert: () => void): void {
  const shouldFail = Math.random() > 0.5; // 50% chance of failure
  if (shouldFail) {
    console.log('API call failed, reverting state');
    revert(); // Revert to previous state
    toast.add({
      severity: 'error',
      group: TOAST_GROUP,
      message: `Failed to verify ${data.name}`,
      life: 3000,
    });
  } else {
    console.log('API call successful, state persisted');
    toast.add({
      severity: 'success',
      group: TOAST_GROUP,
      message: `${data.name} verification status changed to ${state}`,
      life: 3000,
    });
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :data="products"
    data-key="id"
    table-name="column-preset-checkbox-demo"
  />

  <Toast :group="TOAST_GROUP" />
</template>
