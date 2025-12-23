<script setup lang="ts">
import { ref } from 'vue'
import { InputCurrency } from '@fewangsit/wangsvue'

const usd = ref<{ currency: string, value?: number }>()
const eur = ref<{ currency: string, value?: number }>()
const jpy = ref<{ currency: string, value?: number }>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputCurrency
      v-model="usd"
      label="USD Price"
      placeholder="Enter USD amount"
    />

    <InputCurrency
      v-model="eur"
      label="EUR Price"
      placeholder="Enter EUR amount"
    />

    <InputCurrency
      v-model="jpy"
      label="JPY Price"
      placeholder="Enter JPY amount"
    />

    <div class="text-sm text-gray-600">
      <p>USD: {{ usd ? `${usd.currency} ${usd.value}` : 'Empty' }}</p>
      <p>EUR: {{ eur ? `${eur.currency} ${eur.value}` : 'Empty' }}</p>
      <p>JPY: {{ jpy ? `${jpy.currency} ${jpy.value}` : 'Empty' }}</p>
    </div>
  </div>
</template>
