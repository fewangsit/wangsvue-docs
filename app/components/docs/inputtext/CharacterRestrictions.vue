<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText
      v-model="value"
      label="Alphanumeric Only"
      placeholder="Only letters and numbers"
      :allowed-characters="/^[a-zA-Z0-9]*$/"
      :allow-special-characters="false"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
