import styled from "styled-components";

export const LogoStyles = styled.h1`
  display:flex;
  flex-shrink:0;
  align-self:center;
  position: relative;
  background: red;
  font-size: 1.8rem;
  border-radius:2px;
  z-index: 2;
  ${props => props.mr && `margin-right:${props.mr}`};
  outline:none;
  a {
    display:flex;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 12px;
  }
`