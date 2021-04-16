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
    height:300px;
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
    height:48px;
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
    appearance:none;
    border:none;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`
export const CreateEventTextarea = styled.textarea`
    display:flex;
    width:100%;
    height:48px;
    appearance:none;
    border:none;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`
export const CreateEventButton = styled.button`
    display:flex;
    width:100%;
    height:48px;
    padding:0 1.6rem;
    border-top:1px solid gray;
`
export const CreateEventButtonLabel = styled.span`
    display:flex;
`