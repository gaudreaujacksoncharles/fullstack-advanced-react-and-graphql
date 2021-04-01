import styled from 'styled-components'
import { darken } from 'polished'

export const SearchStyles = styled.div`
    display:flex;
`
export const SearchInput = styled.input`
    display:flex;
    width:44rem;
    height:4rem;
    background-color:${darken(.05, '#FFFFFF')};
    font-size:1.6rem;
    line-height:1.6rem;
    font-weight:500;
    padding:12px 16px;
    border-radius:3px;
    border:none;
    --webkit-appearance:none;
    appearance: none;
    &:focus {
        outline:none;
    }
`