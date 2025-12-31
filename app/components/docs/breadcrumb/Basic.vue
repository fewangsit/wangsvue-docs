<script setup lang="ts">
import { ref, watch } from 'vue'
import { Breadcrumb, Button } from '@fewangsit/wangsvue'
import useBreadcrumbStore from './useBreadcrumbStore'

const { breadcrumbs, setBreadcrumbs } = useBreadcrumbStore()

// Simulate current page state
const currentPage = ref('home')

// Define breadcrumb configurations
const breadcrumbConfigs = {
  home: [
    { name: 'Home' }
  ],
  products: [
    { name: 'Home', route: '/', title: 'Home' },
    { name: 'Products' }
  ],
  electronics: [
    { name: 'Home', route: '/', title: 'Home' },
    { name: 'Products', route: '/products', title: 'Products' },
    { name: 'Electronics' }
  ],
  smartphones: [
    { name: 'Home', route: '/', title: 'Home' },
    { name: 'Products', route: '/products', title: 'Products' },
    { name: 'Electronics', route: '/products/electronics', title: 'Electronics' },
    { name: 'Smartphones' }
  ]
}

// Watch for page changes and update breadcrumbs
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
        label="Electronics"
        :severity="currentPage === 'electronics' ? 'info' : 'secondary'"
        @click="navigateTo('electronics')"
      />
      <Button
        label="Smartphones"
        :severity="currentPage === 'smartphones' ? 'info' : 'secondary'"
        @click="navigateTo('smartphones')"
      />
    </div>
  </div>
</template>
