<script setup lang="ts">
import { Breadcrumb } from '@fewangsit/wangsvue'

const routeMenus = [
  { name: 'Home', route: '/' },
  { name: 'Dashboard', route: '/dashboard' },
  { name: 'Users', route: '/dashboard/users' },
  { name: 'Profile' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Breadcrumb :menus="routeMenus" />
  </div>
</template>
