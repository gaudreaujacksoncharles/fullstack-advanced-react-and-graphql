import Search from '../Search/'
import { TopNavigationStyles, Side } from './styles'
import Logo from '../Logo'
import CurrentUser from '../CurrentUser'

export default function TopNavigation() {
  return (
    <TopNavigationStyles>
      <Side>
        <Logo mr='1.6rem'/>
        <CurrentUser/>
      </Side>
      <Search/>
    </TopNavigationStyles>
  )
}