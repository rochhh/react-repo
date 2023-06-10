import React, { useContext, useState } from 'react'
import BookEdit from './BookEdit';
import BooksContext from '../context/books'

const BookShow = ({book}) => {
  const { deleteBook } = useContext(BooksContext);
  const [ edit , setEdit ] = useState(false);

  let content = <h3> {book.title} </h3>

  const handleDelete = () => {
    deleteBook(book.id);
  }

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleEditSubmit = () => {
    setEdit(false);
  }
 
  if ( edit === true ){
    content = <BookEdit editStatus={edit} onSubmit = {handleEditSubmit} book={book} />
  }  
  
  return (
    <div>
      <h1> {content} </h1>
      <hr /><br />
      <button onClick={handleEdit} >Edit Book</button>
      <button onClick={handleDelete} >Delete book</button>
    </div>
  )
}

export default BookShow