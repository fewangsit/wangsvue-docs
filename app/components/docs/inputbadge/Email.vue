<script setup lang="ts">
import { InputBadge } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref<string[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputBadge
      v-model="value"
      label="Email Recipients"
      placeholder="Enter email addresses and press Enter"
      type="email"
    />

    <p class="text-sm text-gray-600">
      Emails: {{ value.length > 0 ? value.join(', ') : 'None' }}
    </p>
  </div>
</template>
