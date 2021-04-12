import { CartStyles, Footer, Header, List, Title, CloseButton } from './styles'
import formatMoney from '../../lib/formatMoney'
import { useUser } from '../User'
import { cacheSlot } from '@apollo/client/cache'
import calcTotalToPrice from '../../lib/calcTotalToPrice'
import { useCart } from '../../lib/cartState'
import CartItem from '../CartItem'
import { Checkout } from '../Checkout'

export default function Cart(){
    const me = useUser()
    const { cartOpen, closeCart } = useCart()
    if (!me) return null
    return (
        <CartStyles open={cartOpen}>
            <Header>
                <Title>
                    Cart
                </Title>
                <CloseButton onClick={closeCart}>&times;</CloseButton>
            </Header>
            <List>
                {me.cart.map(cartItem => (
                    <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                ))}
            </List>
            <Footer>
                {formatMoney(calcTotalToPrice(me.cart))}
                <Checkout/>
            </Footer>
        </CartStyles>
    )
}