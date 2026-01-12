<script setup lang="ts">
import { Textarea } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const shortText = ref('');
const preventText = ref('');
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-2">
      <h4 class="font-medium text-sm">Character Limit with Validation</h4>

      <Textarea
        v-model="shortText"
        :maxlength="100"
        :prevent-input-on-max-length="false"
        :rows="2"
        :validator-message="{
          exceed: 'Description must not exceed 100 characters',
        }"
        auto-resize
        field-name="shortDescription"
        label="Short Description"
        placeholder="Enter a brief description"
        use-validator
      />

      <p class="text-xs text-gray-600">
        {{ shortText.length }}/100 characters (<b
          >prevent-input-on-max-length=false</b
        >
        will allow input exceeds the maxlength but will error on validation)
      </p>
    </div>

    <div class="space-y-2">
      <h4 class="font-medium text-sm">Prevent Input on Max Length</h4>

      <Textarea
        v-model="preventText"
        :maxlength="50"
        :rows="2"
        auto-resize
        field-info="Input is blocked after 50 characters"
        label="Limited Input"
        placeholder="Try typing more than 50 characters"
        prevent-input-on-max-length
      />

      <p class="text-xs text-gray-600">
        {{ preventText.length }}/50 characters (input blocked at limit)
      </p>
    </div>
  </div>
</template>
