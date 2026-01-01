<script setup lang="ts">
import { ref, watch } from 'vue'
import { Breadcrumb, Button } from '@fewangsit/wangsvue'
import useBreadcrumbStore from './useBreadcrumbStore'

const { breadcrumbs, setBreadcrumbs } = useBreadcrumbStore()

const currentPage = ref('dashboard')

const breadcrumbConfigs = {
  dashboard: [
    { name: 'Dashboard' }
  ],
  crm: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Dashboard'
    },
    {
      name: 'CRM'
    }
  ],
  customer: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Dashboard'
    },
    {
      name: 'CRM',
      route: '/crm',
      title: 'Customer Management'
    },
    {
      name: 'Customer'
    }
  ],
  details: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Dashboard'
    },
    {
      name: 'CRM',
      route: '/crm',
      title: 'Customer Management'
    },
    {
      name: 'Customer',
      route: '/crm/customer',
      title: 'Customer List'
    },
    {
      name: 'Details'
    }
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
        label="Dashboard"
        :severity="currentPage === 'dashboard' ? 'info' : 'secondary'"
        @click="navigateTo('dashboard')"
      />
      <Button
        label="CRM"
        :severity="currentPage === 'crm' ? 'info' : 'secondary'"
        @click="navigateTo('crm')"
      />
      <Button
        label="Customer"
        :severity="currentPage === 'customer' ? 'info' : 'secondary'"
        @click="navigateTo('customer')"
      />
      <Button
        label="Details"
        :severity="currentPage === 'details' ? 'info' : 'secondary'"
        @click="navigateTo('details')"
      />
    </div>
  </div>
</template>
