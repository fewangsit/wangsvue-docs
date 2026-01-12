<script setup lang="ts">
import { Button, Icon, InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const searchValue = ref('');
const urlValue = ref('');
const priceValue = ref('');

const openUrl = (url: string): void => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-2">
      <h4 class="font-medium text-sm">Left Addon - Search Icon</h4>

      <InputText
        v-model="searchValue"
        label="Search"
        placeholder="Search products..."
      >
        <template #addon-left>
          <Icon class="text-md" icon="search" />
        </template>
      </InputText>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">Right Addon - Action Button</h4>

      <InputText
        v-model="urlValue"
        label="Website URL"
        placeholder="Enter website URL"
      >
        <template #addon-right>
          <Button
            @click="openUrl(urlValue)"
            icon="external-link"
            severity="secondary"
            text
          />
        </template>
      </InputText>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">Both Addons - Currency Input</h4>

      <InputText
        v-model="priceValue"
        :allowed-characters="/^[0-9.]*$/"
        label="Price"
        placeholder="0.00"
        type="text"
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
