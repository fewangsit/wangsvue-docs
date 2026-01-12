<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const triStateValue = ref<boolean | null>(null);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox v-model="triStateValue" label="Tri-state checkbox" tri-state />

    <p class="text-sm text-gray-600">
      Value:
      {{
        triStateValue === null
          ? 'null (not checked)'
          : triStateValue === true
            ? 'true (checked)'
            : 'false (partial)'
      }}
    </p>
  </div>
</template>
