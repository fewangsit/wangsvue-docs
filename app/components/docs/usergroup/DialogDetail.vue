<script setup lang="ts">
import { UserGroup } from '@fewangsit/wangsvue';
import type { GeneralUser } from '@fewangsit/wangsvue/username';

const teamMembers: GeneralUser[] = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    nickName: 'johndoe',
    email: 'john.doe@example.com',
    position: 'Software Engineer',
    division: 'Engineering',
    profilePicture: 'https://picsum.photos/64/64?random=1',
  },
  {
    _id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    fullName: 'Jane Smith',
    nickName: 'janesmith',
    email: 'jane.smith@example.com',
    position: 'Product Manager',
    division: 'Product',
    profilePicture: 'https://picsum.photos/64/64?random=2',
  },
  {
    _id: '3',
    firstName: 'Alice',
    lastName: 'Johnson',
    fullName: 'Alice Johnson',
    nickName: 'alicej',
    email: 'alice.johnson@example.com',
    position: 'UX Designer',
    division: 'Design',
    profilePicture: 'https://picsum.photos/64/64?random=3',
  },
  {
    _id: '4',
    firstName: 'Bob',
    lastName: 'Wilson',
    fullName: 'Bob Wilson',
    nickName: 'bobw',
    email: 'bob.wilson@example.com',
    position: 'DevOps Engineer',
    division: 'Infrastructure',
    profilePicture: 'https://picsum.photos/64/64?random=4',
  },
  {
    _id: '5',
    firstName: 'Charlie',
    lastName: 'Brown',
    fullName: 'Charlie Brown',
    nickName: 'charlieb',
    email: 'charlie.brown@example.com',
    position: 'Senior Developer',
    division: 'Engineering',
    profilePicture: 'https://picsum.photos/64/64?random=5',
  },
];
</script>

<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Team Members with Dialog Detail
      </h4>

      <UserGroup
        :limit="3"
        :users="teamMembers"
        dialog-header-label="Team Members"
        with-dialog-detail
      />
    </div>

    <div class="text-sm text-gray-600">
      <p>
        Click on the "+N more" indicator to view all team members in a dialog.
      </p>
    </div>
  </div>
</template>
