import CartStyles from './styles'
import formatMoney from '../../lib/formatMoney'
import { useUser } from '../User'
import { cacheSlot } from '@apollo/client/cache'
import calcTotalToPrice from '../../lib/calcTotalToPrice'
import { useCart } from '../../lib/cartState'
import CartItem from '../CartItem'

export default function Cart(){
    const me = useUser()
    const { cartOpen, closeCart } = useCart()
    if (!me) return null
    return (
        <CartStyles open={cartOpen}>
            <header>
                <h1>
                    {me.name}'s Cart
                </h1>
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