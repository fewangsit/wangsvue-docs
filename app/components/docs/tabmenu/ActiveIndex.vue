<script setup lang="ts">
import { ref } from 'vue'
import { TabMenu, Button } from '@fewangsit/wangsvue'

const activeIndex = ref(0)

const items = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' },
  { label: 'Tab 4' }
]

const setActiveTab = (index: number) => {
  activeIndex.value = index
}

const nextTab = () => {
  activeIndex.value = (activeIndex.value + 1) % items.length
}

const prevTab = () => {
  activeIndex.value = activeIndex.value === 0 ? items.length - 1 : activeIndex.value - 1
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TabMenu
      v-model:active-index="activeIndex"
      :menu="items"
    />

    <div class="flex flex-wrap gap-2">
      <Button
        label="Previous Tab"
        size="small"
        @click="prevTab"
      />
      <Button
        label="Next Tab"
        size="small"
        @click="nextTab"
      />
      <Button
        label="Go to Tab 3"
        size="small"
        @click="setActiveTab(2)"
      />
    </div>

    <div class="p-4 border rounded-lg">
      <p class="text-sm text-gray-600">
        Active Index: {{ activeIndex }} - {{ items[activeIndex]?.label }}
      </p>
    </div>
  </div>
</template>
