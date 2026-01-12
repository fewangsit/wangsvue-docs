<script setup lang="ts">
import { InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const withPrevention = ref('');
const withoutPrevention = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">With preventInputOnMaxLength</h3>

      <InputText
        v-model="withPrevention"
        label="Limited Input (10 chars)"
        max-length="10"
        placeholder="Try typing more than 10 characters"
        prevent-input-on-max-length
      />

      <p class="text-xs text-gray-500 mt-1">
        Characters: {{ withPrevention.length }}/10 - Input prevented when limit
        reached
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Without preventInputOnMaxLength</h3>

      <InputText
        v-model="withoutPrevention"
        :max-length="10"
        :prevent-input-on-max-length="false"
        label="Limited Input (10 chars)"
        placeholder="Can type more, but will be truncated"
      />

      <p class="text-xs text-gray-500 mt-1">
        Characters: {{ withoutPrevention.length }}/10 - Input allowed but will
        error on submit and display validator message
      </p>
    </div>
  </div>
</template>
