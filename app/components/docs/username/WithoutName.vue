<script setup lang="ts">
import { UserName } from '@fewangsit/wangsvue';
import type { GeneralUser } from '@fewangsit/wangsvue/username';

const userWithPicture: GeneralUser = {
  _id: '3',
  firstName: 'Alice',
  lastName: 'Johnson',
  fullName: 'Alice Johnson',
  email: 'alice.johnson@example.com',
  nickName: 'alicej',
  position: 'Designer',
  division: 'Design',
  profilePicture: 'https://picsum.photos/64/64?random=3',
};

const userWithIcon: GeneralUser = {
  _id: '4',
  firstName: 'Bob',
  lastName: 'Wilson',
  fullName: 'Bob Wilson',
  email: 'bob.wilson@example.com',
  nickName: 'bobw',
  position: 'Developer',
  division: 'Engineering',
};
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="text-center">
      <UserName
        :show-user-name="false"
        :user="userWithPicture"
        type="picture"
      />

      <p class="text-sm text-gray-600 mt-2">Picture only</p>
    </div>

    <div class="text-center">
      <UserName :show-user-name="false" :user="userWithIcon" type="icon" />

      <p class="text-sm text-gray-600 mt-2">Icon only</p>
    </div>
  </div>
</template>
