import Search from '../Search/'
import { TopNavigationStyles } from './styles'
import Logo from '../Logo'

export default function TopNavigation() {
  return (
    <TopNavigationStyles>
      <Logo/>
      <Search/>
    </TopNavigationStyles>
  )
}