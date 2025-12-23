<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const disabledInput = ref('Disabled input')
</script>

<template>
  <InputText
    v-model="disabledInput"
    label="Disabled Input"
    placeholder="You cannot edit this"
    :disabled="true"
  />
</template>
