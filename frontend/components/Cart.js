import styled from 'styled-components'
import CartStyles from './styles/CartStyles'
import Supreme from './styles/Supreme'
import formatMoney from '../lib/formatMoney'
import { useUser } from './User'
import { cacheSlot } from '@apollo/client/cache'
import calcTotalToPrice from '../lib/calcTotalToPrice'
import { useCart } from '../lib/cartState'
import RemoveFromCart from './RemoveFromCart'


const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(--lightGrey);
`

function CartItem({ cartItem }) {
    const {product} = cartItem
    if (!product) return null
    console.log('product', product);
    return (
        <CartItemStyles>
            <img width='100px' src={cartItem.product.photo.image.publicUrlTransformed} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <p>{formatMoney(product.price * cartItem.quantity)}</p>
                <em>
                    {cartItem.quantity} &times; {formatMoney(product.price)}
                    &nbsp;each
                </em>
            </div>
            <RemoveFromCart id={cartItem.id} />
        </CartItemStyles>
    )
}

export default function Cart(){
    const me = useUser()
    const { cartOpen, closeCart } = useCart()
    if (!me) return null
    return (
        <CartStyles open={cartOpen}>
            <header>
                <Supreme>
                    {me.name}'s Cart
                </Supreme>
                <button onClick={closeCart}>&times;</button>
            </header>
            <ul>
                {me.cart.map(cartItem => (
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                ))}
            </ul>
            <footer>
                {formatMoney(calcTotalToPrice(me.cart))}
            </footer>
        </CartStyles>
    )
}