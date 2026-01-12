<script setup lang="ts">
import { ButtonCopy } from '@fewangsit/wangsvue';

const basicText = 'Hello, World!';
const emailText = 'contact@example.com';
const phoneText = '+1 (555) 123-4567';
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <div class="flex items-center gap-2">
      <span class="text-sm">{{ basicText }}</span>

      <ButtonCopy :text="basicText" />
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">{{ emailText }}</span>

      <ButtonCopy :text="emailText" />
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">{{ phoneText }}</span>

      <ButtonCopy :text="phoneText" />
    </div>
  </div>
</template>
