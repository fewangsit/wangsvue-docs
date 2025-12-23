<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputPhoneNumber
      v-model="value"
      label="Contact Number"
      placeholder="Enter contact number"
      :use-validator="true"
      field-name="contactNumber"
      :mandatory="true"
      :validator-message="{
        empty: 'Contact number is required'
      }"
    />
    <p class="text-sm text-gray-600">
      Value: {{ value || 'Empty' }}
    </p>
  </div>
</template>
