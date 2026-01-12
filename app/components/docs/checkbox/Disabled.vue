<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const disabledChecked = ref(true);
const disabledUnchecked = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox v-model="disabledChecked" disabled label="Disabled (checked)" />

    <Checkbox
      v-model="disabledUnchecked"
      disabled
      label="Disabled (unchecked)"
    />
  </div>
</template>
