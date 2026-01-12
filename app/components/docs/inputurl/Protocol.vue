<script setup lang="ts">
import { InputURL } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const withProtocol = ref('');
const withoutProtocol = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputURL
      v-model="withProtocol"
      label="With Protocol Validation"
      placeholder="https://example.com"
      use-protocol
    />

    <InputURL
      v-model="withoutProtocol"
      :use-protocol="false"
      label="Without Protocol Validation"
      placeholder="example.com"
    />

    <div class="text-sm text-gray-600">
      <p>With Protocol: {{ withProtocol || 'Empty' }}</p>

      <p>Without Protocol: {{ withoutProtocol || 'Empty' }}</p>
    </div>
  </div>
</template>
