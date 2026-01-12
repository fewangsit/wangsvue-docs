<script setup lang="ts">
import { CodeSnippet } from '@fewangsit/wangsvue';

const javascriptCode = `function greetUser(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to WangsVue, \${name}\`;
}`;

const typescriptCode = `interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (userData: User): User => {
  return { ...userData };
}`;

const htmlCode = `<div class="container">
  <h1>Welcome to WangsVue</h1>
  <p>A comprehensive Vue component library</p>
  <button class="btn-primary">Get Started</button>
</div>`;

const jsonCode = `{
  "component": "CodeSnippet",
  "features": ["syntax highlighting", "multiple languages"],
  "supported": ["javascript", "typescript", "html", "json"]
}`;
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="mb-2 font-medium">JavaScript</h4>

      <CodeSnippet :code="javascriptCode" lang="javascript" />
    </div>

    <div>
      <h4 class="mb-2 font-medium">TypeScript</h4>

      <CodeSnippet :code="typescriptCode" lang="typescript" />
    </div>

    <div>
      <h4 class="mb-2 font-medium">HTML</h4>

      <CodeSnippet :code="htmlCode" lang="html" />
    </div>

    <div>
      <h4 class="mb-2 font-medium">JSON</h4>

      <CodeSnippet :code="jsonCode" lang="json" />
    </div>
  </div>
</template>
