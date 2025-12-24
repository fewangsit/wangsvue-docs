<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@fewangsit/wangsvue'

const triStateValue = ref(null)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Checkbox
      v-model="triStateValue"
      :tri-state="true"
      label="Tri-state checkbox"
    />
    <p class="text-sm text-gray-600">
      Value:
      {{
        triStateValue === null
          ? "null (not checked)"
          : triStateValue === true
            ? "true (checked)"
            : "false (partial)"
      }}
    </p>
  </div>
</template>
