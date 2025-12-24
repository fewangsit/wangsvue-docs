<script setup lang="ts">
import { Menu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const items: MenuItem[] = [
  {
    label: 'New Document',
    icon: 'file-add',
    command: () => {
      console.log('New Document clicked')
    }
  },
  {
    label: 'Recent Files',
    icon: 'file-history',
    command: () => {
      console.log('Recent Files clicked')
    }
  },
  {
    separator: true
  },
  {
    label: 'Premium Feature',
    icon: 'star',
    disabled: true
  }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Menu
      :model="items"
      :popup="false"
    >
      <template #start>
        <div class="p-3 border-b border-gray-200">
          <h3 class="font-semibold text-gray-800">
            File Menu
          </h3>
        </div>
      </template>

      <template #item="{ item, props }">
        <a
          v-bind="props.action"
          class="flex items-center justify-between w-full"
        >
          <div class="flex items-center gap-2">
            <i
              v-if="item.icon"
              :class="`wangs-icon-${item.icon}`"
            />
            <span>{{ item.label }}</span>
          </div>
          <span
            v-if="item.badge"
            class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
          >
            {{ item.badge }}
          </span>
        </a>
      </template>

      <template #end>
        <div class="p-3 border-t border-gray-200 text-xs text-gray-500">
          Custom footer content
        </div>
      </template>
    </Menu>
  </div>
</template>
