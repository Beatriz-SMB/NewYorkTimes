import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import JZenAntiqueSoftRegular from "../../assets/fonts/ZenAntiqueSoft-Regular.ttf"

export const GlobalStyled = createGlobalStyle`
  *{
    background: #F2F3F4;
    box-sizing: border-box;
    font-family: 'JZenAntiqueSoftRegular';
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  @font-face {
    font-family: JZenAntiqueSoftRegular;
    font-style: normal;
    font-weight: 400;
    src: url(${JZenAntiqueSoftRegular});
  }
`