import { useRef } from 'react'
import * as S from './styles'
import { getBooks } from '../../helpers/getBooks'

function SearchAppBar({ updateBooks, setBook }) {
  const input = useRef(null)

  const searchBooks = async e => {
    e.preventDefault()
    const book = input.current.value
    const books = await getBooks(book, 0)
    updateContext(books, book)
  }

  const updateContext = (books, book) => {
    updateBooks(books)
    setBook(book)
  }

  return (
    <S.Container>
      <form onSubmit={e => searchBooks(e)}>
        <S.SearchInput placeholder='Pesquisar por livro...' ref={input} />
        <S.SearchButton onClick={searchBooks}></S.SearchButton>
      </form>
    </S.Container>
  )
}

export default SearchAppBar
