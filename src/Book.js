import { ref } from 'vue'

 export function useBook() {
 	const books = ref([])

 	function addBook(book) {
     	books.value.push(book)
 	}

 	function removeBook(id) {
     	books.value = books.value.filter(
         	record => record.id !== id
     	)
 	}

 	return {
     	books,
     	addBook,
     	removeBook
 	}
 }
