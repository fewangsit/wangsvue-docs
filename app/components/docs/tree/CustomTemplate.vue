<script setup lang="ts">
import { Badge, Tree } from '@fewangsit/wangsvue';
import type { TreeNode } from '@fewangsit/wangsvue/basetree';
import type { ShortFetchResponse } from '@fewangsit/wangsvue/datatable';

const fetchTree = async (): Promise<ShortFetchResponse<TreeNode>> => {
  const data: TreeNode[] = [
    {
      key: -1,
      label: 'All',
      selectable: true,
      children: [
        {
          key: '0',
          label: 'Development Team',
          icon: 'team',
          selectable: true,
          data: { type: 'department', count: 8, status: 'active' },
          children: [
            {
              key: '0-0',
              label: 'Frontend',
              icon: 'code-line',
              selectable: true,
              data: {
                type: 'team',
                count: 4,
                status: 'active',
                tech: 'Vue.js',
              },
              children: [
                {
                  key: '0-0-0',
                  label: 'John Doe',
                  icon: 'user',
                  selectable: true,
                  data: {
                    type: 'person',
                    role: 'Senior Developer',
                    status: 'online',
                    experience: '5 years',
                  },
                },
                {
                  key: '0-0-1',
                  label: 'Jane Smith',
                  icon: 'user',
                  selectable: true,
                  data: {
                    type: 'person',
                    role: 'UI/UX Developer',
                    status: 'busy',
                    experience: '3 years',
                  },
                },
              ],
            },
            {
              key: '0-1',
              label: 'Backend',
              icon: 'database',
              selectable: true,
              data: {
                type: 'team',
                count: 4,
                status: 'active',
                tech: 'Node.js',
              },
              children: [
                {
                  key: '0-1-0',
                  label: 'Mike Johnson',
                  icon: 'user',
                  selectable: true,
                  data: {
                    type: 'person',
                    role: 'Backend Developer',
                    status: 'offline',
                    experience: '4 years',
                  },
                },
                {
                  key: '0-1-1',
                  label: 'Sarah Wilson',
                  icon: 'user',
                  selectable: true,
                  data: {
                    type: 'person',
                    role: 'DevOps Engineer',
                    status: 'online',
                    experience: '6 years',
                  },
                },
              ],
            },
          ],
        },
        {
          key: '1',
          label: 'Design Team',
          icon: 'team',
          selectable: true,
          data: { type: 'department', count: 3, status: 'active' },
          children: [
            {
              key: '1-0',
              label: 'Alice Brown',
              icon: 'user',
              selectable: true,
              data: {
                type: 'person',
                role: 'Lead Designer',
                status: 'online',
                experience: '7 years',
              },
            },
            {
              key: '1-1',
              label: 'Bob Davis',
              icon: 'user',
              selectable: true,
              data: {
                type: 'person',
                role: 'Graphic Designer',
                status: 'busy',
                experience: '2 years',
              },
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

const getStatusSeverity = (
  status: string,
): 'success' | 'warning' | 'danger' | 'info' | 'primary' => {
  switch (status) {
    case 'online':
      return 'success';
    case 'busy':
      return 'warning';
    case 'offline':
      return 'danger';
    case 'active':
      return 'info';
    default:
      return 'primary';
  }
};
</script>

<template>
  <Tree :fetch-tree="fetchTree" filter="" type="group">
    <template #default="{ node }">
      <div class="flex items-center gap-2 py-1">
        <span class="font-medium">{{ node.label }}</span>

        <!-- Department/Team info -->
        <template
          v-if="node.data?.type === 'department' || node.data?.type === 'team'"
        >
          <Badge
            :label="`${node.data.count} members`"
            class="text-xs"
            severity="info"
          />

          <Badge
            :label="node.data.status"
            :severity="getStatusSeverity(node.data.status)"
            class="text-xs"
          />

          <span v-if="node.data.tech" class="text-xs text-gray-500">
            ({{ node.data.tech }})
          </span>
        </template>

        <!-- Person info -->
        <template v-if="node.data?.type === 'person'">
          <Badge
            :label="node.data.status"
            :severity="getStatusSeverity(node.data.status)"
            class="text-xs"
          />

          <span class="text-xs text-gray-600">
            {{ node.data.role }}
          </span>

          <span class="text-xs text-gray-500">
            ({{ node.data.experience }})
          </span>
        </template>
      </div>
    </template>
  </Tree>
</template>
