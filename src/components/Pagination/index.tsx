import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// @ts-ignore
import { getBooks } from '../../helpers/getBooks'
import * as S from './styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function BasicPagination({ bookName, updateBooks }) {
  const changePagination = async (_, pagination) => {
    const books = await getBooks(bookName, pagination * 10)
    updateBooks(books)
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <S.CustomPagination
        onChange={(_, pagination) => changePagination(_, pagination)}
        count={10}
      />
    </div>
  )
}
