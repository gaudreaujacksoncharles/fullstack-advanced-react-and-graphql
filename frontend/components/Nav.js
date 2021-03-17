import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles'
import SignOut from './SignOut';
import { useUser } from './User'

export default function Nav() {
  const user = useUser()
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {
        user && (
          <>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
            <SignOut/>
          </>
        )
      }
      {
        !user && (
          <>
            <Link href="/signin">Sign In</Link>
          </>
        )
      }
    </NavStyles>
  )
}