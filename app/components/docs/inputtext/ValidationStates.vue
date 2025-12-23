<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const requiredField = ref('')
const maxLengthField = ref('')
const customInvalidField = ref('invalid-value')
const noSpecialChars = ref('test@#$')
const withSpecialChars = ref('test@#$')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Mandatory Validation
      </h3>
      <InputText
        v-model="requiredField"
        label="Required Field"
        placeholder="This field is required"
        :use-validator="true"
        field-name="requiredField"
        :mandatory="true"
        :validator-message="{
          empty: 'This field cannot be empty'
        }"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Max Length Validation
      </h3>
      <InputText
        v-model="maxLengthField"
        label="Limited Field (20 chars)"
        placeholder="Maximum 20 characters"
        :use-validator="true"
        field-name="maxLengthField"
        :max-length="20"
        :validator-message="{
          exceed: 'Field must not exceed 20 characters'
        }"
      />
      <p class="text-xs text-gray-500 mt-1">
        Characters: {{ maxLengthField.length }}/20
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Special Characters Validation
      </h3>
      <div class="flex flex-col gap-3">
        <InputText
          v-model="noSpecialChars"
          label="No Special Characters"
          placeholder="Type special characters to see error"
          :use-validator="true"
          field-name="noSpecialChars"
          :allow-special-characters="false"
        />

        <InputText
          v-model="withSpecialChars"
          label="Allow Special Characters"
          placeholder="Special characters allowed"
          :use-validator="true"
          field-name="withSpecialChars"
          :allow-special-characters="true"
        />
      </div>
      <p class="text-xs text-gray-500 mt-1">
        allowSpecialCharacters=false shows validation error but allows typing
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Custom Invalid State
      </h3>
      <InputText
        v-model="customInvalidField"
        label="Custom Validation"
        placeholder="Custom invalid condition"
        :use-validator="true"
        field-name="customInvalidField"
        :invalid="true"
        validator-message="This field has a custom validation error"
      />
    </div>

    <div class="text-sm text-gray-600">
      <p><strong>mandatory + empty</strong>: Required field validation</p>
      <p><strong>maxLength + exceed</strong>: Length limit validation</p>
      <p><strong>allowSpecialCharacters</strong>: Validates special characters but allows typing</p>
      <p><strong>invalid + string message</strong>: Custom invalid state with message</p>
    </div>
  </div>
</template>
