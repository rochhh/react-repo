import React from 'react'
import BookShow from './BookShow'

const BookList = ({books , onEdit , onDelete}) => {
  
  const showBooks = books.map( (book) => {
    return <BookShow onEdit={onEdit} book={book} onDelete={onDelete} />
  })
  
  return (
    <div>
      <h1> {showBooks} </h1>
    </div>
  )
}

export default BookList