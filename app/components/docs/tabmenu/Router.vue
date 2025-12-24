<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndex = ref(0)

const items: MenuItem[] = [
  {
    label: 'Home',
    icon: 'dashboard',
    route: '/'
  },
  {
    label: 'Components',
    icon: 'apps-2-line',
    route: '/components'
  },
  {
    label: 'Getting Started',
    icon: 'star-fill',
    route: '/getting-started'
  },
  {
    label: 'GitHub',
    icon: 'external-link',
    url: 'https://github.com',
    route: '_blank'
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
        TabMenu can navigate using Vue Router (to) or external URLs (url)
      </p>
      <p class="text-xs text-gray-500 mt-1">
        Active tab: {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
