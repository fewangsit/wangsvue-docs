import type { TreeNode } from '@fewangsit/wangsvue/basetree';

export const mockTreeData: TreeNode[] = [
  {
    key: '0',
    _id: '0',
    label: 'Documents',
    name: 'Documents',
    children: [
      {
        key: '0-0',
        _id: '0-0',
        label: 'Work',
        name: 'Work',
        children: [
          {
            key: '0-0-0',
            _id: '0-0-0',
            label: 'Expenses.doc',
            name: 'Expenses.doc',
            icon: 'file',
            leaf: true,
          },
          {
            key: '0-0-1',
            _id: '0-0-1',
            label: 'Resume.doc',
            name: 'Resume.doc',
            icon: 'file',
            leaf: true,
          },
        ],
      },
      {
        key: '0-1',
        _id: '0-1',
        label: 'Home',
        name: 'Home',
        children: [
          {
            key: '0-1-0',
            _id: '0-1-0',
            label: 'Invoices.txt',
            name: 'Invoices.txt',
            icon: 'file',
            leaf: true,
          },
        ],
      },
    ],
  },
  {
    key: '1',
    _id: '1',
    label: 'Events',
    name: 'Events',
    children: [
      {
        key: '1-0',
        _id: '1-0',
        label: 'Meeting',
        name: 'Meeting',
        icon: 'calendar',
        leaf: true,
      },
      {
        key: '1-1',
        _id: '1-1',
        label: 'Product Launch',
        name: 'Product Launch',
        icon: 'calendar',
        leaf: true,
      },
      {
        key: '1-2',
        _id: '1-2',
        label: 'Report Review',
        name: 'Report Review',
        icon: 'calendar',
        leaf: true,
      },
    ],
  },
];

export const fetchTree = async (
  type: string,
  params?: unknown,
): Promise<{ status: number; message: string; data: TreeNode[] }> => {
  // In a real implementation, you would use type and params to fetch different data
  console.log(`Fetching tree for type: ${type}`, params);

  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    status: 200,
    message: 'Success',
    data: JSON.parse(JSON.stringify(mockTreeData)),
  };
};
