<script setup lang="ts">
import { useLoadingStore, Loading } from '@fewangsit/wangsvue'
import { ref } from 'vue'

const { setLoading } = useLoadingStore()
const result = ref('')

// Mock API service similar to the example in filtercontainer/Dropdown.vue
const APIServices = {
  postData: (payload: { name: string, email: string }): Promise<{ success: boolean, message: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (payload.name && payload.email) {
          resolve({ success: true, message: 'Data posted successfully!' })
        } else {
          resolve({ success: false, message: 'Invalid data' })
        }
      }, 2000)
    })
  }
}

const handlePostRequest = async () => {
  setLoading(true)
  try {
    const response = await APIServices.postData({ name: 'John Doe', email: 'john@example.com' })
    result.value = response.message
  } catch {
    result.value = 'Error occurred during POST request'
  } finally {
    setLoading(false)
  }
}
</script>

<template>
  <div>
    <button @click="handlePostRequest">
      Trigger POST Request
    </button>
    <p v-if="result">
      {{ result }}
    </p>
    <Loading />
  </div>
</template>
