<script setup lang="ts">
import { DataTable } from '@fewangsit/wangsvue';
import type {
  DataTableCellEditedEvent,
  FetchResponse,
  TableColumn,
} from '@fewangsit/wangsvue/datatable';
import axios from 'axios';

import type {
  GetProductsQueryParams,
  Product,
} from 'server/api/products/index';

interface EditableProduct {
  id: number;
  code: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const columns: TableColumn<EditableProduct>[] = [
  { field: 'id', header: 'ID', editable: false },
  { field: 'code', header: 'Code', editable: true },
  { field: 'name', header: 'Name', editable: true },
  { field: 'price', header: 'Price', editable: true, numberInputOnly: true },
  {
    field: 'quantity',
    header: 'Quantity',
    editable: true,
    numberInputOnly: true,
  },
  { field: 'category', header: 'Category', editable: true },
];

const tableName = 'editable-table';

const fetchProducts = async (
  params: GetProductsQueryParams,
): Promise<FetchResponse<EditableProduct> | undefined> => {
  try {
    const response = await axios.get<FetchResponse<EditableProduct>>(
      '/api/products',
      {
        params,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return undefined;
  }
};

const handleCellEdited = (event: DataTableCellEditedEvent<Product>): void => {
  console.log('Cell edited:', event);
  // You may need to send PUT request to update the data
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="text-sm text-surface-600 mb-2">
      Click on any cell in Code, Name, Price, Quantity, or Category columns to
      edit inline. Price and Quantity columns only accept numbers.
    </div>

    <DataTable
      :columns="columns"
      :fetch-function="fetchProducts"
      :rows="5"
      :table-name="tableName"
      :use-option="false"
      @cell-edited="handleCellEdited"
      data-key="id"
      selection-type="none"
      use-paginator
    />
  </div>
</template>
