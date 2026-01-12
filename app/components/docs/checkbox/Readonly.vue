<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const readonlyChecked = ref(true);
const readonlyUnchecked = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox v-model="readonlyChecked" label="Readonly (checked)" readonly />

    <Checkbox
      v-model="readonlyUnchecked"
      label="Readonly (unchecked)"
      readonly
    />
  </div>
</template>
