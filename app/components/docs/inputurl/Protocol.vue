<script setup lang="ts">
import { ref } from 'vue'
import { InputURL } from '@fewangsit/wangsvue'

const withProtocol = ref('')
const withoutProtocol = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputURL
      v-model="withProtocol"
      label="With Protocol Validation"
      placeholder="https://example.com"
      :use-protocol="true"
    />

    <InputURL
      v-model="withoutProtocol"
      label="Without Protocol Validation"
      placeholder="example.com"
      :use-protocol="false"
    />

    <div class="text-sm text-gray-600">
      <p>With Protocol: {{ withProtocol || 'Empty' }}</p>
      <p>Without Protocol: {{ withoutProtocol || 'Empty' }}</p>
    </div>
  </div>
</template>
