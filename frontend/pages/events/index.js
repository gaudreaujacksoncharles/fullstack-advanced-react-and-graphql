import { useRouter } from "next/dist/client/router";
import Events from "../../components/Events/";
import { ModuleTitle } from "../../components/Module/styles";
import PleaseSignIn from "../../components/PleaseSignIn";

export default function ProductsPage() {
    const { query } = useRouter()
    const page = parseInt(query.page)
    return (
        <PleaseSignIn>
            <ModuleTitle>
                Events
            </ModuleTitle>
            <Events />
        </PleaseSignIn>
    )
}