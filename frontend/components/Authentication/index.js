import styled from "styled-components"

export const AuthenticationStyles = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:fixed;
    top:0; left:0;
    width:100%;
    height:100%;
`
export const AuthenticationCenter = styled.div`
    display:flex;
    flex-direction:column;
    align-self:flex-start;
    font-size:2.4rem;
    margin:auto;
`
export const AuthenticationTitle = styled.h1`
    display:flex;
    align-self:flex-start;
    font-size:2.4rem;
    margin-bottom:.4rem;
`
export const AuthenticationPane = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
export const AuthenticationForm = styled.form`
    display:flex;
    flex-direction:column;
`
export const AuthenticationFieldSet = styled.fieldset`
    display:flex;
    flex-direction:column;
    width:340px;
    /* border */
    border-width:1px;
    border-style:solid;
    border-top-color:red;
    border-left-color:blue;
    border-right-color:blue;
    border-bottom-color:blue;
    border-radius:5px;
    /* box-shadow */
    box-shadow: 0 1px 0 0 rgba(0,0,0,.2);
`
export const AuthenticationSubmitButton = styled.button`
    display:flex;
    flex-direction:column;
    align-self:flex-start;
    background-color:white;
    /* font/text */
    font-size:1.4rem;
    font-weight:500;
    /* padding */
    padding:.4rem .8rem;
    /* border */
    border-width:1px;
    border-style:solid;
    border-top-color:var(--whiteButtonBorderTopColor);
    border-left-color:var(--whiteButtonBorderLeftColor);
    border-right-color:var(--whiteButtonBorderRightColor);
    border-bottom-color:var(--whiteButtonBorderBottomColor);
    border-radius:3px;
    /* box-shadow */
    box-shadow: 0 1px 0 0 rgba(0,0,0,.2);
    /* appearance */
    appearance:none;
    margin-top:1.6rem;
`
export const AuthenticationLabel = styled.label`
    display:flex;
    flex-direction:column;
    margin-top:.8rem;
    &:first-of-type {
        margin-top:0;
    }
`
export const AuthenticationLabelText = styled.label`
    display:flex;
    flex-direction:column;
    font-size:1.4rem;
    font-weight:500;
    margin-top:.8rem;
    &:first-of-type {
        margin-top:0;
    }
`
export const AuthenticationInput = styled.input`
    display:flex;
    width:100%;
    height:40px;
    /* font/text */
    font-size:1.4rem;
    font-weight:500;
    /* padding */
    padding:.4rem .8rem;
    /* border */
    border-width:1px;
    border-style:solid;
    border-top-color:var(--inputBorderTopColor);
    border-left-color:var(--inputBorderLeftColor);
    border-right-color:var(--inputBorderRightColor);
    border-bottom-color:var(--inputBorderBottomColor);
    border-radius:3px;
    /* box-shadow */
    box-shadow: 0 1px 0 0 rgba(0,0,0,.2);
    /* appearance */
    appearance:none;
`