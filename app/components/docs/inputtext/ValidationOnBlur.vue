<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const onInputValidation = ref('')
const onBlurValidation = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Validate on Input (Default)
      </h3>
      <InputText
        v-model="onInputValidation"
        label="Username"
        placeholder="Validates as you type"
        :use-validator="true"
        field-name="usernameInput"
        :mandatory="true"
        :max-length="15"
        :validate-on-blur="false"
        :validator-message="{
          empty: 'Username is required',
          exceed: 'Username must not exceed 15 characters'
        }"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Validate on Blur
      </h3>
      <InputText
        v-model="onBlurValidation"
        label="Email"
        placeholder="Validates when you leave the field"
        :use-validator="true"
        field-name="emailBlur"
        :mandatory="true"
        :max-length="50"
        :validate-on-blur="true"
        :validator-message="{
          empty: 'Email is required',
          exceed: 'Email must not exceed 50 characters'
        }"
      />
    </div>

    <div class="text-sm text-gray-600">
      <p><strong>validateOnBlur=false</strong>: Validates immediately as you type</p>
      <p><strong>validateOnBlur=true</strong>: Validates only when field loses focus</p>
    </div>
  </div>
</template>
