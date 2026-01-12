<script setup lang="ts">
import { UserName } from '@fewangsit/wangsvue';
import type { GeneralUser } from '@fewangsit/wangsvue/username';

const users: GeneralUser[] = [
  {
    _id: '6',
    firstName: 'David',
    lastName: 'Miller',
    fullName: 'David Miller',
    email: 'david.miller@example.com',
    nickName: 'davidm',
    position: 'Team Lead',
    division: 'Engineering',
    profilePicture: 'https://picsum.photos/64/64?random=6',
  },
  {
    _id: '7',
    firstName: 'Sarah',
    lastName: 'Davis',
    fullName: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    nickName: 'sarahd',
    position: 'UX Designer',
    division: 'Design',
    profilePicture: 'https://picsum.photos/64/64?random=7',
  },
  {
    _id: '8',
    firstName: 'Michael',
    lastName: 'Johnson',
    fullName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    nickName: 'michaelj',
    position: 'DevOps Engineer',
    division: 'Infrastructure',
  },
];

// Mock function to simulate fetching user details
const getUserDetail = async (userId: string): Promise<GeneralUser> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = users.find((u) => u._id === userId);
  if (!user) throw new Error('User not found');

  // Return enhanced user details
  return {
    ...user,
    // Add additional details that might be fetched
    phone: '+1 (555) 123-4567',
    department: user.division,
    joinDate: '2023-01-15',
    skills: ['JavaScript', 'Vue.js', 'TypeScript'],
  };
};
</script>

<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-sm font-medium text-gray-700 mb-2">
        Users with detail panel functionality
      </h4>

      <div class="flex flex-wrap gap-4">
        <UserName
          :key="user._id"
          v-for="user in users"
          :get-user-detail="getUserDetail"
          :user="user"
          detail-user-path="/user/{userId}/profile"
        />
      </div>
    </div>

    <div class="text-sm text-gray-600">
      <p>
        Click on any user to see their detail panel with additional information.
      </p>
    </div>
  </div>
</template>
