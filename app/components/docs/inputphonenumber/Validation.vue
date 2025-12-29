<script setup lang="ts">
import { ref } from 'vue'
import { InputPhoneNumber } from '@fewangsit/wangsvue'

const value = ref('')
</script>

<template>
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
</template>
