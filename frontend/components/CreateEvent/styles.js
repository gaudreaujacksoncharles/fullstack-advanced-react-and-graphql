import styled from "styled-components";

export const CreateEventStyles = styled.div`
    display:flex;
    position:fixed;
    top:0; left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.4);
    z-index:2;
`
export const CreateEventPanel = styled.form`
    display:flex;
    width:auto;
    background-color:rgba(255,255,255,1);
    border-radius:5px;
    margin:auto;
`
export const CreateEventGeneral = styled.section`
    display:flex;
    flex-direction:column;
    flex:1;
    width:321px;
`
export const CreateEventHeader = styled.header`
    display:flex;
    width:100%;
    height:48px;
`
export const CreateEventCenter = styled.div`
    display:flex;
    width:100%;
    border-top:1px solid gray;
`
export const CreateEventFooter = styled.footer`
    display:flex;
    width:100%;
    height:48px;
    border-top:1px solid gray;
    margin-top:auto;
`
export const CreateEventInput = styled.input`
    display:flex;
    width:100%;
    height:48px;
    font-size:var(--createEventInputFontSize);
    padding-left:var(--createEventInputPaddingX);
    padding-right:var(--createEventInputPaddingX);
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    border:none;
    appearance:none;
    outline:none;
`
export const CreateEventTextarea = styled.textarea`
    display:flex;
    width:100%;
    height:115px;
    font-size:var(--createEventInputFontSize);
    padding:var(--createEventInputPaddingY) var(--createEventInputPaddingX);
    border-top-left-radius:var(--panelBorderRadius);
    border-top-right-radius:var(--panelBorderRadius);
    border:none;
    resize:none;
    outline:none;
    appearance:none;
`
export const CreateEventButton = styled.button`
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
    padding:0 1.6rem;
    border-left:1px solid gray;
    &:first-of-type {
        border-left:none;
    }
`
export const CreateEventButtonGrayLabel = styled.span`
    display:flex;
    font-size:var(--createEventInputFontSize);
    font-weight:500;
`
export const CreateEventButtonGreenLabel = styled.span`
    display:flex;
    font-size:var(--createEventInputFontSize);
    font-weight:500;
`