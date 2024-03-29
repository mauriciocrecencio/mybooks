import { useRef } from 'react'
import * as S from './styles'
import { getBooks } from '../../helpers/getBooks'

function SearchAppBar({ updateBooks, setBook, setTotalItems, setLoading, isLoading }) {
  const input = useRef(null)

  const searchBooks = async e => {
    setLoading(true)
    e.preventDefault()
    const book = input.current.value
    const books = await getBooks(book, 0)
    setBook(book)
    if (!books) {
      setLoading(false)
      return
    }
    setLoading(false)

    updateContext(books.newBooks, book)
    setTotalItems(books.totalItems)
  }

  const updateContext = (books, book) => {
    updateBooks(books)
    setBook(book)
  }

  return (
    <S.Container>
      <form onSubmit={e => searchBooks(e)}>
        <S.SearchInput placeholder='Pesquisar por livro...' ref={input} />
        <S.SearchButton onClick={!isLoading && searchBooks}></S.SearchButton>
      </form>
    </S.Container>
  )
}

export default SearchAppBar
