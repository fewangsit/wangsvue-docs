<script setup lang="ts">
import { Badge, DataTable } from '@fewangsit/wangsvue';
import type { Data, TableColumn } from '@fewangsit/wangsvue/datatable';
import { h } from 'vue';

import products from './data/products.json';

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
}

const columns: TableColumn<Product>[] = [
  {
    field: 'code',
    bodyTemplate: (data: Data) => `${data.code.toUpperCase()}`, // Body template (returns formatted string)
  },
  {
    field: 'name',
    header: 'Name',
    bodyComponent: (data) => ({
      component: {
        setup() {
          return () =>
            h('div', { class: 'flex align-items-center gap-2' }, [
              h('i', { class: 'icon ic-check' }),
              h('span', {}, data.name),
            ]);
        },
      },
    }),
  },
  {
    field: 'category',
    header: 'Category',
    // Below is the recommended approach of using bodyComponent
    bodyComponent: (data) => ({
      component: Badge,
      props: { label: data.category },
    }),
  },
  { field: 'quantity', header: 'Quantity' },
];
</script>

<template>
  <DataTable :columns="columns" :data="products" data-key="id" />
</template>
