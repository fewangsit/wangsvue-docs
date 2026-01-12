<script setup lang="ts">
import { Editor } from '@fewangsit/wangsvue';
import type {
  ImageProperties,
  JSONContent,
  PostImage,
} from '@fewangsit/wangsvue/editor';
import { ref } from 'vue';

const content = ref<JSONContent>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'You can upload images by clicking the image button in the toolbar or dragging and dropping files.',
        },
      ],
    },
  ],
});

const handleImageUpload = (postImage: PostImage): void => {
  // Simulate image upload to server
  console.log('Uploading image:', postImage.image.name);
};

const handleImageDelete = (imageProps: ImageProperties): void => {
  console.log('Deleting image:', imageProps.src);
  // Handle image deletion from server if needed
};
</script>

<template>
  <Editor
    v-model="content"
    @delete-image-local="handleImageDelete"
    @post-image-local="handleImageUpload"
    is-image-upload-base64
    label="Content with Images"
    placeholder="Add some text and upload images using the toolbar..."
  />
</template>
