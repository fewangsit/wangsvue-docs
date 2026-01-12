<script setup lang="ts">
import { Tree } from '@fewangsit/wangsvue';
import type { TreeNode } from '@fewangsit/wangsvue/basetree';
import type { ShortFetchResponse } from '@fewangsit/wangsvue/datatable';
import { ref } from 'vue';

const filter = ref('');

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
                {
                  key: '0-0-2',
                  label: 'Salary.pdf',
                  icon: 'pdf',
                  selectable: true,
                  data: 'Salary Document',
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
                {
                  key: '0-1-1',
                  label: 'Bills.pdf',
                  icon: 'pdf',
                  selectable: true,
                  data: 'Monthly bills',
                },
              ],
            },
          ],
        },
        {
          key: '1',
          label: 'Projects',
          icon: 'folder',
          selectable: true,
          children: [
            {
              key: '1-0',
              label: 'Vue Application',
              icon: 'code-line',
              selectable: true,
              data: 'Vue.js project',
            },
            {
              key: '1-1',
              label: 'React Website',
              icon: 'code-line',
              selectable: true,
              data: 'React.js website',
            },
            {
              key: '1-2',
              label: 'Angular Dashboard',
              icon: 'code-line',
              selectable: true,
              data: 'Angular dashboard',
            },
          ],
        },
        {
          key: '2',
          label: 'Resources',
          icon: 'folder',
          selectable: true,
          children: [
            {
              key: '2-0',
              label: 'Images',
              icon: 'folder',
              selectable: true,
              children: [
                {
                  key: '2-0-0',
                  label: 'Logo.png',
                  icon: 'image-add',
                  selectable: true,
                  data: 'Company logo',
                },
                {
                  key: '2-0-1',
                  label: 'Banner.jpg',
                  icon: 'image-add',
                  selectable: true,
                  data: 'Website banner',
                },
              ],
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
  <Tree v-model:filter="filter" :fetch-tree="fetchTree" type="group" />
</template>
