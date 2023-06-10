import React, { useContext } from 'react'
import BookShow from './BookShow'
import BookValue from '../context/books';
const BookList = ({books , onEdit , onDelete}) => {
  
  const {count , incrementCount} = useContext(BookValue);

  const showBooks = books.map( (book) => {
    return <BookShow onEdit={onEdit} book={book} onDelete={onDelete} />
  })
  
  return (
    <div>
      <h1> {showBooks} </h1>
      <h5>{count}</h5>
      <br />
      <button onClick={incrementCount} >Counter</button>
    </div>
  )
}

export default BookList