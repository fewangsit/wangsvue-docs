<script setup lang="ts">
import { ButtonCopy } from '@fewangsit/wangsvue'

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const address = '1234 Main Street, Suite 567, Springfield, IL 62701, United States of America'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">
          Long paragraph:
        </p>
        <p class="text-sm border rounded p-3">
          {{ longText }}
        </p>
      </div>
      <ButtonCopy :text="longText" />
    </div>

    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">
          Address:
        </p>
        <p class="text-sm border rounded p-3">
          {{ address }}
        </p>
      </div>
      <ButtonCopy :text="address" />
    </div>
  </div>
</template>
