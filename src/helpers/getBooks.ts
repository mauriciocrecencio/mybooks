import { api } from './apiBooks'

const refactorData = fetchedBooks => {
  const books = fetchedBooks.map(book => ({
    id: book.id,
    label: book.volumeInfo.title,
    image: book.volumeInfo.imageLinks?.smallThumbnail,
    description: book.volumeInfo.description,
    publishDate: book.volumeInfo.publishedDate,
    isFavorite: false,
  }))
  return books
}

export const getBooks = async (bookName, pagination) => {
  const fetchedData = await api
    .get(`/volumes?q=${bookName}`, {
      params: {
        // orderBy: 'relevance',
        startIndex: pagination || 0,
      },
    })
    .then(data => data.data.items)
  const newBooks = refactorData(fetchedData)
  return newBooks
}
