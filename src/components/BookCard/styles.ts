import styled from 'styled-components'
import { FavoriteIcon } from '../Buttons/ButtonFavorites/styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  padding: 10px;
  margin: 20px;
  width: 500px;
  border-radius: 10px;
  height: 200px;
  text-overflow: ellipsis;
  justify-content: space-between;
  transform: perspective(75em) rotateX(18deg);
  background: #ece9e6;
  background: -webkit-linear-gradient(to right, #ffffff, #ece9e6);
  background: linear-gradient(to right, #ffffff, #ece9e6);
  :hover {
    cursor: pointer;
  }
`

export const Img = styled.img`
  border-radius: 6px;
`
export const Label = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 4% 0;
  font-size: 1.2rem;
`
export const Description = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1rem;
`
export const Date = styled.div`
  margin-top: 2%;
  font-weight: bold;
`

export const WrapperText = styled.div`
  padding: 1% 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Star = styled(FavoriteIcon).attrs({ fontSize: 'large' })`
  position: absolute;
  top: -9%;
  left: -5.5%;
`
export const WrapperTop = styled.div`
  display: flex;
  align-items: center;
`
