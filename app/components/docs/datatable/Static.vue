<script setup lang="ts">
import {
  BadgeGroup,
  ButtonFilter,
  ButtonSearch,
  DataTable,
  FilterContainer,
} from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
import type { FilterField } from '@fewangsit/wangsvue/filtercontainer';
import { onMounted, ref } from 'vue';

import type { Product } from 'server/api/products/index';

const tableName = 'static-table';
const staticData = ref<Product[]>([]);
const loading = ref(false);

const columns: TableColumn<Product>[] = [
  { field: 'id', header: 'ID', sortable: true },
  { field: 'code', header: 'Code', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'quantity', header: 'Quantity', sortable: true },
  { field: 'price', header: 'Price', sortable: true },
  { field: 'inventoryStatus', header: 'Inventory Status', sortable: true },
  { field: 'rating', header: 'Rating', sortable: true },
  {
    field: 'tags.text',
    header: 'Tags',
    sortable: true,
    bodyComponent: (data) => ({
      component: BadgeGroup,
      props: {
        labels: data.tags ?? [],
        limit: 2, // Show max 2 tags
        textMore: 'View all tags',
      },
    }),
  },
];

// Filter fields for static data (no fetchOptionFn needed since data is already loaded)
const filterFields: FilterField[] = [
  {
    field: 'name',
    type: 'multiselect',
    label: 'Product Name',
  },
  {
    field: 'category',
    type: 'multiselect',
    label: 'Category',
  },
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
  {
    field: 'tags.text',
    type: 'multiselect',
    label: 'Tags',
  },
];

// Fetch all data once on component mount
const fetchAllData = async (): Promise<void> => {
  loading.value = true;
  try {
    const response = await fetch('/api/products');
    const result = await response.json();
    staticData.value = result.data?.data || [];
  } catch (error) {
    console.error('Error fetching static data:', error);
    staticData.value = [];
  } finally {
    loading.value = false;
  }
};

// Fetch all data on component mount
onMounted(() => {
  fetchAllData();
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end gap-1">
      <ButtonSearch :table-name="tableName" />

      <ButtonFilter :table-name="tableName" static />
    </div>

    <FilterContainer :fields="filterFields" :table-name="tableName" static />

    <DataTable
      :columns="columns"
      :data="staticData"
      :lazy="false"
      :loading="loading"
      :rows="10"
      :table-name="tableName"
      :use-option="false"
      data-key="id"
      selection-type="none"
      use-paginator
    />
  </div>
</template>
