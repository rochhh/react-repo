import React, { useState } from 'react'

const BookEdit = ({book , onSubmit , editStatus }) => {
  
  const [ title , setTitle ] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id , title);
    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h3>Edit Book Title</h3>
        <input value={title} onChange={handleChange} />
        <button>Make Changes</button>
      </form>
    </div>
  )
}

export default BookEdit