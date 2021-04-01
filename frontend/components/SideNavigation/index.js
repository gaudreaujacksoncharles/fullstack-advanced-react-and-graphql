import Link from 'next/link';
import CartCount from '../CartCount'
import { useCart } from '../../lib/cartState';
import SignOut from '../SignOut/';
import { useUser } from '../User'
import { SideNavigationStyles, Feature, FeatureHeader, FeatureButton} from './styles';

export default function SideNavigation() {
  const user = useUser()
  const {openCart} = useCart()
  return (
    <SideNavigationStyles>
      <Feature>
        <FeatureHeader>
          <Link href="/products">Products</Link>
        </FeatureHeader>
      </Feature>
      {
        user && (
          <>
            <Feature>
              <FeatureHeader>
                  <Link href="/sell">Sell</Link>
              </FeatureHeader>
            </Feature>
            <Feature>
              <FeatureHeader>
                  <Link href="/orders">Orders</Link>
              </FeatureHeader>
            </Feature>
            <Feature>
              <FeatureHeader>
                  <Link href="/account">Account</Link>
              </FeatureHeader>
            </Feature>
            <Feature>
              <FeatureHeader>
                  <FeatureButton type='button' onClick={openCart}>
                    My Cart
                  </FeatureButton>
                  <CartCount count={user.cart.reduce(
                    (tally, cartItem) => tally + cartItem.quantity, 0
                  )} />
              </FeatureHeader>
            </Feature>
            <Feature>
              <SignOut/>
            </Feature>
          </>
        )
      }
      {
        !user && (
          <>
            <Feature>
              <FeatureHeader>
                <Link href="/signin">Sign In</Link>
              </FeatureHeader>
            </Feature>
          </>
        )
      }
    </SideNavigationStyles>
  )
}