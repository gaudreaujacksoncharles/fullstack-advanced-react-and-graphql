import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  ${(props) => props.open && `transform: translateX(0);`};
`;

export default CartStyles;
