<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@fewangsit/wangsvue'

const small = ref<number>()
const normal = ref<number>()
const full = ref<number>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="mb-2 font-semibold">
        Small Size
      </h3>
      <InputNumber
        v-model="small"
        label="Small Input"
        size="small"
        :show-buttons="true"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Normal Size
      </h3>
      <InputNumber
        v-model="normal"
        label="Normal Input"
        size="normal"
        :show-buttons="true"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Full Width
      </h3>
      <InputNumber
        v-model="full"
        label="Full Width Input"
        size="full"
        :show-buttons="true"
      />
    </div>
  </div>
</template>
