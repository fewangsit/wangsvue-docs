<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'
import type { MenuItem } from '@fewangsit/wangsvue/menuitem'

const activeIndexTab = ref(0)
const activeIndexPill = ref(0)
const activeIndexSegmented = ref(0)

const items: MenuItem[] = [
  { key: 'home', label: 'Home' },
  { key: 'products', label: 'Products' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4 class="mb-2 font-medium">
        Default Type
      </h4>
      <TabMenu
        v-model:active-index="activeIndexTab"
        :menu="items"
      />
    </div>

    <div>
      <h4 class="mb-2 font-medium">
        Pill Type
      </h4>
      <TabMenu
        v-model:active-index="activeIndexPill"
        :menu="items"
        type="pill"
      />
    </div>

    <div>
      <h4 class="mb-2 font-medium">
        Segmented Type
      </h4>
      <TabMenu
        v-model:active-index="activeIndexSegmented"
        :menu="items"
        type="segmented"
      />
    </div>
  </div>
</template>
