<script setup lang="ts">
import { Icon } from '@fewangsit/wangsvue';
import type { WangsIcons } from '@fewangsit/wangsvue/icon';

// Popular and commonly used icons organized by category
const iconCategories = {
  'Navigation & Actions': [
    'add',
    'close',
    'edit',
    'delete-bin',
    'search',
    'filter',
    'arrow-left',
    'arrow-right',
    'arrow-up-s',
    'arrow-down',
    'menu',
    'more',
    'settings',
    'refresh',
  ] as WangsIcons[],

  'Files & Documents': [
    'file-add',
    'file-edit',
    'file-copy',
    'files',
    'folder',
    'pdf',
    'csv',
    'xls',
    'doc',
    'download',
    'upload-2',
  ] as WangsIcons[],

  'Users & Communication': [
    'user',
    'user-add',
    'team',
    'profile',
    'mail',
    'chat',
    'notification',
    'bell',
    'phone',
  ] as WangsIcons[],

  'Status & Feedback': [
    'check',
    'error',
    'info',
    'warning',
    'success',
    'loader-4',
    'spinner',
    'time',
    'calendar',
  ] as WangsIcons[],

  'Business & Finance': [
    'money-dollar-circle',
    'coins',
    'calculator',
    'bank-card-line',
    'shopping-cart-2',
    'store',
  ] as WangsIcons[],

  'Technology': [
    'database',
    'cloud-line',
    'qr',
    'barcode',
    'printer',
    'smartphone',
    'device',
    'tools',
    'code-line',
  ] as WangsIcons[],
};
</script>

<template>
  <div class="space-y-8">
    <div
      :key="category"
      v-for="(icons, category) in iconCategories"
      class="space-y-4"
    >
      <h4 class="text-lg font-semibold text-gray-800">
        {{ category }}
      </h4>

      <div
        class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4"
      >
        <div
          :key="iconName"
          v-for="iconName in icons"
          class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Icon :icon="iconName" :info="iconName" class="text-xl" />

          <span class="text-xs text-gray-600 text-center break-all">
            {{ iconName }}
          </span>
        </div>
      </div>
    </div>

    <div class="mt-8 p-4 bg-blue-50 rounded-lg">
      <p class="text-sm text-blue-800">
        <Icon class="inline mr-2" icon="info" severity="info" />
        This gallery shows popular icons. The complete WangsIcons collection
        includes 200+ icons. Hover over any icon to see its name, or check the
        TypeScript definitions for the full list.
      </p>
    </div>
  </div>
</template>
