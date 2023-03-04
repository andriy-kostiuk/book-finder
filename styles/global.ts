import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({theme}) => theme.font.fontFamily}, 'Arial', sans-serif;
    font-size: ${({theme}) => theme.font.fontSize};
    font-weight: ${({theme}) => theme.font.fontWeight};
    line-height: ${({theme}) => theme.font.lineHeight};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;


