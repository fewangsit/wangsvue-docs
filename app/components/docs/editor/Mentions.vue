<script setup lang="ts">
import { ref } from 'vue'
import { Editor } from '@fewangsit/wangsvue'
import type { JSONContent, GetMentionSuggestionResponse } from '@fewangsit/wangsvue/editor'

const content = ref<JSONContent>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Type @ to mention users in your content. Try typing @john or @jane'
        }
      ]
    }
  ]
})

const mentionedList = ref<string[]>([])

// Mock user data for mentions
const mockUsers = [
  {
    _id: '1',
    fullName: 'John Doe',
    nickName: 'john',
    profilePicture: 'https://picsum.photos/40/40?random=1'
  },
  {
    _id: '2',
    fullName: 'Jane Smith',
    nickName: 'jane',
    profilePicture: 'https://picsum.photos/40/40?random=2'
  },
  {
    _id: '3',
    fullName: 'Bob Johnson',
    nickName: 'bob',
    profilePicture: 'https://picsum.photos/40/40?random=3'
  }
]

const fetchMentionSuggestions = async (): Promise<GetMentionSuggestionResponse> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300))

  return {
    status: 200,
    message: 'Success',
    data: mockUsers
  }
}
</script>

<template>
  <div class="space-y-4">
    <Editor
      v-model="content"
      v-model:mentioned-list="mentionedList"
      label="Content with Mentions"
      placeholder="Type @ to mention users..."
      :fetch-mention-suggestion-function="fetchMentionSuggestions"
    />

    <div
      v-if="mentionedList.length > 0"
      class="p-3 bg-gray-50 rounded"
    >
      <p class="text-sm font-medium mb-2">
        Mentioned Users:
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="userId in mentionedList"
          :key="userId"
          class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
        >
          {{ mockUsers.find(u => u._id === userId)?.fullName || userId }}
        </span>
      </div>
    </div>
  </div>
</template>
