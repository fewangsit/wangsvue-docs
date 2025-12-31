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
  crm: [
    {
      name: 'Home',
      route: '/',
      title: 'Welcome to Our Platform'
    },
    { name: 'CRM' }
  ],
  customer: [
    {
      name: 'Home',
      route: '/',
      title: 'Welcome to Our Platform'
    },
    {
      name: 'CRM',
      route: '/crm',
      title: 'Customer Relationship Management'
    },
    { name: 'Customer' }
  ],
  contact: [
    {
      name: 'Home',
      route: '/',
      title: 'Welcome to Our Platform'
    },
    {
      name: 'CRM',
      route: '/crm',
      title: 'Customer Relationship Management'
    },
    {
      name: 'Customer',
      route: '/crm/customer',
      title: 'Customer Database'
    },
    { name: 'Contact' }
  ],
  create: [
    {
      name: 'Home',
      route: '/',
      title: 'Welcome to Our Platform'
    },
    {
      name: 'CRM',
      route: '/crm',
      title: 'Customer Relationship Management'
    },
    {
      name: 'Customer',
      route: '/crm/customer',
      title: 'Customer Database'
    },
    {
      name: 'Contact',
      route: '/crm/customer/contact',
      title: 'Customer Contact Information'
    },
    { name: 'Create New Contact' }
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
        label="Contact"
        :severity="currentPage === 'contact' ? 'info' : 'secondary'"
        @click="navigateTo('contact')"
      />
      <Button
        label="Create"
        :severity="currentPage === 'create' ? 'info' : 'secondary'"
        @click="navigateTo('create')"
      />
    </div>
  </div>
</template>
