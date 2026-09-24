import { ref, watch } from 'vue'

export function useBooks() {
  const books = ref([])

  const savedBooks = localStorage.getItem('books')

  if (savedBooks) {
    books.value = JSON.parse(savedBooks)
  }

  function addBook(book) {
    books.value.push(book)
  }

  function removeBook(id) {
    books.value = books.value.filter(
      book => book.id !== id
    )
  }

  function updateStatus(id, status) {
    const book = books.value.find(
      book => book.id === id
    )

    if (book) {
      book.status = status
    }
  }

  watch(
    books,
    (newBooks) => {
      localStorage.setItem(
        'books',
        JSON.stringify(newBooks)
      )
    },
    { deep: true }
  )

  return {
    books,
    addBook,
    removeBook,
    updateStatus
  }
}