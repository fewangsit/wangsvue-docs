<script setup lang="ts">
import { InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const onInputValidation = ref('');
const onBlurValidation = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Validate on Input (Default)</h3>

      <InputText
        v-model="onInputValidation"
        :validator-message="{
          empty: 'Username is required',
          exceed: 'Username must not exceed 15 characters',
        }"
        field-name="usernameInput"
        label="Username"
        mandatory
        max-length="15"
        placeholder="Validates as you type"
        use-validator
        validate-on-blur="false"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Validate on Blur</h3>

      <InputText
        v-model="onBlurValidation"
        :validator-message="{
          empty: 'Email is required',
          exceed: 'Email must not exceed 50 characters',
        }"
        field-name="emailBlur"
        label="Email"
        mandatory
        max-length="50"
        placeholder="Validates when you leave the field"
        use-validator
        validate-on-blur
      />
    </div>

    <div class="text-sm text-gray-600">
      <p>
        <strong>validateOnBlur=false</strong>: Validates immediately as you type
      </p>

      <p>
        <strong>validateOnBlur=true</strong>: Validates only when field loses
        focus
      </p>
    </div>
  </div>
</template>
