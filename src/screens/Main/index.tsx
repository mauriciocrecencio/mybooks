import React, { useContext } from 'react'
import { BookList } from '../../components/BookList'
import BasicPagination from '../../components/Pagination'
import SearchAppBar from '../../components/SearchBar'
import Title from '../../components/Title'
import BookContext from '../../context/book'
import { useHistory } from 'react-router-dom'
import * as S from './styles'
import ButtonFavorites from '../../components/Buttons/ButtonFavorites'

export default function Main() {
  const history = useHistory()
  const context = useContext(BookContext)

  const goToFavorites = () => {
    history.push('/favorites')
  }

  return (
    <S.Container>
      <Title />
      <S.WrapperSearchBarAndButtons>
        <ButtonFavorites placeholder='FAVORITOS' onClick={goToFavorites} />
        <SearchAppBar setBook={context.setBook} updateBooks={context.updateBooks} />
      </S.WrapperSearchBarAndButtons>
      {context.books.length > 0 && (
        <BasicPagination bookName={context.book} updateBooks={context.updateBooks} />
      )}
      <BookList pathname={history.location.pathname} />
    </S.Container>
  )
}
