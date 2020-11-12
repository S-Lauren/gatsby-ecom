import {createGlobalStyle} from 'styled-components'; 
import Calibre from '../assets/fonts/Calibre-Black.otf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url(${Calibre});
  }
  h1 {
    font-family: 'Calibre';
    font-size: 25px; 
  }
`
export default Typography; 