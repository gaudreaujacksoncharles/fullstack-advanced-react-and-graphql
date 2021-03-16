import Pagination from "../components/Pagination";
import Products from "../components/Products";

export default function ProductsPage() {
    return (
        <>
            <Pagination page={1} />
            <Products/>
            <Pagination page={1} />
        </>
    )
}