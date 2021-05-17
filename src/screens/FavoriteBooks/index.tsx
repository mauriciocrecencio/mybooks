import React from 'react'
import * as S from './styles'
import { useHistory } from 'react-router-dom'
import { BookList } from '../../components/BookList'
import Title from '../../components/Title'
import BackButton from '../../components/Buttons/BackButton'

export default function FavoriteBooks() {
  const history = useHistory()

  const backToMain = () => {
    history.push('/')
  }

  return (
    <S.Container>
      <Title />
      <S.WrapperButton>
        <BackButton onClick={backToMain} />
      </S.WrapperButton>
      <BookList pathname={history.location.pathname} />
    </S.Container>
  )
}
