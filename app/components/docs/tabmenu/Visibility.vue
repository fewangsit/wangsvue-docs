<script setup lang="ts">
import { ref, computed } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndex = ref(0)
const showAdminTab = ref(false)

const items = computed<MenuItem[]>(() => [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    visible: true
  },
  {
    key: 'users',
    label: 'Users',
    icon: 'user',
    visible: true
  },
  {
    key: 'admin',
    label: 'Admin Panel',
    icon: 'settings',
    visible: showAdminTab.value
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: 'file-chart-line',
    visible: false
  }
])
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <input
        id="show-admin"
        v-model="showAdminTab"
        type="checkbox"
        class="rounded"
      >
      <label
        for="show-admin"
        class="text-sm"
      >
        Show Admin Tab
      </label>
    </div>

    <TabMenu
      v-model:active-index="activeIndex"
      :menu="items"
    />

    <div class="p-4 border rounded-lg">
      <p class="text-xs text-gray-500 mt-1">
        Active tab: {{ items[activeIndex]?.label }}
      </p>
      <p class="text-sm text-gray-600">
        MenuItem visibility can be controlled with the visible property
      </p>
      <p class="text-xs text-gray-500 mt-1">
        Reports tab is always hidden (visible: false), Admin tab toggles based on checkbox
      </p>
    </div>
  </div>
</template>
