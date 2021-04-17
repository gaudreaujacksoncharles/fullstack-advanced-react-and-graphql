import { ModuleTitle } from '../components/Module/styles'
import PleaseSignIn from '../components/PleaseSignIn'
import EditUserProfilePhoto from '../components/EditUserProfilePhoto'
import { useUser } from '../components/User'

export default function AccountPage() {
    const me = useUser()
    return (
        <PleaseSignIn>
            <ModuleTitle>
                Account
            </ModuleTitle>
            {me?.name}
            <EditUserProfilePhoto mt='1.6rem'/>
        </PleaseSignIn>
    )
}