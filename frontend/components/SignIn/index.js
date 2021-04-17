import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import useForm from '../../lib/useForm'
import { CURRENT_USER_QUERY } from '../User'
import Error from '../ErrorMessage'
import { AuthenticationStyles, AuthenticationCenter, AuthenticationTitle, AuthenticationForm, AuthenticationPanel, AuthenticationLabel, AuthenticationInput, AuthenticationLabelText, AuthenticationLabelHeader } from '../Authentication/'
import PublicTopNavigation from '../PublicTopNavigation'
import { WhiteButton } from '../WhiteButton'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
  async function handleSubmit(e) {
    e.preventDefault() // stop the form from submitting
    const res = await signin()
    resetForm()
    // Send the email and password to the graphqlAPI
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined
  return (
    <>
      <PublicTopNavigation/>
      <AuthenticationStyles>
        <AuthenticationCenter>
          <AuthenticationTitle>Sign in</AuthenticationTitle>
          <AuthenticationForm method="POST" onSubmit={handleSubmit}>
            <Error error={error} />
            <AuthenticationPanel>
              <AuthenticationLabel htmlFor="email">
                <AuthenticationLabelHeader>
                  <AuthenticationLabelText>Email</AuthenticationLabelText>
                </AuthenticationLabelHeader>
                <AuthenticationInput
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </AuthenticationLabel>
              <AuthenticationLabel htmlFor="password">
                <AuthenticationLabelText>Password</AuthenticationLabelText>
                <AuthenticationInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </AuthenticationLabel>
            </AuthenticationPanel>
            <WhiteButton type="submit" mt='1.6rem'>Sign In</WhiteButton>
          </AuthenticationForm>
        </AuthenticationCenter>
      </AuthenticationStyles>
    </>
  )
}