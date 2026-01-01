<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndex = ref(0)

const items: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: 'dashboard',
    route: '/'
  },
  {
    key: 'components',
    label: 'Components',
    icon: 'apps-2-line',
    route: '/components'
  },
  {
    key: 'ai-mcp',
    label: 'AI MCP',
    icon: 'star-fill',
    route: '/ai/mcp'
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
        TabMenu with Vue Router navigation using route property
      </p>
      <p class="text-xs text-gray-500 mt-1">
        Active tab: {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
