<script setup lang="ts">
import type { Component } from 'vue';

import { componentRegistry } from '../docs';

interface Props {
  src: string;
  title?: string;
  description?: string;
  showCode?: boolean;
  maxLines?: number;
}

const props = withDefaults(defineProps<Props>(), {
  showCode: true,
  maxLines: 10,
  title: '',
  description: '',
});

const dynamicComponent = shallowRef<Component | null>(null);
const isLoading = ref(true);
const loadingError = ref('');
const sourceCode = ref('');
const fileName = ref('');
const isLoadingSource = ref(false);
const sourceCodeError = ref('');
const isCodeExpanded = ref(false);
const isCodeTruncated = ref(false);

const { copy, copied } = useClipboard({ source: sourceCode, legacy: true });

const copyCode = async (): Promise<void> => {
  await copy();
};

// Function to check if code should be truncated
const checkCodeTruncation = (): void => {
  if (!sourceCode.value) return;

  const lines = sourceCode.value.split('\n');
  isCodeTruncated.value = lines.length > props.maxLines;
};

// Toggle code expansion
const toggleCodeExpansion = (): void => {
  isCodeExpanded.value = !isCodeExpanded.value;
};

// Load component dynamically
const loadComponent = async (): Promise<void> => {
  try {
    isLoading.value = true;
    loadingError.value = '';

    // Check if component exists in registry
    const componentLoader =
      componentRegistry[props.src as keyof typeof componentRegistry];
    if (!componentLoader) {
      throw new Error(`Component "${props.src}" not found in registry`);
    }

    // Import the component
    const module = await componentLoader();
    dynamicComponent.value = module.default;
  } catch (error) {
    console.error('Failed to load component:', error);
    loadingError.value =
      error instanceof Error ? error.message : 'Unknown error';
  } finally {
    isLoading.value = false;
  }
};

// Load source code
const loadSourceCode = async (): Promise<void> => {
  if (!props.showCode) return;

  try {
    isLoadingSource.value = true;
    sourceCodeError.value = '';

    // Fetch source code from API
    const response = await $fetch<{ sourceCode: string; path: string }>(
      `/api/component-source?src=${encodeURIComponent(props.src)}`,
    );

    sourceCode.value = response.sourceCode;
    fileName.value = response.path;

    // Check if code needs truncation
    checkCodeTruncation();
  } catch (error) {
    console.error('Failed to load source code:', error);
    sourceCodeError.value =
      error instanceof Error ? error.message : 'Unknown error';
  } finally {
    isLoadingSource.value = false;
  }
};

onMounted(() => {
  loadComponent();
  loadSourceCode();
});
</script>

<template>
  <div class="component-demo border rounded-lg overflow-hidden my-6">
    <!-- Preview Section -->
    <div class="p-6">
      <!-- Component Preview with isolated WangsVue styles -->
      <div class="preview-container wangsvue-isolated">
        <ClientOnly>
          <div v-if="loadingError" class="text-red-500 p-4 bg-red-50 rounded">
            <p class="font-medium">Failed to load component: {{ src }}</p>

            <p class="text-sm mt-1">
              {{ loadingError }}
            </p>
          </div>

          <div v-else-if="isLoading" class="text-gray-500 p-4">
            Loading component...
          </div>

          <component :is="dynamicComponent" v-else-if="dynamicComponent" />

          <div v-else class="text-gray-500 p-4">
            Component not found: {{ src }}
          </div>

          <template #fallback>
            <div class="text-gray-500 p-4">Loading component...</div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <!-- Code Section -->
    <div v-if="showCode && sourceCode" class="border-t">
      <ClientOnly>
        <div class="relative">
          <div
            :class="[
              'code-container',
              { 'code-truncated': isCodeTruncated && !isCodeExpanded },
            ]"
          >
            <CodeBlock
              :code="sourceCode"
              :filename="fileName"
              class="rounded-none border-0"
              language="vue"
            >
              <template #toolbar>
                <div
                  class="flex items-center justify-end gap-3 w-max absolute top-0 right-0 p-2"
                >
                  <button
                    v-if="isCodeTruncated"
                    :title="isCodeExpanded ? 'Collapse code' : 'Expand code'"
                    @click="toggleCodeExpansion"
                    class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 leading-1"
                  >
                    <UIcon class="h-4 w-4 text-gray-500" name="lucide:code" />
                  </button>

                  <button
                    :title="copied ? 'Copied!' : 'Copy code'"
                    @click="copyCode"
                    class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 leading-1"
                  >
                    <UIcon
                      :name="copied ? 'lucide:copy-check' : 'lucide:copy'"
                      class="h-4 w-4 text-gray-500"
                    />
                  </button>
                </div>
              </template>
            </CodeBlock>
          </div>

          <!-- Expand/Collapse overlay for truncated code -->
          <div
            v-if="isCodeTruncated && !isCodeExpanded"
            class="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"
          />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.code-container.code-truncated {
  max-height: calc(
    1.5rem * v-bind(maxLines) + 2rem
  ); /* Line height * maxLines + padding */
  overflow: hidden;
  position: relative;
}

.code-container {
  transition: max-height 0.3s ease-in-out;
}
</style>
