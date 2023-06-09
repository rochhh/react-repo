import React, { useEffect, useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
  
  const [books , setBooks] = useState([]);

  const deleteBook = async (id) => {

    const response = await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter( (book) => {
        return book.id !== id;
    })

    return setBooks(updatedBooks);
  }

  const editBook = async (id , title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}` , {
      title:title
    } )
    const updatedBooks = books.map( (book) => {
      if (book.id === id) { 
      return { ...book , ...response.data } 
      }
      return book;
    })

    setBooks(updatedBooks);
    
  }

  const createBook = async(title) => {
    
    const response = await axios.post( "http://localhost:3001/books" , {
        title:title
      } )
    
    const updatedBooks = [
      ...books , 
      response.data
    ]
    setBooks(updatedBooks);
  }

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data); 
  }

  useEffect ( () => {
    fetchBook()
  } , [] )
  
  return (
   <div>
    <h1>salut</h1>
    <BookCreate onCreate={createBook} />
    <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
   </div>
  )
}

export default App