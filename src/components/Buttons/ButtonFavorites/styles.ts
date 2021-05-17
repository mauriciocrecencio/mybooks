import styled from 'styled-components'
import StarIcon from '@material-ui/icons/Star'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
`

export const Button = styled.button`
  padding: 8% 4%;
  border: none;
  border-radius: 8px;
  background-color: #3b3561;
  width: 180px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffd639;
`
export const FavoriteIcon = styled(StarIcon).attrs(props => ({
  fontSize: 'big',
}))`
  left: 0%;
  margin-left: 2%;
  color: #fbaf00;
  position: absolute;
  z-index: 1;
`
