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
`
export const AuthenticationSubmitButton = styled.button`
    display:flex;
    flex-direction:column;
    align-self:flex-start;
    margin-top:1.6rem;
`