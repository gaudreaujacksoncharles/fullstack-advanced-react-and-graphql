import Link from 'next/link'
import formatMoney from '../../lib/formatMoney'
import DeleteProduct from '../DeleteProduct'
import AddToCart from '../AddToCart'
import { Image, ProductStyles, Title } from './styles'

export default function Product({ product }) {
    return (
        <ProductStyles>
            <Image
                style={{backgroundImage:`url(${product?.photo?.image?.publicUrlTransformed})`}}
                alt={product.name}
            />
            <Title>
                <Link href={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </Title>
            <p>{formatMoney(product.price)}</p>
            <p>{product.description}</p>
            {/* TODO: Add buttons to edit and delete item */}
            <div className='buttonList'>
                <Link href={{
                    pathname: '/update',
                    query: {
                        id: product.id
                    }
                }}>Edit</Link>
                <AddToCart id={product.id}/>
                <DeleteProduct id={product.id}>Delete</DeleteProduct>
            </div>
        </ProductStyles>
    )
}