<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const phone1 = ref('')
const phone2 = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputPhoneNumber
      v-model="phone1"
      label="Short Phone (10 digits)"
      placeholder="Enter phone number"
      :max-digit="10"
    />

    <InputPhoneNumber
      v-model="phone2"
      label="Long Phone (15 digits)"
      placeholder="Enter phone number"
      :max-digit="15"
    />
  </div>
</template>
