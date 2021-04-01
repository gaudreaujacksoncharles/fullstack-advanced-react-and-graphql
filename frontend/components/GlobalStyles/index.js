import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    font-size:10px;
    box-sizing: border-box;
    /* SideNavigation */
    --sideNavigationWidth:19rem;
    --sideNavigationGutterY:2.4rem;
    /* TopNavigation */
    --topNavigationHeight:5.6rem;
    --topNavigationPaddingX:1.2rem;
    /* Module */
    --modulePaddingX:1.6rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    padding:0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top:0;
    margin-bottom:0;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`
