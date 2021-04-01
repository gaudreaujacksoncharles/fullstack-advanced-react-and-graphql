import styled from "styled-components";

export const SideNavigationStyles = styled.aside`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:0; left:0;
    width:230px;
    height:100%;
    background-color:orange;
    padding-top:calc(var(--topNavigationHeight) + var(--sideNavigationGutterY));
    padding-left:var(--topNavigationPaddingX);
    padding-right:var(--topNavigationPaddingX);
`
export const Feature = styled.div`
    display:flex;
`
export const FeatureHeader = styled.div`
    display:flex;
    a {
        color:black;
        font-size:1.6rem;
        padding:0;
    }
`