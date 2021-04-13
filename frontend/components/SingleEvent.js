import { useQuery } from "@apollo/client"
import gql from "graphql-tag" 
import DisplayError from "./ErrorMessage"
import PleaseSignIn from "./PleaseSignIn"
import Head from 'next/head'
import styled from "styled-components"

const EventStyles = styled.div`
    display:flex;
    align-items:flex-start;
    img {
        width: 400px;
        margin-right:24px;
        object-fit:contain;
    }
`

const SINGLE_EVENT_QUERY = gql`
    query SINGLE_EVENT_QUERY($id: ID!) {
        Event(where: { id: $id }) {
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

export default function SingleEvent({ id }) {
    const { data, loading, error } = useQuery(SINGLE_EVENT_QUERY, {
        variables: {
            id
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <DisplayError error={error} />
    const { Product } = data
    return (
        <PleaseSignIn>
            <EventStyles>
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
            </EventStyles>
        </PleaseSignIn>
    )
}