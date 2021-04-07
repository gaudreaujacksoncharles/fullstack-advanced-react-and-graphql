import { CartItemStyles } from "./styles";
import formatMoney from '../../lib/formatMoney'
import RemoveFromCart from '../RemoveFromCart'

export default function CartItem({ cartItem }) {
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