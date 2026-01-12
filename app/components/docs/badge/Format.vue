<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Default Format (Truncates > 12 chars)</h3>

      <div class="flex flex-wrap gap-3">
        <Badge label="Short text" severity="primary" />

        <Badge
          label="This is a very long text that will be truncated"
          severity="primary"
        />

        <Badge label="Medium length text here" severity="info" />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        Default: "first5..last5" format for text > 12 characters
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Username Format</h3>

      <div class="flex flex-wrap gap-3">
        <Badge format="username" label="John Doe" severity="success" />

        <Badge format="username" label="Tiffany Glover" severity="success" />

        <Badge
          format="username"
          label="Christopher Columbus"
          severity="success"
        />

        <Badge format="username" label="A" severity="success" />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        Username: "FirstName L" or "Firstna.. L" format
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">No Wrap Format</h3>

      <div class="flex flex-wrap gap-3">
        <Badge
          format="nowrap"
          label="This is a very long text that should not wrap to multiple lines and will show completely"
          severity="warning"
        />

        <Badge format="nowrap" label="Short text" severity="warning" />

        <Badge
          format="nowrap"
          label="Medium length text that normally would be truncated"
          severity="warning"
        />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        Nowrap: Shows full text without truncation
      </p>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Comparison: Same Text, Different Formats
      </h3>

      <div class="flex flex-wrap gap-3">
        <Badge label="Christopher Columbus Anderson" severity="dark" />

        <Badge
          format="username"
          label="Christopher Columbus Anderson"
          severity="dark"
        />

        <Badge
          format="nowrap"
          label="Christopher Columbus Anderson"
          severity="dark"
        />
      </div>

      <p class="text-xs text-gray-500 mt-1">
        Same text with default, username, and nowrap formats
      </p>
    </div>

    <p class="text-sm text-gray-600">
      Hover over truncated badges to see full text in tooltip
    </p>
  </div>
</template>
