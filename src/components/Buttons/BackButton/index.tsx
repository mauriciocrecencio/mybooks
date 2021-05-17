import React from 'react'
import * as S from './styles'

export default function BackButton({ onClick }) {
  return (
    <S.Container>
      <S.ArrowBack />
      <S.Button onClick={onClick}>VOLTAR</S.Button>
    </S.Container>
  )
}
