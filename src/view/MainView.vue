<script setup>
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'
import { useBooks } from '../composables/useBooks'

const {
  books,
  addBook,
  removeBook,
  updateStatus
} = useBooks()
</script>

<template>
  <div>
    <h1>Library Book Borrowing Manager</h1>

    <BookForm @add-book="addBook" />

    <BookList
      :books="books"
      @remove-book="removeBook"
      @update-status="updateStatus"
    />
  </div>
</template>