<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndex = ref(0)

const items: MenuItem[] = [
  {
    label: 'Dashboard',
    command: () => {
      console.log('Dashboard clicked')
    }
  },
  {
    label: 'Analytics',
    command: () => {
      console.log('Analytics clicked')
    }
  },
  {
    label: 'Reports',
    command: () => {
      console.log('Reports clicked')
    }
  },
  {
    label: 'Settings',
    command: () => {
      console.log('Settings clicked')
    }
  }
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <TabMenu
      v-model:active-index="activeIndex"
      :menu="items"
    />
    <div class="p-4 border rounded-lg">
      <p class="text-sm text-gray-600">
        Active tab: {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
