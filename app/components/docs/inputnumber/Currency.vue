<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const usdPrice = ref<number>();
const eurPrice = ref<number>();
const idrPrice = ref<number>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="usdPrice"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      currency="USD"
      label="USD Price"
      locale="en-US"
      mode="currency"
      use-grouping
    />

    <InputNumber
      v-model="eurPrice"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      currency="EUR"
      label="EUR Price"
      locale="de-DE"
      mode="currency"
      use-grouping
    />

    <InputNumber
      v-model="idrPrice"
      :max-fraction-digits="0"
      currency="IDR"
      label="IDR Price"
      locale="id-ID"
      mode="currency"
      use-grouping
    />
  </div>
</template>
