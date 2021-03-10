import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyles = styled.header`
  display:flex;
  flex-direction:column;
`
const Logo = styled.h1`
  display:flex;
  flex-shrink:0;
  font-size: 2.5rem;
  align-self:center;
  position: relative;
  z-index: 2;
  background: red;
  border-radius:2px;
  a {
    display:flex;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.22rem 1.45rem;
  }
`

const  Bar = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding-top:24px;
  padding-bottom:24px;
  padding-left:24px;
  padding-right:24px;
`

const SubBar = styled.div`
  padding-left:24px;
  padding-right:24px;
  border-bottom: 2px solid var(--black, black);
`

export default function Header() {
  return (
    <HeaderStyles>
      <Bar>
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
        <Nav />
      </Bar>
      <SubBar>

      </SubBar>
    </HeaderStyles>
  )
}