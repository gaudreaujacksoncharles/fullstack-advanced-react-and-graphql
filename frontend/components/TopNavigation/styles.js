import styled from "styled-components";

export const TopNavigationStyles = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:row;
  position:absolute;
  top:0; left:0;
  width:100%;
  height:var(--topNavigationHeight);
  background-color:blue;
  padding-left:var(--topNavigationPaddingX);
  padding-right:var(--topNavigationPaddingX);
  z-index:2;
`