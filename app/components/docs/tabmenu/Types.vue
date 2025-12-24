<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu } from '@fewangsit/wangsvue'

const activeIndexTab = ref(0)
const activeIndexPill = ref(0)
const activeIndexSegmented = ref(0)

const items = [
  { label: 'Home' },
  { label: 'Products' },
  { label: 'About' },
  { label: 'Contact' }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h4 class="mb-2 font-medium">
        Tab Type
      </h4>
      <TabMenu
        v-model:active-index="activeIndexTab"
        :menu="items"
        type="tab"
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
