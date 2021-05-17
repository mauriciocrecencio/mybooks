import React, { useContext } from 'react'
import Dialog from '@material-ui/core/Dialog'
import * as S from './styles'
import BookContext from '../../context/book'
import BackButton from '../Buttons/BackButton'

export default function BookModal({ isOpen, handleClose, book }) {
  const context = useContext(BookContext)
  const { label, image, description, publishDate } = book
  const bookId = book.id

  const updateContext = action => {
    const books = [...context.books]
    const favoriteBook = books.find(book => book.id === bookId)
    const favoriteBookIndex = books.findIndex(book => book.id === bookId)
    switch (action) {
      case 'remove':
        const indexToRemove = context.favoriteBooks.findIndex(book => book.id === bookId)
        const newFavoriteBooksContext = [...context.favoriteBooks]
        newFavoriteBooksContext.splice(indexToRemove, 1)
        context.setFavoriteBooks(newFavoriteBooksContext)
        favoriteBook.isFavorite = false
        books.splice(favoriteBookIndex, 1, favoriteBook)
        context.updateBooks(books)
        break

      case 'addToFavorite':
        const newBook = { ...book, isFavorite: true }
        context.setFavoriteBooks([...context.favoriteBooks, newBook])
        favoriteBook.isFavorite = true
        books.splice(favoriteBookIndex, 1, favoriteBook)
        context.updateBooks(books)
        break
      default:
        return
    }
  }

  const removeBookFavorite = () => {
    handleClose
    updateContext('remove')
  }

  const favoriteBook = () => {
    handleClose
    updateContext('addToFavorite')
  }

  return (
    <>
      <Dialog
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
