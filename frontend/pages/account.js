import { ModuleTitle } from '../components/Module/styles'
import PleaseSignIn from '../components/PleaseSignIn'
import { useUser } from '../components/User'

export default function AccountPage() {
    const me = useUser()
    return (
        <PleaseSignIn>
            <ModuleTitle>
                Account
            </ModuleTitle>
            {me?.name}
        </PleaseSignIn>
    )
}