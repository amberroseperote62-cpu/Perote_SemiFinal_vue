<script setup>
const emit = defineEmits(['borrowBook']);
const emit = defineEmits(['returnBook']);
const emit = defineEmits(['delete']);
const emit = defineEmits(['update']);


function borrowBook() {
    emit('borrowBook', {
        title: 'The Great Gatsby',
    })
}

function returnBook(){
    emit('returnBook', {
        title: 'The Great Gatsby',
    })
}

function deleteBook(){
    emit('delete', {
        title: 'The Great Gatsby',
    })
}

function update(){
    emit('update', {
        title: 'The Great Gastby',
    })
}
</script>

<template>
    <div>
         <button @click="borrowBook">Borrow Book</button>
         <button @click="returnBook">Return Book</button>
         <button @click="deleteBook">Delete Book</button>
         <button @click="update">Update Book</button>
    </div>
       

    
</template>