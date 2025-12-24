<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const withoutGrouping = ref(1234567.89)
const withGrouping = ref(1234567.89)
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="withoutGrouping"
      label="Without Grouping"
      :use-grouping="false"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
    <InputNumber
      v-model="withGrouping"
      label="With Grouping"
      :use-grouping="true"
      :min-fraction-digits="2"
      :max-fraction-digits="2"
    />
  </div>
</template>
