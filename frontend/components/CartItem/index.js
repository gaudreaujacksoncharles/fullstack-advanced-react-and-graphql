import { CartItemStyles, Image, Price, PricePerUnit, Row, Side, Dot } from "./styles";
import formatMoney from '../../lib/formatMoney'
import RemoveFromCart from '../RemoveFromCart/'

export default function CartItem({ cartItem }) {
    const {product} = cartItem
    if (!product) return null
    return (
        <CartItemStyles>
            <Image style={{backgroundImage:`url(${cartItem.product.photo.image.publicUrlTransformed})`}} alt={product.name} />
            <Side>
                <Row>
                    <h3>{product.name}</h3>
                    <RemoveFromCart id={cartItem.id} ml='1.6rem' />
                </Row>
                <Row>
                    <Price>{formatMoney(product.price * cartItem.quantity)}</Price>
                    <Dot>&bull;</Dot>
                    <PricePerUnit>
                        {cartItem.quantity} &times; {formatMoney(product.price)}
                        &nbsp;each
                    </PricePerUnit>
                </Row>
            </Side>
        </CartItemStyles>
    )
}