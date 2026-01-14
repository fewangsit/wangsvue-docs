<script setup lang="ts">
import { DataTable } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

const products = ref<Product[]>([
  {
    id: '1',
    code: 'P001',
    name: 'Laptop',
    category: 'Electronics',
    quantity: 10,
  },
  {
    id: '2',
    code: 'P002',
    name: 'Mouse',
    category: 'Electronics',
    quantity: 50,
  },
  {
    id: '3',
    code: 'P003',
    name: 'Keyboard',
    category: 'Electronics',
    quantity: 30,
  },
  {
    id: '4',
    code: 'P004',
    name: 'Monitor',
    category: 'Electronics',
    quantity: 15,
  },
  {
    id: '5',
    code: 'P005',
    name: 'Desk Chair',
    category: 'Furniture',
    quantity: 5,
  },
]);

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
];
</script>

<template>
  <DataTable :columns="columns" :data="products" data-key="id" />
</template>
