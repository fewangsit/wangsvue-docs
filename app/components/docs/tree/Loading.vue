<script setup lang="ts">
import { ref } from 'vue'
import { Tree, Button } from '@fewangsit/wangsvue'
import type { TreeNode } from '@fewangsit/wangsvue/basetree'
import type { QueryParams, ShortFetchResponse } from '@fewangsit/wangsvue/datatable'

const isLoading = ref(false)
const shouldLoad = ref(false)

const fetchTree = async (
  _type: 'group' | 'category',
  _params?: QueryParams
): Promise<ShortFetchResponse<TreeNode>> => {
  if (!shouldLoad.value) {
    return {
      status: 200,
      message: 'Success',
      data: []
    }
  }

  isLoading.value = true

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))

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
                  data: 'Project documentation'
                },
                {
                  key: '0-0-1',
                  label: 'package.json',
                  icon: 'file-lines',
                  selectable: true,
                  data: 'Package configuration'
                }
              ]
            }
          ]
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
              data: 'Image assets'
            },
            {
              key: '1-1',
              label: 'Styles',
              icon: 'file-lines',
              selectable: true,
              data: 'CSS files'
            }
          ]
        }
      ]
    }
  ]

  isLoading.value = false

  return {
    status: 200,
    message: 'Success',
    data: data
  }
}

const loadTreeData = () => {
  shouldLoad.value = true
}

const clearData = () => {
  shouldLoad.value = false
  isLoading.value = false
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <Button
        label="Load Tree Data"
        :disabled="isLoading || shouldLoad"
        @click="loadTreeData"
      />
      <Button
        label="Clear Data"
        severity="secondary"
        :disabled="isLoading"
        @click="clearData"
      />
    </div>

    <Tree
      type="group"
      filter=""
      :fetch-tree="fetchTree"
    />

    <div class="text-sm text-gray-600">
      <p v-if="isLoading">
        Loading tree data...
      </p>
      <p v-else-if="!shouldLoad">
        Click "Load Tree Data" to see the loading state.
      </p>
      <p v-else>
        Tree data loaded successfully!
      </p>
    </div>
  </div>
</template>
