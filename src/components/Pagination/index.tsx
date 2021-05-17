import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// @ts-ignore
import { getBooks } from '../../helpers/getBooks'
import * as S from './styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
    },
  },
}))

export default function BasicPagination({ totalItems, bookName, updateBooks }) {
  const changePagination = async (_, pagination) => {
    const books = await getBooks(bookName, (pagination - 1) * 10)
    updateBooks(books.newBooks)
  }
  const classes = useStyles()
  return (
    <S.Container>
      <S.Results>Aproximadamente {totalItems} resultados</S.Results>
      <S.CustomPagination
        onChange={(_, pagination) => changePagination(_, pagination)}
        count={10}
      />
    </S.Container>
  )
}
