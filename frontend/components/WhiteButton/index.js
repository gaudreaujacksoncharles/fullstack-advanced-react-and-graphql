import styled from "styled-components";

export const WhiteButton = styled.button`
    display:flex;
    align-self:flex-start;
    align-items:center;
    height:var(--whiteButtonHeight);
    background-color:white;
    /* color/font/text */
    color:var(--whiteButtonColor);
    font-size:var(--whiteButtonFontSize);
    font-weight:var(--whiteButtonFontWeight);
    line-height:var(--whiteButtonLineHeight);
    font-weight:500;
    /* padding */
    padding:var(--whiteButtonPadding);
    /* border */
    border-width:1px;
    border-style:solid;
    border-top-color:var(--whiteButtonBorderTopColor);
    border-left-color:var(--whiteButtonBorderLeftColor);
    border-right-color:var(--whiteButtonBorderRightColor);
    border-bottom-color:var(--whiteButtonBorderBottomColor);
    border-radius:3px;
    /* box-shadow */
    box-shadow: var(--whiteButtonBoxShadow);
    /* appearance */
    appearance:none;
    /* Optional */
    ${props => props.mt && `margin-top:${props.mt};`}
`