<script setup lang="ts">
import {
  Button,
  Icon,
  ProgressBar,
  Toast,
  useToast,
} from '@fewangsit/wangsvue';

const toast = useToast();
const visible = ref(false);
const progress = ref(0);
const interval = ref();

const showCustomMessage = (): void => {
  toast.add({
    severity: 'info',
    message: 'This toast uses a custom message template',
    life: 5000,
    group: 'custom',
  });
};

const showCustomContainer = (): void => {
  if (!visible.value) {
    toast.add({
      severity: 'info',
      message: 'Uploading your files.',
      group: 'container',
      life: 0,
    });
    visible.value = true;
    progress.value = 0;

    if (interval.value) {
      clearInterval(interval.value);
    }

    interval.value = setInterval(() => {
      if (progress.value <= 100) {
        progress.value += 20;
      }

      if (progress.value >= 100) {
        progress.value = 100;
        clearInterval(interval.value);
      }
    }, 1000);
  }
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Button @click="showCustomMessage" label="Custom Message" />

    <Button @click="showCustomContainer" label="Custom Container" />

    <!-- Custom Message Template -->
    <Toast group="custom">
      <template #message="{ message }">
        <div class="flex grow items-center gap-3 p-4">
          <Icon class="text-2xl text-info-500" icon="information-line" />

          <div class="flex-1">
            <h4 class="font-semibold text-info-900">
              {{ message.severity }}
            </h4>

            <p class="text-sm text-info-700">
              {{ message.detail }}
            </p>

            <div class="mt-2 flex gap-2">
              <Button label="Action" severity="primary" />

              <Button label="Dismiss" severity="secondary" text />
            </div>
          </div>
        </div>
      </template>
    </Toast>

    <!-- Custom Container Template -->
    <Toast @close="visible = false" group="container" position="top-center">
      <template #container="{ message, closeCallback }">
        <section
          class="flex flex-col p-4 gap-4 w-full bg-grayscale-900 backdrop-blur-lg rounded-xl"
        >
          <div class="flex items-center gap-5">
            <Icon class="text-2xl text-white" icon="file-up" />

            <span class="font-bold text-base text-white"
              >{{ message.detail }}
            </span>
          </div>

          <div class="flex flex-col gap-2">
            <ProgressBar
              :show-value="false"
              :value="progress"
              severity="dark"
            />

            <label class="text-sm font-bold text-white"
              >{{ progress }}% uploaded</label
            >
          </div>

          <div class="flex gap-4 mb-4 justify-end">
            <Button
              @click="closeCallback"
              label="Another Upload?"
              severity="secondary"
            />

            <Button
              @click="closeCallback"
              label="Cancel"
              severity="secondary"
            />
          </div>
        </section>
      </template>
    </Toast>
  </div>
</template>
