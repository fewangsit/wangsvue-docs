<script setup lang="ts">
import { Calendar } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const selectedDate = ref<Date | null>(null);
</script>

<template>
  <div class="space-y-4">
    <Calendar
      v-model="selectedDate"
      label="Select Date"
      placeholder="Choose a date"
    />

    <div class="text-sm text-gray-600">
      <p>
        Selected Date:
        {{ selectedDate ? selectedDate.toLocaleDateString() : 'None' }}
      </p>
    </div>
  </div>
</template>
