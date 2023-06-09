import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  
  const [books , setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter( (book) => {
        return book.id !== id;
    })

    return setBooks(updatedBooks);
  }

  const editBook = (id , title) => {
    
    const updatedBooks = books.map( (book) => {
      if (book.id === id) { 
      return { ...book , title: title } 
      }
      return book;
    })

    setBooks(updatedBooks);
    
  }

  const createBook = (title) => {
    const updatedBooks = [
      ...books , 
      {
        id : Math.round( Math.random() * 9999 ) ,
        title : title
      }

    ]
    setBooks(updatedBooks);
  }
  
  return (
   <div>
    <h1>salut</h1>
    <BookCreate onCreate={createBook} />
    <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
   </div>
  )
}

export default App