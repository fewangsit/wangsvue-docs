<script setup lang="ts">
import { Tree } from '@fewangsit/wangsvue';
import type { TreeNode, TreeSelectionKeys } from '@fewangsit/wangsvue/basetree';
import type { ShortFetchResponse } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

const singleSelection = ref<TreeSelectionKeys>({});
const checkboxSelection = ref<TreeSelectionKeys>({});

const fetchTree = async (): Promise<ShortFetchResponse<TreeNode>> => {
  const data: TreeNode[] = [
    {
      key: -1,
      label: 'All',
      selectable: true,
      children: [
        {
          key: '0',
          label: 'Documents',
          icon: 'folder',
          selectable: true,
          children: [
            {
              key: '0-0',
              label: 'Work',
              icon: 'folder',
              selectable: true,
              children: [
                {
                  key: '0-0-0',
                  label: 'Expenses.doc',
                  icon: 'file-lines',
                  selectable: true,
                  data: 'Expenses Document',
                },
                {
                  key: '0-0-1',
                  label: 'Resume.doc',
                  icon: 'file-lines',
                  selectable: true,
                  data: 'Resume Document',
                },
              ],
            },
            {
              key: '0-1',
              label: 'Home',
              icon: 'folder',
              selectable: true,
              children: [
                {
                  key: '0-1-0',
                  label: 'Invoices.txt',
                  icon: 'file-lines',
                  selectable: true,
                  data: 'Invoices for this month',
                },
              ],
            },
          ],
        },
        {
          key: '1',
          label: 'Events',
          icon: 'calendar',
          selectable: true,
          children: [
            {
              key: '1-0',
              label: 'Meeting',
              icon: 'calendar-event',
              selectable: true,
              data: 'General meeting',
            },
            {
              key: '1-1',
              label: 'Product Launch',
              icon: 'calendar-event',
              selectable: true,
              data: 'New product launch event',
            },
          ],
        },
      ],
    },
  ];

  return {
    status: 200,
    message: 'Success',
    data: data,
  };
};
</script>

<template>
  <div class="space-y-6">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Single Selection</h4>

      <Tree
        v-model:selected-keys="singleSelection"
        :fetch-tree="fetchTree"
        filter=""
        selection-mode="single"
        should-emit-event-on-change
        type="group"
      />

      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ Object.keys(singleSelection).join(', ') || 'None' }}
      </div>
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">Checkbox Selection</h4>

      <Tree
        v-model:selected-keys="checkboxSelection"
        :fetch-tree="fetchTree"
        filter=""
        selection-mode="checkbox"
        should-emit-event-on-change
        type="group"
      />

      <div class="mt-2 text-xs text-gray-600">
        Selected: {{ Object.keys(checkboxSelection).join(', ') || 'None' }}
      </div>
    </div>
  </div>
</template>
