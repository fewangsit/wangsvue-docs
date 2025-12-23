<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@fewangsit/wangsvue'

const outlined = ref('')
const filled = ref('')
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="mb-2 font-semibold">
        Outlined (Default)
      </h3>
      <Textarea
        v-model="outlined"
        label="Outlined Textarea"
        placeholder="Outlined variant"
        variant="outlined"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Filled
      </h3>
      <Textarea
        v-model="filled"
        label="Filled Textarea"
        placeholder="Filled variant"
        variant="filled"
      />
    </div>
  </div>
</template>
