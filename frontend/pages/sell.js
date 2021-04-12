import CreateProduct from "../components/CreateProduct";
import PleaseSignIn from "../components/PleaseSignIn";

export default function SellPage() {
    return (
        <PleaseSignIn>
            <CreateProduct/>
        </PleaseSignIn>
    )
}