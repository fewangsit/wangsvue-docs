<script setup lang="ts">
import { ref } from 'vue'
import { InputText, Button, Icon } from '@fewangsit/wangsvue'

const searchValue = ref('')
const urlValue = ref('')
const priceValue = ref('')

const openUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Left Addon - Search Icon
      </h4>
      <InputText
        v-model="searchValue"
        label="Search"
        placeholder="Search products..."
      >
        <template #addon-left>
          <Icon
            icon="search"
            class="text-md"
          />
        </template>
      </InputText>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Right Addon - Action Button
      </h4>
      <InputText
        v-model="urlValue"
        label="Website URL"
        placeholder="Enter website URL"
      >
        <template #addon-right>
          <Button
            icon="external-link"
            severity="secondary"
            text
            @click="openUrl(urlValue)"
          />
        </template>
      </InputText>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Both Addons - Currency Input
      </h4>
      <InputText
        v-model="priceValue"
        label="Price"
        placeholder="0.00"
        type="text"
        :allowed-characters="/^[0-9.]*$/"
      >
        <template #addon-left>
          <span class="text-gray-600 font-medium">$</span>
        </template>
        <template #addon-right>
          <span class="text-gray-500 text-sm">USD</span>
        </template>
      </InputText>
    </div>
  </div>
</template>
