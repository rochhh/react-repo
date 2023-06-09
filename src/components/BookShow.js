import React from 'react'

const BookShow = ({book , onDelete}) => {
  
  const handleDelete = () => {
    onDelete(book.id);
  }
  
  return (
    <div>
      <h1> {book.title} </h1>
      <hr /><br />
      <button onClick={handleDelete} >Delete book</button>
    </div>
  )
}

export default BookShow