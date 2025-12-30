<script setup lang="ts">
import { ProgressBar } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <p class="text-sm text-gray-600 mb-2">
        Right Side (Default)
      </p>
      <ProgressBar
        :value="45"
        severity="primary"
        value-position="right-side"
      />
    </div>

    <div>
      <p class="text-sm text-gray-600 mb-2">
        Left Side
      </p>
      <ProgressBar
        :value="45"
        severity="success"
        value-position="left-side"
      />
    </div>

    <div>
      <p class="text-sm text-gray-600 mb-2">
        Inside
      </p>
      <ProgressBar
        :value="45"
        severity="warning"
        value-position="inside"
      />
    </div>

    <div>
      <p class="text-sm text-gray-600 mb-2">
        Bottom
      </p>
      <ProgressBar
        :value="45"
        severity="danger"
        value-position="bottom"
      />
    </div>
  </div>
</template>
