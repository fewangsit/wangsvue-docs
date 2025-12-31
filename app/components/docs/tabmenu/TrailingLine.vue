<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndexWithLine = ref(0)
const activeIndexWithoutLine = ref(0)

const items: MenuItem[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'contact', label: 'Contact' }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4 class="mb-2 font-medium">
        With Trailing Line (default)
      </h4>
      <TabMenu
        v-model:active-index="activeIndexWithLine"
        :menu="items"
        :use-trailing-line="true"
      />
    </div>

    <div>
      <h4 class="mb-2 font-medium">
        Without Trailing Line
      </h4>
      <TabMenu
        v-model:active-index="activeIndexWithoutLine"
        :menu="items"
        :use-trailing-line="false"
      />
    </div>

    <div class="p-4 border rounded-lg">
      <p class="text-sm text-gray-600">
        The trailing line extends the tab border to fill the remaining space
      </p>
    </div>
  </div>
</template>
