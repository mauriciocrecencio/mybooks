import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3% 30% 1%;
  background: #fc00ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00dbde, #fc00ff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #00dbde,
    #fc00ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
`

export const MainTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`

export const SubTitle = styled.div`
  margin-top: 2%;
  font-weight: bold;
  font-size: 1.2rem;
  color: #212227;
`
