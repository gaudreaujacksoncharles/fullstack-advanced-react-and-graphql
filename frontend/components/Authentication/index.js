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
    color:var(--titleColor);
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
export const AuthenticationPanel = styled.fieldset`
    display:flex;
    flex-direction:column;
    width:340px;
    background:var(--panelBackground);
    /* padding */
    padding:var(--panelPadding);
    /* border */
    border-width:1px;
    border-style:solid;
    border-top-color:var(--panelBorderTopColor);
    border-left-color:var(--panelBorderLeftColor);
    border-right-color:var(--panelBorderRightColor);
    border-bottom-color:var(--panelBorderBottomColor);
    border-radius:var(--panelBorderRadius);
    /* box-shadow */
    box-shadow:var(--panelBoxShadow);
`
export const AuthenticationLabel = styled.label`
    display:flex;
    flex-direction:column;
    margin-top:1.6rem;
    &:first-of-type {
        margin-top:0;
    }
`
export const AuthenticationLabelHeader = styled.header`
    display:flex;
    align-items:center;
`
export const AuthenticationLabelText = styled.label`
    display:flex;
    flex-direction:column;
    font-size:1.4rem;
    line-height:1.4rem;
    font-weight:500;
    margin-bottom:.8rem;
`
export const AuthenticationInput = styled.input`
    display:flex;
    width:100%;
    height:40px;
    /* color/font/text */
    color:var(--inputColor);
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
    box-shadow:var(--inputBoxShadow);
    /* appearance */
    appearance:none;
    &:focus {
        outline:none;
    }
`