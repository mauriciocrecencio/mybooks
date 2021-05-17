import React, { useContext } from 'react'
import BookContext from '../../context/book'
import BookCard from '../BookCard'
import * as S from './styles'

export function BookList({ pathname }) {
  const context = useContext(BookContext)

  return (
    <S.Container>
      {context.books.length === 0 && context.book.length > 0 && (
        <S.NoFound>Nenhum livro encontrado.</S.NoFound>
      )}
      {pathname === '/favorites' ? (
        context.favoriteBooks.length === 0 ? (
          <S.NoFavorites>Você não tem nenhum livro favoritado ainda!</S.NoFavorites>
        ) : (
          context.favoriteBooks.map((book, index) => {
            return <BookCard key={index} book={book}></BookCard>
          })
        )
      ) : (
        context.books.map((book, index) => {
          return <BookCard key={index} book={book}></BookCard>
        })
      )}
    </S.Container>
  )
}
