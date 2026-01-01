<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndex = ref(0)

const items: MenuItem[] = [
  {
    key: 'documentation',
    label: 'Documentation',
    icon: 'file-lines',
    url: 'https://docs.example.com'
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: 'external-link',
    url: 'https://github.com'
  },
  {
    key: 'support',
    label: 'Support',
    icon: 'chat',
    url: 'https://support.example.com'
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
        TabMenu with external URLs using url property
      </p>
      <p class="text-xs text-gray-500 mt-1">
        Active tab: {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
