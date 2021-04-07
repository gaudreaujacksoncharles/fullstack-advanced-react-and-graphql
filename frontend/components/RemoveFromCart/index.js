import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { RemoveFromCartStyles } from "./styles"
import { CURRENT_USER_QUERY } from "../User"

const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
        deleteCartItem(id: $id) {
            id
        }
    }
`

function update(cache, payload) {
    cache.evict(cache.identify(payload.data.deleteCartItem))
}

export default function RemoveFromCart({ id, ml }) {
    const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
        variables: { id },
        update
    })
    return (
        <RemoveFromCartStyles onClick={removeFromCart} disabled={loading} type='button' title='Remove this item from Cart' ml={ml}>
            remove
        </RemoveFromCartStyles>
    )
}