<script setup lang="ts">
import {
  ButtonFilter,
  ButtonSearch,
  DataTable,
  FilterContainer,
  QuickFilter,
} from '@fewangsit/wangsvue';
import type { FetchResponse, TableColumn } from '@fewangsit/wangsvue/datatable';
import type {
  FetchOptionResponse,
  FilterField,
} from '@fewangsit/wangsvue/filtercontainer';
import axios, { type AxiosResponse } from 'axios';

import type {
  GetProductsQueryParams,
  Product,
} from 'server/api/products/index';
import type { GetProductOptionsQueryParams } from 'server/api/products/options.get';

const columns: TableColumn<Product>[] = [
  { field: 'id', header: 'ID' },
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'description', header: 'Description' },
  { field: 'image', header: 'Image' },
  { field: 'price', header: 'Price' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
  { field: 'inventoryStatus', header: 'Inventory Status' },
  { field: 'rating', header: 'Rating' },
];

const tableName = 'product-table-search-filter';

const filterFields: FilterField<
  GetProductsQueryParams,
  GetProductOptionsQueryParams
>[] = [
  {
    field: 'name',
    type: 'multiselect',
    label: 'Product Name',
    fetchOptionFn: fetchOptions,
  },
  {
    field: 'category',
    type: 'multiselect',
    label: 'Category',
    fetchOptionFn: fetchOptions,
  },
];

const quickFilterFields: FilterField<
  GetProductsQueryParams,
  GetProductOptionsQueryParams
>[] = [
  {
    field: 'quantity',
    type: 'rangenumber',
    label: 'Quantity',
    minPlaceholder: 'Min Quantity',
    maxPlaceholder: 'Max Quantity',
  },
  {
    field: 'rating',
    type: 'rangenumber',
    label: 'Rating',
    minPlaceholder: 'Min Rating',
    maxPlaceholder: 'Max Rating',
  },
  {
    field: 'inventoryStatus',
    type: 'multiselect',
    label: 'Inventory Status',
  },
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

async function fetchOptions<
  Opt = GetProductOptionsQueryParams,
  R = FetchOptionResponse<Opt>,
>(params: Opt): Promise<AxiosResponse<R>> {
  return await axios.get<R>('/api/products/options', { params });
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-end gap-1">
      <ButtonSearch :table-name />

      <ButtonFilter :table-name />
    </div>

    <FilterContainer :fields="filterFields" :table-name="tableName" />

    <QuickFilter :fields="quickFilterFields" :table-name="tableName" />

    <DataTable
      :columns="columns"
      :fetch-function="fetchProducts"
      :rows="5"
      :table-name="tableName"
      :use-option="false"
      data-key="id"
      use-paginator
    />
  </div>
</template>
