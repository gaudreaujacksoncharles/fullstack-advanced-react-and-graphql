import styled from "styled-components";
import { darken } from 'polished'

export const CurrentUserStyles = styled.div`
    display:flex;
    align-items:center;
`
export const CurrentUserImage = styled.div`
    display:flex;
    align-items:center;
    width:3.2rem;
    height:3.2rem;
    background-color:${darken(.1, '#FFFFFF')};
    ${props => props.photo && `
        background-image:url(${props.photo});
        background-size:cover;
        background-position:center;
    `}
    border-radius:.3rem;
    margin-right:1.2rem;
`
export const CurrentUserName = styled.div`
    display:flex;
    align-items:center;
    font-size:1.6rem;
    line-height:1.6rem;
    font-weight:500;
`