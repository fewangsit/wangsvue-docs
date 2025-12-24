<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Button } from '@fewangsit/wangsvue'

const menu = ref()

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

const toggle = (event: Event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Menu"
      @click="toggle"
    />
    <Menu
      ref="menu"
      :model="items"
      :popup="true"
    />
  </div>
</template>
