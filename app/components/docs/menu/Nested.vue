<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue'

const items = [
  {
    label: 'File',
    items: [
      {
        label: 'New',
        command: () => {
          console.log('New clicked')
        }
      },
      {
        label: 'Open',
        command: () => {
          console.log('Open clicked')
        }
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Edit',
    items: [
      {
        label: 'Cut',
        command: () => {
          console.log('Cut clicked')
        }
      },
      {
        label: 'Copy',
        command: () => {
          console.log('Copy clicked')
        }
      },
      {
        label: 'Paste',
        command: () => {
          console.log('Paste clicked')
        }
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Quit',
    command: () => {
      console.log('Quit clicked')
    }
  }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Menu
      :model="items"
      :popup="false"
    />
  </div>
</template>
