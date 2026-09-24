<script setup>
import { useFormatDate } from '../composables/useFormatDate'

defineProps({
  book: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'remove-book',
  'update-status'
])

const { formatDate } = useFormatDate()
</script>

<template>
  <div>
    <h3>{{ book.title }}</h3>

    <p>Author: {{ book.author }}</p>
    <p>Category: {{ book.category }}</p>
    <p>Borrow Date: {{ formatDate(book.borrowDate) }}</p>

    <label>Status:</label>

    <select
      :value="book.status"
      @change="
        emit('update-status', {
          id: book.id,
          status: $event.target.value
        })
      "
    >
      <option value="Borrowed">Borrowed</option>
      <option value="Returned">Returned</option>
    </select>

    <button @click="emit('remove-book', book.id)">
      Delete
    </button>
  </div>
</template>