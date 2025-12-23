<script setup lang="ts">
import { BadgeGroup } from '@fewangsit/wangsvue'

const manyLabels = [
  'JavaScript', 'Vue.js', 'TypeScript', 'Nuxt.js', 'TailwindCSS',
  'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker'
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Limit 3 badges
      </h3>
      <BadgeGroup
        :labels="manyLabels"
        severity="primary"
        :limit="3"
        header-label="All Technologies"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Limit 5 badges
      </h3>
      <BadgeGroup
        :labels="manyLabels"
        severity="success"
        :limit="5"
        header-label="Technology Stack"
      />
    </div>

    <p class="text-sm text-gray-600">
      Click "more" to see all badges in a dialog
    </p>
  </div>
</template>
