<script setup lang="ts">
import { ButtonCopy } from '@fewangsit/wangsvue'

const userJson = JSON.stringify({
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'admin'
}, null, 2)

const configJson = JSON.stringify({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
  features: ['auth', 'logging', 'cache']
}, null, 2)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">
          User data:
        </p>
        <pre class="text-sm border rounded p-3 overflow-x-auto"><code>{{ userJson }}</code></pre>
      </div>
      <ButtonCopy :text="userJson" />
    </div>

    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">
          Configuration:
        </p>
        <pre class="text-sm border rounded p-3 overflow-x-auto"><code>{{ configJson }}</code></pre>
      </div>
      <ButtonCopy :text="configJson" />
    </div>
  </div>
</template>
