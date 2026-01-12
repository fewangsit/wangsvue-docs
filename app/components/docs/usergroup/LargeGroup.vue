<script setup lang="ts">
import { UserGroup } from '@fewangsit/wangsvue';
import type { GeneralUser } from '@fewangsit/wangsvue/username';

const largeTeam: GeneralUser[] = [
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
  {
    _id: '6',
    firstName: 'Diana',
    lastName: 'Prince',
    fullName: 'Diana Prince',
    nickName: 'dianap',
    email: 'diana.prince@example.com',
    position: 'Team Lead',
    division: 'Engineering',
    profilePicture: 'https://picsum.photos/64/64?random=6',
  },
  {
    _id: '7',
    firstName: 'Edward',
    lastName: 'Miller',
    fullName: 'Edward Miller',
    nickName: 'edwardm',
    email: 'edward.miller@example.com',
    position: 'QA Engineer',
    division: 'Quality Assurance',
    profilePicture: 'https://picsum.photos/64/64?random=7',
  },
  {
    _id: '8',
    firstName: 'Fiona',
    lastName: 'Davis',
    fullName: 'Fiona Davis',
    nickName: 'fionad',
    email: 'fiona.davis@example.com',
    position: 'Business Analyst',
    division: 'Business',
    profilePicture: 'https://picsum.photos/64/64?random=8',
  },
  {
    _id: '9',
    firstName: 'George',
    lastName: 'Taylor',
    fullName: 'George Taylor',
    nickName: 'georget',
    email: 'george.taylor@example.com',
    position: 'Data Scientist',
    division: 'Data',
    profilePicture: 'https://picsum.photos/64/64?random=9',
  },
  {
    _id: '10',
    firstName: 'Helen',
    lastName: 'Anderson',
    fullName: 'Helen Anderson',
    nickName: 'helena',
    email: 'helen.anderson@example.com',
    position: 'Marketing Manager',
    division: 'Marketing',
    profilePicture: 'https://picsum.photos/64/64?random=10',
  },
];
</script>

<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Large Team (10 members, limit 4)
      </h4>

      <UserGroup
        :limit="4"
        :users="largeTeam"
        dialog-header-label="All Team Members"
        with-dialog-detail
      />
    </div>

    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Large Team (10 members, limit 2)
      </h4>

      <UserGroup
        :limit="2"
        :users="largeTeam"
        dialog-header-label="Complete Team List"
        with-dialog-detail
      />
    </div>

    <div class="text-sm text-gray-600">
      <p>
        Demonstrates how the component handles large groups of users with
        different limit settings.
      </p>
    </div>
  </div>
</template>
