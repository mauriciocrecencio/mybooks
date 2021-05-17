import React, { createContext, useState } from 'react'
const BookContext = createContext(undefined)

export const BookProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<Book[] | []>([])
  const [book, setBook] = useState<Book | []>([])
  const [favoriteBooks, setFavoriteBooks] = useState<Book | []>([])

  const updateBooks = (newBooks: Book[]) => {
    setBooks(newBooks)
  }
  const values = { books, updateBooks, book, setBook, favoriteBooks, setFavoriteBooks }
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>
}

export default BookContext
