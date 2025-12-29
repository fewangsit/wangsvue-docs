<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue'

const longPathMenus = [
  { name: 'Home', route: '/' },
  { name: 'Administration', route: '/admin' },
  { name: 'User Management', route: '/admin/users' },
  { name: 'Roles & Permissions', route: '/admin/users/roles' },
  { name: 'Role Settings', route: '/admin/users/roles/settings' },
  { name: 'Advanced Configuration' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Breadcrumb :menus="longPathMenus" />
  </div>
</template>
