<script setup lang="ts">
import { UserName } from '@fewangsit/wangsvue'
import type { GeneralUser } from '@fewangsit/wangsvue/username'

const user: GeneralUser = {
  _id: '1',
  firstName: 'John',
  lastName: 'Doe',
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  nickName: 'johndoe',
  position: 'Software Engineer',
  division: 'Engineering',
  profilePicture: 'https://picsum.photos/64/64?random=1'
}
</script>

<template>
  <UserName :user="user" />
</template>
