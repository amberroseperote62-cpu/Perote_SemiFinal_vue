<script setup>
import BookItem from './BookItem.vue'

defineProps({
  books: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['return-book', 'delete-book'])
</script>

<template>
  <div>
    <h2>Borrowing List</h2>

    <p v-if="books.length === 0">
      No books recorded yet.
    </p>

    <BookItem
      v-for="book in books"
      :key="book.id"
      :book="book"
      @return-book="emit('return-book', $event)"
      @delete-book="emit('delete-book', $event)"
    />
  </div>
</template>