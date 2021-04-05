import styled from 'styled-components'
import { darken } from 'polished'

export const SearchStyles = styled.div`
    display:flex;
    position:relative;
`
export const SearchInputWrapper = styled.div`
    display:flex;
`
export const SearchInput = styled.input`
    display:flex;
    width:48rem;
    height:4rem;
    background-color:${darken(.05, '#FFFFFF')};
    font-size:1.6rem;
    line-height:1.6rem;
    font-weight:var(--currentUserFontWeight);
    padding:12px 16px;
    border-radius:3px;
    border:none;
    --webkit-appearance:none;
    appearance: none;
    &:focus {
        outline:none;
    }
    &::placeholder {
        font-weight:var(--currentUserFontWeight);
    }
`
export const DropDown = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:48px;
    width:100%;
    background-color:white;
    padding-top:8px;
    padding-bottom:8px;
    z-index:4;
    border-radius:4px;
    box-shadow:var(--bs);
    &:empty {
        display:none;
    }
`
export const DropDownItem = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    padding:8px;
    &:hover {
        background:rgba(0,0,0,.024);
        cursor:pointer;
    }
`
export const ItemImage = styled.img`
    display:flex;
    width:50px;
    margin-right:8px;
`
export const ItemName = styled.div`
    display:flex;
`