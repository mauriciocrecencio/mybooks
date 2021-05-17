import React from 'react'
import { BookProvider } from './context/book'
import Routes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <GlobalStyles />
      <BookProvider>
        <Routes />
      </BookProvider>
    </>
  )
}

export default App
