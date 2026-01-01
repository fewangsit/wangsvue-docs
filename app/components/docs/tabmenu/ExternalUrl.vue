<script setup lang="ts">
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const items: MenuItem[] = [
  {
    label: 'Documentation',
    icon: 'file-lines',
    url: 'https://docs.example.com'
  },
  {
    label: 'GitHub',
    icon: 'external-link',
    url: 'https://github.com',
    target: '_blank'
  },
  {
    label: 'Support',
    icon: 'chat',
    url: 'https://support.example.com'
  }
]
</script>

<template>
  <TabMenu :menu="items" />
</template>
