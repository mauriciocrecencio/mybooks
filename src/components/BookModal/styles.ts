import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import ButtonFavorites from '../Buttons/ButtonFavorites'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background: #e0eafc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #cfdef3, #e0eafc); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #cfdef3,
    #e0eafc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const Image = styled.img`
  margin: 2% 0;
  border: 1px solid black;
`
export const FavoriteButton = styled.button``

export const CloseModal = styled(CloseIcon)`
  /* align-self: flex-end; */
  :hover {
    cursor: pointer;
  }
`
export const PublishedDate = styled.div``
export const Title = styled.div`
  margin: 2% 0;
  font-weight: bold;
`
export const ButtonFavorite = styled(ButtonFavorites)`
  background-color: black;
`
export const WrapperButtons = styled.div`
  width: 50%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1220px) {
    flex-direction: column;
  }
`

export const Description = styled.div`
  padding: 2%;
`
