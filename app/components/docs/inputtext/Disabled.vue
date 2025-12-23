<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const normalInput = ref('Normal input')
const disabledInput = ref('Disabled input')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Normal State
      </h3>
      <InputText
        v-model="normalInput"
        label="Normal Input"
        placeholder="You can edit this"
        :disabled="false"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Disabled State
      </h3>
      <InputText
        v-model="disabledInput"
        label="Disabled Input"
        placeholder="You cannot edit this"
        :disabled="true"
      />
    </div>

    <div class="text-sm text-gray-600">
      <p><strong>disabled=false</strong>: Normal interactive input</p>
      <p><strong>disabled=true</strong>: Input is not editable and appears grayed out</p>
    </div>
  </div>
</template>
