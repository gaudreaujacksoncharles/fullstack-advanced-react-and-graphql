import PleaseSignIn from "../components/PleaseSignIn";
import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage({ query }) {
    return (
        <PleaseSignIn>
            <UpdateProduct id={query.id} />
        </PleaseSignIn>
    )
}