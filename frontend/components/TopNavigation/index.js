import Search from '../Search/'
import { TopNavigationStyles, Side } from './styles'
import Logo from '../Logo'
import CurrentUser from '../CurrentUser'

export default function TopNavigation() {
  return (
    <TopNavigationStyles>
      <Side>
        <Logo/>
        <CurrentUser/>
      </Side>
      <Search/>
    </TopNavigationStyles>
  )
}