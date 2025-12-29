<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const usdPrice = ref<number>()
const eurPrice = ref<number>()
const idrPrice = ref<number>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="usdPrice"
      label="USD Price"
      mode="currency"
      currency="USD"
      locale="en-US"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="eurPrice"
      label="EUR Price"
      mode="currency"
      currency="EUR"
      locale="de-DE"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="idrPrice"
      label="IDR Price"
      mode="currency"
      currency="IDR"
      locale="id-ID"
      :use-grouping="true"
      :max-fraction-digits="0"
    />
  </div>
</template>
