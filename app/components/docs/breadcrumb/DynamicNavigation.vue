<script setup lang="ts">
import { ref, watch } from 'vue'
import { Breadcrumb, Button } from '@fewangsit/wangsvue'
import useBreadcrumbStore from './useBreadcrumbStore'

const { breadcrumbs, setBreadcrumbs } = useBreadcrumbStore()

// Simulate current page/route
const currentPage = ref('dashboard')

// Define breadcrumb configurations for different pages
const breadcrumbConfigs = {
  dashboard: [
    { name: 'Dashboard' }
  ],
  customers: [
    { name: 'Dashboard', route: '/dashboard', title: 'Dashboard' },
    { name: 'CRM', route: '/crm', title: 'Customer Management' },
    { name: 'Customers' }
  ],
  customerDetail: [
    { name: 'Dashboard', route: '/dashboard', title: 'Dashboard' },
    { name: 'CRM', route: '/crm', title: 'Customer Management' },
    { name: 'Customers', route: '/crm/customers', title: 'Customer List' },
    { name: 'Customer Detail' }
  ],
  createCustomer: [
    { name: 'Dashboard', route: '/dashboard', title: 'Dashboard' },
    { name: 'CRM', route: '/crm', title: 'Customer Management' },
    { name: 'Customers', route: '/crm/customers', title: 'Customer List' },
    { name: 'Create Customer' }
  ],
  settings: [
    { name: 'Dashboard', route: '/dashboard', title: 'Dashboard' },
    { name: 'Administration', route: '/admin', title: 'Administration' },
    { name: 'Settings' }
  ]
}

// Watch for page changes and update breadcrumbs automatically
watch(currentPage, (newPage) => {
  const config = breadcrumbConfigs[newPage as keyof typeof breadcrumbConfigs]
  if (config) {
    setBreadcrumbs(config)
  }
}, { immediate: true })

// Simulate navigation functions
const navigateTo = (page: string) => {
  currentPage.value = page
}
</script>

<template>
  <div class="space-y-4">
    <!-- Breadcrumb renders once and updates automatically -->
    <div class="p-4 bg-gray-50 rounded-lg">
      <Breadcrumb :menus="breadcrumbs" />
    </div>

    <!-- Navigation buttons to simulate page changes -->
    <div class="space-y-2">
      <h4 class="text-sm font-medium text-gray-700">
        Navigate to different pages:
      </h4>
      <div class="flex flex-wrap gap-2">
        <Button
          label="Dashboard"
          :severity="currentPage === 'dashboard' ? 'info' : 'secondary'"
          @click="navigateTo('dashboard')"
        />
        <Button
          label="Customers"
          :severity="currentPage === 'customers' ? 'info' : 'secondary'"
          @click="navigateTo('customers')"
        />
        <Button
          label="Customer Detail"
          :severity="currentPage === 'customerDetail' ? 'info' : 'secondary'"
          @click="navigateTo('customerDetail')"
        />
        <Button
          label="Create Customer"
          :severity="currentPage === 'createCustomer' ? 'info' : 'secondary'"
          @click="navigateTo('createCustomer')"
        />
        <Button
          label="Settings"
          :severity="currentPage === 'settings' ? 'info' : 'secondary'"
          @click="navigateTo('settings')"
        />
      </div>
    </div>

    <div class="text-sm text-gray-600">
      <p><strong>Current Page:</strong> {{ currentPage }}</p>
      <p>The breadcrumb component renders once but updates automatically when the page changes.</p>
      <p>This pattern is ideal for layout components where breadcrumbs should reflect the current route.</p>
    </div>
  </div>
</template>
