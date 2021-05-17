import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

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
  background-color: #83c5be;
  width: 180px;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
`
export const ArrowBack = styled(ArrowBackIcon).attrs(props => ({
  fontSize: 'large',
}))`
  left: 0%;
  margin-left: 2%;
  position: absolute;
  z-index: 1;
  color: white;
`
