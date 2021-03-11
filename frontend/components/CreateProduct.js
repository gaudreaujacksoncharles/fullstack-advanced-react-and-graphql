import useForm from "../lib/useForm";
import Form from "../components/styles/Form"
import DisplayError from "../components/ErrorMessage"
import gql  from "graphql-tag";
import { useMutation } from "@apollo/client";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(data: {
      name: $name
      description: $description
      price: $price
      status: "AVAILABLE"
      photo: {
        create: {
          image: $image,
          altText: $name
        }
      }
      
    }) {
      id
      price
      description
    }
  }
`

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice shoes',
    price: 32421,
    description: 'These are the best shoes!'
  })
  const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs
  })
  
  return (
    <Form onSubmit={async (e) => {
      e.preventDefault()
      console.log(inputs)
      await createProduct()
      clearForm()
    }}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
      <label htmlFor="name">
          Image
          <input
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
              value={inputs.name}
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
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <button type='submit'>Add Product</button>
          <button type='button' onClick={clearForm}>Clear Form</button>
          <button type='button' onClick={resetForm}>Reset Form</button>
      </fieldset>
    </Form>
  )
}