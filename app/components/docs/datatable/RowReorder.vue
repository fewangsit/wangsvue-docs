<script setup lang="ts">
import { DataTable } from '@fewangsit/wangsvue';
import type {
  DataTableRowReorderEvent,
  TableColumn,
} from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

const columns: TableColumn<Product>[] = [
  { field: 'id', header: 'ID' },
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
];

const tableName = 'reorderable-table';

const products = ref<Product[]>([
  {
    id: 1,
    code: 'P001',
    name: 'Laptop',
    category: 'Electronics',
    quantity: 10,
  },
  { id: 2, code: 'P002', name: 'Mouse', category: 'Electronics', quantity: 50 },
  {
    id: 3,
    code: 'P003',
    name: 'Keyboard',
    category: 'Electronics',
    quantity: 30,
  },
  {
    id: 4,
    code: 'P004',
    name: 'Monitor',
    category: 'Electronics',
    quantity: 15,
  },
  {
    id: 5,
    code: 'P005',
    name: 'Desk Chair',
    category: 'Furniture',
    quantity: 5,
  },
  {
    id: 6,
    code: 'P006',
    name: 'Webcam',
    category: 'Electronics',
    quantity: 25,
  },
  {
    id: 7,
    code: 'P007',
    name: 'USB Cable',
    category: 'Accessories',
    quantity: 100,
  },
  {
    id: 8,
    code: 'P008',
    name: 'Headphones',
    category: 'Electronics',
    quantity: 20,
  },
]);

const handleRowReorder = (event: DataTableRowReorderEvent<Product>): void => {
  console.log('Row reordered:', event);
  // You might need to PUT the reordered data to the server
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="text-sm text-surface-600 mb-2">
      Drag and drop rows to reorder them. The drag handle appears on the left
      side of each row.
    </div>

    <DataTable
      :columns="columns"
      :data="products"
      :table-name="tableName"
      @row-reorder="handleRowReorder"
      data-key="id"
      reorderable
      selection-type="none"
    />
  </div>
</template>
