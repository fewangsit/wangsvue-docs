<script setup lang="ts">
import { Toast, Button, useToast } from '@fewangsit/wangsvue'

const toast = useToast()

const showGroupA = () => {
  toast.add({
    severity: 'info',
    message: 'Message from Group A',
    group: 'groupA',
    life: 5000
  })
}

const showGroupB = () => {
  toast.add({
    severity: 'success',
    message: 'Message from Group B',
    group: 'groupB',
    life: 5000
  })
}

const showMultipleGroupA = () => {
  toast.add({
    severity: 'info',
    message: 'First Group A message',
    group: 'groupA',
    life: 8000
  })

  setTimeout(() => {
    toast.add({
      severity: 'info',
      message: 'Second Group A message',
      group: 'groupA',
      life: 8000
    })
  }, 500)

  setTimeout(() => {
    toast.add({
      severity: 'info',
      message: 'Third Group A message',
      group: 'groupA',
      life: 8000
    })
  }, 1000)
}

const removeGroupA = () => {
  toast.removeGroup('groupA')
}

const removeAllGroups = () => {
  toast.removeAllGroups()
}
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap gap-3">
      <Button
        label="Show Group A Toast"
        severity="info"
        @click="showGroupA"
      />

      <Button
        label="Show Group B Toast"
        severity="success"
        @click="showGroupB"
      />

      <Button
        label="Show Multiple Group A"
        severity="info"
        @click="showMultipleGroupA"
      />
    </div>

    <div class="flex flex-wrap gap-3">
      <Button
        label="Remove Group A"
        severity="warning"
        @click="removeGroupA"
      />

      <Button
        label="Remove All Groups"
        severity="danger"
        @click="removeAllGroups"
      />
    </div>

    <div class="text-sm text-gray-600">
      <p>Groups allow you to organize and manage toast messages collectively.</p>
      <p>Use removeGroup() to dismiss all toasts in a specific group, or removeAllGroups() to clear everything.</p>
    </div>

    <Toast
      group="groupA"
    />

    <Toast
      group="groupB"
    />
  </div>
</template>
