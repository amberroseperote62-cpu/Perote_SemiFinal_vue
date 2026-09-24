<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['add-book'])

const form = reactive({
  title: '',
  author: '',
  category: '',
  borrowDate: ''
})

function submitForm() {
  if (
    !form.title ||
    !form.author ||
    !form.category ||
    !form.borrowDate
  ) {
    alert('Please complete all required fields.')
    return
  }

  const book = {
    id: Date.now(),
    title: form.title,
    author: form.author,
    category: form.category,
    borrowDate: form.borrowDate,
    status: 'Borrowed'
  }

  emit('add-book', book)

  form.title = ''
  form.author = ''
  form.category = ''
  form.borrowDate = ''
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <h2>Add Book</h2>

    <input
      v-model="form.title"
      type="text"
      placeholder="Book Title"
    />

    <input
      v-model="form.author"
      type="text"
      placeholder="Author"
    />

    <select v-model="form.category">
      <option value="">Select Category</option>
      <option>Fiction</option>
      <option>Science</option>
      <option>Technology</option>
      <option>Reference</option>
    </select>

    <input
      v-model="form.borrowDate"
      type="date"
    />

    <button type="submit">Add Book</button>
  </form>
</template>