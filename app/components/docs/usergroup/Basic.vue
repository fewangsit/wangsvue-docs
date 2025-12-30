<script setup lang="ts">
import { UserGroup } from '@fewangsit/wangsvue'
import type { GeneralUser } from '@fewangsit/wangsvue/username'

const users: GeneralUser[] = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    nickName: 'johndoe',
    email: 'john.doe@example.com',
    position: 'Software Engineer',
    division: 'Engineering',
    profilePicture: 'https://picsum.photos/64/64?random=1'
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
    profilePicture: 'https://picsum.photos/64/64?random=2'
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
    profilePicture: 'https://picsum.photos/64/64?random=3'
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
    profilePicture: 'https://picsum.photos/64/64?random=4'
  }
]
</script>

<template>
  <UserGroup :users="users" />
</template>
