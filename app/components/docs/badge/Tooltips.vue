<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Custom Tooltips</h3>

      <div class="flex flex-wrap gap-3">
        <Badge
          label="Hover me"
          severity="primary"
          tooltip="This is a custom tooltip message"
        />

        <Badge
          label="Status"
          severity="success"
          tooltip="Current status: Active since 2024"
        />

        <Badge
          label="Priority"
          severity="danger"
          tooltip="High priority task - needs immediate attention"
        />
      </div>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Auto Tooltips for Truncated Text</h3>

      <div class="flex flex-wrap gap-3">
        <Badge
          label="This is a very long text that will be truncated automatically"
          severity="info"
        />

        <Badge label="Short text" severity="warning" />

        <Badge
          label="Another very long badge text that exceeds the character limit"
          severity="success"
        />
      </div>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Custom Tooltip Override for Truncated Text
      </h3>

      <div class="flex flex-wrap gap-3">
        <Badge
          label="This text is truncated but has custom tooltip"
          severity="dark"
          tooltip="Custom tooltip instead of full text"
        />

        <Badge
          label="This text is also truncated with default behavior"
          severity="primary"
        />
      </div>
    </div>

    <p class="text-sm text-gray-600">
      Hover over badges to see tooltips. Truncated text automatically shows full
      text in tooltip unless custom tooltip is provided.
    </p>
  </div>
</template>
