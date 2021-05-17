import React from 'react'
import * as S from './styles'

export default function ButtonFavorites({ onClick, placeholder }) {
  return (
    <S.Container>
      <S.FavoriteIcon />
      <S.Button onClick={onClick}>{placeholder}</S.Button>
    </S.Container>
  )
}
