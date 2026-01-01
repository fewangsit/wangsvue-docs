<script setup lang="ts">
import { Breadcrumb, Button, useBreadcrumbStore } from '@fewangsit/wangsvue'
import type { BreadcrumbMenu } from '@fewangsit/wangsvue/breadcrumb'

const { setBreadcrumbs } = useBreadcrumbStore()

const currentPage = shallowRef('home')

const breadcrumbConfigs: Record<string, BreadcrumbMenu[]> = {
  home: [{ name: 'Home' }],
  crm: [
    {
      name: 'Home',
      route: '/'
    },
    { name: 'CRM' }
  ],
  customer: [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'CRM',
      route: '/crm'
    },
    { name: 'Customer' }
  ]
}

const navigateTo = (page: string) => {
  currentPage.value = page
}

watch(
  currentPage,
  (page) => {
    setBreadcrumbs(breadcrumbConfigs[page] ?? [])
  },
  { immediate: true }
)
</script>

<template>
  <div class="space-y-4">
    <div class="p-4 bg-gray-50 rounded-lg">
      <Breadcrumb />
    </div>

    <!-- Demonstrate navigation that updates breadcrumbs -->
    <div class="flex flex-wrap gap-2">
      <Button
        label="Home"
        :severity="currentPage === 'home' ? 'info' : 'secondary'"
        @click="navigateTo('home')"
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
    </div>
  </div>
</template>
