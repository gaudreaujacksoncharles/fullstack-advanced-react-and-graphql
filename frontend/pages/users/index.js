import { useRouter } from "next/dist/client/router";
import Users from "../../components/Users/";
import { ModuleTitle } from "../../components/Module/styles";
import PleaseSignIn from "../../components/PleaseSignIn";

export default function ProductsPage() {
    const { query } = useRouter()
    return (
        <PleaseSignIn>
            <ModuleTitle>
                Users
            </ModuleTitle>
            <Users />
        </PleaseSignIn>
    )
}