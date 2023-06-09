import React, { useState } from 'react'
import BookCreate from './components/BookCreate';

const App = () => {
  
  const [books , setBooks] = useState([]);

  const createBook = (title) => {
    console.log("book created :" , title)
    console.log(books);
    const updatedBooks = [
      ...books , setBooks(title)
    ]
  }
  
  return (
   <div>
    <h1>salut</h1>
    <BookCreate onCreate={createBook} />
    <h1> {} </h1>
   </div>
  )
}

export default App