import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import { CURRENT_USER_QUERY } from "./User"

const BigButton = styled.button`
    font-size:3rem;
    background:none;
    border:0;
    &:hover {
        color:red;
        cursor:pointer;
    }
`

const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
        deleteCartItem(id: $id) {
            id
        }
    }
`

export default function RemoveFromCart({ id }) {
    const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
        variables: { id },
    })
    return (
        <BigButton onClick={removeFromCart} disabled={loading} type='button' title='Remove this item from Cart'>
            &times;
        </BigButton>
    )
}