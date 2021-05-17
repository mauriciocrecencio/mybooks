import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import * as S from './styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function LoadingBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <S.CustomLoading />
    </div>
  )
}
