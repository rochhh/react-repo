import React, { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books';
const BookList = () => {
  const {books} = useContext(BooksContext);
  const showBooks = books.map( (book) => {
    return <BookShow key={book.id} book={book} />
  })
  
  return (
    <div>
      <h1> {showBooks} </h1>
    </div>
  )
}

export default BookList