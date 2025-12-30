<script setup lang="ts">
import { Animation } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
    <div class="text-center">
      <Animation animation="no-data" />
      <p class="text-xs text-gray-600 mt-2">
        No Data
      </p>
    </div>

    <div class="text-center">
      <Animation animation="loading-plane" />
      <p class="text-xs text-gray-600 mt-2">
        Loading Plane
      </p>
    </div>

    <div class="text-center">
      <Animation animation="loading-page" />
      <p class="text-xs text-gray-600 mt-2">
        Loading Page
      </p>
    </div>

    <div class="text-center">
      <Animation animation="loading-table" />
      <p class="text-xs text-gray-600 mt-2">
        Loading Table
      </p>
    </div>

    <div class="text-center">
      <Animation animation="scan-qr" />
      <p class="text-xs text-gray-600 mt-2">
        Scan QR
      </p>
    </div>
  </div>
</template>
