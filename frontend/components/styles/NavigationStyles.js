import styled from 'styled-components';

const NavigationStyles = styled.ul`
  display:flex;
  align-self:center;
  align-items:flex-end;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem; 
  a,
  button {
    display: flex;
    height:100%;
    padding: 1rem 2.4rem;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
  }
`;

export default NavigationStyles
