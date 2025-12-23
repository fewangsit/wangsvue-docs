<script setup lang="ts">
import { ref } from 'vue'
import { InputURL, Icon, Button } from '@fewangsit/wangsvue'

const value = ref('')

const openUrl = () => {
  if (value.value) {
    window.open(value.value, '_blank')
  }
}

const copyUrl = async () => {
  if (value.value) {
    await navigator.clipboard.writeText(value.value)
    console.log('URL copied to clipboard')
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputURL
      v-model="value"
      label="Website URL"
      placeholder="Enter website URL"
    >
      <template #addon-left>
        <Icon name="link" />
      </template>
      <template #addon-right>
        <div class="flex gap-1">
          <Button
            icon="copy"
            severity="secondary"
            text
            :disabled="!value"
            @click="copyUrl"
          />
          <Button
            icon="external-link-alt"
            severity="secondary"
            text
            :disabled="!value"
            @click="openUrl"
          />
        </div>
      </template>
    </InputURL>
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
