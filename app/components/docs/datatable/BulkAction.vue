<script setup lang="ts">
import { ButtonBulkAction, DataTable } from '@fewangsit/wangsvue';
import type { FetchResponse, TableColumn } from '@fewangsit/wangsvue/datatable';
import type { MenuItem } from '@fewangsit/wangsvue/menuitem';
import axios from 'axios';

import type { GetProductsQueryParams, Product } from 'server/api/products';

const selectedProducts = shallowRef<Product[]>([]);

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
];

const bulkActions = computed<MenuItem[]>(() => [
  {
    label: 'Bulk Edit',
    icon: 'edit',
    command: handleBulkEdit,
  },
  {
    label: 'Bulk Delete',
    icon: 'delete-bin',
    danger: true,
    command: handleBulkDelete,
    visible: selectedProducts.value.every((product) => product.quantity === 0),
  },
]);

const handleBulkEdit = (): void => {
  console.log('Bulk edit items:', selectedProducts.value);
};

const handleBulkDelete = (): void => {
  console.log('Bulk delete items:', selectedProducts.value);
};

const fetchProducts = async (
  params: GetProductsQueryParams,
): Promise<FetchResponse<Product> | undefined> => {
  try {
    const response = await axios.get<FetchResponse<Product>>('/api/products', {
      params,
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <ButtonBulkAction
      v-model:selected-data="selectedProducts"
      :options="bulkActions"
      table-name="product-table"
    />

    <DataTable
      :columns="columns"
      :fetch-function="fetchProducts"
      :page-size="10"
      :use-option="false"
      data-key="id"
      selection-type="checkbox"
      table-name="product-table"
      use-paginator
    />
  </div>
</template>
