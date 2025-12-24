<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue'

const items = [
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
  },
  {
    separator: true
  },
  {
    label: 'Save',
    command: () => {
      console.log('Save clicked')
    }
  },
  {
    label: 'Save As',
    command: () => {
      console.log('Save As clicked')
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
