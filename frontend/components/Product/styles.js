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
`
export const Title = styled.h1`
    display:flex;
`
export const Price = styled.div`
    display:flex;
`
export const Description = styled.p`
    display:flex;
`
export const ButtonsList = styled.div`
    display:flex;
`