<script setup lang="ts">
import { Timeline } from '@fewangsit/wangsvue';
import type { TimelineItem } from '@fewangsit/wangsvue/timeline';

const complexEvent: TimelineItem = {
  _id: '18',
  createdAt: '2024-12-02T12:35:52.037Z',
  action: 'PBI Reported Bug E2E Testing Dev',
  detail: {
    'Task': {
      type: 'userText',
      user: {
        _id: '66d1771c1ebe5344bc2b9dab',
        nickName: 'Kur',
      },
      text: 'Slicing blablabla',
    },
    'Modul': 'Transfer',
    'Sub Modul': 'Transaksi',
    'Test Steps': {
      type: 'bullet',
      value: ['Deskripsi 1', 'Deskripsi 2'],
    },
    'Steps': {
      type: 'bullet',
      value: ['Deskripsi 1', 'Deskripsi 2'],
    },
    'Deskripsi': {
      type: 'json',
      value: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio diam, mollis nec nulla vitae, commodo mattis magna.',
              },
            ],
          },
        ],
      },
    },
    'Task Terkait': {
      type: 'bullet',
      value: [
        {
          type: 'userText',
          user: {
            _id: '66d1771c1ebe5344bc2b9dab',
            nickName: 'Yusuf',
          },
          text: 'Diagram. Audit. Schedule',
        },
        {
          type: 'userText',
          user: {
            _id: '66d1771c1ebe5344bc2b9dab',
            nickName: 'Yusuf',
          },
          text: 'Diagram. Damage. Damage',
        },
      ],
    },
  },
};

const events: TimelineItem[] = [complexEvent];
</script>

<template>
  <div class="space-y-8">
    <div>
      <h4 class="text-lg font-semibold mb-4 text-gray-800">
        Without Aligned Details (alignDetail: false)
      </h4>

      <div class="border rounded-lg p-4 bg-gray-50">
        <Timeline :align-detail="false" :value="events" />
      </div>
    </div>

    <div>
      <h4 class="text-lg font-semibold mb-4 text-gray-800">
        With Aligned Details (alignDetail: true)
      </h4>

      <div class="border rounded-lg p-4 bg-blue-50">
        <Timeline :value="events" align-detail />
      </div>
    </div>
  </div>
</template>
