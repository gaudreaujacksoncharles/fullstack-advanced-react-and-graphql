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
    width:500px;
    height:300px;
    background-color:rgba(255,255,255,1);
    border-radius:5px;
    margin:auto;
`
export const CreateEventFooter = styled.footer`
    display:flex;
    width:100%;
    height:48px;
    border-top:1px solid gray;
`