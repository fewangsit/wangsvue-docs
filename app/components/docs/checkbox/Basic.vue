<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const checked = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox v-model="checked" label="Accept terms and conditions" />
  </div>
</template>
