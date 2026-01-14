<script setup lang="ts">
import { DataTable } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';

import products from './data/products.json';

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
];

const selectedProduct = shallowRef<Product | null>(null);

const singleActions = computed<MenuItem[]>(() => [
  {
    label: 'Edit',
    icon: 'edit',
    command: handleEdit,
  },
  {
    label: 'Delete',
    icon: 'delete-bin',
    danger: true,
    command: handleDelete,
    visible: (selectedProduct.value?.quantity ?? 0) > 20,
  },
]);

const handleEdit = (): void => {
  console.log('Edit product:', selectedProduct.value);
};

const handleDelete = (): void => {
  console.log('Delete product:', selectedProduct.value);
};
</script>

<template>
  <DataTable
    :columns="columns"
    :data="products"
    :options="singleActions"
    @toggle-option="selectedProduct = $event"
    data-key="id"
    selection-mode="single"
    use-option
  />
</template>
