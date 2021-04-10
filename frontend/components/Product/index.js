import Link from 'next/link'
import formatMoney from '../../lib/formatMoney'
import DeleteProduct from '../DeleteProduct'
import AddToCart from '../AddToCart'
import { ButtonsList, Description, Image, Price, ProductStyles, ProductWrapper,  Title } from './styles'

export default function Product({ product }) {
    return (
        <ProductStyles>
            <ProductWrapper>
                <Image
                    style={{backgroundImage:`url(${product?.photo?.image?.publicUrlTransformed})`}}
                    alt={product.name}
                />
                <Title>
                    <Link href={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </Title>
                <Price>{formatMoney(product.price)}</Price>
                <Description>{product.description}</Description>
                {/* TODO: Add buttons to edit and delete item */}
                <ButtonsList className='buttonList'>
                    <Link href={{
                        pathname: '/update',
                        query: {
                            id: product.id
                        }
                    }}>Edit</Link>
                    <AddToCart id={product.id}/>
                    <DeleteProduct id={product.id}>Delete</DeleteProduct>
                </ButtonsList>
            </ProductWrapper>
        </ProductStyles>
    )
}