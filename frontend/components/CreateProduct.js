import useForm from "../lib/useForm"
import Form from "../components/styles/Form"

export default function CreateProduct() {
    const { inputs, handleChange, resetForm, clearForm } = useForm()
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            console.log(inputs)
        }}>
            <fieldset>
                <label htmlFor="name">
                    Image
                    <input
                        required
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="price">
                    Price
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add product</button>
            </fieldset>
        </Form>
    )
}