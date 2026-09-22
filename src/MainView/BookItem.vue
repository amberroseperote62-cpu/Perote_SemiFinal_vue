<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['return-book', 'delete-book'])
</script>

<template>
  <div class="book-item">
    <h3>{{ book.title }}</h3>

    <p><strong>Author:</strong> {{ book.author }}</p>
    <p><strong>Category:</strong> {{ book.category }}</p>
    <p><strong>Borrow Date:</strong> {{ book.borrowDate }}</p>
    <p><strong>Status:</strong> {{ book.status }}</p>

    <button
      v-if="book.status === 'Borrowed'"
      @click="emit('return-book', book.id)"
    >
      Mark as Returned
    </button>

    <button @click="emit('delete-book', book.id)">
      Delete
    </button>
  </div>
</template>