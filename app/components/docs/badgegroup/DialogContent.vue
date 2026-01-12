<script setup lang="ts">
import { BadgeGroup } from '@fewangsit/wangsvue';

const teamMembers = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Wilson',
  'David Brown',
  'Lisa Davis',
  'Tom Anderson',
  'Emma Taylor',
];

const projects = [
  'E-commerce Platform',
  'Mobile App',
  'Dashboard Analytics',
  'API Gateway',
  'User Management',
  'Payment System',
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h3 class="mb-2 font-semibold">Custom Dialog Content - Team Members</h3>

      <BadgeGroup
        :labels="teamMembers"
        :limit="3"
        header-label="Team Members"
        severity="primary"
        text-more="View All Members"
      >
        <template #dialogcontent="{ labels }">
          <div class="p-4">
            <p class="mb-4 text-gray-600">
              Total team members: {{ labels.length }}
            </p>

            <div class="grid grid-cols-2 gap-2">
              <div
                :key="index"
                v-for="(member, index) in labels"
                class="p-2 bg-gray-50 rounded flex items-center gap-2"
              >
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm"
                >
                  {{ member.charAt(0) }}
                </div>

                <span>{{ member }}</span>
              </div>
            </div>
          </div>
        </template>
      </BadgeGroup>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Custom Dialog Content - Projects</h3>

      <BadgeGroup
        :labels="projects"
        :limit="2"
        header-label="Active Projects"
        severity="success"
        text-more="Show Projects"
      >
        <template #dialogcontent="{ labels }">
          <div class="p-4">
            <div class="space-y-3">
              <div
                :key="index"
                v-for="(project, index) in labels"
                class="border-l-4 border-green-500 pl-4 py-2"
              >
                <h4 class="font-semibold">
                  {{ project }}
                </h4>

                <p class="text-sm text-gray-600">Status: Active</p>

                <p class="text-xs text-gray-500">
                  Last updated: {{ new Date().toLocaleDateString() }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </BadgeGroup>
    </div>

    <p class="text-sm text-gray-600">
      Use the dialogcontent slot to customize the more dialog
    </p>
  </div>
</template>
