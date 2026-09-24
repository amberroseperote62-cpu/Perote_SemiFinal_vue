<script setup>
import BookItem from './BookItem.vue'

defineProps({
  books: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'remove-book',
  'update-status'
])
</script>

<template>
  <div>
    <h2>Books</h2>

    <p v-if="books.length === 0">
      No books added yet.
    </p>

    <BookItem
      v-for="book in books"
      :key="book.id"
      :book="book"
      @remove-book="emit('remove-book', $event)"
      @update-status="emit('update-status', $event)"
    />
  </div>
</template>