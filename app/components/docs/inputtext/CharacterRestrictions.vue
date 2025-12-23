<script setup lang="ts">
import { ref } from 'vue'
import { InputText } from '@fewangsit/wangsvue'

const alphanumeric = ref('')
const numbersOnly = ref('')
const lettersOnly = ref('')
const customPattern = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Alphanumeric Only
      </h3>
      <InputText
        v-model="alphanumeric"
        label="Username"
        placeholder="Only letters and numbers"
        :allowed-characters="/^[a-zA-Z0-9]*$/"
      />
      <p class="text-xs text-gray-500 mt-1">
        Pattern: /^[a-zA-Z0-9]*$/
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Numbers Only
      </h3>
      <InputText
        v-model="numbersOnly"
        label="ID Number"
        placeholder="Only numbers allowed"
        :allowed-characters="/^[0-9]*$/"
      />
      <p class="text-xs text-gray-500 mt-1">
        Pattern: /^[0-9]*$/
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Letters Only
      </h3>
      <InputText
        v-model="lettersOnly"
        label="Name"
        placeholder="Only letters and spaces"
        :allowed-characters="/^[a-zA-Z\s]*$/"
      />
      <p class="text-xs text-gray-500 mt-1">
        Pattern: /^[a-zA-Z\s]*$/
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Custom Pattern
      </h3>
      <InputText
        v-model="customPattern"
        label="Phone Number"
        placeholder="Numbers, +, -, spaces, parentheses"
        :allowed-characters="/^[0-9+\-\s()]*$/"
      />
      <p class="text-xs text-gray-500 mt-1">
        Pattern: /^[0-9+\-\s()]*$/
      </p>
    </div>

    <div class="text-sm text-gray-600">
      <p><strong>allowedCharacters</strong>: Uses regex pattern to prevent typing disallowed characters</p>
      <p class="text-xs mt-1">
        Characters not matching the pattern cannot be typed
      </p>
    </div>
  </div>
</template>
