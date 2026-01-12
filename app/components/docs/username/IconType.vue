<script setup lang="ts">
import { UserName } from '@fewangsit/wangsvue';
import type { GeneralUser } from '@fewangsit/wangsvue/username';

const user: GeneralUser = {
  _id: '2',
  firstName: 'Jane',
  lastName: 'Smith',
  fullName: 'Jane Smith',
  email: 'jane.smith@example.com',
  nickName: 'janesmith',
  position: 'Product Manager',
  division: 'Product',
};
</script>

<template>
  <UserName :user="user" type="icon" />
</template>
