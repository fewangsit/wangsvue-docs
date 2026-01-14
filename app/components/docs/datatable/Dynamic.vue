<script setup lang="ts">
import { DataTable } from '@fewangsit/wangsvue';
import type { FetchResponse, TableColumn } from '@fewangsit/wangsvue/datatable';
import axios from 'axios';

import type { GetProductsQueryParams, Product } from 'server/api/products';

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
];

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
    return undefined;
  }
};
</script>

<template>
  <DataTable
    :columns="columns"
    :fetch-function="fetchProducts"
    data-key="id"
    lazy
    use-paginator
  />
</template>
