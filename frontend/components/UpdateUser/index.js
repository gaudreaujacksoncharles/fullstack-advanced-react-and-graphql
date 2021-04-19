import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import useForm from '../../lib/useForm'
import Form from '../styles/Form'
import { CURRENT_USER_QUERY } from '../User'
import { WhiteButton } from '../WhiteButton'

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      email
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $name: String
    $email: String
    $image: Upload
  ) {
    updateUser(
      id: $id
      data: {
        name: $name,
        email: $email,
        photo: {
            create: {
                image: $image,
                altText: $name
            }
        }
    }
    ) {
      id
      name
      email
    }
  }
`;

export default function UpdateUser({id, name, email, image}) {
    // 1. We need to get the existing user
    const { data, error, loading } = useQuery(SINGLE_USER_QUERY, {
        variables: { id },
    });
    const { handleChange, inputs, clearForm } = useForm()
    const [updateUser, { data: updateData, error: updateError, loading: updateLoading },] = useMutation(UPDATE_USER_MUTATION, {
        variables:{
            ...inputs,
            id
        },
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });
    //console.dir('updateUser',updateUser, {depth:1})
    return (
        <Form onSubmit={async (e) => {
            e.preventDefault()
            const res = await updateUser()
            clearForm()
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
                    value={inputs.name}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </label>
                <WhiteButton type='submit' mt='1.6rem'>Update</WhiteButton>
            </fieldset>
          </Form>
    )
}