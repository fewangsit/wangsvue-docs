<script setup lang="ts">
import { Checkbox } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const tableValue = ref(false);
const regularValue = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="border rounded-lg overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="p-3 text-left">
              <Checkbox v-model="tableValue" label="Select all" within-table />
            </th>

            <th class="p-3 text-left">Name</th>

            <th class="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr class="border-t">
            <td class="p-3">
              <Checkbox v-model="regularValue" label="Item 1" />
            </td>

            <td class="p-3">John Doe</td>

            <td class="p-3">Active</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-sm text-gray-600">
      Table header checkbox uses special styling with within-table prop
    </p>
  </div>
</template>
