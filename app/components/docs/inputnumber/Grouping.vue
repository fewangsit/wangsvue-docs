<script setup lang="ts">
import { InputNumber } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const withoutGrouping = ref(1234567.89);
const withGrouping = ref(1234567.89);
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputNumber
      v-model="withoutGrouping"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      :use-grouping="false"
      label="Without Grouping"
    />

    <InputNumber
      v-model="withGrouping"
      :max-fraction-digits="2"
      :min-fraction-digits="2"
      label="With Grouping"
      use-grouping
    />
  </div>
</template>
