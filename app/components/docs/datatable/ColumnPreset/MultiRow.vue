<script setup lang="ts">
import { Badge, DataTable } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  inventoryStatus: string;
  rating: number;
  tags: string[];
  specifications: {
    color: string;
    size: string;
    weight: string;
  };
  features: string[];
}

const products = ref<Product[]>([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24,
    price: 65,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    tags: ['Eco-friendly', 'Waterproof', 'Smart'],
    specifications: {
      color: 'Natural Bamboo',
      size: 'One Size',
      weight: '45g',
    },
    features: ['Heart Rate Monitor', 'Sleep Tracking', 'Step Counter'],
  },
  {
    id: '1001',
    code: 'nvklal4g',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    price: 72,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    tags: ['Premium', 'Classic', 'Durable'],
    specifications: {
      color: 'Matte Black',
      size: 'One Size',
      weight: '50g',
    },
    features: ['GPS Tracking', 'Water Resistant', 'Long Battery'],
  },
  {
    id: '1002',
    code: 'zz21cz3c',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    price: 15,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
    tags: ['Fitness', 'Adjustable', 'Lightweight'],
    specifications: {
      color: 'Ocean Blue',
      size: 'Adjustable',
      weight: '25g',
    },
    features: ['Activity Tracking', 'Calorie Counter', 'Distance Monitor'],
  },
]);

const tagSeverity: Record<string, string> = {
  'Eco-friendly': 'success',
  'Premium': 'danger',
};

const columns: TableColumn<Product>[] = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  {
    field: 'details',
    header: 'Product Details',
    preset: {
      type: 'multirow',
      fieldAttributes: (data) => [
        {
          value: `Price: $${data.price}`,
          class: 'font-bold text-green-600',
        },
        {
          value: `Stock: ${data.quantity} units`,
          class: data.quantity < 10 ? 'text-red-600' : 'text-gray-600',
        },
        {
          value: `Rating: ${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}`,
          class: 'text-yellow-500',
        },
      ],
    },
  },
  {
    field: 'tags',
    header: 'Tags',
    preset: {
      type: 'multirow',
      fieldAttributes: (data) =>
        data.tags.map((tag) => ({
          bodyComponent: {
            component: Badge,
            props: {
              value: tag,
              severity: tagSeverity[tag] || 'info',
            },
          },
        })),
    },
  },
  {
    field: 'specifications',
    header: 'Specifications',
    preset: {
      type: 'multirow',
      fieldAttributes: (data) => [
        {
          value: `Color: ${data.specifications.color}`,
          class: 'text-gray-700',
        },
        {
          value: `Size: ${data.specifications.size}`,
          class: 'text-gray-700',
        },
        {
          value: `Weight: ${data.specifications.weight}`,
          class: 'text-gray-700',
        },
      ],
    },
  },
];
</script>

<template>
  <DataTable
    :columns="columns"
    :data="products"
    :use-option="false"
    data-key="id"
    table-name="column-preset-multirow-demo"
  />
</template>
