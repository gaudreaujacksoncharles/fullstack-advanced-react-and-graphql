import Link from 'next/link';
import CartCount from '../CartCount'
import { useCart } from '../../lib/cartState';
import { useCreateEvent } from '../../lib/createEventState';
import SignOut from '../SignOut/';
import { useUser } from '../User'
import { SideNavigationStyles, Feature, FeatureHeader, FeatureButton, Options} from './styles';

export default function SideNavigation() {
  const user = useUser()
  if (!user) return null
  const {toggleCart} = useCart()
  const {toggleCreateEvent} = useCreateEvent()
  return (
    <SideNavigationStyles>
      {
        user && (
          <>
            <Feature>
              <FeatureHeader>
                <Link href="/products">Products</Link>
              </FeatureHeader>
            </Feature>
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
                  <FeatureButton type='button' onClick={toggleCreateEvent}>
                    Create event
                  </FeatureButton>
              </FeatureHeader>
            </Feature>
            <Feature>
              <FeatureHeader>
                  <Link href="/events">Events</Link>
              </FeatureHeader>
            </Feature>
            <Feature>
              <FeatureHeader>
                  <Link href="/account">Account</Link>
              </FeatureHeader>
            </Feature>
            <Feature>
              <FeatureHeader>
                  <FeatureButton type='button' onClick={toggleCart}>
                    Cart
                  </FeatureButton>
                  <CartCount count={user.cart.reduce(
                    (tally, cartItem) => tally + (cartItem.product ? cartItem.quantity:0), 0
                  )} />
              </FeatureHeader>
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
      <Options>
        <Feature>
          <SignOut/>
        </Feature>
      </Options>
    </SideNavigationStyles>
  )
}