import PropTypes from 'prop-types';
import Cart from '../Cart/';
import SideNavigation from '../SideNavigation';
import TopNavigation from '../TopNavigation';
import Module from '../Module';
import { GlobalStyles } from '../GlobalStyles';
import { PageStyles } from '../Page/styles';
import { useUser } from '../User';

export default function Page({ children }) {
  const me = useUser()
  return (
    <PageStyles>
      <GlobalStyles />
      <TopNavigation />
      <SideNavigation/>
      <Module>{children}</Module>
      <Cart/>
    </PageStyles>
  )
}

Page.propTypes = {
  children: PropTypes.any,
}