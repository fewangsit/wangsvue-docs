<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const usValue = ref(1234567.89);
const deValue = ref(1234567.89);
const frValue = ref(1234567.89);
const idValue = ref(1234567.89);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="usValue"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      label="US Locale (en-US)"
      locale="en-US"
      use-grouping
    />

    <InputNumber
      v-model="deValue"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      label="German Locale (de-DE)"
      locale="de-DE"
      use-grouping
    />

    <InputNumber
      v-model="frValue"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      label="French Locale (fr-FR)"
      locale="fr-FR"
      use-grouping
    />

    <InputNumber
      v-model="idValue"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      label="Indonesian Locale (id-ID)"
      locale="id-ID"
      use-grouping
    />
  </div>
</template>
