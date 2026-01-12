<script setup lang="ts">
import { ButtonCopy } from '@fewangsit/wangsvue';

const jsCode = `const greeting = 'Hello, World!';
console.log(greeting);`;

const cssCode = `.button {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}`;

const htmlCode = `<div class="container">
  <h1>Welcome</h1>
  <p>This is a sample HTML snippet.</p>
</div>`;
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">JavaScript:</p>

        <pre
          class="text-sm border rounded p-3 overflow-x-auto"
        ><code>{{ jsCode }}</code></pre>
      </div>

      <ButtonCopy :text="jsCode" />
    </div>

    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">CSS:</p>

        <pre
          class="text-sm border rounded p-3 overflow-x-auto"
        ><code>{{ cssCode }}</code></pre>
      </div>

      <ButtonCopy :text="cssCode" />
    </div>

    <div class="flex items-start gap-2">
      <div class="flex-1">
        <p class="text-sm mb-2">HTML:</p>

        <pre
          class="text-sm border rounded p-3 overflow-x-auto"
        ><code>{{ htmlCode }}</code></pre>
      </div>

      <ButtonCopy :text="htmlCode" />
    </div>
  </div>
</template>
