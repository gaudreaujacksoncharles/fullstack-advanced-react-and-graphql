import { useQuery } from "@apollo/client"
import gql from "graphql-tag" 
import DisplayError from "./ErrorMessage" 
import Head from 'next/head'
import styled from "styled-components"

const ProductStyles = styled.div`
    display:flex;
    align-items:flex-start;
    img {
        width: 400px;
        margin-right:24px;
        object-fit:contain;
    }
`

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            name
            price
            description
            photo {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`

export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: {
            id
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <DisplayError error={error} />
    const { Product } = data
    return (
        <ProductStyles>
            <Head>
                <title>{Product.name}</title>
            </Head>
            <img
                src={Product.photo.image.publicUrlTransformed}
                alt={Product.photo.altText}
            />
            <div className="details">
                <h2>{Product.name}</h2>
                <p>{Product.description}</p>
            </div>
        </ProductStyles>
    )
}