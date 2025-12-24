<script setup lang="ts">
import { ref } from 'vue'
import { InputURL, Button, Icon } from '@fewangsit/wangsvue'

const websiteValue = ref('')
const apiValue = ref('')
const docsValue = ref('')

const openUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}

const testApi = (url: string) => {
  if (url) {
    console.log('Testing API endpoint:', url)
    // Simulate API test
  }
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Left Addon - Link Icon
      </h4>
      <InputURL
        v-model="websiteValue"
        label="Website URL"
        placeholder="https://example.com"
        :use-protocol="true"
      >
        <template #addon-left>
          <Icon
            icon="link"
            class="text-md"
          />
        </template>
      </InputURL>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Right Addon - Open Button
      </h4>
      <InputURL
        v-model="docsValue"
        label="Documentation URL"
        placeholder="https://docs.example.com"
        :use-protocol="true"
      >
        <template #addon-right>
          <Button
            icon="external-link"
            severity="secondary"
            text
            :disabled="!docsValue"
            @click="openUrl(docsValue)"
          />
        </template>
      </InputURL>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Both Addons - API Endpoint
      </h4>
      <InputURL
        v-model="apiValue"
        label="API Endpoint"
        placeholder="https://api.example.com/v1"
        :use-protocol="true"
      >
        <template #addon-left>
          GET
        </template>
        <template #addon-right>
          <Button
            icon="send-plane-line"
            severity="success"
            text
            :disabled="!apiValue"
            @click="testApi(apiValue)"
          />
        </template>
      </InputURL>
    </div>
  </div>
</template>
