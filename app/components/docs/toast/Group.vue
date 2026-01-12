<script setup lang="ts">
import { Button, Toast, useToast } from '@fewangsit/wangsvue';

const toast = useToast();

const showGroupA = (): void => {
  toast.add({
    severity: 'info',
    message: 'Message from Group A',
    group: 'groupA',
    life: 5000,
  });
};

const showGroupB = (): void => {
  toast.add({
    severity: 'success',
    message: 'Message from Group B',
    group: 'groupB',
    life: 5000,
  });
};

const showMultipleGroupA = (): void => {
  toast.add({
    severity: 'info',
    message: 'First Group A message',
    group: 'groupA',
    life: 8000,
  });

  setTimeout(() => {
    toast.add({
      severity: 'info',
      message: 'Second Group A message',
      group: 'groupA',
      life: 8000,
    });
  }, 500);

  setTimeout(() => {
    toast.add({
      severity: 'info',
      message: 'Third Group A message',
      group: 'groupA',
      life: 8000,
    });
  }, 1000);
};

const removeGroupA = (): void => {
  toast.removeGroup('groupA');
};

const removeAllGroups = (): void => {
  toast.removeAllGroups();
};
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap gap-3">
      <Button @click="showGroupA" label="Show Group A Toast" severity="info" />

      <Button
        @click="showGroupB"
        label="Show Group B Toast"
        severity="success"
      />

      <Button
        @click="showMultipleGroupA"
        label="Show Multiple Group A"
        severity="info"
      />
    </div>

    <div class="flex flex-wrap gap-3">
      <Button @click="removeGroupA" label="Remove Group A" severity="warning" />

      <Button
        @click="removeAllGroups"
        label="Remove All Groups"
        severity="danger"
      />
    </div>

    <Toast group="groupA" />

    <Toast group="groupB" />
  </div>
</template>
