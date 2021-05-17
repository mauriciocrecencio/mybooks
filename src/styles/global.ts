import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background: #59C173;  
    background: -webkit-linear-gradient(to right, #5D26C1, #a17fe0, #59C173); 
    background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173); 
    justify-content: center;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  button , input {
    outline: 0;
  }
  button{
    cursor: pointer
  }
`
