<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, Button } from '@fewangsit/wangsvue'

const visible = ref(false)
const formData = ref({
  name: '',
  email: ''
})

const saveForm = () => {
  console.log('Form saved:', formData.value)
  visible.value = false
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: ''
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button
      label="Show Custom Dialog"
      @click="visible = true"
    />

    <Dialog
      v-model:visible="visible"
      :style="{ width: '50vw' }"
      :show-header="false"
    >
      <template #header>
        <div class="flex items-center justify-between w-full p-4 bg-blue-50 border-b">
          <div class="flex items-center gap-2">
            <i class="wangs-icon-user text-blue-600" />
            <h3 class="text-lg font-semibold text-blue-800">
              User Information
            </h3>
          </div>
          <Button
            icon="close"
            severity="secondary"
            text
            @click="visible = false"
          />
        </div>
      </template>

      <div class="p-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input
              v-model="formData.name"
              type="text"
              class="w-full p-2 border rounded-md"
              placeholder="Enter your name"
            >
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            >
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between items-center p-4 bg-gray-50 border-t">
          <Button
            label="Reset"
            severity="secondary"
            text
            @click="resetForm"
          />
          <div class="flex gap-2">
            <Button
              label="Cancel"
              severity="secondary"
              @click="visible = false"
            />
            <Button
              label="Save"
              @click="saveForm"
            />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>
