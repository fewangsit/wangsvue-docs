<script setup lang="ts">
import { Button, Icon, InputURL } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const websiteValue = ref('');
const apiValue = ref('');
const docsValue = ref('');

const openUrl = (url: string): void => {
  if (url) {
    window.open(url, '_blank');
  }
};

const testApi = (url: string): void => {
  if (url) {
    console.log('Testing API endpoint:', url);
    // Simulate API test
  }
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-2">
      <h4 class="font-medium text-sm">Left Addon - Link Icon</h4>

      <InputURL
        v-model="websiteValue"
        label="Website URL"
        placeholder="https://example.com"
        use-protocol
      >
        <template #addon-left>
          <Icon class="text-md" icon="link" />
        </template>
      </InputURL>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">Right Addon - Open Button</h4>

      <InputURL
        v-model="docsValue"
        label="Documentation URL"
        placeholder="https://docs.example.com"
        use-protocol
      >
        <template #addon-right>
          <Button
            :disabled="!docsValue"
            @click="openUrl(docsValue)"
            icon="external-link"
            severity="secondary"
            text
          />
        </template>
      </InputURL>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">Both Addons - API Endpoint</h4>

      <InputURL
        v-model="apiValue"
        label="API Endpoint"
        placeholder="https://api.example.com/v1"
        use-protocol
      >
        <template #addon-left> GET </template>

        <template #addon-right>
          <Button
            :disabled="!apiValue"
            @click="testApi(apiValue)"
            icon="send-plane-line"
            severity="success"
            text
          />
        </template>
      </InputURL>
    </div>
  </div>
</template>
