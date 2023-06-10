import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

 function Provider({children})  {

    const [books , setBooks] = useState([]);

    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data); 
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

    const deleteBook = async (id) => {

        const response = await axios.delete(`http://localhost:3001/books/${id}`)
    
        const updatedBooks = books.filter( (book) => {
            return book.id !== id;
        })
    
        return setBooks(updatedBooks);
    }

    const valuesToReturn = {
        books,
        createBook,
        editBook,
        deleteBook,
        fetchBook

    }

    return (
    <BooksContext.Provider value={valuesToReturn}>
        {children}
    </BooksContext.Provider>
    )
 }
export { Provider };
export default BooksContext;