<script setup lang="ts">
import { BadgeGroup } from '@fewangsit/wangsvue';

const skills = [
  'JavaScript',
  'Vue.js',
  'TypeScript',
  'Nuxt.js',
  'TailwindCSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Git',
  'Jest',
  'Cypress',
];

const categories = [
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Testing',
  'Mobile',
  'Design',
  'Analytics',
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Custom "Show All" Text</h3>

      <BadgeGroup
        :labels="skills"
        :limit="4"
        header-label="Complete Skill Set"
        severity="primary"
        text-more="Show All Skills"
        text-more-severity="info"
      />
    </div>

    <div>
      <h3 class="mb-2 font-semibold">
        Custom "View More" with Different Severity
      </h3>

      <BadgeGroup
        :labels="categories"
        :limit="3"
        header-label="All Categories"
        severity="success"
        text-more="View More"
        text-more-severity="warning"
      />
    </div>

    <p class="text-sm text-gray-600">
      Customize the "more" button text and severity
    </p>
  </div>
</template>
