<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText
      v-model="value"
      label="Product Code"
      placeholder="Enter product code"
      :auto-uppercase="true"
      :max-length="10"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
