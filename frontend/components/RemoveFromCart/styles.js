import styled from "styled-components";

export const RemoveFromCartStyles = styled.button`
    display:flex;
    background:rgba(black,.3);
    color:rgba(black,.2);
    font-size:1.5rem;
    line-height:1.6rem;
    font-weight:600;
    padding:.4rem .8rem;
    border:0;
    border-radius:3px;
    ${props => props.ml && `margin-left:${props.ml};`}
    &:hover {
        background:rgba(black,.3);
        color:rgba(black,.2);
        cursor:pointer;
    }
`