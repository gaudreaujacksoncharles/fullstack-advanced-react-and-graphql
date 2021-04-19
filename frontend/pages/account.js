import { ModuleTitle } from '../components/Module/styles'
import PleaseSignIn from '../components/PleaseSignIn'
import UpdateUser from '../components/UpdateUser'
import { useUser } from '../components/User'

export default function AccountPage() {
    const me = useUser()
    return (
        <PleaseSignIn>
            <ModuleTitle>
                Account
            </ModuleTitle>
            <UpdateUser
                id={me?.id}
                name={me?.name}
                email={me?.email}
                image={me?.photo?.image?.publicUrlTransformed}
            />
        </PleaseSignIn>
    )
}