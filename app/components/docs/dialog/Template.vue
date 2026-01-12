<script setup lang="ts">
import { Button, Dialog } from '@fewangsit/wangsvue';
import { ref } from 'vue';

const visible = ref(false);
const formData = ref({
  name: '',
  email: '',
});

const saveForm = (): void => {
  console.log('Form saved:', formData.value);
  visible.value = false;
};

const resetForm = (): void => {
  formData.value = {
    name: '',
    email: '',
  };
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="visible = true" label="Show Custom Dialog" />

    <Dialog v-model:visible="visible" :show-header="false" class="w-[50vw]">
      <template #header>
        <div
          class="flex items-center justify-between w-full p-4 bg-blue-50 border-b"
        >
          <div class="flex items-center gap-2">
            <i class="wangs-icon-user text-blue-600" />

            <h3 class="text-lg font-semibold text-blue-800">
              User Information
            </h3>
          </div>

          <Button
            @click="visible = false"
            icon="close"
            severity="secondary"
            text
          />
        </div>
      </template>

      <div class="p-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>

            <input
              v-model="formData.name"
              class="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              type="text"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Email</label>

            <input
              v-model="formData.email"
              class="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between items-center p-4 bg-gray-50 border-t">
          <Button @click="resetForm" label="Reset" severity="secondary" text />

          <div class="flex gap-2">
            <Button
              @click="visible = false"
              label="Cancel"
              severity="secondary"
            />

            <Button @click="saveForm" label="Save" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>
