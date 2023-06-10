import React, { useContext, useState } from 'react'
import BookEdit from './BookEdit';
import BookValue from '../context/books'

const BookShow = ({book, onEdit, onDelete}) => {
  
 

  const [ edit , setEdit ] = useState(false);

  let content = <h3> {book.title} </h3>

  const handleDelete = () => {
    onDelete(book.id);
  }

  const handleEdit = () => {
    setEdit(!edit);
  }

  const handleEditSubmit = (id , newTitle) => {
    setEdit(false);
    onEdit(id , newTitle)
  }
 
  if ( edit === true ){
    content = <BookEdit editStatus={edit} onSubmit = {handleEditSubmit} book = {book} />
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