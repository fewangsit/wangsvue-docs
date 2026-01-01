<script setup lang="ts">
import { ref } from 'vue'
import { Editor } from '@fewangsit/wangsvue'
import type { JSONContent, PostImage, ImageProperties } from '@fewangsit/wangsvue/editor'

const content = ref<JSONContent>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'You can upload images by clicking the image button in the toolbar or dragging and dropping files.'
        }
      ]
    }
  ]
})

const handleImageUpload = (postImage: PostImage) => {
  // Simulate image upload to server
  console.log('Uploading image:', postImage.image.name)
}

const handleImageDelete = (imageProps: ImageProperties) => {
  console.log('Deleting image:', imageProps.src)
  // Handle image deletion from server if needed
}
</script>

<template>
  <Editor
    v-model="content"
    label="Content with Images"
    placeholder="Add some text and upload images using the toolbar..."
    is-image-upload-base64
    @post-image-local="handleImageUpload"
    @delete-image-local="handleImageDelete"
  />
</template>
