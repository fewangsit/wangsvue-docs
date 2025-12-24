<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@fewangsit/wangsvue'

const shortText = ref('')
const preventText = ref('')
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Character Limit with Validation
      </h4>
      <Textarea
        v-model="shortText"
        label="Short Description"
        placeholder="Enter a brief description"
        :use-validator="true"
        field-name="shortDescription"
        :maxlength="100"
        :prevent-input-on-max-length="false"
        :auto-resize="true"
        :rows="2"
        :validator-message="{
          exceed: 'Description must not exceed 100 characters'
        }"
      />
      <p class="text-xs text-gray-600">
        {{ shortText.length }}/100 characters (<b>prevent-input-on-max-length=false</b> will allow input exceeds the maxlength but will error on validation)
      </p>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">
        Prevent Input on Max Length
      </h4>
      <Textarea
        v-model="preventText"
        label="Limited Input"
        placeholder="Try typing more than 50 characters"
        :maxlength="50"
        :prevent-input-on-max-length="true"
        :auto-resize="true"
        :rows="2"
        field-info="Input is blocked after 50 characters"
      />
      <p class="text-xs text-gray-600">
        {{ preventText.length }}/50 characters (input blocked at limit)
      </p>
    </div>
  </div>
</template>
