import React, { useState } from 'react'

const BookCreate = ({onCreate}) => {
  
  const [title , setTitle] = useState('');
  
  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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