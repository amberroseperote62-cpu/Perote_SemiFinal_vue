<script setup>
import { onMounted } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'
import { useBooks } from '../composables/useBooks'

const {
  books,
  loadBooks,
  addBook,
  returnBook,
  removeBook
} = useBooks()

onMounted(() => {
  loadBooks()
})
</script>

<template>
  <div>
    <h1>Library Book Borrowing Manager</h1>

    <BookForm @add-book="addBook" />

    <BookList
      :books="books"
      @return-book="returnBook"
      @delete-book="removeBook"
    />
  </div>
</template>