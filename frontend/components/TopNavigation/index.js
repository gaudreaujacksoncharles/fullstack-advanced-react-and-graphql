import Search from '../Search/'
import { TopNavigationStyles, Side } from './styles'
import Logo from '../Logo'
import CurrentUser from '../CurrentUser'
import { useUser } from '../User'

export default function TopNavigation() {
  const me = useUser()
  if (!me) return null
  return (
    <TopNavigationStyles>
      <Side>
        <Logo mr='2.4rem'/>
        <CurrentUser/>
      </Side>
      <Search/>
    </TopNavigationStyles>
  )
}