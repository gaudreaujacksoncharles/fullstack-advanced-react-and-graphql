import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "./User"
import { useCart } from '../lib/cartState'

const ADD_TO_CART_MUTATION = gql`
    mutation ADD_TO_CART_MUTATION($id: ID!) {
        addToCart(productId: $id) {
            id
        }
    }
`

export default function AddToCart({ id }) {
    const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
        variables: { id: id },
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })
    const { openCart } = useCart()
    function handleClick(id) {
        addToCart(id)
        openCart()
    }

    return (
        <button disabled={loading} type='button' onClick={handleClick}>
            Add{loading && 'ing'} to cart
        </button>
    )
}