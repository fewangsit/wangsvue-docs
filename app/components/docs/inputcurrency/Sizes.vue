<script setup lang="ts">
import { ref } from 'vue'
import { InputCurrency } from '@fewangsit/wangsvue'

const small = ref<{ currency: string, value?: number }>()
const normal = ref<{ currency: string, value?: number }>()
const full = ref<{ currency: string, value?: number }>()
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <h3 class="mb-2 font-semibold">
        Small Size
      </h3>
      <InputCurrency
        v-model="small"
        label="Small Currency"
        size="small"
        :show-buttons="true"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Normal Size
      </h3>
      <InputCurrency
        v-model="normal"
        label="Normal Currency"
        size="normal"
        :show-buttons="true"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Full Width
      </h3>
      <InputCurrency
        v-model="full"
        label="Full Width Currency"
        size="full"
        :show-buttons="true"
      />
    </div>
  </div>
</template>
