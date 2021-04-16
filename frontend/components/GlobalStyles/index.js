import { createGlobalStyle } from "styled-components";
import { darken } from 'polished'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size:10px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    /* TopNavigation */
    --topNavigationHeight:5.6rem;
    --topNavigationPaddingX:1.2rem;
    /* Current User */
    --currentUserFontWeight:500;
    /* SideNavigation */
    --sideNavigationWidth:19rem;
    --sideNavigationGutterY:2.4rem;
    /* Module */
    --modulePaddingX:1.6rem;
    /* Cart */
    --cartBoxShadow:0 12px 24px 0 rgba(0,0,0,0.17);
    /* Cart Item */
    --cartItemPaddingX: 1.2rem;
    /* Title */
    --titleColor:${darken(.88, '#FFFFFF')};
    /* White Button */
    --whiteButtonHeight:2.6rem;
    --whiteButtonColor:${darken(.7, '#FFFFFF')};
    --whiteButtonFontWeight:700;
    --whiteButtonBorderTopColor:${darken(.15, '#FFFFFF')};
    --whiteButtonBorderLeftColor:${darken(.2, '#FFFFFF')};
    --whiteButtonBorderRightColor:${darken(.2, '#FFFFFF')};
    --whiteButtonBorderBottomColor:${darken(.25, '#FFFFFF')};
    --whiteButtonPadding:0 .8rem;
    --whiteButtonBoxShadow: 0 1px 0 0 ${darken(.2, '#FFFFFF')};
        /* Pane */
    --panelBackground:darken(.45, #FFFFFF);
    --panelPadding:1.6rem;
    --panelBorderTopColor:${darken(.15, '#FFFFFF')};
    --panelBorderLeftColor:${darken(.2, '#FFFFFF')};
    --panelBorderRightColor:${darken(.2, '#FFFFFF')};
    --panelBorderBottomColor:${darken(.25, '#FFFFFF')};
    --panelBorderRadius: 5px;
    //--panelBoxShadow: 0 1px 0 0 ${darken(.1, '#FFFFFF')};
    --panelBoxShadow: 0 1px 0 0 ${darken(.02, '#FFFFFF')};
    /* Input */
    --inputColor:${darken(.25, '#FFFFFF')};
    --inputBorderTopColor:${darken(.15, '#FFFFFF')};
    --inputBorderLeftColor:${darken(.2, '#FFFFFF')};
    --inputBorderRightColor:${darken(.2, '#FFFFFF')};
    --inputBorderBottomColor:${darken(.25, '#FFFFFF')};
    --inputBoxShadow: 0 1px 0 0 ${darken(.13, '#FFFFFF')};
  }
  *, *:before, *:after {
    font-smooth: always;
    text-rendering: optimizeLegibility;
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
    &:hover {
      text-decoration: underline;
    }
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
  
  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  }

  input {
    font-smooth: always;
    text-rendering: optimizeLegibility;
    &:focus {
      outline:none;
    }
    &::placeholder {
      font-smooth: always;
      text-rendering: optimizeLegibility;
    }
  }
  input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }

  fieldset {
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
  }
`
