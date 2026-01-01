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
  admin: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Main Dashboard'
    },
    { name: 'Administration' }
  ],
  users: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Main Dashboard'
    },
    {
      name: 'Administration',
      route: '/admin',
      title: 'System Administration'
    },
    { name: 'User Management' }
  ],
  roles: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Main Dashboard'
    },
    {
      name: 'Administration',
      route: '/admin',
      title: 'System Administration'
    },
    {
      name: 'User Management',
      route: '/admin/users',
      title: 'User Management'
    },
    { name: 'Roles & Permissions' }
  ],
  groups: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Main Dashboard'
    },
    {
      name: 'Administration',
      route: '/admin',
      title: 'System Administration'
    },
    {
      name: 'User Management',
      route: '/admin/users',
      title: 'User Management'
    },
    {
      name: 'Roles & Permissions',
      route: '/admin/users/roles',
      title: 'Roles & Permissions'
    },
    { name: 'Permission Groups' }
  ],
  edit: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      title: 'Main Dashboard'
    },
    {
      name: 'Administration',
      route: '/admin',
      title: 'System Administration'
    },
    {
      name: 'User Management',
      route: '/admin/users',
      title: 'User Management'
    },
    {
      name: 'Roles & Permissions',
      route: '/admin/users/roles',
      title: 'Roles & Permissions'
    },
    {
      name: 'Permission Groups',
      route: '/admin/users/roles/groups',
      title: 'Permission Groups'
    },
    { name: 'Edit Group' }
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
        label="Admin"
        :severity="currentPage === 'admin' ? 'info' : 'secondary'"
        @click="navigateTo('admin')"
      />
      <Button
        label="Users"
        :severity="currentPage === 'users' ? 'info' : 'secondary'"
        @click="navigateTo('users')"
      />
      <Button
        label="Roles"
        :severity="currentPage === 'roles' ? 'info' : 'secondary'"
        @click="navigateTo('roles')"
      />
      <Button
        label="Groups"
        :severity="currentPage === 'groups' ? 'info' : 'secondary'"
        @click="navigateTo('groups')"
      />
      <Button
        label="Edit"
        :severity="currentPage === 'edit' ? 'info' : 'secondary'"
        @click="navigateTo('edit')"
      />
    </div>
  </div>
</template>
