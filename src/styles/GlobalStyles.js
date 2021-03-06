import { createGlobalStyle } from 'styled-components'
import Bits from '../assets/fonts/8-bit-pusab.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '8Bits';
    src: url('${Bits}') format('truetype');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    vertical-align: baseline;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    background-color: var(--mainDark);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--mainPink); 
    }
    &::-webkit-scrollbar-thumb {
      background: var(--mainPink); 
      border: 2px solid black;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--mainLightPink);
    } 
  }

`
export default GlobalStyle
