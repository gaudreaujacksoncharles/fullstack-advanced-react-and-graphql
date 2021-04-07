import styled from 'styled-components';

export const CartStyles = styled.div`
  position: fixed;
  bottom:1.6rem; right:1.6rem;
  width: 450px;
  background-color:white;
  border-radius:5px;
  box-shadow:var(--cartBoxShadow);
  transform: translateX(100%);
  transition: all 0.3s;
  ${(props) => props.open && `transform: translateX(0);`};
`;
export const Header = styled.header`
  display:flex;
  align-items:center;
  width:100%;
  background-color:rgba(black,.2);
  padding:var(--cartItemPaddingX) var(--cartItemPaddingX);
`
export const Title = styled.h1`
  font-size:1.6rem;
  line-height:1.6rem;
`
export const List = styled.ul`
  display:flex;
  flex-direction:column;
  width:100%;
`
export const Footer = styled.ul`
  padding:var(--cartItemPaddingX) var(--cartItemPaddingX);
`
export const CloseButton = styled.button`
  background-color:transparent;
  font-size:2.4rem;
  padding:0;
  border:none;
  margin-left:auto;
  appearance: none;
`
