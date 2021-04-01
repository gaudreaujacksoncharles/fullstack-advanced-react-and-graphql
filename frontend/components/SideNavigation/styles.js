import styled from "styled-components";

export const SideNavigationStyles = styled.aside`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:0; left:0;
    width:var(--sideNavigationWidth);
    height:100%;
    padding-top:calc(var(--topNavigationHeight) + var(--sideNavigationGutterY));
`
export const Feature = styled.div`
    display:flex;
    padding-left:var(--topNavigationPaddingX);
    padding-right:var(--topNavigationPaddingX);
    margin-top:2.4rem;
    &:first-of-type {
      margin-top:0;  
    }
`
export const FeatureHeader = styled.div`
    display:flex;
    align-items:center;
    a {
        color:black;
        font-size:1.6rem;
        line-height:1.6rem;
        font-weight:500;
        padding:0;
    }
`
export const FeatureButton = styled.button`
    display:flex;
    color:black;
    font-size:1.6rem;
    line-height:1.6rem;
    font-weight:500;
    padding:0;
    -webkit-appearance:none;
    appearance:none;
    background-color:transparent;
    border:none;
    &:hover {
        cursor:pointer;
        text-decoration:none;
    }
    &:focus {
        outline:none;
    }
`
export const Options = styled.div`
    display:flex;
    width:100%;
    height:40px;
    margin-top:auto;
`