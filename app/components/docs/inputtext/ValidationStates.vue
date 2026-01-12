<script setup lang="ts">
import { InputText } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const requiredField = ref('');
const maxLengthField = ref('');
const customInvalidField = ref('invalid-value');
const noSpecialChars = ref('test@#$');
const withSpecialChars = ref('test@#$');
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Mandatory Validation</h3>

      <InputText
        v-model="requiredField"
        :validator-message="{
          empty: 'This field cannot be empty',
        }"
        field-name="requiredField"
        label="Required Field"
        mandatory
        placeholder="This field is required"
        use-validator
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Max Length Validation</h3>

      <InputText
        v-model="maxLengthField"
        :validator-message="{
          exceed: 'Field must not exceed 20 characters',
        }"
        field-name="maxLengthField"
        label="Limited Field (20 chars)"
        max-length="20"
        placeholder="Maximum 20 characters"
        use-validator
      />

      <p class="text-xs text-gray-500 mt-1">
        Characters: {{ maxLengthField.length }}/20
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Special Characters Validation</h3>

      <div class="flex flex-col gap-3">
        <InputText
          v-model="noSpecialChars"
          allow-special-characters="false"
          field-name="noSpecialChars"
          label="No Special Characters"
          placeholder="Type special characters to see error"
          use-validator
        />

        <InputText
          v-model="withSpecialChars"
          allow-special-characters
          field-name="withSpecialChars"
          label="Allow Special Characters"
          placeholder="Special characters allowed"
          use-validator
        />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        allowSpecialCharacters=false shows validation error but allows typing
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Custom Invalid State</h3>

      <InputText
        v-model="customInvalidField"
        field-name="customInvalidField"
        invalid
        label="Custom Validation"
        placeholder="Custom invalid condition"
        use-validator
        validator-message="This field has a custom validation error"
      />
    </div>

    <div class="text-sm text-gray-600">
      <p><strong>mandatory + empty</strong>: Required field validation</p>

      <p><strong>maxLength + exceed</strong>: Length limit validation</p>

      <p>
        <strong>allowSpecialCharacters</strong>: Validates special characters
        but allows typing
      </p>

      <p>
        <strong>invalid + string message</strong>: Custom invalid state with
        message
      </p>
    </div>
  </div>
</template>
