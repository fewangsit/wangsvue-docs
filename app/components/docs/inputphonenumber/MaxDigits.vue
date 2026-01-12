<script setup lang="ts">
import { InputPhoneNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const phone1 = ref('');
const phone2 = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputPhoneNumber
      v-model="phone1"
      :max-digit="10"
      label="Short Phone (10 digits)"
      placeholder="Enter phone number"
    />

    <InputPhoneNumber
      v-model="phone2"
      :max-digit="15"
      label="Long Phone (15 digits)"
      placeholder="Enter phone number"
    />
  </div>
</template>
