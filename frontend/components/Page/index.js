import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Cart from '../Cart';
import SideNavigation from '../SideNavigation';
import TopNavigation from '../TopNavigation';
import { PageStyles } from './styles';

const GlobalStyles = createGlobalStyle`
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
    /* SideNavigation */
    --sideNavigationWidth:200px;
    --sideNavigationGutterY: 24px;
    /* TopNavigation */
    --topNavigationHeight:56px;
    --topNavigationPaddingX:12px;
    font-size:10px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    fong-weight:700;
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

const InnerStyles = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  flex:1;
  background-color:green;
`

export default function Page({ children }) {
  return (
    <PageStyles>
      <GlobalStyles />
      <TopNavigation />
      <SideNavigation/>
      <InnerStyles>{children}</InnerStyles>
      <Cart/>
    </PageStyles>
  )
}

Page.propTypes = {
  children: PropTypes.any,
}