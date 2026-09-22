<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['add-book'])

const form = reactive({
  title: '',
  author: '',
  category: '',
  borrowDate: ''
})

const error = reactive({
  title: '',
  author: '',
  category: '',
  borrowDate: ''
})

function submitBook() {
  error.title = ''
  error.author = ''
  error.category = ''
  error.borrowDate = ''

  let valid = true

  if (!form.title.trim()) {
    error.title = 'Book title is required.'
    valid = false
  }

  if (!form.author.trim()) {
    error.author = 'Author is required.'
    valid = false
  }

  if (!form.category) {
    error.category = 'Category is required.'
    valid = false
  }

  if (!form.borrowDate) {
    error.borrowDate = 'Borrow date is required.'
    valid = false
  }

  if (!valid) return

  emit('add-book', {
    id: Date.now(),
    title: form.title,
    author: form.author,
    category: form.category,
    borrowDate: form.borrowDate,
    status: 'Borrowed'
  })

  form.title = ''
  form.author = ''
  form.category = ''
  form.borrowDate = ''
}
</script>

<template>
  <form @submit.prevent="submitBook">
    <h2>Add Book</h2>

    <label>Book Title</label>
    <input v-model="form.title" type="text">
    <p v-if="error.title">{{ error.title }}</p>

    <label>Author</label>
    <input v-model="form.author" type="text">
    <p v-if="error.author">{{ error.author }}</p>

    <label>Category</label>
    <select v-model="form.category">
      <option value="">Select Category</option>
      <option>Fiction</option>
      <option>Science</option>
      <option>Technology</option>
      <option>Reference</option>
    </select>
    <p v-if="error.category">{{ error.category }}</p>

    <label>Borrow Date</label>
    <input v-model="form.borrowDate" type="date">
    <p v-if="error.borrowDate">{{ error.borrowDate }}</p>

    <button type="submit">Add Book</button>
  </form>
</template>