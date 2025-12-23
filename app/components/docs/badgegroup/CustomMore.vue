<script setup lang="ts">
import { BadgeGroup } from '@fewangsit/wangsvue'

const skills = [
  'JavaScript', 'Vue.js', 'TypeScript', 'Nuxt.js', 'TailwindCSS',
  'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker',
  'AWS', 'Git', 'Jest', 'Cypress'
]

const categories = [
  'Frontend', 'Backend', 'Database', 'DevOps', 'Testing',
  'Mobile', 'Design', 'Analytics'
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">
        Custom "Show All" Text
      </h3>
      <BadgeGroup
        :labels="skills"
        severity="primary"
        :limit="4"
        text-more="Show All Skills"
        text-more-severity="info"
        header-label="Complete Skill Set"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Custom "View More" with Different Severity
      </h3>
      <BadgeGroup
        :labels="categories"
        severity="success"
        :limit="3"
        text-more="View More"
        text-more-severity="warning"
        header-label="All Categories"
      />
    </div>

    <p class="text-sm text-gray-600">
      Customize the "more" button text and severity
    </p>
  </div>
</template>
