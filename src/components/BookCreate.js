import React, { useContext, useState } from 'react'
import BooksContext from '../context/books';

const BookCreate = () => {
  
  const [title , setTitle] = useState('');
  const { createBook } = useContext(BooksContext);  
  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>Title-</label>
        <br />
        <br />
        <input value={title} onChange={handleChange}  />
        <br />
        <br />
        <button>Create</button>
      </form>
    </div>
  )
}

export default BookCreate