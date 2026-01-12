<script setup lang="ts">
import { Badge } from '@fewangsit/wangsvue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Normal vs Disabled Badge</h3>

      <div class="flex flex-wrap gap-3">
        <Badge label="Normal Badge" removable severity="primary" />

        <Badge disabled label="Disabled Badge" removable severity="primary" />
      </div>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Disabled Remove Button Only</h3>

      <Badge
        :removable="false"
        disable-remove-button
        label="Remove Disabled"
        severity="success"
      />
    </div>

    <p class="text-sm text-gray-600">
      <strong>disabled</strong>

      affects entire badge,
      <strong>disableRemoveButton</strong> only affects remove button
    </p>
  </div>
</template>
