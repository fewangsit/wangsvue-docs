<script setup lang="ts">
import { InputPhoneNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <InputPhoneNumber
    v-model="value"
    :validator-message="{
      empty: 'Contact number is required',
    }"
    field-name="contactNumber"
    label="Contact Number"
    mandatory
    placeholder="Enter contact number"
    use-validator
  />
</template>
