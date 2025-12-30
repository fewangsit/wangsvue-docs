<script setup lang="ts">
import { InlineMessage } from '@fewangsit/wangsvue'

const errorList = [
  'Email field is required',
  'Password must be at least 8 characters',
  'Phone number format is invalid'
]

const successList = [
  'Profile updated',
  'Email verified',
  'Preferences saved'
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <InlineMessage
      severity="danger"
      title="Validation Errors"
      message="Please fix the following issues:"
      :lists="errorList"
    />

    <InlineMessage
      severity="success"
      title="Changes Applied"
      message="The following updates were completed:"
      :lists="successList"
    />
  </div>
</template>
