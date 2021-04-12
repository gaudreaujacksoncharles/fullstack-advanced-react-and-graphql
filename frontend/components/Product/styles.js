import styled from 'styled-components'

export const ProductStyles = styled.article`
    display:flex;
    flex-direction:column;
    width:25%;
    padding-left:24px;
    &:nth-child(4n+1) {
        padding-left:0;
    }
`
export const ProductWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
export const Image = styled.div`
    display:flex;
    width:100%;
    height:300px;
    background-size:cover;
    background-position:center;
    border-radius:5px;
    margin-bottom:1.2rem;
`
export const Title = styled.h1`
    display:flex;
    font-size:1.6rem;
`
export const Price = styled.div`
    display:flex;
    font-size:1.6rem;
`
export const Description = styled.p`
    display:flex;
    color:rgba(0,0,0,.7);
    font-size:1.6rem;
    line-height:2.5rem;
`
export const ButtonsList = styled.div`
    display:flex;
    align-items:center;
    margin-top:1.6rem;
    a, button {
        display:flex;
        border:none;
        background: rgba(black,.3);
        color: rgba(black,.2);
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 600;
        padding: .4rem .8rem;
        border: 0;
        border-radius: 3px;
        margin-left: .8rem;
        appearance: none;
        --webkit-appearance:none;
        &:first-child {
            margin-left: 0;
        }
    }
`