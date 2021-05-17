import React, { useContext } from 'react'
import Dialog from '@material-ui/core/Dialog'
import * as S from './styles'
import BookContext from '../../context/book'
import BackButton from '../Buttons/BackButton'

export default function BookModal({ isOpen, handleClose, book }) {
  const context = useContext(BookContext)
  const { label, image, description, publishDate } = book
  const bookId = book.id

  const removeBookFavorite = () => {
    handleClose
    const indexToRemove = context.favoriteBooks.findIndex(book => book.id === bookId)
    const newFavoriteBooks = [...context.favoriteBooks]
    newFavoriteBooks.splice(indexToRemove, 1)
    context.setFavoriteBooks(newFavoriteBooks)

    const books = [...context.books]
    const favoriteBook = books.find(book => book.id === bookId)
    const favoriteBookIndex = books.findIndex(book => book.id === bookId)
    favoriteBook.isFavorite = false
    const updatedBooks = books.splice(favoriteBookIndex, 1, favoriteBook)
    console.log(updatedBooks)
    context.updateBooks(books)
  }

  const favoriteBook = () => {
    handleClose
    const newBook = { ...book, isFavorite: true }
    context.setFavoriteBooks([...context.favoriteBooks, newBook])

    const books = [...context.books]
    const favoriteBook = books.find(book => book.id === bookId)
    const favoriteBookIndex = books.findIndex(book => book.id === bookId)
    favoriteBook.isFavorite = true
    books.splice(favoriteBookIndex, 1, favoriteBook)
    context.updateBooks(books)
  }

  return (
    <>
      <Dialog
        // fullScreen={true}
        maxWidth='xl'
        fullWidth={true}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <S.Container>
          <S.Title>{label}</S.Title>
          <S.PublishedDate>{publishDate}</S.PublishedDate>
          <S.Image src={image} />
          <S.Description>{description || 'Esse livro não tem uma descrição.'}</S.Description>

          <S.WrapperButtons>
            <BackButton onClick={handleClose} />
            {book.isFavorite ? (
              <S.ButtonFavorite placeholder='REMOVER' onClick={removeBookFavorite} />
            ) : (
              <S.ButtonFavorite placeholder='FAVORITAR' onClick={favoriteBook} />
            )}
          </S.WrapperButtons>
        </S.Container>
      </Dialog>
    </>
  )
}
