import {createGlobalStyle} from 'styled-components'; 


const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949; 
    --black: #2E2E2E; 
    --yellow: #ffc600; 
    --white: #fff;
    --grey: #efefef;
  }
  body {
    font-size: 25px; 

  }
  button {
    background: var(--red); 
    color: white; 
    border: 0; 
    border-radius: 50px: 
    padding: 0.6rem 1rem; 
  }
`
export default GlobalStyles; 