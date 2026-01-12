<script setup lang="ts">
import { Calendar } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const singleDate = ref<Date | null>(null);
const multipleDates = ref<Date[]>([]);
const dateRange = ref<Date[]>([]);
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Single Selection</h4>

      <Calendar
        v-model="singleDate"
        label="Single Date"
        placeholder="Select one date"
        selection-mode="single"
      />

      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ singleDate ? singleDate.toLocaleDateString() : 'None' }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Multiple Selection</h4>

      <Calendar
        v-model="multipleDates"
        label="Multiple Dates"
        placeholder="Select multiple dates"
        selection-mode="multiple"
      />

      <div class="mt-2 text-xs text-gray-600">
        Selected:
        {{
          multipleDates.length > 0
            ? multipleDates.map((d) => d.toLocaleDateString()).join(', ')
            : 'None'
        }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Range Selection</h4>

      <Calendar
        v-model="dateRange"
        label="Date Range"
        placeholder="Select date range"
        selection-mode="range"
      />

      <div class="mt-2 text-xs text-gray-600">
        Selected:
        {{
          dateRange.length > 0
            ? `${dateRange[0]?.toLocaleDateString()} - ${dateRange[1]?.toLocaleDateString() || 'End date'}`
            : 'None'
        }}
      </div>
    </div>
  </div>
</template>
