import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage({ query }) {
    return (
        <>
            <UpdateProduct id={query.id} />
        </>
    )
}