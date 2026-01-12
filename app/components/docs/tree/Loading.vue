<script setup lang="ts">
import { Button, Tree } from '@fewangsit/wangsvue';
import type { TreeNode } from '@fewangsit/wangsvue/basetree';
import type { ShortFetchResponse } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

const isLoading = ref(false);
const shouldLoad = ref(false);

const fetchTree = async (): Promise<ShortFetchResponse<TreeNode>> => {
  if (!shouldLoad.value) {
    return {
      status: 200,
      message: 'Success',
      data: [],
    };
  }

  isLoading.value = true;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data: TreeNode[] = [
    {
      key: -1,
      label: 'All',
      selectable: true,
      children: [
        {
          key: '0',
          label: 'Loaded Documents',
          icon: 'folder',
          selectable: true,
          children: [
            {
              key: '0-0',
              label: 'Project Files',
              icon: 'folder',
              selectable: true,
              children: [
                {
                  key: '0-0-0',
                  label: 'README.md',
                  icon: 'file-lines',
                  selectable: true,
                  data: 'Project documentation',
                },
                {
                  key: '0-0-1',
                  label: 'package.json',
                  icon: 'file-lines',
                  selectable: true,
                  data: 'Package configuration',
                },
              ],
            },
          ],
        },
        {
          key: '1',
          label: 'Assets',
          icon: 'folder',
          selectable: true,
          children: [
            {
              key: '1-0',
              label: 'Images',
              icon: 'image-add',
              selectable: true,
              data: 'Image assets',
            },
            {
              key: '1-1',
              label: 'Styles',
              icon: 'file-lines',
              selectable: true,
              data: 'CSS files',
            },
          ],
        },
      ],
    },
  ];

  isLoading.value = false;

  return {
    status: 200,
    message: 'Success',
    data: data,
  };
};

const loadTreeData = (): void => {
  shouldLoad.value = true;
};

const clearData = (): void => {
  shouldLoad.value = false;
  isLoading.value = false;
};
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <Button
        :disabled="isLoading || shouldLoad"
        @click="loadTreeData"
        label="Load Tree Data"
      />

      <Button
        :disabled="isLoading"
        @click="clearData"
        label="Clear Data"
        severity="secondary"
      />
    </div>

    <Tree :fetch-tree="fetchTree" filter="" type="group" />

    <div class="text-sm text-gray-600">
      <p v-if="isLoading">Loading tree data...</p>

      <p v-else-if="shouldLoad">Tree data loaded successfully!</p>

      <p v-else>Click "Load Tree Data" to see the loading state.</p>
    </div>
  </div>
</template>
