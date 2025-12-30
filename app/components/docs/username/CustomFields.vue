<script setup lang="ts">
import { UserName } from '@fewangsit/wangsvue'
import type { GeneralUser } from '@fewangsit/wangsvue/username'

const userWithCustomFields: GeneralUser = {
  _id: '5',
  firstName: 'Charlie',
  lastName: 'Brown',
  fullName: 'Charlie Brown',
  nickName: 'charlieb',
  email: 'charlie.brown@example.com',
  position: 'Senior Developer',
  division: 'Engineering',
  profilePicture: 'https://picsum.photos/64/64?random=5',
  customDisplayName: 'Charlie B. (Senior Dev)',
  customAvatar: 'https://picsum.photos/64/64?random=6'
}
</script>

<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Default fields (fullName, profilePicture)
      </h4>
      <UserName :user="userWithCustomFields" />
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Custom name field (customDisplayName)
      </h4>
      <UserName
        :user="userWithCustomFields"
        user-name-field="customDisplayName"
      />
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Custom picture field (customAvatar)
      </h4>
      <UserName
        :user="userWithCustomFields"
        profile-picture-field="customAvatar"
      />
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Both custom fields
      </h4>
      <UserName
        :user="userWithCustomFields"
        user-name-field="customDisplayName"
        profile-picture-field="customAvatar"
      />
    </div>
  </div>
</template>
