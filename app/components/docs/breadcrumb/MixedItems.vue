<script setup lang="ts">
import { ref, watch } from 'vue'
import { Breadcrumb, Button } from '@fewangsit/wangsvue'
import useBreadcrumbStore from './useBreadcrumbStore'

const { breadcrumbs, setBreadcrumbs } = useBreadcrumbStore()

const currentPage = ref('home')

const breadcrumbConfigs = {
  home: [
    { name: 'Home' }
  ],
  products: [
    {
      name: 'Home',
      route: '/',
      title: 'Home Page'
    },
    { name: 'Products' }
  ],
  category: [
    {
      name: 'Home',
      route: '/',
      title: 'Home Page'
    },
    {
      name: 'Products',
      route: '/products',
      title: 'All Products'
    },
    { name: 'Category' }
  ],
  electronics: [
    {
      name: 'Home',
      route: '/',
      title: 'Home Page'
    },
    {
      name: 'Products',
      route: '/products',
      title: 'All Products'
    },
    { name: 'Category' },
    {
      name: 'Electronics',
      route: '/products/electronics',
      title: 'Electronics'
    }
  ],
  item: [
    {
      name: 'Home',
      route: '/',
      title: 'Home Page'
    },
    {
      name: 'Products',
      route: '/products',
      title: 'All Products'
    },
    { name: 'Category' },
    {
      name: 'Electronics',
      route: '/products/electronics',
      title: 'Electronics'
    },
    { name: 'Current Item' }
  ]
}

watch(currentPage, (newPage) => {
  const config = breadcrumbConfigs[newPage as keyof typeof breadcrumbConfigs]
  if (config) {
    setBreadcrumbs(config)
  }
}, { immediate: true })

const navigateTo = (page: string) => {
  currentPage.value = page
}
</script>

<template>
  <div class="space-y-4">
    <div class="p-4 bg-gray-50 rounded-lg">
      <Breadcrumb :menus="breadcrumbs" />
    </div>

    <div class="flex flex-wrap gap-2">
      <Button
        label="Home"
        :severity="currentPage === 'home' ? 'info' : 'secondary'"
        @click="navigateTo('home')"
      />
      <Button
        label="Products"
        :severity="currentPage === 'products' ? 'info' : 'secondary'"
        @click="navigateTo('products')"
      />
      <Button
        label="Category"
        :severity="currentPage === 'category' ? 'info' : 'secondary'"
        @click="navigateTo('category')"
      />
      <Button
        label="Electronics"
        :severity="currentPage === 'electronics' ? 'info' : 'secondary'"
        @click="navigateTo('electronics')"
      />
      <Button
        label="Current Item"
        :severity="currentPage === 'item' ? 'info' : 'secondary'"
        @click="navigateTo('item')"
      />
    </div>
  </div>
</template>
