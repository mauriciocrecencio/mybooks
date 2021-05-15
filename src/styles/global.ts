import { createGlobalStyle } from 'styled-components'
import backgroundImage from '../assets/images/background-image.jpg'

export default createGlobalStyle`
  body {
    background-position: center;
    background-image: url(${backgroundImage});
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif
  }
  button , input {
    outline: 0;
  }
  button{
    cursor: pointer
  }
`
