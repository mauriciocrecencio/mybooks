import React, { useState } from 'react'
import * as S from './styles'
import BookModal from '../BookModal'

export default function BookCard({ book }) {
  const { label, description, image, publishDate, isFavorite, id } = book
  const [isOpen, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <S.Container onClick={() => setOpen(!isOpen)}>
      {isFavorite && <S.Star />}
      <S.Img src={image} />
      <S.WrapperText>
        <S.Label>{label}</S.Label>
        <S.Description>{description || 'Livro sem descrição :('}</S.Description>
      </S.WrapperText>
      <S.Date>{publishDate}</S.Date>
      <BookModal
        book={{ image, label, description, publishDate, id, isFavorite }}
        handleClose={handleClose}
        isOpen={isOpen}
      />
    </S.Container>
  )
}
