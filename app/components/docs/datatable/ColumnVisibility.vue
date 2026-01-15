<script setup lang="ts">
import { DataTable } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  inventoryStatus: string;
  rating: number;
}

const tableName = 'column-visibility-table';

// All available columns with different visibility and reordering behaviors
const columns: TableColumn<Product>[] = [
  {
    field: 'id',
    header: 'ID',
    reorderable: false, // Not included in column visibility menu
  },
  {
    field: 'code',
    header: 'Code',
    fixed: true, // Fixed column - appears in column visibility menu but cannot be hidden
  },
  {
    field: 'name',
    header: 'Name',
    dragable: false, // Can be hidden/shown but cannot be reordered by dragging
  },
  { field: 'category', header: 'Category' }, // Normal column - fully customizable
  { field: 'quantity', header: 'Quantity' }, // Normal column - fully customizable
  { field: 'price', header: 'Price' }, // Normal column - fully customizable
  { field: 'inventoryStatus', header: 'Inventory Status' }, // Normal column - fully customizable
  { field: 'rating', header: 'Rating' }, // Normal column - fully customizable
];

const products = ref<Product[]>([
  {
    id: 1,
    code: 'P001',
    name: 'Laptop',
    category: 'Electronics',
    quantity: 10,
    price: 999.99,
    inventoryStatus: 'IN STOCK',
    rating: 4.5,
  },
  {
    id: 2,
    code: 'P002',
    name: 'Mouse',
    category: 'Electronics',
    quantity: 50,
    price: 29.99,
    inventoryStatus: 'IN STOCK',
    rating: 4.2,
  },
  {
    id: 3,
    code: 'P003',
    name: 'Keyboard',
    category: 'Electronics',
    quantity: 30,
    price: 79.99,
    inventoryStatus: 'IN STOCK',
    rating: 4.7,
  },
  {
    id: 4,
    code: 'P004',
    name: 'Monitor',
    category: 'Electronics',
    quantity: 15,
    price: 299.99,
    inventoryStatus: 'LOW STOCK',
    rating: 4.3,
  },
  {
    id: 5,
    code: 'P005',
    name: 'Desk Chair',
    category: 'Furniture',
    quantity: 5,
    price: 199.99,
    inventoryStatus: 'LOW STOCK',
    rating: 4.1,
  },
  {
    id: 6,
    code: 'P006',
    name: 'Webcam',
    category: 'Electronics',
    quantity: 25,
    price: 89.99,
    inventoryStatus: 'IN STOCK',
    rating: 4.0,
  },
  {
    id: 7,
    code: 'P007',
    name: 'USB Cable',
    category: 'Accessories',
    quantity: 100,
    price: 9.99,
    inventoryStatus: 'IN STOCK',
    rating: 3.8,
  },
  {
    id: 8,
    code: 'P008',
    name: 'Headphones',
    category: 'Electronics',
    quantity: 20,
    price: 149.99,
    inventoryStatus: 'IN STOCK',
    rating: 4.6,
  },
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="text-sm text-surface-600">
      <p class="mb-2">
        Click the column settings horizontal ellipsis button on the top right
        corner of the table header to access column visibility options.
      </p>
    </div>

    <DataTable
      :columns="columns"
      :data="products"
      :table-name="tableName"
      custom-column
      data-key="id"
      selection-type="none"
    />
  </div>
</template>
