<script setup lang="ts">
import { InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const disabledInput = ref('Disabled input');
</script>

<template>
  <InputText
    v-model="disabledInput"
    disabled
    label="Disabled Input"
    placeholder="You cannot edit this"
  />
</template>
