interface Book {
  title: string
  description: string
  image: string
  publication_date: string
  isFavorite: boolean
}

type ContextType = {
  books: Book[]
  updatedBooks: (Book) => void
}
