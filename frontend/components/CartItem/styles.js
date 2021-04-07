import styled from "styled-components";

export const CartItemStyles = styled.li`
    display:flex;
    align-items:center;
    padding:var(--cartItemPaddingX) var(--cartItemPaddingX);
    &:hover {
        background-color:rgba(0,0,0,.02);
    }
`
export const Image = styled.div`
    display:flex;
    width:64px;
    height:64px;
    background-size:cover;
    background-position:center;
    border-radius:3px;
    margin-right:16px;
`
export const Side = styled.div`
    display:flex;
    flex-direction:column;
`
export const Row = styled.div`
    display:flex;
    align-items:center;
`
export const Price = styled.div`
    display:flex;
`
export const PricePerUnit = styled.div`
    display:flex;
`
export const Dot = styled.div`
    display:flex;
    margin:0 .6rem;
`