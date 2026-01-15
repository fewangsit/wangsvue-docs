<script setup lang="ts">
import {
  BadgeGroup,
  ButtonDownload,
  DataTable,
  formatCurrency,
  Loading,
} from '@fewangsit/wangsvue';
import type { FetchResponse, TableColumn } from '@fewangsit/wangsvue/datatable';
import axios from 'axios';

import type { GetProductsQueryParams, Product } from 'server/api/products';

const tableName = 'product-table-export';

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name', exportHeader: 'Product Name' },
  { field: 'image', header: 'Image', excluded: true },
  {
    field: 'price',
    header: 'Price',
    bodyTemplate: (data) => formatCurrency(data.price, 'USD'), // Also used for export
  },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
  {
    field: 'isOutOfStock',
    header: 'Out of Stock',
    booleanValue: true,
    trueText: 'YES',
    falseText: 'NO',
  },
  {
    field: 'rating',
    header: 'Rating',
    bodyTemplate: (data) => `${data.rating.toString()} of 5`, // Also used for export
  },
  {
    field: 'updatedAt',
    header: 'Last Updated',
    dateFormatOptions: {
      dateFormat: '02/01/06', // Golang format
      showTime: false, // Only show date
    },
  },
  {
    field: 'tags',
    header: 'Tags',
    bodyComponent: (data) => ({
      component: BadgeGroup,
      props: {
        labels: data.tags,
        limit: 2, // Show max 2 tags
        textMore: 'View all tags',
      },
    }),
    arrayValueField: 'text', // Extract the text for export excel
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
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-end gap-1">
      <ButtonDownload :table-name file-name="products" />
    </div>

    <DataTable
      :columns="columns"
      :fetch-function="fetchProducts"
      :table-name
      data-key="id"
      lazy
      use-paginator
    />

    <!-- This loading will be shown when export is in progress -->
    <!-- In real app you should only have one instance of loading placed on App.vue -->
    <Loading />
  </div>
</template>
