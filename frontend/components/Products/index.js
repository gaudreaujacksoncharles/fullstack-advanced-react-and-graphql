import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Product from '../Product/'
import { perPage } from '../../config'
import { ProductsStyles } from './styles'

export const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
        allProducts(first: $first, skip: $skip) {
            id
            name
            price
            description
            photo {
                id
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`

export default function Products({ page }) {
    const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <ProductsStyles>
                {data.allProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </ProductsStyles>
        </div>
    )
}