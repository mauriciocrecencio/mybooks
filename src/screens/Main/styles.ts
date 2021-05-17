import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const WrapperSearchBarAndButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin-top: 5%;
  @media (max-width: 1220px) {
    flex-direction: column;
    padding: 10px;
  }
`
