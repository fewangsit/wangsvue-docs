<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const usValue = ref(1234567.89)
const deValue = ref(1234567.89)
const frValue = ref(1234567.89)
const idValue = ref(1234567.89)
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="usValue"
      label="US Locale (en-US)"
      locale="en-US"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="deValue"
      label="German Locale (de-DE)"
      locale="de-DE"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="frValue"
      label="French Locale (fr-FR)"
      locale="fr-FR"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="idValue"
      label="Indonesian Locale (id-ID)"
      locale="id-ID"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
  </div>
</template>
