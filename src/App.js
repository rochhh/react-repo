import React, { useEffect } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useContext } from 'react';
import BooksContext from './context/books';

const App = () => {
  
  const {fetchBook} = useContext(BooksContext);

  useEffect ( () => {
    fetchBook()
  } , [] )
  
  return (
   <div>
    <h1>salut</h1>
    <BookCreate  />
    <BookList  />
   </div>
  )
}

export default App