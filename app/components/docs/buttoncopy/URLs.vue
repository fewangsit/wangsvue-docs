<script setup lang="ts">
import { ButtonCopy } from '@fewangsit/wangsvue';

const websiteUrl = 'https://www.example.com';
const apiEndpoint = 'https://api.example.com/v1/users';
const githubRepo = 'https://github.com/username/repository';
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <div class="flex items-center gap-2">
      <span class="text-sm font-mono">{{ websiteUrl }}</span>

      <ButtonCopy :text="websiteUrl" />
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm font-mono">{{ apiEndpoint }}</span>

      <ButtonCopy :text="apiEndpoint" />
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm font-mono">{{ githubRepo }}</span>

      <ButtonCopy :text="githubRepo" />
    </div>
  </div>
</template>
