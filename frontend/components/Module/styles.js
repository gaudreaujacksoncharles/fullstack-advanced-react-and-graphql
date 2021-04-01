import styled from "styled-components";

export const ModuleStyles = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex:1;
    position:relative;
    padding-top:var(--sideNavigationGutterY);
    padding-left:var(--modulePaddingX);
    padding-right:var(--modulePaddingX);
    overflow-y:auto;
`
export const ModuleTitle = styled.h1`
    display:flex;
    font-size:1.6rem;
    line-height:1.6rem;
    font-weight:600;
`